import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LOGO_URL } from "../data";

interface NavbarProps {
  onJoinLiveClick: () => void;
}

export default function Navbar({ onJoinLiveClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-brand-black/90 border-b border-brand-outline-variant/35 backdrop-blur-xl py-2" 
          : "bg-brand-black/40 border-b border-brand-outline-variant/10 backdrop-blur-md py-4"
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Left Section: Logo & Desktop Links */}
        <div className="flex items-center gap-8">
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("hero");
            }}
            className="flex items-center shrink-0"
          >
            <img 
              alt="SCIPIO Logo" 
              className="h-20 w-auto scale-110 object-contain hover:brightness-110 transition-all" 
              src={LOGO_URL} 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center pt-1">
            <button 
              onClick={() => handleScrollToSection("trading-room")}
              className="font-sans text-xs uppercase tracking-[0.15em] text-brand-on-surface-variant hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold/40"
            >
              Trading Room
            </button>
            <button 
              onClick={() => handleScrollToSection("algorithms")}
              className="font-sans text-xs uppercase tracking-[0.15em] text-brand-on-surface-variant hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold/40"
            >
              Bots
            </button>
            <button 
              onClick={() => handleScrollToSection("algorithms")}
              className="font-sans text-xs uppercase tracking-[0.15em] text-brand-on-surface-variant hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold/40"
            >
              Indicators
            </button>
            <button 
              onClick={() => handleScrollToSection("watch-trading")}
              className="font-sans text-xs uppercase tracking-[0.15em] text-brand-on-surface-variant hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold/40"
            >
              YouTube
            </button>
          </div>
        </div>

        {/* Right Section: Join Live & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onJoinLiveClick}
            className="hidden sm:block bg-brand-gold text-brand-on-primary px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.15em] hover:bg-brand-gold/90 transition-all active:scale-95 metallic-glint shrink-0"
          >
            JOIN LIVE
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-on-surface hover:text-brand-gold p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[81px] bg-brand-black border-b border-brand-outline-variant/50 p-6 flex flex-col gap-6 animate-fadeIn z-40 shadow-2xl">
          <button 
            onClick={() => handleScrollToSection("trading-room")}
            className="font-sans text-xs uppercase tracking-widest text-left text-brand-on-surface hover:text-brand-gold py-2"
          >
            Trading Room
          </button>
          <button 
            onClick={() => handleScrollToSection("algorithms")}
            className="font-sans text-xs uppercase tracking-widest text-left text-brand-on-surface hover:text-brand-gold py-2"
          >
            Bots
          </button>
          <button 
            onClick={() => handleScrollToSection("algorithms")}
            className="font-sans text-xs uppercase tracking-widest text-left text-brand-on-surface hover:text-brand-gold py-2"
          >
            Indicators
          </button>
          <button 
            onClick={() => handleScrollToSection("watch-trading")}
            className="font-sans text-xs uppercase tracking-widest text-left text-brand-on-surface hover:text-brand-gold py-2"
          >
            YouTube
          </button>

          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onJoinLiveClick();
            }}
            className="w-full bg-brand-gold text-brand-on-primary py-4 font-sans text-xs font-bold uppercase tracking-widest text-center mt-2"
          >
            JOIN LIVE
          </button>
        </div>
      )}
    </header>
  );
}
