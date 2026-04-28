"use client";

import { useTina } from "tinacms/dist/react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Perspective from "@/components/sections/Perspective";
import MyStory from "@/components/sections/MyStory";
import ForYou from "@/components/sections/ForYou";
import LifestyleAudit from "@/components/sections/LifestyleAudit";
import HowIWork from "@/components/sections/HowIWork";
import Philosophy from "@/components/sections/Philosophy";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function HomeClient(props: {
  data: any;
  query: string;
  variables: object;
}) {
  const { data } = useTina(props);
  const p = data.page;

  return (
    <main>
      <Hero data={p.hero} />
      <About data={p.about} />
      <Perspective data={p.perspective} />
      <MyStory data={p.mystory} />
      <ForYou data={p.foryou} />
      <LifestyleAudit data={p.lifestyleaudit} />
      <HowIWork data={p.howwork} />
      <Philosophy data={p.philosophy} />
      <FinalCTA data={p.finalcta} />
      <Footer />
    </main>
  );
}
