"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/sections/Footer";
import CursorEffect from "@/components/ui/CursorEffect";
import ScrollProgress from "@/components/ui/ScrollProgress";

const Scene3D = dynamic(() => import("@/components/3d/Scene3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f]">
      <CursorEffect />
      <ScrollProgress />
      <Scene3D />
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
