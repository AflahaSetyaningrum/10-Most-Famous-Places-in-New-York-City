import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Users, Compass, Building2, Train, Map, Tv } from "lucide-react";
import { StatItem } from "../types";

interface NYCFactsProps {
  statistics: StatItem[];
}

// Icon mapping index
const iconMap: Record<string, any> = {
  Users: Users,
  Compass: Compass,
  Building2: Building2,
  Train: Train,
  Map: Map,
  Tv: Tv
};

// COMPACT LIVE COUNTING WRAPPER COMPONENT
function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isElementInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isElementInView) return;

    let start = 0;
    const end = value;
    const stepTime = 20; // tick intervals in ms
    const totalSteps = (duration * 1000) / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, isElementInView]);

  // Format numbers cleanly e.g., 8.3 vs 300
  const formatCount = (num: number) => {
    if (num % 1 === 0) return Math.floor(num).toLocaleString();
    return num.toFixed(1);
  };

  return (
    <span ref={elementRef} className="font-display font-extrabold text-3xl sm:text-4xl text-[#D4AF37]">
      {formatCount(count)}
      <span className="text-white text-xl ml-1 font-mono">{suffix}</span>
    </span>
  );
}

export default function NYCFacts({ statistics }: NYCFactsProps) {
  return (
    <section
      id="amazing-facts"
      className="relative min-h-screen w-full bg-[#020408] py-20 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden border-b border-white/5"
    >
      {/* Background Star Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[15%] left-[25%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-slow" />
        <div className="absolute top-[45%] left-[80%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle-fast" />
        <div className="absolute top-[75%] left-[10%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-medium" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/5 mb-4">
            <Tv className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[9px] font-bold tracking-widest text-[#D4AF37] uppercase">
              NYC Database Stats
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Amazing New York Facts
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            A numeric window into the astronomical scale, population density, transit reach, and economic power that defines the greatest metropolis on Earth.
          </p>
        </div>

        {/* BENTO GRID OF STATISTICAL METRICS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statistics.map((stat, idx) => {
            const IconComponent = iconMap[stat.iconName] || Users;
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#020408]/60 border border-white/5 hover:border-[#D4AF37]/25 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden"
              >
                {/* Upper row: icon and count */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    <IconComponent className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-600 group-hover:text-[#D4AF37]/60 transition-colors">
                    METRIC #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Big Live Counter Value */}
                <div className="mb-2.5">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Text Labels */}
                <h3 className="font-display font-bold text-lg text-white mb-2 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  {stat.label}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed font-light">
                  {stat.description}
                </p>

                {/* Ambient glow accent inside the card corner */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* LOWER TRIVIA TRIVIAL WRAPPER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full mt-12 p-6 sm:p-8 rounded-3xl border border-white/5 bg-gradient-to-r from-[#D4AF37]/5 to-slate-900/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left max-w-xl">
            <span className="font-mono text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
              Did You Know? (Extra Trivia)
            </span>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              New York City's yellow cabs are famous, but did you know they were originally color-coded yellow simply because the founder of the Yellow Cab Company read a study showing yellow was the easiest color for the human eye to spot?
            </p>
          </div>
          <div className="p-3 bg-black/40 border border-white/5 rounded-xl text-center shrink-0">
            <span className="font-mono text-[9px] text-gray-500 block">LOCAL TIME</span>
            <span className="font-mono text-sm font-bold text-[#D4AF37]">NEW YORK, USA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
