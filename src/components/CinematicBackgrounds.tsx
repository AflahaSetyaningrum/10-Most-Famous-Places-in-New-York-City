import { motion } from "motion/react";

// ==========================================
// 1. CENTRAL PARK BACKGROUND (Chapter 03)
// ==========================================
export function CentralParkBackground() {
  // Leaf parameters (gold, orange, crimson, forest yellow)
  const leaves = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    size: 10 + (i % 3) * 6, // 10px to 22px
    color: i % 4 === 0 ? "rgba(212, 175, 55, 0.35)" : i % 4 === 1 ? "rgba(217, 119, 6, 0.35)" : i % 4 === 2 ? "rgba(185, 28, 28, 0.3)" : "rgba(163, 163, 11, 0.3)",
    left: `${5 + i * 6}%`,
    delay: i * 0.7,
    duration: 10 + (i % 4) * 3, // 10s to 19s
    swayAmp: 30 + (i % 3) * 20,
  }));

  // Birds parameters
  const birds = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    scale: 0.5 + i * 0.15,
    delay: i * 6,
    duration: 18 + i * 4,
    startY: 20 + i * 15, // start Y %
  }));

  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-transparent pointer-events-none">
      {/* Nature / Forest Atmosphere glow */}
      <div className="absolute top-[-10%] left-[15%] w-[65%] h-[60%] bg-emerald-950/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[10%] w-[55%] h-[55%] bg-green-900/15 blur-[115px] rounded-full" />
      <div className="absolute top-[20%] right-[20%] w-[45%] h-[45%] bg-amber-900/10 blur-[120px] rounded-full" />

      {/* Soft Sunlight Rays (Pulsing Diagonal Light Shafts) */}
      <div className="absolute inset-0 mix-blend-screen opacity-35">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute origin-top-left bg-gradient-to-b from-amber-200/10 via-amber-100/3 to-transparent h-[150vh] w-[180px] blur-[30px]"
            style={{
              left: `${-100 + i * 220}px`,
              rotate: "-32deg",
            }}
            animate={{
              opacity: [0.3, 0.75, 0.3],
              skewX: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 8 + i * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Occasional Birds Flying Across the Canopy */}
      {birds.map((bird) => (
        <motion.div
          key={`bird-${bird.id}`}
          className="absolute left-[-5vw] z-5 opacity-40 pointer-events-none"
          style={{ top: `${bird.startY}%` }}
          animate={{
            x: ["-5vw", "110vw"],
            y: [
              `${bird.startY}%`,
              `${bird.startY - 4}%`,
              `${bird.startY + 6}%`,
              `${bird.startY}%`,
            ],
          }}
          transition={{
            duration: bird.duration,
            repeat: Infinity,
            delay: bird.delay,
            ease: "easeInOut",
          }}
        >
          {/* Animated flapping SVG bird */}
          <motion.svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-none stroke-white/45 stroke-[1.5]"
            style={{ scale: bird.scale }}
          >
            <motion.path
              d="M 2 12 Q 12 4, 22 12"
              animate={{
                d: [
                  "M 2 12 Q 12 4, 22 12", // wings high
                  "M 2 8 Q 12 12, 22 8",  // wings middle
                  "M 2 15 Q 12 16, 22 15", // wings low
                  "M 2 12 Q 12 4, 22 12", // wings high
                ],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </motion.div>
      ))}

      {/* Autumn Leaves Gently Falling with Swaying motion */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {leaves.map((leaf) => (
          <motion.div
            key={`leaf-${leaf.id}`}
            className="absolute rounded-tl-full rounded-br-full"
            style={{
              width: leaf.size,
              height: leaf.size * 0.7,
              backgroundColor: leaf.color,
              left: leaf.left,
              top: "-30px",
            }}
            animate={{
              y: ["-5vh", "115vh"],
              x: [
                0,
                leaf.swayAmp,
                -leaf.swayAmp * 0.5,
                leaf.swayAmp * 0.8,
                0,
              ],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Lake Shimmering Reflections at Bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[22vh] bg-gradient-to-t from-[#020408] via-emerald-950/15 to-transparent z-5">
        <div className="absolute bottom-[8%] left-[10%] right-[10%] h-[80%] flex flex-col justify-around opacity-45">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              className="h-[1.5px] bg-emerald-400/25 w-[85%] mx-auto rounded-full blur-[1px]"
              animate={{
                scaleX: [0.9, 1.15, 0.9],
                opacity: [0.15, 0.5, 0.15],
                x: i % 2 === 0 ? [-15, 15, -15] : [15, -15, 15],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. EMPIRE STATE BACKGROUND (Chapter 04)
// ==========================================
export function EmpireStateBackground() {
  // Drifting clouds parameters
  const clouds = [
    { id: 1, width: 350, height: 100, top: "8%", duration: 75, delay: 0 },
    { id: 2, width: 450, height: 120, top: "20%", duration: 90, delay: 10 },
    { id: 3, width: 300, height: 80, top: "35%", duration: 60, delay: 25 },
  ];

  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-transparent pointer-events-none">
      {/* Sunset Glow Background Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10091d]/20 via-[#241021]/15 to-[#04020a]/30" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-gradient-to-t from-orange-500/10 via-pink-600/5 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-indigo-950/25 blur-[100px] rounded-full" />

      {/* High-Altitude Drifting Clouds at Sunset */}
      {clouds.map((cloud) => (
        <motion.div
          key={`cloud-${cloud.id}`}
          className="absolute bg-white/[0.02] rounded-full blur-[45px] pointer-events-none"
          style={{
            width: cloud.width,
            height: cloud.height,
            top: cloud.top,
            left: "-500px",
          }}
          animate={{
            left: ["-500px", "110%"],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Skyline Twinkling Window Grid */}
      <div className="absolute inset-0 opacity-40 z-2">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`window-${i}`}
            className="absolute w-[2px] h-[2px] bg-amber-200"
            style={{
              left: `${8 + (i * 17) % 84}%`,
              top: `${42 + (i * 11) % 45}%`,
            }}
            animate={{
              opacity: [0.15, 0.9, 0.15],
            }}
            transition={{
              duration: 1.2 + (i % 6) * 0.4,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Cinematic Spire Rotating Searchlight Beacon */}
      <div className="absolute top-[22%] left-[50%] -translate-x-1/2 w-0 h-0 z-3">
        {/* Spotlight Cone Left */}
        <motion.div
          className="absolute top-0 left-0 origin-top bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/3 to-transparent h-[160vh] w-[400px] blur-sm"
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            rotate: [-40, 25, -40],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Spotlight Cone Right */}
        <motion.div
          className="absolute top-0 left-0 origin-top bg-gradient-to-l from-[#D4AF37]/15 via-[#D4AF37]/3 to-transparent h-[160vh] w-[400px] blur-sm"
          style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 0%)" }}
          animate={{
            rotate: [20, -45, 20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        {/* Intense core flashing beacon */}
        <motion.div
          className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-[#D4AF37] blur-md shadow-[0_0_20px_#D4AF37]"
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Atmospheric Haze/Fog at base of Skyline */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-[28vh] bg-[#020408]/40 blur-md pointer-events-none z-10"
        animate={{
          opacity: [0.7, 0.85, 0.7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// ==========================================
// 3. BROOKLYN BRIDGE BACKGROUND (Chapter 05)
// ==========================================
export function BrooklynBridgeBackground() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-transparent pointer-events-none">
      {/* Warm Golden Gate/East River Sunset atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0a16]/15 via-[#211119]/15 to-[#030307]/30" />
      <div className="absolute bottom-[20%] left-[20%] w-[60%] h-[50%] bg-amber-500/8 blur-[130px] rounded-full" />
      <div className="absolute top-[10%] right-[-10%] w-[45%] h-[45%] bg-[#12071f]/30 blur-[110px] rounded-full" />

      {/* High-Fidelity Responsive SVG Brooklyn Bridge Wire Cables & Towers in Perspective */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.16] z-1 stroke-white"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Draw a subtle silhouette bridge deck */}
        <path d="M 0 750 Q 500 700, 1000 750 L 1000 800 L 0 800 Z" fill="#000" />
        {/* Left tower Gothic column arches outline */}
        <path d="M 220 300 L 250 300 L 270 730 L 200 730 Z M 230 380 Q 235 340, 240 380 Z" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {/* Right tower Gothic column arches outline */}
        <path d="M 750 300 L 780 300 L 800 730 L 730 730 Z M 760 380 Q 765 340, 770 380 Z" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* Main Suspension Cables */}
        <path d="M 0 350 Q 235 300, 485 710" fill="none" strokeWidth="1.5" />
        <path d="M 515 710 Q 765 300, 1000 350" fill="none" strokeWidth="1.5" />
        <path d="M 235 300 Q 500 480, 765 300" fill="none" strokeWidth="1.8" />

        {/* Diagonal Cable Stay Webs */}
        {Array.from({ length: 12 }).map((_, j) => {
          const ratio = (j + 1) / 13;
          // Radiating stays from left tower (x: 235, y: 300)
          return (
            <g key={`stays-${j}`}>
              <line x1="235" y1="300" x2={235 * ratio} y2={300 + (420 * ratio)} strokeWidth="0.4" stroke="rgba(255,255,255,0.25)" />
              <line x1="235" y1="300" x2={235 + (265 * ratio)} y2={300 + (410 * ratio)} strokeWidth="0.4" stroke="rgba(255,255,255,0.25)" />
              {/* Radiating stays from right tower (x: 765, y: 300) */}
              <line x1="765" y1="300" x2={765 + (235 * ratio)} y2={300 + (420 * ratio)} strokeWidth="0.4" stroke="rgba(255,255,255,0.25)" />
              <line x1="765" y1="300" x2={765 - (265 * ratio)} y2={300 + (410 * ratio)} strokeWidth="0.4" stroke="rgba(255,255,255,0.25)" />
            </g>
          );
        })}
      </svg>

      {/* Moving Traffic Headlights & Taillights flowing across the Bridge */}
      <div className="absolute bottom-[22%] inset-x-0 h-[20px] z-3 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 h-[1.5px] bg-red-500/10 blur-[1px] top-1" />
        <div className="absolute inset-x-0 h-[1.5px] bg-amber-500/10 blur-[1px] bottom-1" />
        
        {/* Golden Headlights drifting left-to-right (Eastbound traffic) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`headlight-${i}`}
            className="absolute h-[1.5px] w-24 bg-gradient-to-r from-transparent via-amber-200 to-transparent"
            style={{ top: "3px" }}
            animate={{ left: ["-150px", "110%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.8,
            }}
          />
        ))}

        {/* Crimson Taillights drifting right-to-left (Westbound traffic) */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`taillight-${i}`}
            className="absolute h-[1.5px] w-32 bg-gradient-to-l from-transparent via-red-500 to-transparent"
            style={{ bottom: "3px" }}
            animate={{ right: ["-150px", "110%"] }}
            transition={{
              duration: 9 + i * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2.1,
            }}
          />
        ))}
      </div>

      {/* Water ripple shimmers in East River */}
      <div className="absolute bottom-0 inset-x-0 h-[20vh] bg-gradient-to-t from-[#020408] via-[#030307]/80 to-transparent z-4">
        <div className="absolute bottom-[5%] left-[5%] right-[5%] h-[80%] flex flex-col justify-around opacity-30">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`river-${i}`}
              className="h-[1px] bg-slate-400/20 w-[90%] mx-auto rounded-full"
              animate={{
                scaleX: [0.95, 1.1, 0.95],
                opacity: [0.2, 0.6, 0.2],
                x: i % 2 === 0 ? [-10, 10, -10] : [10, -10, 10],
              }}
              transition={{
                duration: 6 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Atmospheric Fog/Mist drifting over River & Deck */}
      <div className="absolute inset-x-0 bottom-0 h-[25vh] z-5 pointer-events-none">
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={`fog-${i}`}
            className="absolute bg-slate-500/[0.03] blur-[45px] rounded-full"
            style={{
              width: "120%",
              height: "120px",
              bottom: `${i * 3}%`,
              left: "-10%",
            }}
            animate={{
              x: i % 2 === 0 ? ["-5%", "5%"] : ["5%", "-5%"],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 12 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. ONE WORLD TRADE CENTER BACKGROUND (Ch. 09)
// ==========================================
export function OneWorldTradeBackground() {
  // Rising sparkle dots parameter
  const sparkles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: `${10 + i * 5}%`,
    size: 2 + (i % 2), // 2px or 3px
    delay: i * 0.4,
    duration: 8 + (i % 3) * 2,
    color: i % 2 === 0 ? "rgba(96, 165, 250, 0.4)" : "rgba(255, 255, 255, 0.45)",
  }));

  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-transparent pointer-events-none">
      {/* Morning Skylight Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060a16]/15 via-[#0d1424]/10 to-[#020306]/35" />
      <div className="absolute top-[10%] left-[25%] w-[55%] h-[55%] bg-blue-500/10 blur-[130px] rounded-full" />
      <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] bg-sky-900/10 blur-[110px] rounded-full" />

      {/* Sleek, Modern Geometric Faceted Silhouette outlines of 1 WTC */}
      <svg
        className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[600px] h-[90vh] opacity-15 stroke-sky-400/30 z-1 fill-none"
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
      >
        {/* Draw the tower's famous faceted structure (triangles converging) */}
        {/* Footprint / Base */}
        <polygon points="120,800 280,800 240,680 160,680" fill="rgba(15,23,42,0.6)" stroke="rgba(96,165,250,0.15)" strokeWidth="1" />
        {/* Lower Spindle */}
        <polygon points="160,680 240,680 260,400 140,400" fill="rgba(15,23,42,0.4)" />
        {/* Upper Facets converging to Spire */}
        <polygon points="140,400 260,400 200,80" fill="rgba(15,23,42,0.3)" />
        {/* Spire Pin */}
        <line x1="200" y1="80" x2="200" y2="0" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
        
        {/* Facet lines */}
        <line x1="120" y1="800" x2="200" y2="80" strokeWidth="0.8" />
        <line x1="280" y1="800" x2="200" y2="80" strokeWidth="0.8" />
        <line x1="160" y1="680" x2="200" y2="80" strokeWidth="0.8" />
        <line x1="240" y1="680" x2="200" y2="80" strokeWidth="0.8" />
        <line x1="140" y1="400" x2="200" y2="80" strokeWidth="0.8" />
        <line x1="260" y1="400" x2="200" y2="80" strokeWidth="0.8" />
      </svg>

      {/* Crispy morning light shafts casting across the glass tower (Crepuscular Rays) */}
      <div className="absolute inset-0 mix-blend-screen opacity-25 z-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`morning-ray-${i}`}
            className="absolute origin-top-left bg-gradient-to-b from-sky-200/15 via-blue-200/4 to-transparent h-[150vh] w-[220px] blur-[25px]"
            style={{
              left: `${-50 + i * 250}px`,
              rotate: "-24deg",
            }}
            animate={{
              opacity: [0.35, 0.8, 0.35],
              skewX: [-1, 1, -1],
            }}
            transition={{
              duration: 7 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Reflection Pool Shimmer (Dark mirror ripple layout) at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[24vh] bg-gradient-to-t from-[#020408] via-[#020306]/90 to-transparent z-4">
        <div className="absolute bottom-[10%] left-[8%] right-[8%] h-[60%] flex flex-col justify-around opacity-30">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`ripple-pool-${i}`}
              className="h-[1px] bg-sky-300/20 w-[90%] mx-auto rounded-full blur-[1px]"
              animate={{
                scaleX: [0.92, 1.08, 0.92],
                opacity: [0.2, 0.55, 0.2],
              }}
              transition={{
                duration: 4.5 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Ascending Sparkles of Resilience & Hope */}
      <div className="absolute inset-0 z-3 pointer-events-none">
        {sparkles.map((spark) => (
          <motion.div
            key={`sparkle-${spark.id}`}
            className="absolute rounded-full"
            style={{
              width: spark.size,
              height: spark.size,
              backgroundColor: spark.color,
              left: spark.left,
              bottom: "4%",
            }}
            animate={{
              y: [0, -450],
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: spark.duration,
              repeat: Infinity,
              delay: spark.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
