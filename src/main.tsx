import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/meta-consent.css";

const root = document.getElementById("root")!;
const app = <StrictMode><Router ssrPath={window.location.pathname} ssrSearch=""><App /></Router></StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
