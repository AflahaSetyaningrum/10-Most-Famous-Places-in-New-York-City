import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { ArrowUp, Compass, MapPin, BarChart3, ChevronUp } from "lucide-react";

import { landmarks, statistics } from "./data/landmarks";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LandmarkSection from "./components/LandmarkSection";
import NYCMap from "./components/NYCMap";
import NYCFacts from "./components/NYCFacts";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Hardware-accelerated Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll depth to show/hide "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up IntersectionObserver to automatically highlight navbar options during scroll
  useEffect(() => {
    if (isLoading) return;

    const sections = ["home", ...landmarks.map((l) => l.id), "nyc-map", "amazing-facts"];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          rootMargin: "-45% 0px -45% 0px" // Trigger when section occupies the central 10% of the screen
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [isLoading]);

  // Smooth scroll handler to target elements safely
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Direct element offset calculate for clean scroll alignment
      const topOffset = element.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen bg-[#030712] text-gray-100 flex flex-col font-sans selection:bg-gold-500 selection:text-black"
          >
            {/* Global Smooth Top Progress Bar */}
            <motion.div
              id="global-progress"
              className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-600 via-gold-400 to-amber-500 z-50 origin-left shadow-[0_2px_15px_rgba(212,181,26,0.5)]"
              style={{ scaleX }}
            />

            {/* Premium Header/Navigation */}
            <Navbar
              landmarks={landmarks}
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />

            {/* Core Sections Container */}
            <main className="flex-grow w-full">
              {/* SECTION 1: Interactive Skyline Hero */}
              <Hero
                onStartExploring={() => handleNavigate(landmarks[0].id)}
                onViewLandmarks={() => handleNavigate("nyc-map")}
              />

              {/* SECTIONS 2 to 11: The Ten Famous Landmarks Carousel */}
              {landmarks.map((landmark, index) => (
                <LandmarkSection
                  key={landmark.id}
                  landmark={landmark}
                  index={index}
                />
              ))}

              {/* SECTION 12: Interactive Manhattan SVG map */}
              <NYCMap
                landmarks={landmarks}
                onNavigateToLandmark={handleNavigate}
              />

              {/* SECTION 13: Live Counter Database Facts */}
              <NYCFacts statistics={statistics} />
            </main>

            {/* GLOBAL PREMIUM FOOTER */}
            <footer className="relative bg-[#02050c] border-t border-white/5 py-16 px-6 overflow-hidden">
              {/* Background constellations */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)]" />
              
              <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-6 relative z-10">
                {/* Visual Monogram */}
                <div className="w-12 h-12 rounded-full border border-gold-500/25 bg-black/40 flex items-center justify-center mb-2">
                  <span className="font-display font-black text-sm text-gold-400">NYC</span>
                </div>

                <h3 className="font-display font-bold text-xl text-white tracking-widest uppercase">
                  10 Most Famous Places in NYC
                </h3>
                
                <p className="font-sans text-xs text-gray-500 max-w-md leading-relaxed font-light">
                  A high-fidelity digital adventure celebrating the monuments, skyscrapers, bridges, and parks that define the skyline and spirit of New York City.
                </p>

                {/* Navigation links inside footer */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4 border-t border-white/5 w-full max-w-lg">
                  <button
                    onClick={() => handleNavigate("home")}
                    className="font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavigate("nyc-map")}
                    className="font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    NYC Map
                  </button>
                  <button
                    onClick={() => handleNavigate("amazing-facts")}
                    className="font-mono text-[10px] uppercase tracking-widest text-gray-400 hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    Amazing Facts
                  </button>
                </div>

                {/* Fine Copyright details */}
                <div className="pt-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                  © 2026 NYC DIGITAL HERITAGE CO. • PHOTOGRAPHS LICENSED VIA UNSPLASH
                </div>
              </div>
            </footer>

            {/* SLEEK GLASSMORPHIC BACK-TO-TOP FLOATING TRIGGER */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  id="back-to-top"
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 15 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-6 right-6 z-40 p-4 rounded-full glass-panel text-gold-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer border border-white/10 group"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
