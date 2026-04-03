"use client";

import { useEffect } from "react";

const BUTTON_SELECTORS = [
  ".cta-button",
  ".cta-secondary",
  ".foryou-cta",
  ".howwork-cta",
  ".finalcta-btn",
  ".perspective-cta",
  ".banner-circle-btn",
  ".banner-cta-text",
].join(", ");

function openChat() {
  // Strategy 1: LeadConnector global API
  const w = window as any;
  if (w.LeadConnector?.openWidget) { w.LeadConnector.openWidget(); return; }
  if (w.leadConnector?.open) { w.leadConnector.open(); return; }
  if (w.LC_API?.open_chat_window) { w.LC_API.open_chat_window(); return; }

  // Strategy 2: Custom element with shadow DOM
  const shadowHost = document.querySelector("lead-connector-chat-widget") as any;
  if (shadowHost?.shadowRoot) {
    const btn = shadowHost.shadowRoot.querySelector("button");
    if (btn) { btn.click(); return; }
  }

  // Strategy 3: Regular DOM selectors
  const directSelectors = [
    "[data-widget-id] button",
    ".lc-chat-bubble",
    "[id*='chat'] button",
    "[class*='chat-bubble']",
    "[class*='chat-widget'] button",
    "[id*='leadconnector']",
  ];
  for (const sel of directSelectors) {
    const el = document.querySelector<HTMLElement>(sel);
    if (el) { el.click(); return; }
  }

  // Strategy 4: postMessage to any LeadConnector iframe
  document.querySelectorAll("iframe").forEach((iframe) => {
    if (
      iframe.src?.includes("leadconnectorhq") ||
      iframe.src?.includes("chat-widget")
    ) {
      iframe.contentWindow?.postMessage({ type: "open" }, "*");
    }
  });
}

export default function ChatTrigger() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(BUTTON_SELECTORS)) {
        e.preventDefault();
        openChat();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
