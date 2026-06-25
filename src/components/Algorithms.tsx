import React from "react";
import { ArrowRight, Cpu, ShieldCheck, Award } from "lucide-react";
import { BOTS } from "../data";
import { Bot } from "../types";

interface AlgorithmsProps {
  onBotSelect: (bot: Bot) => void;
}

export default function Algorithms({ onBotSelect }: AlgorithmsProps) {
  return (
    <section id="algorithms" className="px-6 md:px-16 bg-brand-surface-lowest py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs text-brand-gold uppercase tracking-[0.3em] font-bold mb-3 block">
            PROPRIETARY TECHNOLOGY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Scipio Algorithms
          </h2>
          <p className="text-sm text-brand-on-surface-variant max-w-md mx-auto mt-3 font-sans">
            Tested through multiple market cycles. Click any system model below to execute a simulated historical backtest.
          </p>
        </div>

        {/* Algorithm Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BOTS.map((bot) => (
            <div 
              key={bot.id}
              onClick={() => onBotSelect(bot)}
              className="bg-brand-surface group cursor-pointer overflow-hidden border border-brand-gold/10 hover:border-brand-gold/50 hover:bg-brand-surface-low/30 transition-all duration-500 flex flex-col h-full justify-between shadow-xl"
            >
              {/* Card Image and Badge */}
              <div className="h-60 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#16130b] to-transparent z-10" />
                
                <img 
                  alt={bot.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={bot.image} 
                />

                {/* Badge Overlay (Best Seller, etc) */}
                {bot.badge && (
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="bg-brand-gold text-brand-on-primary text-[9px] px-3.5 py-1.5 uppercase tracking-widest font-bold">
                      {bot.badge}
                    </span>
                  </div>
                )}

                {/* Simulated Floating Specs inside Card Image */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <span className="bg-black/60 backdrop-blur-sm border border-brand-gold/20 text-brand-gold text-[8px] font-mono px-2 py-0.5 uppercase tracking-widest">
                    Win Rate: {bot.winRate}
                  </span>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-1.5 text-brand-gold text-[10px] font-mono uppercase tracking-widest">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>ALGO SYSTEM</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                    {bot.name}
                  </h3>
                  
                  <p className="text-brand-on-surface-variant text-xs leading-relaxed font-sans line-clamp-3">
                    {bot.description}
                  </p>
                </div>

                {/* Specifications List */}
                <div className="pt-4 border-t border-brand-outline-variant/20 grid grid-cols-2 gap-2 text-left">
                  <div>
                    <span className="text-[8px] font-mono text-brand-on-surface-variant uppercase tracking-widest block">Risk Profile</span>
                    <span className={`text-[10px] font-mono font-bold ${
                      bot.riskProfile === "Low" ? "text-green-400" : "text-amber-400"
                    }`}>
                      {bot.riskProfile}
                    </span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-brand-on-surface-variant uppercase tracking-widest block">Profit Factor</span>
                    <span className="text-[10px] font-mono font-bold text-brand-gold">
                      {bot.profitFactor}
                    </span>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="pt-6 flex items-center justify-between border-t border-brand-outline-variant/15 mt-4">
                  <span className="text-brand-gold font-mono text-sm tracking-widest group-hover:underline decoration-brand-gold/40">
                    {bot.accessType}
                  </span>
                  
                  <div className="flex items-center gap-1.5 text-brand-gold">
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      BACKTEST LAB
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
