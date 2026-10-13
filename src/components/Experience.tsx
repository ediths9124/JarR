"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Intro from "./Intro";
import Nav from "./Nav";
import Hero from "./Hero";
import Music from "./Music";
import About from "./About";
import VideoSection from "./VideoSection";
import Shows from "./Shows";
import Contact from "./Contact";
import Footer from "./Footer";
import Cursor from "./Cursor";

export default function Experience() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  return (
    <>
      <Cursor />
      <AnimatePresence>{!entered && <Intro onEnter={() => setEntered(true)} />}</AnimatePresence>
      <Nav />
      <main>
        <Hero ready={entered} />
        <Music />
        <About />
        <VideoSection />
        <Shows />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
