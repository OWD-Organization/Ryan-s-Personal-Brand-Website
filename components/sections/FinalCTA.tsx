"use client";

import { tinaField } from "tinacms/dist/react";

type FinalCTAData = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaText: string;
};

export default function FinalCTA({ data }: { data: FinalCTAData }) {
  return (
    <section className="finalcta-section">
      <div className="finalcta-content">
        <div className="finalcta-eyebrow">
          <span className="finalcta-dot"></span>
          <span data-tina-field={tinaField(data, "eyebrow")}>{data.eyebrow}</span>
        </div>
        <h2 className="finalcta-heading" data-tina-field={tinaField(data, "heading")}>
          {data.heading}
        </h2>
        <p className="finalcta-body" data-tina-field={tinaField(data, "body")}>
          {data.body}
        </p>
        <a href="#" className="finalcta-btn" data-tina-field={tinaField(data, "ctaText")}>
          {data.ctaText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      <div className="finalcta-photo">
        <img src="/img/ryan-jana166939 (2).jpg" alt="Ryan Kearney" />
        <div className="finalcta-caption">
          RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ
        </div>
      </div>
    </section>
  );
}
