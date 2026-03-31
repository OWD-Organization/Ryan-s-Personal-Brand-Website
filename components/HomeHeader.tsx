"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  headerText: string;
}

export default function HomeHeader({ headerText }: Props) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".word");

    const tl = gsap.timeline();

    tl.fromTo(
      words,
      { opacity: 0, y: 60, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
        stagger: 0.12,
      }
    );

    tl.to(
      containerRef.current,
      {
        textShadow: "0 0 40px rgba(255,255,255,0.4)",
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1,
      },
      ">-0.2"
    );
  }, []);

  const words = headerText.split(" ");

  return (
    <header className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <h1
        ref={containerRef}
        className="text-white text-4xl md:text-6xl font-bold text-center px-6 tracking-tight"
        style={{ perspective: "600px" }}
      >
        {words.map((word, i) => (
          <span key={i} className="word inline-block mr-[0.3em]">
            {word}
          </span>
        ))}
      </h1>
    </header>
  );
}
