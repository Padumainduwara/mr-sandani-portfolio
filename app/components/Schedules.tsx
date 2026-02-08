"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Monitor, Tv, FileCheck, Laptop } from "lucide-react";
import { SectionHeading, StaggerContainer, FadeUpItem } from "./ui/Animations";

export default function Schedules() {
  return (
    <section id="schedules" className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
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
  );
}