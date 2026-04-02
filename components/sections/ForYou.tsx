"use client";

import { tinaField } from "tinacms/dist/react";

type ForYouData = {
  heading: string;
  items: { text: string }[];
  contrastText: string;
  ctaText: string;
};

export default function ForYou({ data }: { data: ForYouData }) {
  return (
    <section className="foryou-section">
      <div className="foryou-inner">
        <div className="foryou-left">
          <div className="foryou-eyebrow">
            <span className="foryou-dot"></span>
            <span>WHO THIS IS FOR</span>
          </div>
          <h2 className="foryou-heading" data-tina-field={tinaField(data, "heading")}>
            {data.heading}
          </h2>
        </div>
        <div className="foryou-right">
          <ul className="foryou-list">
            {data.items.map((item, i) => (
              <li key={i}>
                <span className="foryou-check">&#10003;</span>
                <p data-tina-field={tinaField(item, "text")}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="foryou-contrast">
        <p data-tina-field={tinaField(data, "contrastText")}>{data.contrastText}</p>
        <a href="#" className="foryou-cta" data-tina-field={tinaField(data, "ctaText")}>
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
    </section>
  );
}
