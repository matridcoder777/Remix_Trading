import React from "react";
import { Award, Radio, Cpu, Users, ArrowUpRight } from "lucide-react";
import { TRUST_FACTORS } from "../data";

interface TrustMetricsProps {
  onJoinClick: () => void;
}

export default function TrustMetrics({ onJoinClick }: TrustMetricsProps) {
  // Map icons to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "history_edu":
        return <Award className="w-8 h-8 text-brand-gold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />;
      case "podcasts":
        return <Radio className="w-8 h-8 text-brand-gold group-hover:scale-110 group-hover:animate-pulse transition-all duration-300" />;
      case "memory":
        return <Cpu className="w-8 h-8 text-brand-gold group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300" />;
      case "groups":
        return <Users className="w-8 h-8 text-brand-gold group-hover:scale-110 transition-all duration-300" />;
      default:
        return <Award className="w-8 h-8 text-brand-gold" />;
    }
  };

  return (
    <section id="metrics" className="bg-brand-black px-6 md:px-16 border-y border-brand-outline-variant/10 py-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading to introduce metrics with premium design */}
        <div className="text-center md:text-left mb-10 border-l-2 border-brand-gold pl-4">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">THE SCIPIO DIFFERENCE</span>
          <h2 className="font-serif text-xl text-brand-on-surface-variant font-medium mt-1">
            Proven institutional systems, designed for elite performance.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_FACTORS.map((factor) => (
            <div 
              key={factor.id}
              onClick={onJoinClick}
              className="gold-rim p-8 bg-brand-surface-lowest flex flex-col items-center text-center group cursor-pointer hover:bg-brand-surface-low/30"
            >
              <div className="p-4 rounded-none bg-brand-surface border border-brand-gold/10 group-hover:border-brand-gold/30 mb-5 transition-all">
                {getIcon(factor.icon)}
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-gold transition-colors">
                {factor.value}
              </h3>
              <p className="text-brand-on-surface-variant text-xs font-sans uppercase tracking-[0.15em]">
                {factor.label}
              </p>
              
              {/* Discrete indicator to show clickability */}
              <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 text-brand-gold transition-all text-[10px] uppercase font-bold tracking-widest">
                <span>View Details</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
