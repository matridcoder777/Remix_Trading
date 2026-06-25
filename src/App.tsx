import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMetrics from "./components/TrustMetrics";
import YouTubeSection from "./components/YouTubeSection";
import TradingRoom from "./components/TradingRoom";
import Algorithms from "./components/Algorithms";
import Testimonials from "./components/Testimonials";
import LeadMagnet from "./components/LeadMagnet";
import Footer from "./components/Footer";
import { JoinLiveModal, VideoPlayerModal, BotBacktestModal } from "./components/InteractiveDialogs";
import { BOTS, VIDEOS } from "./data";
import { Bot, Video } from "./types";

export default function App() {
  // Modal State Management
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [selectedBotForJoin, setSelectedBotForJoin] = useState<string>("");
  
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [selectedBotForBacktest, setSelectedBotForBacktest] = useState<Bot | null>(null);
  const [isBacktestOpen, setIsBacktestOpen] = useState(false);

  // Event Triggers
  const handleOpenJoin = (botId?: string) => {
    setSelectedBotForJoin(botId || "");
    setIsJoinOpen(true);
  };

  const handlePlayVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsVideoOpen(true);
  };

  const handleOpenBacktest = (bot: Bot) => {
    setSelectedBotForBacktest(bot);
    setIsBacktestOpen(true);
  };

  const handleWatchOnYoutube = () => {
    // Open default live stream or scroll to Youtube section
    const element = document.getElementById("watch-trading");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback fallback to modal play of the main stream
      const mainVid = VIDEOS.find(v => v.id === "main_video") || VIDEOS[0];
      handlePlayVideo(mainVid);
    }
  };

  return (
    <div id="scipio-app" className="min-h-screen bg-brand-black text-brand-on-surface flex flex-col font-sans selection:bg-brand-gold selection:text-brand-on-primary">
      {/* Structural Framing Line (Top edge highlight) */}
      <div className="h-[3px] bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark fixed top-0 w-full z-[100]" />

      {/* Persistent Navigation Bar */}
      <Navbar onJoinLiveClick={() => handleOpenJoin()} />

      {/* Main Single Screen Layout Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Segment */}
        <Hero 
          onJoinLiveClick={() => handleOpenJoin()} 
          onWatchYoutubeClick={handleWatchOnYoutube} 
        />

        {/* Section 2: Trust Highlights Grid */}
        <TrustMetrics onJoinClick={() => handleOpenJoin()} />

        {/* Section 3: YouTube Real Trading Feed */}
        <YouTubeSection onVideoClick={handlePlayVideo} />

        {/* Section 4: Elite Command Center */}
        <TradingRoom onEnterRoomClick={() => handleOpenJoin()} />

        {/* Section 5: Algorithmic Systems Catalogue */}
        <Algorithms onBotSelect={handleOpenBacktest} />

        {/* Section 6: Testimonials and Social Proof */}
        <Testimonials onPlayTestimonialVideo={handlePlayVideo} />

        {/* Section 7: Roman Classical CTA Banner */}
        <LeadMagnet onJoinClick={() => handleOpenJoin()} />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* ==================== INTERACTIVE ADMISSIONS OVERLAYS ==================== */}
      
      {/* 1. Onboarding Admissions Registration Ticket Generator */}
      <JoinLiveModal 
        isOpen={isJoinOpen} 
        onClose={() => setIsJoinOpen(false)} 
        selectedBotId={selectedBotForJoin}
        bots={BOTS}
      />

      {/* 2. Interactive Video Replay / Live Feed Chat Console */}
      <VideoPlayerModal 
        isOpen={isVideoOpen} 
        onClose={() => {
          setIsVideoOpen(false);
          setSelectedVideo(null);
        }} 
        video={selectedVideo}
      />

      {/* 3. Algorithmic System Backtest Simulation Lab Drawer */}
      <BotBacktestModal 
        isOpen={isBacktestOpen} 
        onClose={() => {
          setIsBacktestOpen(false);
          setSelectedBotForBacktest(null);
        }} 
        bot={selectedBotForBacktest}
      />
    </div>
  );
}
