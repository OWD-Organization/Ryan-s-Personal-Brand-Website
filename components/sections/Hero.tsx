"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { tinaField } from "tinacms/dist/react";

const images = [
  { src: "/img/ryan-jana166939 (2).jpg", bgColor: "#C4785A" },
  { src: "/img/ryan-jana166330.jpg", bgColor: "#8FA67E" },
  { src: "/img/ryan-jana167897.jpg", bgColor: "#C4785A" },
];

type HeroData = {
  tagline: string;
  headline: string;
  ctaText: string;
  ctaSecondaryText: string;
};

export default function Hero({ data }: { data: HeroData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [overlayActive, setOverlayActive] = useState(false);
  const [containerTransitioning, setContainerTransitioning] = useState(false);
  const [bgColor, setBgColor] = useState(images[0].bgColor);
  const [imageSrc, setImageSrc] = useState(images[0].src);

  const isTransitioningRef = useRef(false);
  const currentIndexRef = useRef(0);

  const runTransition = useCallback((nextIndex: number) => {
    if (isTransitioningRef.current) return;
    if (nextIndex === currentIndexRef.current) return;

    isTransitioningRef.current = true;
    setContainerTransitioning(true);
    setOverlayActive(true);

    setTimeout(() => {
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      setImageSrc(images[nextIndex].src);
      setBgColor(images[nextIndex].bgColor);
    }, 200);

    setTimeout(() => {
      setOverlayActive(false);
      setContainerTransitioning(false);
      isTransitioningRef.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % images.length;
      runTransition(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [runTransition]);

  const goToSlide = useCallback(
    (index: number) => {
      runTransition(index);
    },
    [runTransition]
  );

  return (
    <section className="hero">
      <div className="decorative-line">
        <svg viewBox="0 0 400 400" fill="none">
          <path
            d="M0 330 Q 110 110, 330 0"
            stroke="#C4785A"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="logo">
        <h1>
          Ryan Kearney<sup></sup>
        </h1>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-text-inner">
            <div className="tagline">
              <span className="tagline-dot"></span>
              <span className="tagline-text" data-tina-field={tinaField(data, "tagline")}>
                {data.tagline}
              </span>
            </div>
            <h1 className="headline" data-tina-field={tinaField(data, "headline")}>
              {data.headline}
            </h1>
            <div className="cta-group">
              <a href="#" className="cta-button" data-tina-field={tinaField(data, "ctaText")}>
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
              <a href="#" className="cta-secondary" data-tina-field={tinaField(data, "ctaSecondaryText")}>
                {data.ctaSecondaryText}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <div
            className={`image-container${containerTransitioning ? " transitioning" : ""}`}
            style={{ backgroundColor: bgColor }}
          >
            <div className="geometric-shapes">
              <div className="main-image-wrapper">
                <div className="main-image">
                  <img src={imageSrc} alt="Professional portrait" />
                </div>
              </div>
              <div className={`grid-overlay${overlayActive ? " active" : ""}`}>
                <div className="grid-cell" style={{ transitionDelay: "0ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "30ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "60ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "90ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "120ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "150ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "180ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "210ms" }}></div>
                <div className="grid-cell" style={{ transitionDelay: "240ms" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot${index === currentIndex ? " active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
