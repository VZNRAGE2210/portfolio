"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto flex flex-col items-center w-full">
        
        {/* Profile Image Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="relative w-40 h-40 md:w-52 md:h-52 mb-8 mt-4 rounded-full p-1 mx-auto"
          style={{ background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }}
        >
          {/* Glowing aura behind image */}
          <div className="absolute inset-0 rounded-full blur-2xl z-[-1] opacity-60" style={{ background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }} />
          
          <div className="w-full h-full rounded-full overflow-hidden bg-[#050511] border-4 border-[#0a061a] shadow-inner relative">
            <img 
              src="/profile.jpg" 
              alt="Achintya Kumar"
              className="absolute inset-0 w-full h-full object-cover object-[center_top] scale-[1.12]"
            />
          </div>

          {/* Floating 'Hello' Annotation */}
          <div className="absolute top-8 -right-40 flex flex-col items-start pointer-events-none opacity-90 hidden lg:flex">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-12 top-4 w-12 text-white/30">
              <path d="M90 20 Q 30 10, 10 80" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
              <path d="M10 80 L 15 65 M10 80 L 25 85" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="text-sm font-light mt-0 text-white/80 tracking-wide bg-[#0a061a]/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg">
              Hello! I Am <span style={{ color: "var(--accent-secondary)" }} className="font-medium">Achintya Kumar</span>
            </span>
          </div>
        </motion.div>

        {/* Main Typographic Hook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-14"
        >
          <p className="text-sm md:text-base mb-3 font-medium tracking-widest text-white/50 uppercase">
            Aspiring AI / ML Engineer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 leading-[1.1]" style={{ fontFamily: "var(--font-heading)" }}>
            Building intelligent systems<br className="hidden md:block" />
            from the <span className="relative inline-block z-10">
              ground up.
              {/* SVG Oval highlight */}
              <svg className="absolute -inset-2 w-[110%] h-[130%] pointer-events-none z-[-1]" viewBox="0 0 200 60" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="100" cy="30" rx="95" ry="25" stroke="var(--accent-primary)" strokeWidth="2" strokeDasharray="4 4" className="opacity-70" />
              </svg>
            </span>
          </h1>
          <p className="text-sm md:text-base italic opacity-60 mt-4 font-light">
            Focused on learning, experimenting, and applying AI to real-world problems.
          </p>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-xl md:text-2xl font-light mb-4 flex items-center gap-1 italic text-white/80">
            Learning today. Building tomorrow<span className="text-[var(--accent-primary)] animate-pulse">.</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/60 mb-10 text-center">
            Currently exploring deep learning, computer vision, and natural language processing through hands-on projects and real-world applications.
            <br className="hidden md:block" />
            I aim to bridge the gap between theory and practical AI systems by continuously building and improving.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#projects"
              data-cursor="pointer"
              className="px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.05] text-white"
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                boxShadow: "var(--neon-glow)",
              }}
            >
              View Work
            </a>
            <a
              href="#contact"
              data-cursor="pointer"
              className="px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.05] bg-white/5 hover:bg-white/10 border border-white/10"
              style={{ color: "var(--foreground)" }}
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
