"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  github: string;
  live: string;
  color: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Early Parkinson’s Disease Detection",
    summary: "AI-based system for early detection of Parkinson’s using gait and voice signals.",
    description: "Developed a machine learning system that analyzes gait and voice data to detect early signs of Parkinson’s disease. Includes preprocessing, feature extraction, and classification pipeline for improved diagnostic accuracy.",
    highlights: [
      "Multimodal data processing (gait + voice)",
      "Feature engineering for neurological patterns",
      "High-accuracy classification model",
      "End-to-end ML pipeline",
    ],
    techStack: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "http://github.com/VZNRAGE2210/parkinson_project-main",
    live: "#",
    color: "#ec4899", // Pink
    image: "/parkinson.jpg",
  },
  {
    id: 2,
    title: "Nexus Analytics — AI Sales Platform",
    summary: "AI-driven sales analytics platform with dashboards, churn prediction, and forecasting.",
    description: "Built a full-stack analytics platform that transforms raw sales data into actionable insights using machine learning, RFM segmentation, and ARIMA-based forecasting.",
    highlights: [
      "Churn prediction for customer retention",
      "RFM segmentation for marketing insights",
      "Time-series forecasting using ARIMA",
      "Interactive dashboards with Plotly",
    ],
    techStack: ["Python", "Flask", "SQLAlchemy", "Scikit-learn", "Pandas", "Plotly", "ARIMA"],
    github: "https://github.com/VZNRAGE2210/Major_project",
    live: "#",
    color: "#a855f7", // Purple
    image: "/nexus.jpg",
  },
  {
    id: 3,
    title: "Personalized Learning Assistant",
    summary: "AI chatbot for personalized learning and academic assistance.",
    description: "Designed an AI-powered chatbot that assists K-12 students with academic queries using NLP, enabling personalized and interactive learning experiences.",
    highlights: [
      "Conversational AI for education",
      "Personalized responses using NLP",
      "Scalable architecture for multi-subject support",
      "Interactive learning experience",
    ],
    techStack: ["Python", "NLP", "Machine Learning", "Streamlit"],
    github: "https://github.com/VZNRAGE2210/jules-ai-learning-assistant--1-",
    live: "#",
    color: "#06b6d4", // Cyan
    image: "/student-chatbot.jpg",
  },
  {
    id: 4,
    title: "SQLPod — NL to SQL Chatbot",
    summary: "LLM-powered chatbot that converts natural language into SQL queries.",
    description: "Developed an AI chatbot that translates user queries into SQL statements using LLMs, enabling real-time database interaction and simplifying SQL learning.",
    highlights: [
      "Natural language to SQL conversion",
      "LLM-based query generation",
      "Real-time database interaction",
      "Educational-focused UI",
    ],
    techStack: ["LLaMA 2", "Python", "SQL", "Streamlit", "NLP"],
    github: "https://github.com/VZNRAGE2210/SQLpod",
    live: "#",
    color: "#f59e0b", // Amber
    image: "/sqlpod.jpg",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={sectionRef} className="section relative z-10 py-16 md:py-32">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 flex flex-col gap-16 md:gap-32">
        
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative w-full"
            >
              {/* Grid layout: image and text card share the same row height */}
              <div
                className={`flex flex-col md:flex-row ${
                  !isEven ? "md:flex-row-reverse" : ""
                } items-stretch`}
              >
                {/* Image Block — no fixed aspect ratio, stretches to match text card height */}
                <div className="w-full md:w-[60%] shrink-0 aspect-[16/9] md:aspect-auto md:min-h-[400px] bg-[#0a061a] rounded-xl md:rounded-[1.5rem] border border-white/5 relative overflow-hidden group">
                  
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover object-[center_top] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                      />
                      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(5,5,17,0.9)] md:shadow-[inset_0_0_80px_rgba(5,5,17,0.95)] pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 h-[40%] md:h-[60%] bg-gradient-to-t from-[#050511] via-[#050511]/40 to-transparent z-10 pointer-events-none" />
                      {/* Inner glowing border */}
                      <div className="absolute inset-0 border border-white/10 m-2 md:m-3 rounded-lg md:rounded-[1rem] pointer-events-none" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-screen" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050511] to-transparent z-10" />
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed border-white/10 m-4 md:m-6 rounded-xl md:rounded-2xl z-0">
                        <p className="text-white/20 font-mono text-xs tracking-widest uppercase">Visualizing Interface</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Text Card — clean stack on mobile, overlapping on desktop */}
                <div
                  className={`w-full md:w-[46%] z-20 mt-4 md:mt-0 ${
                    isEven ? "md:ml-[-6%]" : "md:mr-[-6%]"
                  } flex`}
                >
                  <div className="w-full p-5 sm:p-6 md:p-8 rounded-xl md:rounded-[1.5rem] bg-[#0d0b1a] md:bg-[#0d0b1a]/80 backdrop-blur-none md:backdrop-blur-2xl border border-white/[0.08] md:border-white/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.4)] md:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-transform duration-300 md:hover:scale-[1.01] flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60 mb-1.5 md:mb-2 text-white">
                      FEATURED PROJECT
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white/90 leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="mb-3">
                      <p className="text-white/70 font-medium text-[13px] sm:text-sm mb-1">
                        {project.summary}
                      </p>
                      <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#9ca3af]/80 font-light">
                        {project.description}
                      </p>
                    </div>

                    <ul className="mb-4 space-y-1.5">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-[12px] sm:text-[13px] text-[#9ca3af]">
                          <svg className="w-3.5 h-3.5 mr-2 mt-0.5 opacity-50 shrink-0 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack & Actions */}
                    <div className="flex flex-col gap-3 mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map(tech => (
                          <span key={tech} className="text-[10px] font-medium tracking-wide text-white/40 border border-white/5 bg-white/5 px-2 py-0.5 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white active:text-white transition-colors p-2.5 md:p-1.5 bg-white/5 rounded-full border border-white/5">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Background Blob — hidden on mobile for performance */}
              <div 
                className={`hidden md:block absolute w-80 h-80 rounded-full blur-[120px] pointer-events-none z-[-1] top-1/2 -translate-y-1/2 ${
                  isEven ? "left-[45%]" : "right-[45%]"
                }`}
                style={{ background: `${project.color}30` }} 
              />

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
