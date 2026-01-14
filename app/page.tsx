"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Award , BookOpen, GraduationCap, Phone, Mail, ChevronRight, Star, Sparkles, CheckCircle2, Monitor, Code2, Laptop } from "lucide-react";

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
            <span className="text-[10px] md:text-xs font-medium tracking-widest text-slate-500 uppercase">Expert ICT Educator</span>
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
                Hi, I am <strong>Ms. Sandani Niroda Hettiarachchi</strong>. I specialize in simplifying complex technical concepts for <strong>Edexcel & Local</strong> syllabuses, ensuring every student masters the code of success.
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
                  { label: "Experience", value: "15+" },
                  { label: "Students", value: "5k+" },
                  { label: "A Grades", value: "98%" },
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
                   <p className="text-xs text-slate-500">Local & Edexcel</p>
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
                 <p className="text-white/80 text-sm">B.Sc (Kelaniya), M.Ed (Colombo)</p>
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
                My journey as an educator began at the University of Kelaniya and has evolved through years of postgraduate research. I believe in a teaching style that adapts to the modern student—covering everything from algorithms to data logic simply.
              </p>
              <ul className="space-y-4 mt-8">
                {["Practical Coding Sessions", "Theory & Revision", "Past Paper Analysis", "Logic Building Techniques"].map((item, i) => (
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
                { degree: "Master of Education (M.Ed)", uni: "University of Colombo", year: "2018", icon: GraduationCap },
                { degree: "Bachelor of Science (B.Sc)", uni: "University of Kelaniya", year: "2015", icon: Award },
                { degree: "Diploma in ICT Education", uni: "National Institute", year: "2019", icon: Star },
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
                        Completed {edu.year}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section (Bento Grid Style) */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="ICT Curriculum 2026" subtitle="Select Your Path" align="center" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <FadeIn delay={0.1} className="md:col-span-2">
              <div className="h-full bg-slate-900 text-white p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/30 transition-colors"></div>
                <div className="relative z-10">
                  <div className="bg-amber-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Monitor className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4">Advanced Level ICT</h3>
                  <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
                    The complete breakdown of the G.C.E A/L ICT syllabus. Covering programming, networking, and systems analysis for University entrance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium backdrop-blur-sm">Theory</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium backdrop-blur-sm">Revision</span>
                    <span className="px-4 py-2 bg-amber-500 text-slate-900 rounded-lg text-sm font-bold">2026 Intake</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="h-full bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
                   <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">O/L ICT</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Building a strong technical foundation for Grade 10 & 11 students. (Local Syllabus)
                </p>
                <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors">
                  View Schedule
                </button>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3}>
              <div className="h-full bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group">
                 <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform">
                   <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Edexcel / Local</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                   Specialized coaching for Edexcel & Local syllabus (English Medium).
                </p>
                <button className="w-full py-3 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors">
                  Request Info
                </button>
              </div>
            </FadeIn>
            
             {/* Card 4 - Testimonial Style */}
             <FadeIn delay={0.4} className="md:col-span-2">
              <div className="h-full bg-gradient-to-r from-amber-50 to-white p-8 rounded-3xl border border-amber-100 flex items-center">
                 <div>
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                    </div>
                    <p className="text-lg font-serif italic text-slate-800 mb-4">
                      "ICT was difficult for me, but Ms. Sandani's logic-based teaching style made coding easy. I got an 'A' in my O/Ls!"
                    </p>
                    <p className="text-sm font-bold text-slate-900">— Dilshan Perera, <span className="text-slate-500 font-normal">Student (2024 Batch)</span></p>
                 </div>
              </div>
            </FadeIn>

          </div>
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
                Classes are filling up fast for the 2026 academic year. Secure your spot in the physical or online batch.
              </p>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Main Center", text: "No. 123, High Level Road, Nugegoda." },
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
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Course</label>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all">
                   <option>A/L ICT (2026)</option>
                   <option>O/L ICT (Grade 10/11)</option>
                   <option>Edexcel/Cambridge ICT</option>
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