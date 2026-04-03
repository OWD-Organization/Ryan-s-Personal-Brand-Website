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
  const w = window as any;

  // Strategy 1: LeadConnector global API
  if (w.LeadConnector?.openWidget) { w.LeadConnector.openWidget(); return; }
  if (w.leadConnector?.open) { w.leadConnector.open(); return; }
  if (w.LC_API?.open_chat_window) { w.LC_API.open_chat_window(); return; }

  // Strategy 2: Click the orange bubble directly
  const allElements = document.querySelectorAll<HTMLElement>("*");
  for (const el of allElements) {
    if (el.shadowRoot) {
      const btn = el.shadowRoot.querySelector<HTMLElement>("button, [role='button']");
      if (btn) { btn.click(); return; }
    }
  }

  // Strategy 3: Any button not part of the main site
  const siteSelectors = BUTTON_SELECTORS.split(", ");
  const allButtons = document.querySelectorAll<HTMLElement>("button, [role='button']");
  for (const btn of allButtons) {
    const isSiteBtn = siteSelectors.some(sel => btn.closest(sel));
    if (!isSiteBtn) { btn.click(); return; }
  }

  console.log("[ChatTrigger] Could not find chat widget button");
}

export default function ChatTrigger() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const matched = target.closest(BUTTON_SELECTORS);
      console.log("[ChatTrigger] click detected, matched:", matched);
      if (matched) {
        e.preventDefault();
        openChat();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
