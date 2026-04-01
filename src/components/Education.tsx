"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EDUCATION_DATA = [
  {
    id: 1,
    year: "2024 - 2026",
    title: "MCA (Artificial Intelligence & Machine Learning)",
    institution: "Chandigarh University, Chandigarh",
    color: "var(--accent-primary)",
    icon: "🎓",
    points: [
      "Pursuing Master of Computer Applications with specialization in AI & Machine Learning.",
      "Building real-world AI systems including NLP, computer vision, and predictive analytics applications.",
      "Working on scalable ML pipelines, REST APIs, and LLM-based intelligent solutions.",
    ],
  },
  {
    id: 2,
    year: "2021 - 2024",
    title: "BCA (Bachelor of Computer Applications)",
    institution: "Babu Banarasi Das University (Specialization in Data Science & Artificial Intelligence)",
    color: "var(--accent-secondary)",
    icon: "🏫",
    points: [
      "Developed strong foundations in data structures, algorithms, and software engineering principles.",
      "Gained hands-on experience in Python, data analysis, and machine learning fundamentals.",
      "Worked on academic projects involving data preprocessing, model building, and problem-solving.",
    ],
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={sectionRef} className="section relative z-10 py-16 md:py-24">
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 md:px-0">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] font-bold uppercase mb-3" style={{ color: "var(--accent-secondary)" }}>
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white/90 tracking-tight flex flex-wrap items-center gap-2 sm:gap-4">
            Education & <span style={{ color: "var(--accent-primary)" }}>Journey.</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative md:pl-0">
          
          {/* Vertical Line — desktop only */}
          <div className="hidden md:block absolute left-[2.5rem] top-4 bottom-4 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <div className="flex flex-col gap-8 md:gap-12">
            {EDUCATION_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center"
              >
                
                {/* Timeline Node — desktop only */}
                <div 
                  className="hidden md:flex md:static md:w-[5rem] items-center justify-center flex-shrink-0 z-10"
                >
                  <div className="w-12 h-12 rounded-full border-2 bg-[#050511] flex items-center justify-center text-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform hover:scale-110" style={{ borderColor: item.color, boxShadow: `0 0 15px ${item.color}40` }}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full flex-1">
                  <div className="p-5 sm:p-6 md:p-10 rounded-xl md:rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/[0.04] transition-colors duration-300">
                    
                    {/* Mobile: icon + year inline row */}
                    <div className="flex items-center gap-3 mb-2 md:mb-3">
                      <div className="md:hidden w-8 h-8 rounded-full border-2 bg-[#050511] flex items-center justify-center text-sm flex-shrink-0" style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}30` }}>
                        {item.icon}
                      </div>
                      <p className="text-xs sm:text-sm font-bold tracking-widest" style={{ color: item.color }}>
                        {item.year}
                      </p>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 mb-1.5 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/50 mb-4 md:mb-6 font-medium">
                      {item.institution}
                    </p>

                    <ul className="space-y-2 md:space-y-3">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-[#9ca3af] leading-relaxed">
                          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 md:mt-1 flex-shrink-0" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
