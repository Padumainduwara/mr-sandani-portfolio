"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFab() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 1. Page Load wela sekond 2kin First Message eka enawa
    const initialTimer = setTimeout(() => {
      if (!isHovered) setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 6000); // Sekond 6k thiyenawa
    }, 2000);

    // 2. Ita passe hamathissema sekond 45kata sarayak reminder ekak enawa
    const interval = setInterval(() => {
      if (!isHovered) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 6000);
      }
    }, 45000); // 45 Seconds cycle

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isHovered]);

  return (
    // Responsive Positioning: Mobile = bottom-4 right-4, Desktop = bottom-8 right-8
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* --- NOTIFICATION TOOLTIP (Modern Glass Style) --- */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="pointer-events-auto relative mr-1 md:mr-2"
          >
            <div className="bg-white/95 backdrop-blur-sm px-4 py-3 md:px-5 md:py-3.5 rounded-2xl shadow-xl shadow-slate-200/50 border border-white/50 flex items-center gap-3">
               {/* User Avatar / Icon */}
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
                  <span className="text-lg">👩‍🏫</span> {/* Methana Teacherge photo ekak unath danna puluwan */}
               </div>
               
               <div>
                 <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">Ms. Sandani</p>
                 <p className="text-xs md:text-sm font-semibold text-slate-800 whitespace-nowrap">
                   Chat on WhatsApp?
                 </p>
               </div>

               {/* Close Button (X) */}
               <button 
                 onClick={(e) => {
                   e.stopPropagation();
                   setShowTooltip(false);
                 }}
                 className="ml-2 p-1 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>
            </div>

            {/* Tooltip Arrow */}
            <div className="absolute -bottom-1.5 right-6 md:right-8 w-3 h-3 md:w-4 md:h-4 bg-white transform rotate-45 border-r border-b border-white/50 shadow-sm"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN WHATSAPP BUTTON (FAB) --- */}
      <motion.a
        href="https://wa.me/94716898264"
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => { setIsHovered(true); setShowTooltip(true); }}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative group flex items-center justify-center"
      >
        {/* Pulse Ring Animation (Active only when NOT hovered) */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping duration-[2s] group-hover:animate-none"></span>
        
        {/* Button Container */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] border-2 border-white/20 transition-all duration-300 group-hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)]">
          
          {/* WhatsApp Icon */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-9 md:h-9 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
      </motion.a>
    </div>
  );
}