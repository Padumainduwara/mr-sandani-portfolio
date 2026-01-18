"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { StaggerContainer, FadeUpItem } from "./ui/Animations";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden px-4 md:px-6">
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
          {/* ACCESSIBILITY OPTIMIZED FORM */}
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="fname" className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                <input 
                  id="fname" 
                  name="firstName" 
                  autoComplete="given-name" 
                  type="text" 
                  aria-label="First Name"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm" 
                  placeholder="John" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lname" className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                <input 
                  id="lname" 
                  name="lastName" 
                  autoComplete="family-name" 
                  type="text" 
                  aria-label="Last Name"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm" 
                  placeholder="Doe" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Select Location</label>
              <select 
                id="location" 
                name="location" 
                aria-label="Select Class Location"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm"
              >
                 <option>Kings Institute (Nugegoda)</option>
                 <option>Piliyandala (Small Group)</option>
                 <option>Online</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                aria-label="Your Message"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-amber-500 focus:bg-slate-800 transition-all text-sm" 
                placeholder="I would like to inquire about..." 
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(245 158 11 / 0.3)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-all text-sm md:text-base"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}