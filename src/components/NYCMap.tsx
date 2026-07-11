import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Navigation, Info, ArrowUpRight, Compass } from "lucide-react";
import { Landmark } from "../types";

interface NYCMapProps {
  landmarks: Landmark[];
  onNavigateToLandmark: (id: string) => void;
}

export default function NYCMap({ landmarks, onNavigateToLandmark }: NYCMapProps) {
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(landmarks[0]);
  const [hoveredPinId, setHoveredPinId] = useState<string | null>(null);

  return (
    <section
      id="nyc-map"
      className="relative min-h-screen w-full bg-[#020408] py-20 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center border-b border-white/5"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/5 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase">
              Tactical Ground Radar
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Interactive Manhattan Map
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Locate all 10 famous landmarks plotted precisely across Manhattan. Click on any coordinates pin to preview details and initiate an instant helicopter fly-over.
          </p>
        </div>

        {/* MAP CONTAINER GRID */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: THE INTERACTIVE SVG VECTOR MAP (7 columns) */}
          <div className="lg:col-span-7 bg-[#020408]/60 border border-white/5 rounded-3xl p-4 sm:p-6 flex items-center justify-center relative overflow-hidden min-h-[480px] sm:min-h-[600px] shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            {/* Ambient radar sweeps */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] border border-white/5 rounded-full pointer-events-none" />

            {/* STYLIZED SVG GEOMETRY OF MANHATTAN */}
            <div className="relative w-full h-full max-w-[450px] aspect-[4/5]">
              <svg
                viewBox="0 0 500 620"
                className="w-full h-full text-indigo-950/40 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Waterways/Rivers backgrounds */}
                <rect width="500" height="620" fill="#020408" className="opacity-0" />

                {/* 2. Outlying landmasses (New Jersey left, Queens/Brooklyn right) */}
                <path
                  d="M 0 0 L 100 0 L 80 150 L 50 350 L 60 520 L 0 620 Z"
                  fill="#030610"
                  className="stroke-white/5 stroke-[0.5]"
                />
                <path
                  d="M 500 0 L 410 40 L 400 120 L 430 220 L 420 310 L 460 380 L 410 420 L 480 500 L 460 560 L 500 620 Z"
                  fill="#030610"
                  className="stroke-white/5 stroke-[0.5]"
                />

                {/* 3. The Manhattan Island Silhouette */}
                <motion.path
                  d="M 230 40 L 260 50 L 290 80 L 270 140 L 290 200 L 280 250 L 275 300 L 250 350 L 220 420 L 205 450 L 195 490 L 175 515 L 155 520 L 140 500 L 155 450 L 180 350 L 195 280 L 210 180 L 215 120 L 220 70 Z"
                  fill="#04091a"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  className="opacity-75 filter drop-shadow-[0_0_15px_rgba(212,171,26,0.15)]"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* 4. Central Park outline */}
                <rect
                  x="222"
                  y="125"
                  width="36"
                  height="115"
                  transform="rotate(-15 222 125)"
                  fill="#14532d"
                  className="stroke-green-500/30 stroke-[1] fill-green-950/50"
                />

                {/* 5. Connecting Bridges (Queensboro, Williamsburg, Manhattan, Brooklyn) */}
                {/* Brooklyn Bridge */}
                <line x1="175" y1="515" x2="235" y2="530" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2,2" />
                {/* Queensboro Bridge */}
                <line x1="262" y1="210" x2="350" y2="215" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2,2" />
              </svg>

              {/* 6. PLOT CUSTOM PINS AS HTML OVERLAYS */}
              {landmarks.map((landmark, idx) => {
                const isActive = selectedLandmark?.id === landmark.id;
                const isHovered = hoveredPinId === landmark.id;

                return (
                  <button
                    key={landmark.id}
                    onClick={() => setSelectedLandmark(landmark)}
                    onMouseEnter={() => setHoveredPinId(landmark.id)}
                    onMouseLeave={() => setHoveredPinId(null)}
                    style={{
                      left: `${landmark.mapCoords.x}%`,
                      top: `${landmark.mapCoords.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer p-2 z-20"
                  >
                    {/* Pulsing indicator wave behind active pin */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-[#D4AF37]/30 scale-[2.2] animate-ping" />
                    )}

                    <div
                      className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#D4AF37] text-black scale-125 shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                          : "bg-black border border-[#D4AF37]/40 text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      
                      {/* Floating miniature tooltip showing index */}
                      <span className="absolute -top-5 font-mono text-[9px] font-bold text-gray-500">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Simple hover label */}
                    <AnimatePresence>
                      {isHovered && !isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: -5, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -5, scale: 0.9 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-black/95 border border-[#D4AF37]/20 whitespace-nowrap pointer-events-none z-30"
                        >
                          <span className="font-display font-bold text-[10px] text-white">
                            {landmark.name}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: THE DETAILED LANDMARK CARD (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {selectedLandmark ? (
                <motion.div
                  key={selectedLandmark.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#020408]/60 border border-white/5 rounded-3xl p-6 flex flex-col justify-between h-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden"
                >
                  <div>
                    {/* Thumbnail Image Header */}
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 border border-white/5">
                      <img
                        src={selectedLandmark.imageUrl}
                        alt={selectedLandmark.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        <span className="font-mono text-[9px] text-white">
                          {selectedLandmark.locationName.split(",")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Header info */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="font-mono text-[9px] font-bold text-[#D4AF37] tracking-widest uppercase">
                        LANDMARK GPS REPORT
                      </span>
                      <div className="h-[1px] flex-grow bg-white/5" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-black text-white mb-2">
                      {selectedLandmark.name}
                    </h3>
                    <p className="font-serif italic text-xs text-[#D4AF37] mb-4">
                      “{selectedLandmark.tagline}”
                    </p>

                    {/* Mini Quick Overview */}
                    <p className="font-sans text-xs text-gray-400 leading-relaxed font-light mb-6">
                      {selectedLandmark.shortOverview}
                    </p>

                    {/* Metadata Stats Table */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-wider mb-0.5">
                          Inauguration
                        </span>
                        <span className="font-display font-bold text-xs text-white">
                          {selectedLandmark.constructionYear}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-wider mb-0.5">
                          Annual Visitors
                        </span>
                        <span className="font-display font-bold text-xs text-white">
                          {selectedLandmark.visitors.split(" ")[0]}M
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Travel Flight Trigger */}
                  <button
                    id={`btn-scroller-${selectedLandmark.id}`}
                    onClick={() => onNavigateToLandmark(selectedLandmark.id)}
                    className="w-full py-3.5 px-6 rounded-2xl font-display font-bold text-xs tracking-widest uppercase bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.2)] flex items-center justify-center space-x-2 cursor-pointer animate-pulse"
                  >
                    <Navigation className="w-3.5 h-3.5 text-black" />
                    <span>Fly to Location</span>
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </button>
                </motion.div>
              ) : (
                <div className="bg-[#020408]/60 border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center h-full text-gray-500">
                  <Info className="w-10 h-10 text-[#D4AF37]/20 mb-4 animate-bounce" />
                  <p className="font-display font-semibold text-sm text-white">No Coordinates Selected</p>
                  <p className="font-sans text-xs text-gray-500 mt-1 max-w-xs">
                    Please hover or tap a mapping pin on Manhattan to unlock tactical tracking telemetry.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
