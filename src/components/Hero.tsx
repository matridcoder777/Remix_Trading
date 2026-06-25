import React from "react";
import { ArrowRight, Play, TrendingUp, Award, Youtube } from "lucide-react";
import { HERO_CHART_URL } from "../data";

interface HeroProps {
  onJoinLiveClick: () => void;
  onWatchYoutubeClick: () => void;
}

export default function Hero({ onJoinLiveClick, onWatchYoutubeClick }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16 pt-32 pb-20 bg-brand-black"
    >
      {/* Decorative Marble Overlay Background */}
      <div className="absolute inset-0 marble-overlay opacity-8 pointer-events-none" />

      {/* Radiant ambient gold light in the center background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 max-w-7xl mx-auto w-full">
        {/* Left Content */}
        <div className="space-y-6 text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-bold">INSTITUTIONAL PRECISION</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            TRADE WITH <br />
            <span className="text-brand-gold underline decoration-brand-gold/30 underline-offset-8">DISCIPLINE.</span> <br />
            <span className="text-brand-on-surface-variant font-medium">Learn From Real Traders.</span>
          </h1>

          <p className="font-sans text-base md:text-lg text-brand-on-surface-variant max-w-lg leading-relaxed pt-2">
            Daily Live Trading | Professional Community | Proprietary Bots. Institutional-grade tools for the modern market strategist.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <button 
              onClick={onJoinLiveClick}
              className="bg-brand-gold text-brand-on-primary hover:bg-brand-gold/90 px-10 py-5 font-sans text-xs font-bold uppercase tracking-widest metallic-glint transition-all flex items-center gap-2 shrink-0 active:scale-95"
            >
              <span>JOIN LIVE TRADING</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onWatchYoutubeClick}
              className="border border-brand-gold text-brand-gold hover:bg-brand-gold/10 px-10 py-5 font-sans text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shrink-0 active:scale-95"
            >
              <Youtube className="w-4 h-4" />
              <span>WATCH ON YOUTUBE</span>
            </button>
          </div>
        </div>

        {/* Right Graphic Section */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto flex items-center justify-center">
          {/* Radial glow background */}
          <div className="absolute inset-0 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Golden Candlestick Chart Display */}
          <div className="relative w-full max-w-lg lg:max-w-none group">
            <div className="absolute -inset-2 bg-brand-gold/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <img 
              alt="High-fidelity candlestick trading chart" 
              className="w-full h-auto drop-shadow-[0_0_40px_rgba(242,202,80,0.1)] relative z-10 border border-brand-gold/20 rounded-none hover:border-brand-gold transition-all duration-700 bg-brand-surface-lowest" 
              src={HERO_CHART_URL} 
            />

            {/* Floating Performance Cards */}
            {/* Card 1: P/L */}
            <div className="absolute -top-6 -right-4 md:right-0 bg-brand-surface-low/95 backdrop-blur-md px-5 py-4 border border-brand-gold/30 z-20 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-1.5 mb-1 text-green-400">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span className="font-sans text-[9px] text-brand-on-surface-variant font-semibold uppercase tracking-widest">Current P/L</span>
              </div>
              <div className="text-xl md:text-2xl font-mono text-brand-gold font-bold tracking-tight">
                +12.4%
              </div>
            </div>

            {/* Card 2: Win Rate */}
            <div className="absolute -bottom-6 -left-4 md:left-0 bg-brand-surface-low/95 backdrop-blur-md px-5 py-4 border border-brand-gold/30 z-20 hover:translate-y-1 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-1.5 mb-1 text-brand-gold">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span className="font-sans text-[9px] text-brand-on-surface-variant font-semibold uppercase tracking-widest">Win Rate</span>
              </div>
              <div className="text-xl md:text-2xl font-mono text-brand-gold font-bold tracking-tight">
                78.2%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
