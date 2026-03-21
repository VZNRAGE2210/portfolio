"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section relative z-10"
    >
      <div className="max-w-6xl mx-auto w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Title & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-sm tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--accent-secondary)" }}
            >
              About Me
            </p>
            <h2 className="section-title gradient-text">
              Crafting AI
              <br />
              Solutions
            </h2>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "10+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "5+", label: "Certifications" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="subtle-border rounded-2xl p-6 text-center bg-white/[0.02] shadow-[var(--soft-shadow)]"
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Clean text reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-10"
          >
            <div className="subtle-border rounded-3xl p-8 md:p-10 bg-white/[0.02] shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-[#9ca3af]">
                I&apos;m an AI/ML Engineer passionate about building intelligent
                systems that solve real-world problems. My expertise lies in
                bridging the gap between cutting-edge research and scalable
                production applications.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-[#9ca3af] mt-4">
                Specializing in deep learning pipelines, computer vision, and
                natural language processing architectures.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-2.5">
                {[
                  "Python",
                  "PyTorch",
                  "TensorFlow",
                  "OpenCV",
                  "Transformers",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
