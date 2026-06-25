import React from "react";
import { LOGO_URL } from "../data";

export default function Footer() {
  const currentRomanYear = "MMXXVI"; // representing 2026

  return (
    <footer className="bg-brand-surface-lowest border-t border-brand-gold/20 w-full z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-16 gap-8 max-w-7xl mx-auto">
        
        {/* Left branding segment */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img 
            alt="SCIPIO Logo" 
            className="h-20 w-auto hover:brightness-110 transition-all object-contain" 
            src={LOGO_URL} 
          />
          <p className="font-sans text-xs text-brand-on-surface-variant max-w-xs leading-relaxed">
            Institutional-grade trading tools and education for the disciplined market participant.
          </p>
        </div>

        {/* Central legal links */}
        <div className="flex flex-wrap justify-center gap-6 text-brand-on-surface-variant">
          <a 
            href="#terms" 
            onClick={(e) => { e.preventDefault(); alert("Terms of Service overlay: By accessing Scipio, you agree to execute operations with discipline."); }}
            className="font-sans text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
          >
            Terms
          </a>
          <a 
            href="#privacy" 
            onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Your cryptographic keys and credentials are never stored or logged on our servers."); }}
            className="font-sans text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
          >
            Privacy
          </a>
          <a 
            href="#risk" 
            onClick={(e) => { e.preventDefault(); alert("Risk Disclosure: Trading financial assets involves significant risk of loss. Past performance of Scipio Bots is not indicative of future results. Play with conservative risk parameters."); }}
            className="font-sans text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
          >
            Risk Disclosure
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); alert("Contact Admissions: Support team available via support@scipiotrading.com."); }}
            className="font-sans text-xs uppercase tracking-widest hover:text-brand-gold transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Right social / copyright segment */}
        <div className="flex flex-col items-center md:items-end gap-5 text-center md:text-right">
          <div className="flex gap-4">
            {/* YouTube Social Icon */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center hover:bg-brand-gold/10 transition-all text-brand-gold rounded-none"
              title="YouTube Feed"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            
            {/* Instagram Social Icon */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center hover:bg-brand-gold/10 transition-all text-brand-gold rounded-none"
              title="Instagram Page"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            
            {/* Twitter/X Social Icon */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center hover:bg-brand-gold/10 transition-all text-brand-gold rounded-none"
              title="X Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <p className="font-sans text-[10px] text-brand-on-surface-variant uppercase tracking-[0.2em]">
            © {currentRomanYear} SCIPIO TRADING. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}
