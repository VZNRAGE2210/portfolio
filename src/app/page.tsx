"use client";

import dynamic from "next/dynamic";
import SmoothScroller from "@/components/SmoothScroller";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <SmoothScroller>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Education />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </SmoothScroller>
  );
}
