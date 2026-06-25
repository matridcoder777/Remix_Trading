import React from "react";
import { Star, Play, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Video } from "../types";

interface TestimonialsProps {
  onPlayTestimonialVideo: (video: Video) => void;
}

export default function Testimonials({ onPlayTestimonialVideo }: TestimonialsProps) {
  // Translate Alessia testimonial click into mock Video player format
  const handleAlessiaClick = () => {
    const mockAlessiaVideo: Video = {
      id: "alessia_video",
      title: "Alessia G. - My Prop Trading Story with Scipio",
      views: "15k Views",
      date: "1 Month ago",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCrRVmIl7AiiYw4QRSwjFHqn3_FjVeizwO0rn72r8FBwwT4oZrT2rZpuims59cDYMn1Jpouq6lchmn6xIvcuK-Zjocet-Cjx7KJ6E4Qg9IzKZVYoshH5L3BEFM15CXChNRYYoUvrS8Iq8rZB4jgozeYjKCTayyirN2x7pgE--YpnUvfITnXRh1_yxbLrC2HT-W5eVxD3fMsreB6N2QcQgaj-xGxtMczVzY66nRcWuQwu22cbS2WJqCOEblwe5v3gJm23yHtkYSfs9D",
      alt: "Alessia G. review thumbnail",
      duration: "08:14"
    };
    onPlayTestimonialVideo(mockAlessiaVideo);
  };

  const firstReview = TESTIMONIALS.find(t => t.id === "t1") || TESTIMONIALS[0];
  const secondReview = TESTIMONIALS.find(t => t.id === "t2") || TESTIMONIALS[1];
  const thirdReview = TESTIMONIALS.find(t => t.id === "t3") || TESTIMONIALS[2];

  return (
    <section id="testimonials" className="px-6 md:px-16 relative overflow-hidden py-24 bg-brand-black">
      {/* Texture Layer */}
      <div className="absolute inset-0 marble-overlay opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Rating Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs text-brand-gold uppercase tracking-[0.25em] font-bold block mb-3">
            VERIFIED OUTCOMES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            The Discipline Community
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-brand-gold">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-current text-brand-gold" />
              ))}
            </div>
            <span className="sm:ml-3 font-mono text-xs uppercase tracking-widest text-brand-on-surface-variant">
              TRUSTPILOT 4.9/5 rating
            </span>
          </div>
        </div>

        {/* Dynamic Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Marco Rossini */}
          <div className="gold-rim bg-[#0b1120] p-8 flex flex-col justify-between h-full relative group">
            <Quote className="absolute right-6 top-6 w-8 h-8 text-brand-gold/10 pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-gold/30 shrink-0">
                  <img 
                    alt={firstReview.name} 
                    className="w-full h-full object-cover" 
                    src={firstReview.avatar} 
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-base leading-snug">{firstReview.name}</p>
                  <p className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest font-sans mt-0.5">{firstReview.role}</p>
                </div>
              </div>
              <p className="font-sans text-sm italic text-brand-on-surface-variant leading-relaxed text-left">
                "{firstReview.text}"
              </p>
            </div>
          </div>

          {/* Card 2: Alessia G. (Immersive Video Card) */}
          <div className="gold-rim bg-[#0b1120] p-8 flex flex-col justify-between h-full transform md:translate-y-6 relative group">
            <div className="space-y-6">
              {/* Interactive Video Thumbnail */}
              <div 
                onClick={handleAlessiaClick}
                className="relative cursor-pointer overflow-hidden gold-rim group/thumb aspect-video bg-brand-surface-low"
              >
                <img 
                  alt="Alessia G. video story" 
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500" 
                  src={secondReview.avatar} 
                />
                
                {/* Immersive overlay on play */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/thumb:bg-black/20 transition-all">
                  <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold bg-brand-black/60 backdrop-blur-sm group-hover/thumb:scale-110 group-hover/thumb:bg-brand-gold group-hover/thumb:text-black transition-all">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-3 bg-brand-black/80 border border-brand-gold/20 px-2 py-0.5 text-[8px] font-mono tracking-wider text-brand-gold uppercase">
                  Watch Story (08:14)
                </div>
              </div>

              <p className="font-sans text-sm italic text-brand-on-surface-variant leading-relaxed text-left">
                "{secondReview.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-brand-outline-variant/25 text-left">
              <p className="font-serif font-bold text-white text-base">{secondReview.name}</p>
              <p className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest font-sans mt-0.5">{secondReview.role}</p>
            </div>
          </div>

          {/* Card 3: Gianluca T. */}
          <div className="gold-rim bg-[#0b1120] p-8 flex flex-col justify-between h-full relative group">
            <Quote className="absolute right-6 top-6 w-8 h-8 text-brand-gold/10 pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-gold/30 shrink-0">
                  <img 
                    alt={thirdReview.name} 
                    className="w-full h-full object-cover" 
                    src={thirdReview.avatar} 
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-base leading-snug">{thirdReview.name}</p>
                  <p className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest font-sans mt-0.5">{thirdReview.role}</p>
                </div>
              </div>
              <p className="font-sans text-sm italic text-brand-on-surface-variant leading-relaxed text-left">
                "{thirdReview.text}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
