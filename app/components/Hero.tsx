"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { StaggerContainer, FadeUpItem, Counter } from "./ui/Animations";

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(heroScroll, [0, 0.5], [1, 0.8]);

  return (
    <section ref={targetRef} className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 px-4 md:px-6 overflow-hidden">
      {/* Animated Background Decor */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -z-10 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-200/20 rounded-full blur-[80px] md:blur-[100px] opacity-60"
      />
      <motion.div 
         animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute bottom-0 left-0 -z-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/40 rounded-full blur-[80px] md:blur-[100px] opacity-60"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative z-10 text-center lg:text-left">
          <StaggerContainer>
            <FadeUpItem>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-amber-100 shadow-sm text-amber-700 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8 hover:scale-105 transition-transform duration-300 cursor-default">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 fill-amber-500 text-amber-500" /> 
                Accepting New Students for 2026
              </div>
            </FadeUpItem>
            
            <FadeUpItem>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.0] text-slate-900 mb-6 md:mb-8 tracking-tight">
                Mastering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900">ICT</span> <br/>
                <span className="italic font-light text-slate-500">with Logic.</span>
              </h1>
            </FadeUpItem>

            <FadeUpItem>
              <p className="text-base md:text-xl text-slate-600 max-w-lg leading-relaxed mb-8 md:mb-10 mx-auto lg:mx-0">
                Hi, I am <strong>Ms. Sandani Niroda Hettiarachchi</strong>. With over <strong>25 years of experience</strong>, I specialize in simplifying complex technical concepts for <strong>Edexcel & Local</strong> syllabuses (English / Sinhala Medium).
              </p>
            </FadeUpItem>
            
            <FadeUpItem className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-slate-900/20 text-sm md:text-base"
              >
                Join My Class <ChevronRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold transition-colors text-sm md:text-base"
              >
                Contact Me
              </motion.button>
            </FadeUpItem>

            {/* Verified Stats with Counter Animation */}
            <div className="grid grid-cols-3 gap-2 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-200/60">
              {[
                { label: "Experience", value: 25, suffix: "+" },
                { label: "A Grades", value: 100, suffix: "%" },
                { label: "Paper Marking", value: 20, suffix: "+" },
              ].map((stat, i) => (
                <FadeUpItem key={i} className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900">
                    <Counter value={stat.value} />{stat.suffix}
                  </h3>
                  <p className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-slate-400 mt-1">{stat.label}</p>
                </FadeUpItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* Hero Image */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
           {/* Floating Badge */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
             transition={{ 
               opacity: { delay: 0.8 },
               x: { delay: 0.8 },
               y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } 
             }}
             className="absolute top-10 -left-4 md:left-0 z-20 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white/20 hidden md:block"
           >
             <div className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-full"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600" /></div>
               <div>
                 <p className="text-sm font-bold text-slate-900">Proven Results</p>
                 <p className="text-xs text-slate-500">100% A Grades History</p>
               </div>
             </div>
           </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[300px] md:max-w-md lg:max-w-lg aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-amber-900/10 border-[6px] md:border-[8px] border-white"
          >
             {/* Ensure profile.png is in the public folder */}
             <Image 
               src="/profile.png" 
               alt="Ms. Sandani Niroda Hettiarachchi" 
               fill 
               priority
               className="object-cover object-top hover:scale-110 transition-transform duration-[2s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6 text-white text-center md:text-left">
               <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5}} className="font-serif text-xl md:text-2xl font-bold">Ms. Sandani Niroda</motion.p>
               <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.6}} className="text-white/80 text-xs md:text-sm mt-1">BSc (CS), MIT (Colombo), PGDE</motion.p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}