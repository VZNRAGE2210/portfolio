"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "cc94d3e6-1a13-491e-893c-46b122e7d703");
    formData.append("subject", "New Portfolio Message");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setSubmitStatus("success");
        setStatusMessage("✅ Message sent successfully!");
        setFormState({ name: "", email: "", message: "" }); // Clean form
      } else {
        setSubmitStatus("error");
        setStatusMessage(result.message || "❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Automatically clear status message after 6 seconds
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }
  };

  const contactCards = [
    { icon: "✉️", text: "achintyafzd@gmail.com", href: "mailto:achintyafzd@gmail.com" },
    { icon: "💼", text: "linkedin.com/in/achintya-kumar", href: "https://www.linkedin.com/in/achintya-kumar-813057306/" },
    { icon: "🐙", text: "github.com/VZNRAGE2210", href: "https://github.com/VZNRAGE2210" },
    { icon: "📍", text: "Chandigarh, India", href: null },
    { icon: "📞", text: "+91 9580077788", href: "tel:+919580077788" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section relative z-10 py-32 mb-16">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-0">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs tracking-[0.3em] font-bold uppercase mb-3 text-[var(--accent-secondary)]">
            Connect
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white/90 tracking-tight flex items-center gap-4">
            Contact <span style={{ color: "var(--accent-secondary)" }}>Me.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/90">
              Let&apos;s build something amazing together
            </h3>
            
            <p className="text-[#9ca3af] leading-relaxed mb-10 text-base">
              I&apos;m currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open!
            </p>

            <div className="flex flex-col gap-4">
              {contactCards.map((card, idx) => {
                if (card.href) {
                  return (
                    <a 
                      key={idx} 
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-[#0a061a] hover:border-[var(--accent-secondary)] transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">{card.icon}</span>
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{card.text}</span>
                    </a>
                  );
                }
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
                  >
                    <span className="text-xl">{card.icon}</span>
                    <span className="text-sm font-medium text-white/70">{card.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Web3Forms Honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold tracking-widest uppercase text-white/60 ml-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold tracking-widest uppercase text-white/60 ml-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="message" className="text-xs font-bold tracking-widest uppercase text-white/60 ml-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Achintya, I'd like to connect regarding..."
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              {/* Status Message Notification */}
              {submitStatus !== "idle" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className={`px-4 py-3 rounded-xl text-sm font-medium border flex items-center justify-center ${
                    submitStatus === 'success' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                  }`}
                >
                  {statusMessage}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="self-start px-10 py-4 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 shadow-[var(--neon-glow)] disabled:hover:scale-100 flex items-center justify-center gap-3 min-w-[180px]"
                style={{ background: "var(--accent-secondary)" }}
              >
                {isSubmitting && (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
