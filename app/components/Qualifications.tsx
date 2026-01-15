"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Star, CheckCircle2 } from "lucide-react";
import { StaggerContainer, FadeUpItem, SectionHeading } from "./ui/Animations";

export default function Qualifications() {
  return (
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
  );
}