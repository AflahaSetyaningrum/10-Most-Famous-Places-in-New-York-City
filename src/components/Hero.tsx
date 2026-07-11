import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Compass, MapPin, ChevronDown } from "lucide-react";

interface HeroProps {
  onStartExploring: () => void;
  onViewLandmarks: () => void;
}

export default function Hero({ onStartExploring, onViewLandmarks }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<{ id: number; left: number; top: number; size: number; delay: number; duration: number }[]>([]);

  // Track scroll position for high-quality parallax effects
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, 150]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const skyY = useTransform(scrollY, [0, 800], [0, 40]);
  const distantSkylineY = useTransform(scrollY, [0, 800], [0, 100]);
  const midSkylineY = useTransform(scrollY, [0, 800], [0, 150]);

  // Generate luxury ambient dust particles once at mount
  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 90 + 5,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 4
    }));
    setParticles(generatedParticles);
  }, []);

  // Soft mouse-move parallax responsiveness
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#020408] overflow-hidden flex flex-col justify-between"
    >
      {/* BACKGROUND SKY LAYER (Parallaxed) */}
      <motion.div
        className="absolute inset-0 bg-[#020408] pointer-events-none overflow-hidden"
        style={{ y: skyY }}
      >
        {/* Immersive UI Atmospheric Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-blue-900/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-indigo-900/20 blur-[110px] rounded-full" />
        {/* Twinkling Stars */}
        <div className="absolute inset-0">
          <div className="absolute top-[12%] left-[15%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-slow" />
          <div className="absolute top-[18%] left-[45%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle-fast" />
          <div className="absolute top-[28%] left-[75%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-medium" />
          <div className="absolute top-[35%] left-[25%] w-[2.5px] h-[2.5px] bg-gold-200 rounded-full animate-twinkle-slow shadow-[0_0_8px_rgba(253,250,217,0.8)]" />
          <div className="absolute top-[42%] left-[60%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle-fast" />
          <div className="absolute top-[55%] left-[88%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-medium" />
          <div className="absolute top-[15%] left-[65%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-slow" />
          <div className="absolute top-[50%] left-[10%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle-fast" />
          <div className="absolute top-[68%] left-[40%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-medium" />
          <div className="absolute top-[22%] left-[90%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-slow" />
        </div>

        {/* Shooting Stars */}
        <div className="absolute top-[10%] right-[10%] w-[100px] h-[1px] bg-gradient-to-l from-white to-transparent transform -rotate-45 origin-top-right animate-shooting-star-1 opacity-0 pointer-events-none" />
        <div className="absolute top-[25%] left-[15%] w-[140px] h-[1px] bg-gradient-to-r from-transparent to-white transform -rotate-12 origin-top-left animate-shooting-star-2 opacity-0 pointer-events-none" />

        {/* Airplane flight */}
        <div className="absolute animate-airplane pointer-events-none select-none text-[8px] text-white flex items-center space-x-1">
          <span className="text-gray-400 font-mono tracking-tighter">✈</span>
          <span className="w-1 h-1 bg-red-500 rounded-full animate-ping" />
          <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Slow Drifting Clouds */}
        <div className="absolute inset-x-0 top-[10%] bottom-[40%] overflow-hidden opacity-15">
          <div className="absolute w-[800px] h-[300px] bg-gradient-to-r from-transparent via-slate-800 to-transparent blur-3xl animate-drift-slow-left top-[10%]" />
          <div className="absolute w-[900px] h-[250px] bg-gradient-to-r from-transparent via-blue-950 to-transparent blur-3xl animate-drift-slow-right top-[30%]" />
          <div className="absolute w-[600px] h-[200px] bg-gradient-to-r from-transparent via-slate-900 to-transparent blur-3xl animate-drift-medium-left top-[5%] -left-[100px]" />
        </div>
      </motion.div>

      {/* FLOATING AMBIENT PARTICLES (Dusted Gold) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-b from-gold-300 to-amber-500 opacity-20 filter blur-[0.5px]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(p.id) * 20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* DISTANT SILHOUETTE SKYLINE LAYER */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-[45vh] pointer-events-none select-none opacity-25 z-0"
        style={{
          y: distantSkylineY,
          x: mousePosition.x * 0.15,
        }}
      >
        <svg
          className="w-full h-full text-indigo-950 fill-current"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Silhouetted Skyscrapers */}
          <path d="M0 300 L0 180 L30 180 L30 120 L45 120 L45 180 L80 180 L80 150 L110 150 L110 300 L160 300 L160 100 L185 100 L185 300 L240 300 L240 160 L280 160 L280 300 L320 300 L320 90 L330 90 L330 60 L334 60 L334 20 L338 60 L342 60 L342 90 L360 90 L360 300 L410 300 L410 170 L440 170 L440 300 L490 300 L490 140 L530 140 L530 300 L580 300 L580 80 L595 80 L595 50 L598 50 L598 10 L602 50 L605 50 L605 80 L620 80 L620 300 L680 300 L680 150 L720 150 L720 300 L770 300 L770 110 L810 110 L810 300 L860 300 L860 160 L900 160 L900 300 L950 300 L950 90 L965 90 L965 40 L968 40 L968 0 L972 40 L975 40 L975 90 L990 90 L990 300 L1040 300 L1040 130 L1070 130 L1070 300 L1120 300 L1120 170 L1150 170 L1150 300 L1200 300 L1200 100 L1240 100 L1240 300 L1300 300 L1300 150 L1340 150 L1340 300 L1400 300 L1400 190 L1440 190 L1440 300 Z" />
        </svg>
      </motion.div>

      {/* MID-GROUND SKYLINE LAYER (With Interactive Blinking Windows) */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-[38vh] pointer-events-none select-none z-1"
        style={{
          y: midSkylineY,
          x: mousePosition.x * 0.35,
        }}
      >
        <svg
          className="w-full h-full text-[#080d1a] fill-current filter drop-shadow-[0_-5px_15px_rgba(8,13,26,0.6)]"
          viewBox="0 0 1440 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Silhouetted Skyscrapers mid ground */}
          <path d="M0 250 L0 150 L40 150 L40 90 L60 90 L60 250 L120 250 L120 120 L160 120 L160 250 L200 250 L200 60 L230 60 L230 250 L280 250 L280 140 L310 140 L310 250 L350 250 L350 80 L355 80 L355 40 L358 40 L358 15 L362 40 L365 40 L365 80 L380 80 L380 250 L440 250 L440 110 L480 110 L480 250 L530 250 L530 130 L570 130 L570 250 L620 250 L620 50 L650 50 L650 250 L710 250 L710 140 L740 140 L740 250 L800 250 L800 70 L830 70 L830 250 L880 250 L880 100 L885 100 L885 50 L888 50 L888 20 L892 50 L895 50 L895 100 L910 100 L910 250 L960 250 L960 120 L1000 120 L1000 250 L1060 250 L1060 40 L1090 40 L1090 250 L1150 250 L1150 130 L1190 130 L1190 250 L1250 250 L1250 80 L1280 80 L1280 250 L1340 250 L1340 140 L1380 140 L1380 250 L1440 250 L1440 160 L1440 250 Z" />
        </svg>

        {/* Glowing Windows (Asynchronous flashing simulated via styled divs mapped across key areas) */}
        <div className="absolute inset-x-0 bottom-0 top-[20%] overflow-hidden pointer-events-none opacity-60">
          {/* Times Square Grid Glow */}
          <div className="absolute left-[24%] bottom-[5%] w-24 h-24 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute left-[25%] bottom-[8%] w-16 h-12 bg-blue-500/15 rounded-full blur-xl animate-pulse" />

          {/* Random window dots */}
          <div className="absolute left-[3%] bottom-[30%] w-1 h-1 bg-amber-400 rounded-sm animate-twinkle-slow" />
          <div className="absolute left-[4%] bottom-[28%] w-1 h-1 bg-yellow-200 rounded-sm animate-twinkle-fast" />
          <div className="absolute left-[3.5%] bottom-[22%] w-1 h-1 bg-yellow-300 rounded-sm animate-twinkle-medium" />
          
          <div className="absolute left-[13%] bottom-[45%] w-1.5 h-1 bg-yellow-300 rounded-sm animate-twinkle-fast" />
          <div className="absolute left-[14.5%] bottom-[40%] w-1 h-1 bg-amber-500 rounded-sm animate-twinkle-slow" />
          
          <div className="absolute left-[26%] bottom-[50%] w-1 h-1.5 bg-yellow-400 rounded-sm animate-twinkle-medium" />
          <div className="absolute left-[27%] bottom-[45%] w-1 h-1 bg-blue-300 rounded-sm animate-twinkle-slow" />
          
          {/* Empire State Windows Group */}
          <div className="absolute left-[24.5%] bottom-[65%] w-1 h-1.5 bg-yellow-200 rounded-sm animate-twinkle-fast" />
          <div className="absolute left-[25.2%] bottom-[68%] w-1 h-1 bg-yellow-400 rounded-sm animate-twinkle-slow" />
          
          {/* Chrysler Spire Glow */}
          <div className="absolute left-[61.5%] bottom-[65%] w-2 h-2 bg-blue-400/30 rounded-full blur-sm animate-pulse" />
          <div className="absolute left-[62%] bottom-[72%] w-1 h-1 bg-white rounded-full animate-ping" />

          {/* One World Trade Center Spire Glow */}
          <div className="absolute left-[75.5%] bottom-[82%] w-1 h-1 bg-amber-400 rounded-full animate-ping" />
          <div className="absolute left-[75.2%] bottom-[68%] w-1 h-1 bg-blue-400 rounded-sm animate-twinkle-medium" />
          <div className="absolute left-[75.7%] bottom-[62%] w-1 h-1 bg-yellow-300 rounded-sm animate-twinkle-slow" />
          <div className="absolute left-[75.2%] bottom-[55%] w-1.5 h-1 bg-white rounded-sm animate-twinkle-fast" />

          {/* General Windows Midtown */}
          <div className="absolute left-[45%] bottom-[25%] w-1 h-1 bg-amber-400 rounded-sm animate-twinkle-slow" />
          <div className="absolute left-[46%] bottom-[20%] w-1 h-1 bg-yellow-200 rounded-sm animate-twinkle-fast" />
          <div className="absolute left-[45.5%] bottom-[15%] w-1 h-1.5 bg-yellow-400 rounded-sm animate-twinkle-medium" />
          <div className="absolute left-[48%] bottom-[30%] w-1 h-1 bg-white rounded-sm animate-twinkle-slow" />
          <div className="absolute left-[49%] bottom-[22%] w-1 h-1 bg-yellow-400 rounded-sm animate-twinkle-fast" />

          <div className="absolute left-[81%] bottom-[40%] w-1 h-1 bg-yellow-300 rounded-sm animate-twinkle-medium" />
          <div className="absolute left-[82.2%] bottom-[35%] w-1 h-1 bg-amber-500 rounded-sm animate-twinkle-slow" />
          <div className="absolute left-[81.5%] bottom-[28%] w-1.5 h-1 bg-yellow-200 rounded-sm animate-twinkle-fast" />
        </div>
      </motion.div>

      {/* FOREGROUND GRADIENT & CITY GLOW */}
      <div className="absolute bottom-0 inset-x-0 h-[25vh] bg-gradient-to-t from-[#020408] via-black/45 to-transparent pointer-events-none z-2" />

      {/* CENTRALIZED HERO STORY CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[12vh] flex-grow flex flex-col justify-center items-center text-center">
        <motion.div
          id="hero-content"
          style={{
            y: titleY,
            opacity: titleOpacity,
            x: mousePosition.x * 0.2,
          }}
          className="max-w-4xl"
        >
          {/* Upper Label badge with gold dividers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-[#D4AF37]/50" />
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold font-display">
              Exclusive Showcase
            </span>
            <div className="h-[1px] w-12 bg-[#D4AF37]/50" />
          </motion.div>

          {/* Main Display Headline (Cinematic Theme) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 text-white uppercase"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">ICONIC</span> <br />
            TEN
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-light italic"
          >
            An immersive cinematic journey through the architectural marvels and cultural beating heart of the world's most legendary metropolis.
          </motion.p>

          {/* Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 px-4"
          >
            {/* Start Exploring Button */}
            <button
              id="btn-start-exploring"
              onClick={onStartExploring}
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.1)] cursor-pointer"
            >
              Begin Journey
            </button>

            {/* View Landmarks Button */}
            <button
              id="btn-view-landmarks"
              onClick={onViewLandmarks}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                View Map Tour
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* LOWER FOOTER ELEMENT with scroll signal */}
      <div className="relative z-10 w-full flex flex-col items-center pb-8">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={onStartExploring}
          className="flex flex-col items-center space-y-1 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">
            Scroll to begin helicopter tour
          </span>
          <ChevronDown className="w-5 h-5 text-gold-400" />
        </motion.div>
      </div>
    </section>
  );
}
