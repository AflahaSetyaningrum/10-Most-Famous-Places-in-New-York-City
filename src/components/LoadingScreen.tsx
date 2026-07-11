import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  key?: string;
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const loadingStatuses = [
    "Establishing Manhattan coordinates...",
    "Igniting Liberty Beacon...",
    "Powering Times Square Neon...",
    "Unfolding Central Park foliage...",
    "Elevating Empire State deck...",
    "Spinning Brooklyn Bridge steel...",
    "Raising Rockefeller Christmas Tree...",
    "Polishing Grand Central ceiling...",
    "Gilding Fifth Avenue displays...",
    "Gleaming One World Glass...",
    "Raising Broadway curtains...",
    "New York City is ready."
  ];

  useEffect(() => {
    // Elegant incremental loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        
        // Dynamic increments to feel "organic"
        const nextDiff = Math.floor(Math.random() * 8) + 2;
        const nextVal = Math.min(prev + nextDiff, 100);
        
        // Map progress to status indexes
        const statusIdx = Math.min(
          Math.floor((nextVal / 100) * loadingStatuses.length),
          loadingStatuses.length - 1
        );
        setStatusIndex(statusIdx);
        
        return nextVal;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="loading-container"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020408] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Star Canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-slow" />
        <div className="absolute top-[25%] left-[80%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle-fast" />
        <div className="absolute top-[40%] left-[10%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-medium" />
        <div className="absolute top-[50%] left-[70%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-slow" />
        <div className="absolute top-[75%] left-[30%] w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle-fast" />
        <div className="absolute top-[85%] left-[90%] w-[2px] h-[2px] bg-white rounded-full animate-twinkle-medium" />
      </div>

      <div className="relative w-full max-w-lg px-8 flex flex-col items-center">
        {/* Animated Brand Monogram / Logo */}
        <motion.div
          id="loading-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-[#D4AF37]/30 bg-black/40">
            <span className="font-display font-bold text-2xl text-[#D4AF37] tracking-wider">NYC</span>
            <motion.div
              className="absolute inset-0 rounded-full border border-t-[#D4AF37] border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Skyline Outline Animation */}
        <div className="relative w-full h-24 mb-6 flex items-end justify-center overflow-hidden">
          <svg
            className="w-full h-full text-gray-800"
            viewBox="0 0 500 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outline path of iconic buildings */}
            <motion.path
              d="M 0 100 L 40 100 L 40 65 L 60 65 L 60 100 L 90 100 L 90 80 L 105 80 L 105 100 L 140 100 L 140 40 L 150 40 L 150 25 L 152 25 L 152 5 L 154 25 L 156 25 L 156 40 L 165 40 L 165 100 L 210 100 L 210 70 L 225 70 L 225 100 L 260 100 L 260 55 L 275 55 L 275 100 L 310 100 L 310 20 L 314 20 L 314 0 L 318 20 L 322 20 L 322 100 L 360 100 L 360 60 L 375 60 L 375 100 L 410 100 L 410 45 L 425 45 L 425 100 L 450 100 L 450 75 L 465 75 L 465 100 L 500 100"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.1 }}
              animate={{ pathLength: progress / 100, opacity: 0.3 + (progress / 100) * 0.7 }}
              transition={{ duration: 0.1 }}
            />
            
            {/* Golden glowing dot traveling along the spire heights */}
            {progress > 0 && (
              <motion.circle
                cx={153}
                cy={5}
                r="3"
                className="fill-[#D4AF37] filter drop-shadow-[0_0_8px_rgba(212,175,55,1)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: progress > 35 ? [0, 1, 0] : 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            {progress > 0 && (
              <motion.circle
                cx={316}
                cy={0}
                r="3"
                className="fill-[#D4AF37] filter drop-shadow-[0_0_8px_rgba(212,175,55,1)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: progress > 65 ? [0, 1, 0] : 0 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            )}
          </svg>
        </div>

        {/* Counter Percentage */}
        <div className="flex items-baseline space-x-1 mb-2">
          <motion.span
            id="loading-percentage"
            className="font-mono text-5xl font-extrabold tracking-tight text-[#D4AF37]"
          >
            {progress}
          </motion.span>
          <span className="font-mono text-xl text-gray-500">%</span>
        </div>

        {/* Status text */}
        <div className="h-6 overflow-hidden w-full text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium"
            >
              {loadingStatuses[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress bar outer container */}
        <div className="w-full h-[3px] bg-gray-900 rounded-full mt-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-600 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <span className="text-[10px] font-mono text-gray-600 tracking-wider uppercase mt-8">
          Awwwards nominee candidate • NYC Interactive Tour
        </span>
      </div>
    </motion.div>
  );
}
