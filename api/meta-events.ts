const PIXEL_ID = "3132799710244140";
const META_API_VERSION = "v26.0";
const MAX_BODY_BYTES = 16_384;
const ALLOWED_PAGE_PATH = /^\/(?:[a-z0-9-]+\/?)*$/i;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const META_COOKIE = /^fb\.1\.\d{10,13}\.[A-Za-z0-9._-]{1,200}$/;

type EventName = "PageView" | "ViewContent" | "Contact";
type EventPayload = {
  event_name: EventName;
  event_id: string;
  page_url: string;
  fbp?: string;
  fbc?: string;
  contact_method?: "whatsapp" | "form_whatsapp";
};

function json(status: number, body: Record<string, unknown>) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
  });
}

function allowedHost(host: string, environment: string | undefined) {
  return host === "www.zakeventi.com" ||
    host === "zakeventi.com" ||
    (environment === "preview" && host.endsWith(".vercel.app"));
}

function validPayload(value: unknown): value is EventPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Partial<EventPayload>;
  if (!["PageView", "ViewContent", "Contact"].includes(String(data.event_name))) return false;
  if (typeof data.event_id !== "string" || !UUID.test(data.event_id)) return false;
  if (typeof data.page_url !== "string" || data.page_url.length > 2_048) return false;
  let page: URL;
  try { page = new URL(data.page_url); } catch { return false; }
  if (page.protocol !== "https:" || !ALLOWED_PAGE_PATH.test(page.pathname)) return false;
  if (data.fbp !== undefined && (typeof data.fbp !== "string" || !META_COOKIE.test(data.fbp))) return false;
  if (data.fbc !== undefined && (typeof data.fbc !== "string" || !META_COOKIE.test(data.fbc))) return false;
  if (data.event_name === "Contact" && !["whatsapp", "form_whatsapp"].includes(String(data.contact_method))) return false;
  return true;
}

export async function POST(request: Request) {
  const environment = Reflect.get(Reflect.get(globalThis, "process") ?? {}, "env") ?? {};
  const token = Reflect.get(environment, "META_CAPI_ACCESS_TOKEN");
  if (typeof token !== "string" || token.length < 20) return json(503, { error: "tracking_unavailable" });

  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  if (!origin) return json(403, { error: "origin_not_allowed" });
  let originUrl: URL;
  try { originUrl = new URL(origin); } catch { return json(403, { error: "origin_not_allowed" }); }
  if (
    originUrl.protocol !== "https:" ||
    originUrl.host !== requestUrl.host ||
    !allowedHost(requestUrl.hostname, Reflect.get(environment, "VERCEL_ENV"))
  ) return json(403, { error: "origin_not_allowed" });

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) return json(413, { error: "payload_too_large" });

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) return json(413, { error: "payload_too_large" });
    payload = JSON.parse(body);
  } catch {
    return json(400, { error: "invalid_payload" });
  }
  if (!validPayload(payload)) return json(400, { error: "invalid_payload" });

  const pageUrl = new URL(payload.page_url);
  if (pageUrl.host !== originUrl.host) return json(403, { error: "origin_not_allowed" });

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientIp = forwardedFor && /^[0-9a-fA-F:.]{3,45}$/.test(forwardedFor) ? forwardedFor : undefined;
  const userAgent = request.headers.get("user-agent")?.slice(0, 512);
  const userData: Record<string, string> = {};
  if (clientIp) userData.client_ip_address = clientIp;
  if (userAgent) userData.client_user_agent = userAgent;
  if (payload.fbp) userData.fbp = payload.fbp;
  if (payload.fbc) userData.fbc = payload.fbc;

  const customData: Record<string, string> = {};
  if (payload.event_name === "ViewContent") {
    customData.content_name = pageUrl.pathname.slice(1);
    customData.content_category = "eventi";
  }
  if (payload.event_name === "Contact" && payload.contact_method) {
    customData.contact_method = payload.contact_method;
  }

  const testCode = Reflect.get(environment, "META_CAPI_TEST_EVENT_CODE");
  const event: Record<string, unknown> = {
    event_name: payload.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: payload.event_id,
    event_source_url: pageUrl.href,
    action_source: "website",
    user_data: userData,
  };
  if (Object.keys(customData).length) event.custom_data = customData;

  try {
    const endpoint = new URL(`https://graph.facebook.com/${META_API_VERSION}/${PIXEL_ID}/events`);
    endpoint.searchParams.set("access_token", token);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [event],
        ...(typeof testCode === "string" && testCode ? { test_event_code: testCode } : {}),
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || (result && typeof result === "object" && "error" in result)) {
      return json(502, { error: "meta_delivery_failed" });
    }
    return json(202, { accepted: true });
  } catch {
    return json(502, { error: "meta_delivery_failed" });
  }
}

export function GET() {
  return json(405, { error: "method_not_allowed" });
}
