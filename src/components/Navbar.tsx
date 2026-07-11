import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Compass, MapPin, BarChart3, HelpCircle } from "lucide-react";
import { Landmark } from "../types";

interface NavbarProps {
  landmarks: Landmark[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ landmarks, activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Monitor scroll height to trigger glassmorphic blur and opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Format short name for navbar display
  const getNavbarShortName = (name: string) => {
    if (name === "One World Trade Center") return "One World WTC";
    if (name === "Grand Central Terminal") return "Grand Central";
    return name;
  };

  const menuItems = [
    { id: "home", label: "Home", icon: Compass },
    { id: "nyc-map", label: "NYC Map", icon: MapPin },
    { id: "amazing-facts", label: "Amazing Facts", icon: BarChart3 }
  ];

  return (
    <>
      {/* GLOBAL SCROLL PROGRESS INDICATOR */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/10 z-[100] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 shadow-[0_0_8px_rgba(212,181,26,0.6)]"
          style={{
            scaleX: "var(--scroll-progress, 0)",
            transformOrigin: "0%"
          }}
        />
      </div>

      {/* FLOATING HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 h-24 border-b border-white/5 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-black/45 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "backdrop-blur-sm bg-black/20"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand Brandmark */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center space-x-3 group cursor-pointer text-left bg-transparent border-none p-0"
          >
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm group-hover:scale-105 transition-transform duration-300">
              <div className="w-4 h-4 border-2 border-black rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black tracking-[0.25em] text-sm text-white group-hover:text-[#D4AF37] transition-colors duration-300 uppercase leading-none">
                NYC / LUXE
              </span>
              <span className="font-mono text-[8px] text-white/40 tracking-widest mt-1">
                HELI-TOUR EXPERIENCE
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden lg:flex items-center space-x-8 text-[10px] uppercase tracking-widest font-semibold">
            {/* Core Pages */}
            <button
              onClick={() => onNavigate("home")}
              className={`pb-1 transition-all duration-300 cursor-pointer ${
                activeSection === "home"
                  ? "text-white border-b border-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Explore
            </button>

            {/* Premium Landmarks Hover Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`pb-1 flex items-center space-x-1.5 transition-all duration-300 cursor-pointer ${
                  landmarks.some((l) => l.id === activeSection)
                    ? "text-white border-b border-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span>Landmarks</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Advanced Mega Dropdown Container */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[450px] rounded-2xl bg-[#020408]/95 backdrop-blur-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 grid grid-cols-2 gap-1 z-50 animate-fade-in"
                  >
                    {landmarks.map((landmark, index) => {
                      const isLActive = activeSection === landmark.id;
                      return (
                        <button
                          key={landmark.id}
                          onClick={() => {
                            onNavigate(landmark.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`flex items-center space-x-3 p-2.5 rounded-xl transition-all duration-200 cursor-pointer text-left ${
                            isLActive
                              ? "bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                              : "hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span className="font-mono text-[10px] font-bold text-[#D4AF37] opacity-60">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="flex flex-col">
                            <span className="font-display font-semibold text-xs text-white leading-snug group-hover:text-[#D4AF37]">
                              {getNavbarShortName(landmark.name)}
                            </span>
                            <span className="font-mono text-[8px] text-white/40 tracking-wider">
                              {landmark.constructionYear}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Map & Facts Links */}
            <button
              onClick={() => onNavigate("nyc-map")}
              className={`pb-1 transition-all duration-300 cursor-pointer ${
                activeSection === "nyc-map"
                  ? "text-white border-b border-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              The Map
            </button>

            <button
              onClick={() => onNavigate("amazing-facts")}
              className={`pb-1 transition-all duration-300 cursor-pointer ${
                activeSection === "amazing-facts"
                  ? "text-white border-b border-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Stories
            </button>
          </nav>

          {/* RIGHT ACTION COMPONENT (CTA Quick Info or Audio Trigger) */}
          <div className="hidden lg:flex items-center space-x-6">
            <span className="font-mono text-[10px] tracking-wider text-[#D4AF37] bg-white/5 border border-white/5 px-3 py-1 rounded-full uppercase">
              Chpt. {landmarks.findIndex((l) => l.id === activeSection) !== -1 ? String(landmarks.findIndex((l) => l.id === activeSection) + 1).padStart(2, "0") : "00"}
            </span>
            <button
              onClick={() => onNavigate("nyc-map")}
              className="px-5 py-2 bg-white text-black text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-zinc-200 transition-all duration-300 cursor-pointer"
            >
              Plan Visit
            </button>
          </div>

          {/* MOBILE TOGGLE HAMBURGER */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-white cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* FULLSCREEN MOBILE SLIDEOUT OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#020617] z-30 flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

            <div className="overflow-y-auto max-h-[70vh] space-y-8 pr-2">
              {/* Main Navigation Sections */}
              <div>
                <span className="block font-mono text-[9px] text-gray-500 tracking-widest uppercase mb-4">
                  Navigation
                </span>
                <div className="flex flex-col space-y-3">
                  {menuItems.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center space-x-3 py-2 text-left bg-transparent border-none ${
                          activeSection === item.id ? "text-gold-400" : "text-gray-400"
                        }`}
                      >
                        <IconComp className="w-4 h-4 text-gold-500" />
                        <span className="font-display font-bold text-lg tracking-wider uppercase">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Landmark Chapters Section */}
              <div>
                <span className="block font-mono text-[9px] text-gray-500 tracking-widest uppercase mb-4">
                  The Ten Chapters
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {landmarks.map((landmark, index) => {
                    const isLActive = activeSection === landmark.id;
                    return (
                      <button
                        key={landmark.id}
                        onClick={() => {
                          onNavigate(landmark.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 text-left cursor-pointer ${
                          isLActive ? "bg-gold-500/10 border border-gold-500/30" : "bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-gold-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-display font-semibold text-xs text-white leading-tight">
                            {landmark.name}
                          </span>
                          <span className="font-mono text-[8px] text-gray-500">
                            {landmark.locationName}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="border-t border-white/5 pt-4 text-center">
              <span className="font-mono text-[9px] text-gray-600 tracking-wider">
                © 2026 NYC HELICOPTER INTERACTIVE • DEEPMIND STUDIOS
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
