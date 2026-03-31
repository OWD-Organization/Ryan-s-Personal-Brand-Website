"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  headerText: string;
}

export default function HomeHeader({ headerText }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <header className="flex items-center justify-center min-h-screen bg-black">
      <h1
        ref={ref}
        className="text-white text-4xl md:text-6xl font-bold text-center px-6 tracking-tight"
      >
        {headerText}
      </h1>
    </header>
  );
}
