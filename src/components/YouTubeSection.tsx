import React from "react";
import { Play, Eye, Calendar, ExternalLink } from "lucide-react";
import { VIDEOS } from "../data";
import { Video } from "../types";

interface YouTubeSectionProps {
  onVideoClick: (video: Video) => void;
}

export default function YouTubeSection({ onVideoClick }: YouTubeSectionProps) {
  const mainVideo = VIDEOS.find(v => v.id === "main_video") || VIDEOS[0];
  const listVideos = VIDEOS.filter(v => v.id !== "main_video");

  return (
    <section id="watch-trading" className="px-6 md:px-16 py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div className="text-left">
            <span className="font-sans text-xs text-brand-gold uppercase tracking-[0.3em] font-bold mb-3 block">
              STREAMING INTELLIGENCE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Watch Real Trading
            </h2>
          </div>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-gold font-sans text-xs uppercase tracking-widest border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>View All Content</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Main Immersive Video Panel */}
        <div 
          onClick={() => onVideoClick(mainVideo)}
          className="relative group mb-12 cursor-pointer overflow-hidden gold-rim bg-brand-surface-low shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle light accent */}
          <div className="absolute -inset-2 bg-brand-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Picture Backdrop */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img 
              alt={mainVideo.alt}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1200ms]"
              src={mainVideo.image} 
            />
            {/* Dark Smoked Gradient */}
            <div className="absolute inset-0 bg-black/45 flex flex-col justify-between p-6 md:p-8 group-hover:bg-black/30 transition-all">
              
              {/* Top HUD */}
              <div className="flex justify-between items-start">
                <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  LIVE STREAM
                </span>
                <span className="font-mono text-xs text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded">
                  {mainVideo.duration}
                </span>
              </div>

              {/* Play Button HUD Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-brand-gold flex items-center justify-center text-brand-gold bg-brand-black/50 backdrop-blur-sm group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-black transition-all duration-500">
                  <Play className="w-8 h-8 fill-current translate-x-1" />
                </div>
              </div>

              {/* Title & Info Banner */}
              <div className="text-left max-w-xl bg-black/40 backdrop-blur-sm p-4 border-l border-brand-gold">
                <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">
                  {mainVideo.title}
                </h3>
                <p className="text-xs text-brand-on-surface-variant mt-1 font-sans">
                  Join hundreds of traders reviewing institutional liquidity gaps live every single morning session.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnail List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listVideos.map((video) => (
            <div 
              key={video.id} 
              onClick={() => onVideoClick(video)}
              className="group cursor-pointer text-left bg-[#0b1120] border border-brand-outline-variant/20 hover:border-brand-gold/40 transition-all p-4 flex flex-col justify-between"
            >
              <div>
                {/* Image Wrap */}
                <div className="aspect-video bg-brand-surface-low gold-rim mb-4 overflow-hidden relative">
                  <img 
                    alt={video.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={video.image} 
                  />
                  {/* Subtle hover play overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-brand-gold text-black rounded-full shadow-lg">
                      <Play className="w-4 h-4 fill-current translate-x-0.5" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <span className="absolute bottom-2 right-2 font-mono text-[10px] text-white bg-black/60 px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>

                <h4 className="font-serif text-base text-white tracking-wide group-hover:text-brand-gold transition-colors line-clamp-1 mb-2">
                  {video.title}
                </h4>
              </div>

              <div className="flex justify-between items-center font-sans text-[10px] text-brand-on-surface-variant uppercase tracking-widest pt-2 border-t border-brand-outline-variant/15 mt-2">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-brand-gold" />
                  {video.views}
                </span>
                {video.isNew ? (
                  <span className="text-brand-gold bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/30 font-bold tracking-widest animate-pulse">
                    NEW
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold/60" />
                    {video.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
