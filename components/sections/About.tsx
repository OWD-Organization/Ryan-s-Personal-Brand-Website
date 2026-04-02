"use client";

import { tinaField } from "tinacms/dist/react";

type AboutData = {
  eyebrow: string;
  heading: string;
  sub: string;
};

export default function About({ data }: { data: AboutData }) {
  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-eyebrow">
          <span className="about-dot"></span>
          <span data-tina-field={tinaField(data, "eyebrow")}>{data.eyebrow}</span>
        </div>
        <div className="about-content">
          <h2 className="about-heading" data-tina-field={tinaField(data, "heading")}>
            {data.heading}
          </h2>
          <p className="about-sub" data-tina-field={tinaField(data, "sub")}>
            {data.sub}
          </p>
        </div>
      </div>
      <div className="about-arc" aria-hidden="true">
        <svg viewBox="0 0 100 1000" fill="none" preserveAspectRatio="none">
          <path
            d="M100 0 Q -50 250, 100 500 Q 250 750, 100 1000"
            stroke="#C4785A"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
