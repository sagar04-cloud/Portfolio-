import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import ComputerScene from './components/ThreeD/ComputerScene';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  // Simple intersection observer for reveal animations without external heavy libs
  useEffect(() => {
    if (!introFinished) return;

    // Small delay to ensure DOM is ready after intro
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-10', 'duration-700', 'fill-mode-both');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('section > div').forEach(el => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [introFinished]);

  return (
    <div className={`min-h-screen selection:bg-blue-500/30 selection:text-blue-200 ${!introFinished ? 'h-screen overflow-hidden' : ''}`}>

      {/* 3D Intro Layer */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-50 bg-black"
          >
            <ComputerScene onOpen={() => setIntroFinished(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <Background />

      <div className={`transition-opacity duration-1000 ${introFinished ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />

        <main>
          <Hero startPopup={introFinished} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Persistent Decorative elements */}
        <div className="fixed bottom-0 left-0 p-6 pointer-events-none z-50 opacity-50 hidden md:block">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 [writing-mode:vertical-lr] rotate-180 flex items-center gap-4">
            <div className="w-[1px] h-12 bg-slate-800"></div>
            Status: Operational
          </div>
        </div>

        <div className="fixed bottom-0 right-0 p-6 pointer-events-none z-50 opacity-50 hidden md:block">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 [writing-mode:vertical-lr] flex items-center gap-4">
            <div className="w-[1px] h-12 bg-slate-800"></div>
            Built with React & Gemini
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
