"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
          <motion.a 
            href="#schedules"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/20 transition-colors duration-300 inline-block cursor-pointer"
          >
            Enrol for 2026
          </motion.a>
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
  );
}