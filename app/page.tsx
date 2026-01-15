"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Award , BookOpen, GraduationCap, Phone, Mail, ChevronRight, Star, Sparkles, CheckCircle2, Monitor, Code2, Laptop, Calendar, Tv, FileCheck } from "lucide-react";

// --- Premium Animation Components ---

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, subtitle, align = "left" }: { title: string; subtitle: string; align?: "left" | "center" }) => (
  <div className={`mb-16 md:mb-24 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 ${align === "center" ? "justify-center" : ""}`}
    >
      <span className="w-8 h-[1px] bg-amber-600"></span>
      {subtitle}
      {align === "center" && <span className="w-8 h-[1px] bg-amber-600"></span>}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight"
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
  const yHero = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-amber-500/30 selection:text-amber-900 overflow-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 origin-left z-[60]" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-slate-900">
              Ms. Sandani Hettiarachchi<span className="text-amber-600">.</span>
            </span>
            <span className="text-[10px] md:text-xs font-medium tracking-widest text-slate-500 uppercase">BSc / MIT / PGDE</span>
          </div>
          <button className="hidden md:flex bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300 transform hover:-translate-y-0.5">
            Enrol for 2026
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 md:px-6 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] opacity-60"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-100 shadow-sm text-amber-700 text-xs font-bold uppercase tracking-wider mb-8">
                <Sparkles className="w-4 h-4 fill-amber-500 text-amber-500" /> 
                Accepting New Students for 2026
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.0] text-slate-900 mb-8 tracking-tight">
                Mastering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">ICT</span> <br/>
                <span className="italic font-light text-slate-500">with Logic.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed mb-10">
                Hi, I am <strong>Ms. Sandani Niroda Hettiarachchi</strong>. With over <strong>25 years of experience</strong>, I specialize in simplifying complex technical concepts for <strong>Edexcel & Local</strong> syllabuses (English / Sinhala Medium).
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Join My Class <ChevronRight className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                  Contact Me
                </button>
              </div>

              {/* Verified Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-10 border-t border-slate-200/60">
                {[
                  { label: "Experience", value: "25+" },
                  { label: "A Grades", value: "100%" },
                  { label: "Paper Marking", value: "20+ Yrs" },
                ].map((stat, i) => (
                  <div key={i}>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{stat.value}</h3>
                    <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Hero Image */}
          <motion.div style={{ y: yHero }} className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 -left-4 md:left-0 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 hidden md:block"
             >
               <div className="flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-full"><CheckCircle2 className="w-6 h-6 text-green-600" /></div>
                 <div>
                   <p className="text-sm font-bold text-slate-900">Proven Results</p>
                   <p className="text-xs text-slate-500">100% A Grades History</p>
                 </div>
               </div>
             </motion.div>

            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300 border-[8px] border-white">
               <Image 
                 src="/profile.jpeg" 
                 alt="Ms. Sandani Niroda Hettiarachchi" 
                 fill 
                 priority
                 className="object-cover object-top hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6 text-white">
                 <p className="font-serif text-2xl">Ms. Sandani Niroda</p>
                 <p className="text-white/80 text-sm">BSc (CS), MIT (Colombo), PGDE</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-24 bg-white px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Academic Excellence" subtitle="My Credentials" />
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">
                Teaching ICT is not just about code,<br/> it is about <span className="text-amber-600 italic">digital literacy.</span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                With a background in Computer Science and a Masters in Information Technology from the University of Colombo, I bring over two decades of expertise. I serve as a teacher at a leading girls school in Colombo and have contributed to the nation as a <strong>"Guru Gedara" TV Presenter</strong> for Grade 11 ICT.
              </p>
              <ul className="space-y-4 mt-8">
                 {[
                    "National 'Guru Gedara' TV Presenter", 
                    "O/L Paper Marking Examiner (Since 2007)", 
                    "A/L Paper Marking Examiner (Since 2011)", 
                    "Regional ICT Teacher Trainer"
                  ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <div className="space-y-6">
              {[
                { degree: "Masters in Information Technology (MIT)", uni: "University of Colombo", icon: GraduationCap },
                { degree: "BSc (Computer Science)", uni: "University of Kelaniya", icon: Award },
                { degree: "Post Graduate Diploma in Education (PGDE)", uni: "National Institute of Education", icon: Star },
              ].map((edu, index) => (
                <FadeIn delay={index * 0.15} key={index}>
                  <div className="group flex items-start gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-amber-100 transition-all duration-300">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                      <edu.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-slate-500 font-medium">{edu.uni}</p>
                      <div className="mt-2 inline-block px-3 py-1 bg-white rounded-md text-xs font-bold text-amber-600 border border-amber-100">
                        Verified Qualification
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Section (Replaces Courses) */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Class Schedules 2026" subtitle="Join Our Classes" align="center" />
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Location 1: Kings Institute */}
            <FadeIn delay={0.1}>
              <div className="h-full bg-white p-8 md:p-10 rounded-3xl border border-slate-200 hover:shadow-2xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900">Kings Institute</h3>
                      <p className="text-slate-500 text-sm font-medium">Nugegoda</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                           <span className="font-bold text-slate-900">27 OL (New)</span>
                           <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">English Medium</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                           <Calendar className="w-4 h-4" /> Tuesday 2:30 PM - 4:30 PM
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                           <span className="font-bold text-slate-900">25 OL (Revision)</span>
                           <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">Revision</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                           <Calendar className="w-4 h-4" /> Thursday 2:30 PM - 4:30 PM
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                           <span className="font-bold text-slate-900">26 OL (Gr 10/11)</span>
                           <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Theory</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                           <Calendar className="w-4 h-4" /> Thursday 2:30 PM - 4:30 PM
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                           <span className="font-bold text-slate-900">27 AL</span>
                           <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">English Medium</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                           <Calendar className="w-4 h-4" /> Thursday 2:30 PM - 4:30 PM
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Location 2: Piliyandala (Small Groups) */}
            <FadeIn delay={0.2}>
              <div className="h-full bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-tr-full -ml-8 -mb-8 blur-2xl group-hover:bg-amber-500/20 transition-colors"></div>
                 
                 <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg shadow-amber-500/20">
                      <Monitor className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white">Piliyandala</h3>
                      <p className="text-amber-500 text-sm font-bold uppercase tracking-wide">Small Group Classes</p>
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
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                           <div>
                              <p className="font-bold text-sm text-amber-100">{slot.day}</p>
                              <p className="text-xs text-slate-400">{slot.time}</p>
                           </div>
                           <div className="text-right">
                              <p className="font-medium text-sm text-white">{slot.cls}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                </div>
              </div>
            </FadeIn>
            
          </div>

          {/* Additional Features Bar */}
          <FadeIn delay={0.4} className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Tv, title: "TV Presenter", desc: "Experience from 'Guru Gedara' National TV Program." },
                  { icon: FileCheck, title: "Paper Marking", desc: "20+ Years of Exam Paper Marking Experience." },
                  { icon: Laptop, title: "Practical ICT", desc: "100% Practical based learning approach." }
                ].map((f, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <f.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{f.title}</h4>
                        <p className="text-xs text-slate-500">{f.desc}</p>
                      </div>
                  </div>
                ))}
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden px-4 md:px-6">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                Start your <br/> <span className="text-amber-500">ICT Journey.</span>
              </h2>
              <p className="text-slate-400 mb-12 max-w-md text-lg">
                Classes are filling up fast for the 2026 academic year. Secure your spot in the Piliyandala (Small Group) or Kings Institute batch.
              </p>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Locations", text: "Kings Institute Nugegoda & Piliyandala" },
                  { icon: Phone, title: "Call Us", text: "+94 77 123 4567" },
                  { icon: Mail, title: "Email", text: "info@sandanihettiarachchi.lk" }
                ].map((item, i) => (
                   <div key={i} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white">{item.title}</h4>
                        <p className="text-slate-400">{item.text}</p>
                      </div>
                   </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Location</label>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all">
                   <option>Kings Institute (Nugegoda)</option>
                   <option>Piliyandala (Small Group)</option>
                   <option>Online</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all" placeholder="I would like to inquire about..." />
              </div>
              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all transform hover:scale-[1.02]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center">
         <p className="text-2xl font-serif font-bold text-white mb-4">Ms. Sandani Hettiarachchi<span className="text-amber-600">.</span></p>
         <div className="flex justify-center gap-6 mb-8">
            {["Facebook", "Instagram", "LinkedIn"].map((social) => (
              <a key={social} href="#" className="text-slate-500 hover:text-amber-500 transition-colors text-sm font-medium uppercase tracking-widest">{social}</a>
            ))}
         </div>
        <p className="text-slate-600 text-sm">© 2026 Ms. Sandani Niroda Hettiarachchi. All rights reserved.</p>
      </footer>
    </main>
  );
}