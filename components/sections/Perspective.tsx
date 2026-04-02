"use client";

import { tinaField } from "tinacms/dist/react";

type PerspectiveData = {
  heading: string;
  items: { text: string }[];
  ctaText: string;
};

export default function Perspective({ data }: { data: PerspectiveData }) {
  return (
    <section className="perspective-section">
      <div className="perspective-left">
        <h2 className="perspective-heading" data-tina-field={tinaField(data, "heading")}>
          {data.heading}
        </h2>
        <ol className="perspective-list">
          {data.items.map((item, i) => (
            <li key={i}>
              <span className="item-num">{String(i + 1).padStart(2, "0")}</span>
              <p data-tina-field={tinaField(item, "text")}>{item.text}</p>
            </li>
          ))}
        </ol>
        <a href="#" className="perspective-cta" data-tina-field={tinaField(data, "ctaText")}>
          {data.ctaText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
      <div className="perspective-right">
        <img src="/img/ryan-jana167901.jpg" alt="Ryan Jana" />
        <div className="photo-caption">RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ</div>
      </div>
    </section>
  );
}
