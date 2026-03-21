"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "Built End-to-End AI Projects",
    subtitle: "Designed and deployed multiple real-world AI/ML systems including healthcare, NLP, and analytics solutions.",
    icon: "🧠",
    color: "var(--accent-primary)",
  },
  {
    id: 2,
    title: "Specialized in Machine Learning & NLP",
    subtitle: "Hands-on experience with deep learning, computer vision, and natural language processing systems.",
    icon: "⚙️",
    color: "var(--accent-secondary)",
  },
  {
    id: 3,
    title: "Developed Full-Stack AI Applications",
    subtitle: "Integrated ML models with frontend and backend systems using Flask, Streamlit, and APIs.",
    icon: "🚀",
    color: "var(--accent-tertiary)",
  },
  {
    id: 4,
    title: "Strong Foundation in Data Science",
    subtitle: "Experienced in data preprocessing, feature engineering, model training, and evaluation.",
    icon: "📊",
    color: "var(--accent-primary)",
  },
  {
    id: 5,
    title: "Use Generative AI for Software Dev",
    subtitle: "IBM SkillsBuild - 2025",
    icon: "🏅",
    color: "var(--accent-secondary)",
  },
  {
    id: 6,
    title: "Introduction to Generative AI",
    subtitle: "Intel AI Global Impact Festival",
    icon: "🌐",
    color: "var(--accent-tertiary)",
  },
  {
    id: 7,
    title: "Explore AI with Microsoft Copilot",
    subtitle: "Microsoft Learn Student Ambassadors",
    icon: "💡",
    color: "var(--accent-primary)",
  },
  {
    id: 8,
    title: "Python for Data Analysis",
    subtitle: "Coursera Certified",
    icon: "📜",
    color: "var(--accent-secondary)",
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={sectionRef} className="section relative z-10 py-24">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p className="text-xs tracking-[0.3em] font-bold uppercase mb-3" style={{ color: "var(--accent-secondary)" }}>
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white/90 tracking-tight flex flex-col sm:flex-row flex-wrap gap-x-3 items-center md:items-start">
            <span>Achievements &</span> <span style={{ color: "var(--accent-tertiary)" }}>Certifications.</span>
          </h2>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />

          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-[#0a061a]/60 border border-white/5 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-white/10 hover:shadow-[0_8px_32px_rgba(255,255,255,0.03)] hover:bg-[#0a061a]/80 transition-all duration-300 flex flex-col group cursor-default h-full"
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner"
              >
                {item.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white/95 mb-3 leading-snug">
                {item.title}
              </h3>
              
              <p className="text-[13px] md:text-sm font-light leading-relaxed opacity-90 mt-auto" style={{ color: item.color }}>
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
