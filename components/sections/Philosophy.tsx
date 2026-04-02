"use client";

import { tinaField } from "tinacms/dist/react";

type PhilosophyData = {
  heading: string;
  col1p1: string;
  pullquote: string;
  col1p2: string;
  col2p1: string;
  col2p2: string;
};

export default function Philosophy({ data }: { data: PhilosophyData }) {
  return (
    <section className="philosophy-section">
      <div className="philosophy-arc" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none">
          <path
            d="M0 330 Q 110 110, 330 0"
            stroke="#C4785A"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <div className="philosophy-inner">
        <div className="philosophy-top">
          <div className="philosophy-eyebrow">
            <span className="philosophy-dot"></span>
            <span>THE PHILOSOPHY</span>
          </div>
          <h2 className="philosophy-heading" data-tina-field={tinaField(data, "heading")}>
            {data.heading}
          </h2>
        </div>
        <div className="philosophy-divider"></div>
        <div className="philosophy-body">
          <div className="philosophy-col">
            <p data-tina-field={tinaField(data, "col1p1")}>{data.col1p1}</p>
            <p className="philosophy-pullquote" data-tina-field={tinaField(data, "pullquote")}>
              {data.pullquote}
            </p>
            <p data-tina-field={tinaField(data, "col1p2")}>{data.col1p2}</p>
          </div>
          <div className="philosophy-col">
            <p data-tina-field={tinaField(data, "col2p1")}>{data.col2p1}</p>
            <p data-tina-field={tinaField(data, "col2p2")}>{data.col2p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
