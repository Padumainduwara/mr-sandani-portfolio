"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  AnimatePresence, 
  useInView, 
  useMotionValue, 
  animate 
} from "framer-motion";
import { 
  MapPin, Award, BookOpen, GraduationCap, Phone, Mail, ChevronRight, 
  Star, Sparkles, CheckCircle2, Monitor, Laptop, Calendar, Tv, FileCheck, 
  Menu, X 
} from "lucide-react";

// --- Custom Hooks & Animation Components ---

// 1. Number Counter Animation (0 -> 25+)
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
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
const StaggerContainer = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
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

const FadeUpItem = ({ children, className }: { children: React.ReactNode; className?: string }) => (
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

// 3. Section Heading Animation
const SectionHeading = ({ title, subtitle, align = "left" }: { title: string; subtitle: string; align?: "left" | "center" }) => (
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

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Parallax for Hero Image
  const targetRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(heroScroll, [0, 0.5], [1, 0.8]);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-amber-500/30 selection:text-amber-900 overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 origin-left z-[100]" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-24 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex flex-col z-50">
            <span className="text-lg md:text-2xl font-serif font-bold tracking-tight text-slate-900">
              Ms. Sandani Hettiarachchi<span className="text-amber-600">.</span>
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-0.5">BSc / MIT / PGDE</span>
          </div>

          {/* Desktop Menu Button */}
          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/20 transition-colors duration-300"
            >
              Enrol for 2026
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-800 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl text-sm font-bold shadow-lg">
                  Enrol Now
                </button>
                <button className="w-full bg-slate-50 border border-slate-200 text-slate-900 py-4 rounded-xl text-sm font-bold">
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
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

      {/* Qualifications Section */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Academic Excellence" subtitle="My Credentials" />
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <StaggerContainer>
              <FadeUpItem>
                <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 leading-snug">
                  Teaching ICT is not just about code,<br className="hidden md:block"/> it is about <span className="text-amber-600 italic font-medium">digital literacy.</span>
                </h3>
              </FadeUpItem>
              <FadeUpItem>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
                  With a background in Computer Science and a Masters in Information Technology from the University of Colombo, I bring over two decades of expertise. I serve as a teacher at a leading girls school in Colombo and have contributed to the nation as a <strong>"Guru Gedara" TV Presenter</strong> for Grade 11 ICT.
                </p>
              </FadeUpItem>
              <ul className="space-y-4 mt-8">
                 {[
                    "National 'Guru Gedara' TV Presenter", 
                    "O/L Paper Marking Examiner (Since 2007)", 
                    "A/L Paper Marking Examiner (Since 2011)", 
                    "Regional ICT Teacher Trainer"
                  ].map((item, i) => (
                  <FadeUpItem key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-amber-700" />
                    </div>
                    {item}
                  </FadeUpItem>
                ))}
              </ul>
            </StaggerContainer>

            <div className="space-y-4 md:space-y-6">
              <StaggerContainer delay={0.2}>
              {[
                { degree: "Masters in Information Technology (MIT)", uni: "University of Colombo", icon: GraduationCap },
                { degree: "BSc (Computer Science)", uni: "University of Kelaniya", icon: Award },
                { degree: "Post Graduate Diploma in Education (PGDE)", uni: "National Institute of Education", icon: Star },
              ].map((edu, index) => (
                <FadeUpItem key={index}>
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                    className="group flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-amber-100 transition-all duration-300"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      <edu.icon className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-xl font-bold text-slate-900 leading-tight">{edu.degree}</h4>
                      <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">{edu.uni}</p>
                      <div className="mt-2 inline-block px-2 md:px-3 py-1 bg-white rounded-md text-[10px] md:text-xs font-bold text-amber-600 border border-amber-100">
                        Verified Qualification
                      </div>
                    </div>
                  </motion.div>
                </FadeUpItem>
              ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Class Schedules 2026" subtitle="Join Our Classes" align="center" />
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Location 1: Kings Institute */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="h-full bg-white p-6 md:p-10 rounded-3xl border border-slate-200 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">Kings Institute</h3>
                      <p className="text-slate-500 text-xs md:text-sm font-medium">Nugegoda</p>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {[
                      { name: "27 OL (New)", tag: "English Medium", color: "amber", time: "Tuesday 2:30 PM - 4:30 PM" },
                      { name: "25 OL (Revision)", tag: "Revision", color: "blue", time: "Thursday 2:30 PM - 4:30 PM" },
                      { name: "26 OL (Gr 10/11)", tag: "Theory", color: "green", time: "Thursday 2:30 PM - 4:30 PM" },
                      { name: "27 AL", tag: "English Medium", color: "amber", time: "Thursday 2:30 PM - 4:30 PM" }
                    ].map((cls, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ x: 10, backgroundColor: "#f8fafc" }}
                        className="bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 transition-colors"
                      >
                        <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                           <span className="font-bold text-slate-900 text-sm md:text-base">{cls.name}</span>
                           <span className={`text-[10px] font-bold px-2 py-1 rounded bg-${cls.color}-100 text-${cls.color}-700`}>{cls.tag}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 text-xs md:text-sm font-medium">
                           <Calendar className="w-3.5 h-3.5" /> {cls.time}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Location 2: Piliyandala (Small Groups) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="h-full bg-slate-900 text-white p-6 md:p-10 rounded-3xl border border-slate-800 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
              >
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-tr-full -ml-8 -mb-8 blur-2xl group-hover:bg-amber-500/20 transition-colors duration-500"></div>
                 
                 <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg shadow-amber-500/20">
                      <Monitor className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Piliyandala</h3>
                      <p className="text-amber-500 text-[10px] md:text-sm font-bold uppercase tracking-wide">Small Group Classes</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                     {[
                        { day: "Monday", time: "6:30 PM - 8:30 PM", cls: "26 OL (English Medium)" },
                        { day: "Wednesday", time: "4:00 PM - 6:00 PM", cls: "27 OL New (English Medium)" },
                        { day: "Wednesday", time: "6:00 PM - 8:00 PM", cls: "25 OL Revision (English Medium)" },
                        { day: "Friday", time: "4:00 PM - 6:00 PM", cls: "26 AL Rev & Theory (English Med)" },
                        { day: "Saturday", time: "9:30 AM - 11:30 AM", cls: "27 AL New (English Medium)" },
                        { day: "Sunday", time: "7:30 AM - 9:30 AM", cls: "26 AL (English Medium)" },
                     ].map((slot, idx) => (
                        <motion.div 
                          key={idx} 
                          whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 transition-colors gap-2 sm:gap-0"
                        >
                           <div>
                              <p className="font-bold text-sm text-amber-100">{slot.day}</p>
                              <p className="text-xs text-slate-400">{slot.time}</p>
                           </div>
                           <div className="sm:text-right">
                              <p className="font-medium text-xs sm:text-sm text-white">{slot.cls}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
          </div>

          {/* Additional Features Bar */}
          <StaggerContainer delay={0.4}>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                {[
                  { icon: Tv, title: "TV Presenter", desc: "Experience from 'Guru Gedara' National TV Program." },
                  { icon: FileCheck, title: "Paper Marking", desc: "20+ Years of Exam Paper Marking Experience." },
                  { icon: Laptop, title: "Practical ICT", desc: "100% Practical based learning approach." }
                ].map((f, i) => (
                  <FadeUpItem key={i}>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-amber-100 transition-colors">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                          <f.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm md:text-base">{f.title}</h4>
                          <p className="text-xs text-slate-500">{f.desc}</p>
                        </div>
                    </motion.div>
                  </FadeUpItem>
                ))}
            </div>
          </StaggerContainer>

        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden px-4 md:px-6">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 8, repeat: Infinity }}
           className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px]"
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          <div>
            <StaggerContainer>
              <FadeUpItem>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                  Start your <br/> <span className="text-amber-500">ICT Journey.</span>
                </h2>
              </FadeUpItem>
              <FadeUpItem>
                <p className="text-slate-400 mb-8 md:mb-12 max-w-md text-base md:text-lg">
                  Classes are filling up fast for the 2026 academic year. Secure your spot in the Piliyandala (Small Group) or Kings Institute batch.
                </p>
              </FadeUpItem>

              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: MapPin, title: "Locations", text: "Kings Institute Nugegoda & Piliyandala" },
                  { icon: Phone, title: "Call Us", text: "+94 71 689 8264" },
                  { icon: Mail, title: "Email", text: "info@sandanihettiarachchi.lk" }
                ].map((item, i) => (
                   <FadeUpItem key={i}>
                     <div className="flex items-start gap-4 md:gap-5">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg md:text-xl text-white">{item.title}</h4>
                          <p className="text-sm md:text-base text-slate-400">{item.text}</p>
                        </div>
                     </div>
                   </FadeUpItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Select Location</label>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm">
                   <option>Kings Institute (Nugegoda)</option>
                   <option>Piliyandala (Small Group)</option>
                   <option>Online</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm" placeholder="I would like to inquire about..." />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(245 158 11 / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm md:text-base"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center">
         <p className="text-xl md:text-2xl font-serif font-bold text-white mb-4">Ms. Sandani Hettiarachchi<span className="text-amber-600">.</span></p>
         <div className="flex justify-center gap-6 mb-8">
            {["Facebook", "Instagram", "LinkedIn"].map((social) => (
              <a key={social} href="#" className="text-slate-500 hover:text-amber-500 transition-colors text-xs md:text-sm font-medium uppercase tracking-widest">{social}</a>
            ))}
         </div>
        <p className="text-slate-600 text-xs md:text-sm">© 2026 Ms. Sandani Niroda Hettiarachchi. All rights reserved.</p>
      </footer>
    </main>
  );
}