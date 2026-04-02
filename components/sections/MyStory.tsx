"use client";

import { tinaField } from "tinacms/dist/react";

type MyStoryData = {
  heading: string;
  timeline: { label: string; text: string }[];
  bannerBody: string;
  bannerCtaText: string;
};

export default function MyStory({ data }: { data: MyStoryData }) {
  return (
    <section className="story-section">
      <div className="story-arc" aria-hidden="true">
        <svg viewBox="0 0 400 800" fill="none" preserveAspectRatio="xMaxYMid meet">
          <path
            d="M 400 0 Q 20 400, 400 800"
            stroke="#C4785A"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="story-top">
        <div className="story-eyebrow">
          <span className="story-dot"></span>
          <span>MY STORY</span>
        </div>
        <h2 className="story-heading" data-tina-field={tinaField(data, "heading")}>
          {data.heading}
        </h2>
      </div>
      <div className="story-timeline">
        <div className="timeline-line"></div>
        {data.timeline.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
              <span className="timeline-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="timeline-label" data-tina-field={tinaField(item, "label")}>
                {item.label}
              </span>
            </div>
            <p data-tina-field={tinaField(item, "text")}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="banner-card">
        <div className="banner-photo">
          <img src="/img/ryan-jana167897.jpg" alt="Ryan Kearney" />
          <div className="banner-photo-caption">
            RYAN KEARNEY &nbsp;|&nbsp; SEDONA, AZ
          </div>
        </div>
        <div className="banner-panel">
          <div className="banner-panel-top">
            <p className="banner-body" data-tina-field={tinaField(data, "bannerBody")}>
              {data.bannerBody}
            </p>
          </div>
          <div className="banner-panel-bottom">
            <span className="banner-cta-text" data-tina-field={tinaField(data, "bannerCtaText")}>
              {data.bannerCtaText}
            </span>
            <a href="#" className="banner-circle-btn" aria-label="Start Building Yours">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
