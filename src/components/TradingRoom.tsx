import React, { useState } from "react";
import { Check, ShieldAlert, Award, Compass, ArrowRight } from "lucide-react";
import { COMMAND_CENTER_DASHBOARD_URL } from "../data";

interface TradingRoomProps {
  onEnterRoomClick: () => void;
}

export default function TradingRoom({ onEnterRoomClick }: TradingRoomProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: <Compass className="w-5 h-5 text-brand-gold shrink-0" />,
      title: "Daily Live Trading",
      description: "Watch real skin in the game. Real orders, real entries, institutional logic with raw transparency."
    },
    {
      id: 2,
      icon: <Award className="w-5 h-5 text-brand-gold shrink-0" />,
      title: "Professional Community",
      description: "Network with highly disciplined, vetted traders. No noise or hype, just data-driven strategy and growth."
    },
    {
      id: 3,
      icon: <ShieldAlert className="w-5 h-5 text-brand-gold shrink-0" />,
      title: "Risk Management",
      description: "The absolute core of Scipio. Learn to protect capital first, manage drawers, and grow with stoic discipline."
    }
  ];

  return (
    <section id="trading-room" className="relative px-6 md:px-16 overflow-hidden py-24 bg-brand-black">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-surface-lowest to-brand-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Mockup Dashboard Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative group">
              {/* Outer soft gold bloom glow */}
              <div className="absolute -inset-2 bg-brand-gold/10 blur-3xl rounded-xl pointer-events-none" />
              
              {/* Double border layer styled like professional monitors */}
              <div className="relative bg-brand-surface-low border border-brand-gold/20 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] hover:border-brand-gold/50 transition-all duration-700">
                <img 
                  alt="Sleek dark-themed professional trading dashboard mockup" 
                  className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-700" 
                  src={COMMAND_CENTER_DASHBOARD_URL} 
                />

                {/* Simulated connection status */}
                <div className="absolute bottom-4 left-4 bg-brand-black/80 px-3 py-1.5 border border-brand-gold/15 text-[9px] font-mono tracking-widest text-brand-on-surface-variant flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span>CORE SERVER: ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Description Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-left">
            <div>
              <span className="font-sans text-xs text-brand-gold uppercase tracking-[0.3em] font-bold block mb-3">
                THE COMMAND CENTER
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Elite Trading Room
              </h2>
            </div>

            {/* Vetted Features List with hover spotlight effects */}
            <div className="space-y-6">
              {features.map((feat, index) => (
                <div 
                  key={feat.id}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  onClick={onEnterRoomClick}
                  className={`flex gap-4 p-4 border transition-all duration-300 cursor-pointer ${
                    hoveredFeature === index 
                      ? "bg-brand-surface-low/30 border-brand-gold/40 translate-x-2" 
                      : "bg-transparent border-transparent"
                  }`}
                >
                  <div className="flex items-start shrink-0 mt-0.5">
                    <div className="p-1 rounded bg-brand-gold/10 border border-brand-gold/20">
                      {feat.icon}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                      <span>{feat.title}</span>
                      {hoveredFeature === index && (
                        <Check className="w-4 h-4 text-brand-gold animate-bounce" />
                      )}
                    </h4>
                    <p className="font-sans text-sm text-brand-on-surface-variant leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-4 pl-4 border-l border-brand-gold/30">
              <button 
                onClick={onEnterRoomClick}
                className="bg-brand-gold text-brand-on-primary hover:bg-brand-gold/90 px-10 py-5 font-sans text-xs font-bold uppercase tracking-widest metallic-glint transition-all flex items-center gap-2 active:scale-95"
              >
                <span>ENTER THE ROOM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
