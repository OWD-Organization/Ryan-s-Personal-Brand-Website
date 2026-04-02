"use client";

import { tinaField } from "tinacms/dist/react";

type HowIWorkData = {
  heading: string;
  steps: { title: string; text: string }[];
  ctaText: string;
};

export default function HowIWork({ data }: { data: HowIWorkData }) {
  return (
    <section className="howwork-section">
      <div className="howwork-photo">
        <img src="/img/ryan-jana166330.jpg" alt="Ryan Kearney" />
        <div className="howwork-caption">RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ</div>
      </div>
      <div className="howwork-content">
        <div className="howwork-top">
          <div className="howwork-eyebrow">
            <span className="howwork-dot"></span>
            <span>HOW I WORK WITH YOU</span>
          </div>
          <h2 className="howwork-heading" data-tina-field={tinaField(data, "heading")}>
            {data.heading}
          </h2>
        </div>
        <div className="howwork-steps">
          {data.steps.map((step, i) => (
            <div className="howwork-step" key={i}>
              <span className="howwork-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="howwork-step-body">
                <h3 className="howwork-step-title" data-tina-field={tinaField(step, "title")}>
                  {step.title}
                </h3>
                <p data-tina-field={tinaField(step, "text")}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className="howwork-cta" data-tina-field={tinaField(data, "ctaText")}>
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
