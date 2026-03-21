"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TECH_HIERARCHY = [
  // Inner Orbit (Core)
  { name: "Python", level: 1 },
  { name: "PyTorch", level: 1 },
  { name: "TensorFlow", level: 1 },
  
  // Secondary Orbit (Frameworks & Libraries)
  { name: "FastAPI", level: 2 },
  { name: "Streamlit", level: 2 },
  { name: "OpenCV", level: 2 },
  { name: "Scikit-learn", level: 2 },
  { name: "Transformers", level: 2 },
  { name: "Pandas", level: 2 },
  
  // Outer Orbit (DB & Viz & Domain)
  { name: "SQL", level: 3 },
  { name: "Plotly", level: 3 },
  { name: "Matplotlib", level: 3 },
  { name: "NLP", level: 3 },
  { name: "LLMs", level: 3 },
  { name: "NumPy", level: 3 },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter groups
  const level1 = TECH_HIERARCHY.filter(t => t.level === 1);
  const level2 = TECH_HIERARCHY.filter(t => t.level === 2);
  const level3 = TECH_HIERARCHY.filter(t => t.level === 3);

  const getCoordinates = (index: number, total: number, level: number) => {
    const angleOffset = level === 2 ? Math.PI / total : 0; // Rotate level 2 slightly for visual balance
    const angle = (index / total) * Math.PI * 2 + angleOffset;
    
    // Radii for mobile vs desktop
    const radius = isMobile 
      ? (level === 1 ? 60 : level === 2 ? 105 : 150)
      : (level === 1 ? 120 : level === 2 ? 220 : 320);

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section relative z-10 py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-2xl"
        >
          <p className="text-sm tracking-[0.3em] font-bold uppercase mb-4" style={{ color: "var(--accent-secondary)" }}>
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white/90 tracking-tight leading-tight">
            Building intelligent systems <br className="hidden md:block"/>
            <span style={{ color: "var(--accent-primary)" }}>that solve complex problems</span>
          </h2>
        </motion.div>

        {/* The Constellation Hub */}
        <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center mt-4">
          
          {/* Central Glow & Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute z-20 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/20 bg-[#050511] shadow-[0_0_60px_rgba(168,85,247,0.4)]"
          >
            <span className="text-4xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-[var(--accent-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              AI
            </span>
            {/* Inner extreme glow */}
            <div className="absolute inset-0 rounded-full bg-[var(--accent-primary)]/20 blur-xl pointer-events-none" />
          </motion.div>

          {/* Decorative Orbital Rings - Visible only when mounted to prevent hydration flash */}
          {mounted && (
            <>
              {/* Inner Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5 }}
                className="absolute z-0 border border-[var(--accent-secondary)]/10 rounded-full pointer-events-none"
                style={{ width: isMobile ? 120 : 240, height: isMobile ? 120 : 240 }}
              />
              {/* Middle Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute z-0 border border-[var(--accent-primary)]/10 rounded-full pointer-events-none"
                style={{ width: isMobile ? 210 : 440, height: isMobile ? 210 : 440 }}
              />
              {/* Outer Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="absolute z-0 border border-[var(--accent-tertiary)]/10 rounded-full pointer-events-none"
                style={{ width: isMobile ? 300 : 640, height: isMobile ? 300 : 640 }}
              />
            </>
          )}

          {/* Render Skills - Delay render until mounted to compute x/y properly */}
          {mounted && [level1, level2, level3].map((group, levelIndex) => (
             group.map((tech, idx) => {
              const { x, y } = getCoordinates(idx, group.length, levelIndex + 1);

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={isInView ? { opacity: 1, x, y } : {}}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.4 + (levelIndex * 0.2) + (idx * 0.05), 
                    type: "spring", 
                    stiffness: 40,
                    damping: 12
                  }}
                  className="absolute z-30"
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-[#0a061a]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:border-[var(--accent-secondary)] hover:bg-[#0a061a] hover:shadow-[0_0_20px_var(--accent-secondary)] hover:shadow-opacity-20 transition-all cursor-default"
                  >
                    <span className="text-[10px] md:text-sm font-semibold tracking-wide text-white/90 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })
          ))}

        </div>
      </div>
    </section>
  );
}
