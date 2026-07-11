import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Calendar, Ruler, Users, ChevronRight, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import { Landmark } from "../types";
import {
  CentralParkBackground,
  EmpireStateBackground,
  BrooklynBridgeBackground,
  OneWorldTradeBackground,
} from "./CinematicBackgrounds";

interface LandmarkSectionProps {
  key?: string;
  landmark: Landmark;
  index: number;
}

export default function LandmarkSection({ landmark, index }: LandmarkSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "history" | "timeline">("overview");
  const [hoveredFact, setHoveredFact] = useState<number | null>(null);

  // Monitor scroll progress for parallax background zoom and content fade
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.0, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  // Generate landmark-specific particle animations
  const renderSpecialEffects = () => {
    switch (landmark.id) {
      case "central-park":
      case "empire-state-building":
      case "one-world-trade-center":
        return null;

      case "times-square":
        // Neon flashing sparks/glows
        return (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-red-500/10 blur-[80px] animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-3 rounded-full bg-yellow-400 filter drop-shadow-[0_0_8px_rgba(250,204,21,1)]"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: `${10 + (i % 3) * 15}%`,
                }}
                animate={{
                  scaleY: [1, 2.5, 1],
                  opacity: [0.2, 1, 0.2]
                }}
                transition={{
                  duration: 0.5 + (i % 3) * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case "grand-central-terminal":
        // Constellations ceiling twinkling sparks
        return (
          <div className="absolute inset-x-0 top-0 h-[30%] pointer-events-none z-10 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-200 rounded-full filter drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]"
                style={{
                  left: `${5 + i * 6.5}%`,
                  top: `${10 + (i % 4) * 15}%`,
                }}
                animate={{
                  opacity: [0.1, 0.9, 0.1],
                  scale: [0.8, 1.4, 0.8]
                }}
                transition={{
                  duration: 2 + (i % 3) * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );

      case "brooklyn-bridge":
        return null;

      case "fifth-avenue":
        // Golden sparkles rising slowly
        return (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[1.5px] h-[1.5px] bg-gold-400 rounded-full"
                style={{
                  left: `${15 + i * 10}%`,
                  bottom: "5%"
                }}
                animate={{
                  y: [0, -300],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 5 + (i % 3) * 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        );

      default:
        // Elegant generic dust particles for general luxury vibe
        return (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <section
      id={landmark.id}
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#020408] flex flex-col justify-center items-center py-20 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/5"
    >
      {/* 1. CINEMATIC FULLSCREEN BACKGROUND WITH ACTIVE PARALLAX SCROLLING */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#020408]"
        style={{ opacity: bgOpacity }}
      >
        {/* Actual Image container with high quality zoom & beautiful color blending for cinematic chapters */}
        <motion.img
          src={landmark.imageUrl}
          alt={landmark.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.42] saturate-[1.10] transition-all duration-700"
          style={{ scale: bgScale }}
        />

        {/* Dynamic Dark Gradient Overlays for rich text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/70" />
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-black/85 via-black/50 to-transparent hidden md:block" />

        {/* Custom Landmark Cinematic Backgrounds & Luminous FX on top of darkened photo */}
        {landmark.id === "central-park" && <CentralParkBackground />}
        {landmark.id === "empire-state-building" && <EmpireStateBackground />}
        {landmark.id === "brooklyn-bridge" && <BrooklynBridgeBackground />}
        {landmark.id === "one-world-trade-center" && <OneWorldTradeBackground />}
        
        {/* Specific animations based on landmark properties */}
        {renderSpecialEffects()}
      </motion.div>

      {/* 2. MAIN STORYTELLING INTERACTIVE PANEL */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
        style={{ y: contentY }}
      >
        {/* LEFT COLUMN: HERO INFORMATION AND METRIC HUB */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          {/* Chapter badge */}
          <div className="inline-flex items-center space-x-2.5 mb-4">
            <span className="font-mono text-xs font-bold text-[#D4AF37] tracking-wider">
              CHAPTER {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-[1px] w-8 bg-[#D4AF37]/40" />
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
              NYC LANDMARK INDEX
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3">
            {landmark.name}
          </h2>
          <p
            className="font-serif italic text-base sm:text-lg lg:text-xl text-[#D4AF37]/90 tracking-wide mb-8 leading-snug"
          >
            “{landmark.tagline}”
          </p>

          {/* METRIC BOXES HUB */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-8">
            {/* Metric 1: Year */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 sm:p-4 backdrop-blur-md">
              <div className="flex items-center space-x-1.5 text-gray-500 mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-[9px] uppercase tracking-wider">Year Built</span>
              </div>
              <p className="font-display font-bold text-sm sm:text-lg text-white">
                {landmark.constructionYear}
              </p>
            </div>

            {/* Metric 2: Height / Dimension */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 sm:p-4 backdrop-blur-md">
              <div className="flex items-center space-x-1.5 text-gray-500 mb-1.5">
                <Ruler className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-[9px] uppercase tracking-wider">Height / Size</span>
              </div>
              <p className="font-display font-bold text-sm sm:text-lg text-white truncate" title={landmark.height}>
                {landmark.height}
              </p>
            </div>

            {/* Metric 3: Visitors */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-3 sm:p-4 backdrop-blur-md">
              <div className="flex items-center space-x-1.5 text-gray-500 mb-1.5">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-[9px] uppercase tracking-wider">Visitors</span>
              </div>
              <p className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                {landmark.visitors.split(" ")[0]} {landmark.visitors.split(" ")[1] || ""}
              </p>
            </div>
          </div>

          {/* Quick interactive fact box */}
          <div className="p-4 rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 backdrop-blur-md">
            <span className="font-mono text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
              Topography Coords
            </span>
            <span className="font-mono text-xs text-gray-400">
              {landmark.locationName}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: DETAILED TABS AND TIMELINE INTERACTION */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          {/* TAB BAR CONTROLS */}
          <div className="flex border-b border-white/10 mb-6 pb-2 space-x-4 overflow-x-auto">
            {(["overview", "history", "timeline"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-2 font-display text-xs font-bold tracking-widest uppercase cursor-pointer whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab ? "text-[#D4AF37]" : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                    layoutId={`active-tab-${landmark.id}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* TAB WINDOW COMPONENT */}
          <div className="min-h-[220px] mb-8 relative">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                    {landmark.shortOverview}
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 mt-4">
                    <Sparkles className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col text-left">
                      <span className="font-display font-bold text-xs text-white">Cultural Influence</span>
                      <span className="font-sans text-xs text-gray-400 leading-relaxed mt-1">
                        {landmark.culturalSignificance}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "history" && (
                <motion.div
                  key="history"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-left"
                >
                  <p className="font-sans text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                    {landmark.history}
                  </p>
                  <div className="p-3.5 rounded-xl border border-white/5 bg-black/30 font-mono text-[11px] text-gray-400 leading-relaxed mt-4">
                    <span className="text-[#D4AF37] font-bold block mb-1">VISITING METADATA</span>
                    {landmark.visitorInfo}
                  </div>
                </motion.div>
              )}

              {activeTab === "timeline" && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 max-h-[300px] overflow-y-auto pr-2"
                >
                  <div className="relative border-l border-white/10 pl-4 ml-2 space-y-5 py-2 text-left">
                    {landmark.timeline.map((item, key) => (
                      <div key={key} className="relative group">
                        {/* Dot indicator */}
                        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] border border-black group-hover:scale-125 transition-transform" />
                        <span className="font-mono text-xs font-bold text-[#D4AF37] block leading-none mb-1">
                          {item.year}
                        </span>
                        <h4 className="font-display font-semibold text-sm text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="font-sans text-xs text-gray-400 leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* INTERESTING FACTS ACCORDION */}
          <div>
            <h3 className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Did You Know?</span>
            </h3>

            <div className="space-y-2.5 text-left">
              {landmark.interestingFacts.map((fact, key) => (
                <div
                  key={key}
                  onMouseEnter={() => setHoveredFact(key)}
                  onMouseLeave={() => setHoveredFact(null)}
                  className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    hoveredFact === key
                      ? "bg-[#D4AF37]/5 border-[#D4AF37]/20 shadow-[0_4px_20px_rgba(212,181,26,0.05)]"
                      : "bg-white/5 border-white/5"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] mt-0.5">
                      {String(key + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {fact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
