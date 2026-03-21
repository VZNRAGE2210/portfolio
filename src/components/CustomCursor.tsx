"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 20 });
  const scaleRef = useRef(1);
  const ringScale = useMotionValue(1);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        scaleRef.current = 2;
        ringScale.set(2);
      }
    };

    const handleMouseOut = () => {
      scaleRef.current = 1;
      ringScale.set(1);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, ringScale]);

  return (
    <div className="hidden md:block">
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "var(--accent-secondary)",
          boxShadow: "0 0 10px var(--accent-secondary)",
        }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[10000]"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid rgba(108, 99, 255, 0.5)",
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </div>
  );
}
