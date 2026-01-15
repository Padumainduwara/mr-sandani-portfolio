"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// 1. Number Counter Animation
export const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// 2. Staggered Text Reveal Wrapper
export const StaggerContainer = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

// 3. Fade Up Item
export const FadeUpItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 4. Section Heading
export const SectionHeading = ({ title, subtitle, align = "left" }: { title: string; subtitle: string; align?: "left" | "center" }) => (
  <div className={`mb-12 md:mb-20 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}>
    <motion.div 
      initial={{ opacity: 0, x: align === "center" ? 0 : -20 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 text-amber-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-3 md:mb-4 ${align === "center" ? "justify-center" : ""}`}
    >
      <span className="w-6 md:w-8 h-[2px] bg-amber-600"></span>
      {subtitle}
      {align === "center" && <span className="w-6 md:w-8 h-[2px] bg-amber-600"></span>}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);