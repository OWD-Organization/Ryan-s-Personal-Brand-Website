import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Perspective from "@/components/sections/Perspective";
import MyStory from "@/components/sections/MyStory";
import ForYou from "@/components/sections/ForYou";
import HowIWork from "@/components/sections/HowIWork";
import Philosophy from "@/components/sections/Philosophy";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Perspective />
      <MyStory />
      <ForYou />
      <HowIWork />
      <Philosophy />
      <FinalCTA />
      <Footer />
    </main>
  );
}
