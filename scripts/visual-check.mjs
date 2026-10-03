import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import WebSocket from "ws";

const chrome = spawn("/usr/bin/google-chrome", [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  "--disable-background-networking",
  "--hide-scrollbars",
  "--remote-debugging-port=9235",
  "--user-data-dir=/tmp/zak-visual-chrome",
  "about:blank",
], { stdio: "ignore" });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function getDebuggerUrl() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch("http://127.0.0.1:9235/json/list");
      const targets = await response.json();
      if (targets[0]?.webSocketDebuggerUrl) return targets[0].webSocketDebuggerUrl;
    } catch {
      // Chrome is still starting.
    }
    await delay(100);
  }
  throw new Error("Chrome DevTools non disponibile.");
}

let commandId = 0;
const pending = new Map();
const browserErrors = [];
let socket;

try {
  socket = new WebSocket(await getDebuggerUrl());
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data.toString());
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
    }
    if (message.method === "Runtime.exceptionThrown") {
      browserErrors.push(message.params.exceptionDetails.text);
    }
    if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
      browserErrors.push(message.params.entry.text);
    }
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    commandId += 1;
    const id = commandId;
    const timeout = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timeout DevTools: ${method}`));
    }, 10000);
    pending.set(id, {
      resolve: (value) => {
        clearTimeout(timeout);
        resolve(value);
      },
      reject: (error) => {
        clearTimeout(timeout);
        reject(error);
      },
    });
    socket.send(JSON.stringify({ id, method, params }));
  });

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Log.enable");

  const scenarios = [
    { name: "home-360", path: "/", width: 360, height: 800, mobile: true, screenshot: true },
    { name: "home-390", path: "/", width: 390, height: 844, mobile: true, screenshot: true },
    { name: "gallery-430", path: "/gallery?filtro=Emozioni", width: 430, height: 932, mobile: true, screenshot: true },
    { name: "services-390", path: "/servizi", width: 390, height: 844, mobile: true, screenshot: false },
    { name: "location-tablet", path: "/location", width: 768, height: 1024, mobile: true, screenshot: false },
    { name: "events-tablet", path: "/eventi", width: 768, height: 1024, mobile: true, screenshot: false },
    { name: "contact-desktop", path: "/contatti", width: 1280, height: 960, mobile: false, screenshot: true },
    { name: "privacy-desktop", path: "/privacy-policy", width: 1280, height: 900, mobile: false, screenshot: false },
    { name: "cookie-desktop", path: "/cookie-policy", width: 1280, height: 900, mobile: false, screenshot: false },
    { name: "home-desktop", path: "/", width: 1440, height: 1000, mobile: false, screenshot: true },
    { name: "gallery-wide", path: "/gallery", width: 1920, height: 1080, mobile: false, screenshot: false },
  ];

  await mkdir("screenshots", { recursive: true });
  const results = [];

  for (const scenario of scenarios) {
    console.error(`Verifica ${scenario.name}...`);
    await send("Emulation.setDeviceMetricsOverride", {
      width: scenario.width,
      height: scenario.height,
      deviceScaleFactor: 1,
      mobile: scenario.mobile,
      screenWidth: scenario.width,
      screenHeight: scenario.height,
    });
    await send("Page.navigate", { url: `http://127.0.0.1:4173${scenario.path}` });
    await delay(700);
    await send("Runtime.evaluate", {
      expression: "sessionStorage.setItem('zak-cookie-choice', 'essential')",
    });
    await send("Page.reload", { ignoreCache: true });
    await delay(700);

    const evaluation = await send("Runtime.evaluate", {
      expression: `JSON.stringify({
        viewportWidth: innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        hasHorizontalOverflow: document.documentElement.scrollWidth > innerWidth,
        title: document.title,
        h1: document.querySelector("h1")?.textContent?.trim() || "",
        mainPresent: Boolean(document.querySelector("main")),
        fixedWhatsAppPresent: Boolean(document.querySelector(".whatsapp-button--fixed"))
      })`,
      returnByValue: true,
    });
    results.push({ scenario: scenario.name, ...JSON.parse(evaluation.result.value) });

    if (scenario.screenshot) {
      const capture = await send("Page.captureScreenshot", {
        format: "png",
        fromSurface: true,
        captureBeyondViewport: false,
      });
      await writeFile(`screenshots/${scenario.name}.png`, Buffer.from(capture.data, "base64"));
    }
  }

  console.log(JSON.stringify({ results, browserErrors }, null, 2));
  socket.close();
} finally {
  socket?.terminate();
  chrome.kill("SIGTERM");
}
