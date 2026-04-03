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

export default function ChatTrigger() {
  useEffect(() => {
    const openChat = () => {
      const widgetBtn = document.querySelector<HTMLElement>(
        "div[data-id='lead-connector-chat-widget'] button, " +
        ".lc-chat-bubble, " +
        "[id*='chat-widget'] button, " +
        "[class*='chat-bubble']"
      );
      if (widgetBtn) {
        widgetBtn.click();
      }
    };

    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest(BUTTON_SELECTORS)) {
        e.preventDefault();
        openChat();
      }
    };

    document.addEventListener("click", handleButtonClick);
    return () => document.removeEventListener("click", handleButtonClick);
  }, []);

  return null;
}
