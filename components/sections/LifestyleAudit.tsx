"use client";

import { tinaField } from "tinacms/dist/react";

type AuditProduct = {
  badge: string;
  title: string;
  price: string;
  description: string;
  features: { text: string }[];
  ctaText: string;
  ctaUrl: string;
};

type LifestyleAuditData = {
  eyebrow: string;
  heading: string;
  subtext: string;
  products: AuditProduct[];
};

export default function LifestyleAudit({ data }: { data: LifestyleAuditData }) {
  return (
    <section className="audit-section">
      <div className="audit-header">
        <div className="audit-eyebrow">
          <span className="audit-dot"></span>
          <span data-tina-field={tinaField(data, "eyebrow")}>{data.eyebrow}</span>
        </div>
        <h2 className="audit-heading" data-tina-field={tinaField(data, "heading")}>
          {data.heading}
        </h2>
        <p className="audit-subtext" data-tina-field={tinaField(data, "subtext")}>
          {data.subtext}
        </p>
      </div>

      <div className="audit-cards">
        {data.products.map((product, i) => (
          <div key={i} className={`audit-card ${i === 1 ? "audit-card--featured" : ""}`}>
            <div className="audit-card-badge" data-tina-field={tinaField(product, "badge")}>
              {product.badge}
            </div>
            <div className="audit-card-body">
              <h3 className="audit-card-title" data-tina-field={tinaField(product, "title")}>
                {product.title}
              </h3>
              <div className="audit-card-price" data-tina-field={tinaField(product, "price")}>
                {product.price}
              </div>
              <p className="audit-card-desc" data-tina-field={tinaField(product, "description")}>
                {product.description}
              </p>
              <ul className="audit-card-features">
                {product.features.map((f, j) => (
                  <li key={j}>
                    <span className="audit-check">&#10003;</span>
                    <span data-tina-field={tinaField(f, "text")}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={product.ctaUrl || "#"}
              className="audit-card-cta"
              data-tina-field={tinaField(product, "ctaText")}
            >
              {product.ctaText}
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
        ))}
      </div>
    </section>
  );
}
