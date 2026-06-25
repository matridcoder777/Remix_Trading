import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, ArrowUpRight } from "lucide-react";
import { ROMAN_PILLARS_URL } from "../data";

interface LeadMagnetProps {
  onJoinClick: () => void;
}

export default function LeadMagnet({ onJoinClick }: LeadMagnetProps) {
  const [slotsLeft, setSlotsLeft] = useState(14);

  // Subtle real-time ticking for seat availability
  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft(prev => {
        if (prev <= 3) return 14; // Reset to 14
        return Math.random() > 0.7 ? prev - 1 : prev;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 md:px-16 overflow-hidden border-t border-brand-outline-variant/10 py-28 bg-brand-black">
      {/* Background Pillars Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          alt="Roman pillars classical architecture backdrop" 
          className="w-full h-full object-cover opacity-20 scale-105" 
          src={ROMAN_PILLARS_URL} 
        />
        {/* Soft radial smoke gradients to focus readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-gold/15 border border-brand-gold/20 text-brand-gold rounded-none">
            <Sparkles className="w-4 h-4 animate-spin text-brand-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold">LIMITED ENROLLMENT</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Start Trading With Strategy.
          </h2>
          
          <p className="font-sans text-base md:text-lg text-brand-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Stop guessing. Join a community built on the foundations of institutional precision and Roman discipline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={onJoinClick}
              className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-brand-on-primary px-12 py-6 font-sans text-xs font-bold uppercase tracking-[0.2em] metallic-glint transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>JOIN SCIPIO NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-brand-on-surface-variant bg-[#110e07] px-4 py-2 border border-brand-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
              <span>Only <strong className="text-brand-gold font-mono">{slotsLeft}</strong> Slots Available This Month</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
