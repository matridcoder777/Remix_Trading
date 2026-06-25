import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Play, Pause, Send, TrendingUp, Sparkles, Clock, 
  User, Mail, ArrowRight, ShieldCheck, Cpu, Volume2, VolumeX,
  RotateCcw, ChartLine, Award, Coins, AlertCircle, ChevronRight
} from "lucide-react";
import { Bot, Video } from "../types";

// Simulated live chat statements for trading
const TRADING_CHAT_MESSAGES = [
  { user: "Lorenzo_FX", text: "Gold order block at 2320 holding strong.", time: "10:41 AM" },
  { user: "AlphaTrader", text: "NQ liquidity sweep completed. Long target hit!", time: "10:41 AM" },
  { user: "Matteo_Milano", text: "Scipio Gold Bot caught that move perfectly.", time: "10:42 AM" },
  { user: "Sophia_K", text: "Unbelievable precision on the TrendMaestro indicator today.", time: "10:42 AM" },
  { user: "RiskManager_1", text: "Sticking to 1% risk. Capital preservation first.", time: "10:42 AM" },
  { user: "Gianluca_V", text: "Live session is pure gold. Thanks for the breakdown.", time: "10:43 AM" },
  { user: "CryptoNero", text: "Forex bot has been printing on GBPUSD.", time: "10:43 AM" },
  { user: "Elena_T", text: "Is anyone trading the upcoming FOMC release?", time: "10:44 AM" },
  { user: "Scipio_Support", text: "Welcome everyone! Reminder: discipline over emotion.", time: "10:44 AM" },
  { user: "Marcus_Aurelius", text: "Control your thoughts, control your trades.", time: "10:45 AM" },
  { user: "ScalperPro", text: "Secured +25 ticks on the Nasdaq scalp. Done for the day!", time: "10:45 AM" },
  { user: "Devon_C", text: "The transparency here is unmatched in the industry.", time: "10:46 AM" },
];

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBotId?: string;
  bots: Bot[];
}

export function JoinLiveModal({ isOpen, onClose, selectedBotId = "", bots }: JoinModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("Intermediate");
  const [botInterest, setBotInterest] = useState(selectedBotId || "bot1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      if (selectedBotId) {
        setBotInterest(selectedBotId);
      }
      setTicketData(null);
    }
  }, [isOpen, selectedBotId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const serial = `SCIPIO-T-${Math.floor(100000 + Math.random() * 900000)}`;
      const selectedBotName = bots.find(b => b.id === botInterest)?.name || "Elite Trading Room";
      setTicketData({
        serial,
        name,
        email,
        experience,
        interest: selectedBotName,
        joinedAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })
      });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#0b1120] border border-brand-gold/30 p-0 text-brand-on-surface shadow-[0_0_50px_rgba(242,202,80,0.15)] overflow-hidden"
          >
            {/* Corner Decorative Lines */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-gold" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-brand-gold" />
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-brand-gold" />
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-brand-gold" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-on-surface-variant hover:text-brand-gold transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {!ticketData ? (
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-brand-gold mb-2">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold">Imperial Command Admissions</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold tracking-tight text-white">Join Scipio Live</h3>
                  <p className="text-sm text-brand-on-surface-variant mt-2">
                    Enter your details to generate your personal digital access pass to the Daily Live Trading sessions and proprietary tools.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-brand-on-surface-variant font-medium">Your Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-brand-gold/50" />
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g., Marcus Aurelius"
                          className="w-full bg-[#110e07] border border-brand-outline-variant/50 focus:border-brand-gold text-white pl-10 pr-4 py-2.5 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-brand-on-surface-variant font-medium">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-brand-gold/50" />
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g., marcus@rome.com"
                          className="w-full bg-[#110e07] border border-brand-outline-variant/50 focus:border-brand-gold text-white pl-10 pr-4 py-2.5 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-brand-on-surface-variant font-medium">Trading Level</label>
                      <select 
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full bg-[#110e07] border border-brand-outline-variant/50 focus:border-brand-gold text-white px-3 py-2.5 text-sm outline-none transition-colors"
                      >
                        <option value="Beginner">Beginner (&lt; 1 Year)</option>
                        <option value="Intermediate">Intermediate (1-3 Years)</option>
                        <option value="Professional">Professional (3+ Years)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-brand-on-surface-variant font-medium">Primary Bot Interest</label>
                      <select 
                        value={botInterest}
                        onChange={(e) => setBotInterest(e.target.value)}
                        className="w-full bg-[#110e07] border border-brand-outline-variant/50 focus:border-brand-gold text-white px-3 py-2.5 text-sm outline-none transition-colors"
                      >
                        <option value="room">Elite Trading Room Access</option>
                        {bots.map(bot => (
                          <option key={bot.id} value={bot.id}>{bot.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-outline-variant/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-brand-on-surface-variant">
                      <ShieldCheck className="w-4 h-4 text-brand-gold" />
                      <span>Secured institutional-grade registration. No credit card required.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-brand-on-primary px-8 py-3.5 font-sans text-xs font-bold uppercase tracking-widest metallic-glint transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-brand-on-primary border-t-transparent" />
                          <span>ISSUING ACCESS...</span>
                        </>
                      ) : (
                        <>
                          <span>GENERATE ACCESS TICKET</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="p-8 md:p-10 flex flex-col items-center">
                {/* Dynamic Ticket Output */}
                <div className="w-full text-center mb-6">
                  <div className="inline-flex p-3 rounded-full bg-brand-gold/10 border border-brand-gold/30 mb-3 animate-bounce">
                    <Award className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Imperial Credentials Issued</h3>
                  <p className="text-sm text-brand-on-surface-variant mt-1">Your unique cryptographic entry ticket has been registered in our database.</p>
                </div>

                {/* Ticket Styling */}
                <div className="relative w-full bg-[#050505] border-2 border-dashed border-brand-gold/40 p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 overflow-hidden max-w-lg mx-auto">
                  {/* Circle cutouts at joints */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0b1120]" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0b1120]" />

                  <div className="flex-1 space-y-4 text-left md:border-r md:border-brand-outline-variant/30 md:pr-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold block font-mono">AUTHORIZED PASS</span>
                      <h4 className="font-serif text-lg font-bold text-white tracking-wide mt-1">SCIPIO COMMAND CENTER</h4>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-brand-on-surface-variant font-medium block">REGISTRANT</span>
                        <span className="text-sm font-semibold text-brand-on-surface">{ticketData.name}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-brand-on-surface-variant font-medium block">EMAIL</span>
                        <span className="text-xs text-brand-on-surface/80 font-mono">{ticketData.email}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-brand-on-surface-variant font-medium block">LEVEL</span>
                          <span className="text-xs text-brand-on-surface font-semibold">{ticketData.experience}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-brand-on-surface-variant font-medium block">INTEREST</span>
                          <span className="text-xs text-brand-on-surface font-semibold truncate block">{ticketData.interest}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-center md:items-end text-center md:text-right gap-4 shrink-0 min-w-[120px]">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest text-brand-on-surface-variant font-medium block">SERIAL KEY</span>
                      <span className="text-sm font-mono font-bold text-brand-gold tracking-wider">{ticketData.serial}</span>
                    </div>

                    {/* Barcode representation */}
                    <div className="flex gap-[2px] h-10 mt-2 bg-brand-on-surface/10 p-1 rounded">
                      {[1,3,2,1,4,2,1,3,2,1,4,1,2,3,1].map((val, i) => (
                        <div key={i} className="bg-brand-gold/70" style={{ width: `${val * 1.5}px` }} />
                      ))}
                    </div>

                    <span className="text-[9px] font-mono text-brand-on-surface-variant">{ticketData.joinedAt}</span>
                  </div>
                </div>

                <div className="mt-8 flex gap-4 w-full justify-center">
                  <button 
                    onClick={onClose}
                    className="border border-brand-outline-variant/50 hover:border-brand-gold text-brand-on-surface px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest transition-all active:scale-95"
                  >
                    CLOSE PORTAL
                  </button>
                  <a 
                    href="#watch-trading"
                    onClick={() => {
                      onClose();
                      // Smooth scroll
                      const el = document.getElementById("watch-trading");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-brand-gold hover:bg-brand-gold/90 text-brand-on-primary px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center gap-1"
                  >
                    <span>ENTER ROOM NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video | null;
}

export function VideoPlayerModal({ isOpen, onClose, video }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(32);
  const [chatMessages, setChatMessages] = useState<any[]>(TRADING_CHAT_MESSAGES.slice(0, 5));
  const [userInputMessage, setUserInputMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [chartTicks, setChartTicks] = useState<number[]>(Array.from({ length: 40 }, () => 100 + Math.random() * 80));

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      // Reset Chat messages
      setChatMessages(TRADING_CHAT_MESSAGES.slice(0, 5));
      setProgress(Math.floor(Math.random() * 40) + 15);
    }
  }, [isOpen, video]);

  // Handle auto-updating chart ticks and chat messages if "live" mode
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    // Tick Simulator
    const tickInterval = setInterval(() => {
      setChartTicks(prev => {
        const nextTicks = [...prev.slice(1)];
        const lastTick = prev[prev.length - 1];
        const change = (Math.random() - 0.48) * 6; // slightly positive drift
        nextTicks.push(Math.max(40, Math.min(180, lastTick + change)));
        return nextTicks;
      });

      // Periodic progress bar increase
      setProgress(p => (p >= 100 ? 0 : p + 0.1));
    }, 400);

    // Chat simulation
    const chatInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * TRADING_CHAT_MESSAGES.length);
      const randomMsg = TRADING_CHAT_MESSAGES[randomIndex];
      
      setChatMessages(prev => {
        // limit to 30 messages
        const updated = [...prev, {
          user: randomMsg.user,
          text: randomMsg.text,
          time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
          id: Math.random().toString()
        }];
        return updated.slice(-25);
      });
    }, 3200);

    return () => {
      clearInterval(tickInterval);
      clearInterval(chatInterval);
    };
  }, [isOpen, isPlaying]);

  // Scroll to chat bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInputMessage.trim()) return;

    setChatMessages(prev => [
      ...prev,
      {
        user: "You (Imperial Tactician)",
        text: userInputMessage,
        time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
        isUser: true,
        id: Math.random().toString()
      }
    ]);
    setUserInputMessage("");
  };

  const formattedTime = () => {
    if (!video) return "00:00";
    const totalSecs = 1200; // Mock 20 mins length
    const currentSecs = Math.floor((progress / 100) * totalSecs);
    const format = (s: number) => Math.floor(s).toString().padStart(2, "0");
    return `${format(currentSecs / 60)}:${format(currentSecs % 60)} / ${video.duration}`;
  };

  return (
    <AnimatePresence>
      {isOpen && video && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl bg-[#0b1120] border border-brand-gold/30 p-0 text-brand-on-surface shadow-[0_0_60px_rgba(242,202,80,0.2)] overflow-hidden flex flex-col md:flex-row h-[85vh]"
          >
            {/* Left side: Interactive Video & Controls */}
            <div className="flex-1 bg-black flex flex-col h-full relative border-r border-brand-outline-variant/30">
              
              {/* Main Player Visual Window */}
              <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-brand-surface-lowest">
                
                {/* Floating HUD status indicator */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 px-3 py-1 border border-brand-gold/20 text-brand-gold rounded">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping shrink-0" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    {video.id === "main_video" ? "LIVE HUD" : "SESSION REPLAY"}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 bg-black/60 px-3 py-1 border border-brand-outline-variant/40 text-brand-on-surface-variant font-mono text-[10px]">
                  UTC: {new Date().toISOString().substring(11, 19)}
                </div>

                {/* Simulated live chart animation - representing active software screen */}
                <div className="absolute inset-x-8 top-16 bottom-16 border border-brand-gold/10 p-4 flex flex-col justify-between">
                  
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-[0.03] pointer-events-none">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border border-brand-on-surface" />
                    ))}
                  </div>

                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <div className="text-xs font-mono font-bold text-brand-gold">{video.title}</div>
                      <div className="text-[10px] font-mono text-brand-on-surface-variant">INSTRUMENT: XAUUSD / NQ1!</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-green-400">P/L: +$14,240.50</div>
                      <div className="text-[10px] font-mono text-brand-on-surface-variant">ACTIVE BOT: GOLD PRO</div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="flex-1 flex items-end justify-center py-4">
                    <svg className="w-full h-40 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f2ca50" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#f2ca50" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Line Markers */}
                      <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(166,124,0,0.1)" strokeWidth="0.5" strokeDasharray="3" />
                      
                      {/* Gradient Fill under Path */}
                      <path
                        d={`M 0,100 ${chartTicks.map((tick, idx) => `L ${(idx / (chartTicks.length - 1)) * 100},${100 - (tick / 200) * 100}`).join(" ")} L 100,100 Z`}
                        fill="url(#chartGradient)"
                      />

                      {/* Line Path */}
                      <path
                        d={chartTicks.map((tick, idx) => `${idx === 0 ? "M" : "L"} ${(idx / (chartTicks.length - 1)) * 100},${100 - (tick / 200) * 100}`).join(" ")}
                        fill="none"
                        stroke="#f2ca50"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Moving pulse indicator at end */}
                      {chartTicks.length > 0 && (
                        <circle 
                          cx="100" 
                          cy={100 - (chartTicks[chartTicks.length - 1] / 200) * 100} 
                          r="3" 
                          fill="#f2ca50" 
                          className="animate-ping"
                        />
                      )}
                    </svg>
                  </div>

                  {/* Trading Signal Box */}
                  <div className="flex items-center justify-between border-t border-brand-gold/20 pt-3 relative z-10 bg-brand-surface-lowest/80 p-3 rounded">
                    <div className="flex items-center gap-3">
                      <div className="p-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-widest text-brand-on-surface-variant">LATEST ORDER</div>
                        <div className="text-xs font-mono font-bold text-white">BUY XAUUSD @ 2321.40</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-brand-on-surface-variant block">RESULT STATUS</span>
                      <span className="text-xs font-mono font-bold text-green-400">TAKE PROFIT HIT (+38 PIPS)</span>
                    </div>
                  </div>
                </div>

                {/* Overlaid static backdrop image if not playing */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10 transition-all">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold bg-brand-surface-lowest/60 backdrop-blur-sm hover:scale-110 hover:bg-brand-gold hover:text-black transition-all"
                    >
                      <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Custom Media Player Control Bar */}
              <div className="bg-[#0b1120] border-t border-brand-outline-variant/30 p-4 space-y-3 z-20">
                {/* Scrubbing Bar */}
                <div className="relative group cursor-pointer h-1.5 w-full bg-brand-outline-variant/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-brand-gold transition-all duration-300" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>

                <div className="flex justify-between items-center text-brand-on-surface">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-brand-on-surface-variant hover:text-brand-gold transition-colors focus:outline-none"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>

                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-brand-on-surface-variant hover:text-brand-gold transition-colors focus:outline-none"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>

                    <span className="font-mono text-xs text-brand-on-surface-variant">
                      {formattedTime()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest bg-brand-gold/10 px-2 py-0.5 border border-brand-gold/20">
                      1080p HQ
                    </span>
                    <button 
                      onClick={onClose}
                      className="text-brand-on-surface-variant hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest"
                    >
                      EXIT THEATRE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Live Cascading Chat */}
            <div className="w-full md:w-80 bg-brand-surface flex flex-col h-full overflow-hidden relative">
              {/* Header */}
              <div className="p-4 border-b border-brand-outline-variant/30 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="font-sans text-xs uppercase tracking-widest font-bold">Live Room Chat</span>
                </div>
                <span className="text-[10px] font-mono text-brand-on-surface-variant font-bold">
                  {chatMessages.length + 42} ONLINE
                </span>
              </div>

              {/* Chat messages viewport */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 hide-scrollbar bg-brand-surface-lowest/50">
                {chatMessages.map((msg) => (
                  <div key={msg.id || msg.user + msg.time} className={`text-xs ${msg.isUser ? "text-right" : "text-left"}`}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className={`font-semibold ${msg.isUser ? "text-brand-gold" : "text-brand-on-surface-variant"}`}>
                        {msg.user}
                      </span>
                      <span className="text-[9px] text-brand-on-surface-variant font-mono">{msg.time}</span>
                    </div>
                    <p className="mt-1 text-brand-on-surface font-sans leading-relaxed bg-[#1f1b13]/40 p-2 border-l border-brand-gold/20">
                      {msg.text}
                    </p>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Input section */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-brand-outline-variant/30 bg-[#0b1120] shrink-0">
                <div className="relative">
                  <input 
                    type="text" 
                    value={userInputMessage}
                    onChange={(e) => setUserInputMessage(e.target.value)}
                    placeholder="Ask standard questions or send message..."
                    className="w-full bg-[#110e07] border border-brand-outline-variant/50 focus:border-brand-gold text-xs text-white pl-3 pr-10 py-2.5 outline-none transition-colors"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1 top-1 p-1.5 text-brand-gold hover:text-white transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface BacktestModalProps {
  isOpen: boolean;
  onClose: () => void;
  bot: Bot | null;
}

export function BotBacktestModal({ isOpen, onClose, bot }: BacktestModalProps) {
  const [startingCapital, setStartingCapital] = useState(10000);
  const [riskMultiplier, setRiskMultiplier] = useState(1);
  const [isBacktesting, setIsBacktesting] = useState(false);
  const [backtestProgress, setBacktestProgress] = useState(0);
  const [equityCurve, setEquityCurve] = useState<number[]>([]);
  const [drawdownCurve, setDrawdownCurve] = useState<number[]>([]);
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    if (isOpen && bot) {
      setIsBacktesting(false);
      setBacktestProgress(0);
      setEquityCurve([]);
      setDrawdownCurve([]);
      setMetrics(null);
    }
  }, [isOpen, bot]);

  const handleRunBacktest = () => {
    if (isBacktesting) return;

    setIsBacktesting(true);
    setBacktestProgress(0);
    setEquityCurve([]);
    setDrawdownCurve([]);
    setMetrics(null);

    const steps = 40;
    let stepCount = 0;
    let currentCapital = startingCapital;
    const points: number[] = [startingCapital];
    const drawdowns: number[] = [0];
    let peak = startingCapital;

    // Standard baseline stats based on bot properties
    const winRateVal = parseFloat(bot?.winRate || "75");
    const profitFactorVal = parseFloat(bot?.profitFactor || "2.0");

    const timer = setInterval(() => {
      stepCount++;
      setBacktestProgress(Math.floor((stepCount / steps) * 100));

      // Math representing standard simulated trading compounding
      const tradeRandom = Math.random() * 100;
      let profitOrLoss = 0;

      if (tradeRandom < winRateVal) {
        // Winning Trade
        const winPercent = (Math.random() * 1.5 + 0.5) * riskMultiplier * (profitFactorVal / 1.5);
        profitOrLoss = currentCapital * (winPercent / 100);
      } else {
        // Losing Trade
        const lossPercent = (Math.random() * 1.2 + 0.3) * riskMultiplier;
        profitOrLoss = -currentCapital * (lossPercent / 100);
      }

      currentCapital += profitOrLoss;
      points.push(Math.round(currentCapital));

      if (currentCapital > peak) {
        peak = currentCapital;
      }
      const dd = ((peak - currentCapital) / peak) * 100;
      drawdowns.push(parseFloat(dd.toFixed(1)));

      setEquityCurve([...points]);
      setDrawdownCurve([...drawdowns]);

      if (stepCount >= steps) {
        clearInterval(timer);
        setIsBacktesting(false);

        // Calculate final report metrics
        const totalProfitPercent = ((currentCapital - startingCapital) / startingCapital) * 100;
        const maxDrawdown = Math.max(...drawdowns);
        const winCount = Math.round(steps * (winRateVal / 100) + (Math.random() - 0.5) * 3);
        const profitFactorCalculated = (profitFactorVal * (0.9 + Math.random() * 0.2)).toFixed(2);

        setMetrics({
          finalEquity: Math.round(currentCapital),
          totalProfit: totalProfitPercent.toFixed(1),
          maxDD: maxDrawdown.toFixed(1),
          tradesExecuted: steps,
          wins: winCount,
          losses: steps - winCount,
          profitFactor: profitFactorCalculated,
          sharpeRatio: (1.8 + (riskMultiplier * 0.2) + Math.random() * 0.5 - (maxDrawdown > 15 ? 0.6 : 0)).toFixed(2)
        });
      }
    }, 50);
  };

  return (
    <AnimatePresence>
      {isOpen && bot && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl bg-[#0b1120] border border-brand-gold/30 p-0 text-brand-on-surface shadow-[0_0_50px_rgba(242,202,80,0.15)] overflow-hidden"
          >
            {/* Corner Decorative Lines */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-gold" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-brand-gold" />
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-brand-gold" />
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-brand-gold" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-on-surface-variant hover:text-brand-gold transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-outline-variant/20 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-brand-gold mb-1">
                    <Cpu className="w-5 h-5" />
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold">{bot.accessType} MODEL</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">{bot.name} Backtest Lab</h3>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#16130b] border border-brand-gold/10 px-3 py-1.5 rounded">
                    <span className="text-[9px] uppercase tracking-wider text-brand-on-surface-variant block">Baseline Win Rate</span>
                    <span className="text-xs font-mono font-bold text-brand-gold">{bot.winRate}</span>
                  </div>
                  <div className="bg-[#16130b] border border-brand-gold/10 px-3 py-1.5 rounded">
                    <span className="text-[9px] uppercase tracking-wider text-brand-on-surface-variant block">Profit Factor</span>
                    <span className="text-xs font-mono font-bold text-brand-gold">{bot.profitFactor}</span>
                  </div>
                </div>
              </div>

              {/* Simulation controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-brand-on-surface-variant block">Starting Capital ($)</label>
                  <select 
                    value={startingCapital}
                    onChange={(e) => setStartingCapital(Number(e.target.value))}
                    disabled={isBacktesting}
                    className="w-full bg-[#110e07] border border-brand-outline-variant/40 focus:border-brand-gold text-xs text-white px-3 py-2 outline-none transition-colors"
                  >
                    <option value={5000}>$5,000 USD</option>
                    <option value={10000}>$10,000 USD</option>
                    <option value={25000}>$25,000 USD</option>
                    <option value={50000}>$50,000 USD</option>
                    <option value={100000}>$100,000 USD (Max Prop)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-brand-on-surface-variant block">Risk Multiplier ({riskMultiplier}x)</label>
                  <select 
                    value={riskMultiplier}
                    onChange={(e) => setRiskMultiplier(Number(e.target.value))}
                    disabled={isBacktesting}
                    className="w-full bg-[#110e07] border border-brand-outline-variant/40 focus:border-brand-gold text-xs text-white px-3 py-2 outline-none transition-colors"
                  >
                    <option value={0.5}>Conservative (0.5x)</option>
                    <option value={1}>Standard Strategy (1.0x)</option>
                    <option value={1.5}>Moderate Risk (1.5x)</option>
                    <option value={2.5}>Aggressive Yield (2.5x)</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={handleRunBacktest}
                    disabled={isBacktesting}
                    className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-on-primary py-2.5 font-sans text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isBacktesting ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-2 border-brand-on-primary border-t-transparent" />
                        <span>TESTING ({backtestProgress}%)</span>
                      </>
                    ) : (
                      <>
                        <ChartLine className="w-4 h-4" />
                        <span>RUN HISTORIC BACKTEST</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Chart Visualizer */}
              <div className="relative h-48 border border-brand-gold/10 bg-[#050505] p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 opacity-[0.02] pointer-events-none">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="border border-white" />
                  ))}
                </div>

                {equityCurve.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <Coins className="w-8 h-8 text-brand-gold/30 mb-2 animate-pulse" />
                    <span className="text-xs text-brand-on-surface-variant font-medium">Ready to compile historical market data...</span>
                    <span className="text-[10px] text-brand-outline-variant mt-1">Simulates 40 highly complex institutional trading signals.</span>
                  </div>
                ) : (
                  <div className="flex-1 flex items-end justify-center">
                    <svg className="w-full h-32 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                      {/* Grid Line Markers */}
                      <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(166,124,0,0.1)" strokeWidth="0.5" strokeDasharray="3" />
                      
                      {/* Compile calculations */}
                      {(() => {
                        const min = Math.min(...equityCurve);
                        const max = Math.max(...equityCurve);
                        const diff = max - min || 1;
                        
                        return (
                          <>
                            {/* Fill gradient */}
                            <path
                              d={`M 0,100 ${equityCurve.map((tick, idx) => `L ${(idx / (equityCurve.length - 1)) * 100},${100 - ((tick - min) / diff) * 85 - 5}`).join(" ")} L 100,100 Z`}
                              fill="rgba(242,202,80,0.06)"
                            />
                            {/* Active Line Path */}
                            <path
                              d={equityCurve.map((tick, idx) => `${idx === 0 ? "M" : "L"} ${(idx / (equityCurve.length - 1)) * 100},${100 - ((tick - min) / diff) * 85 - 5}`).join(" ")}
                              fill="none"
                              stroke="#f2ca50"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {/* Current Equity Pin */}
                            <circle 
                              cx="100" 
                              cy={100 - ((equityCurve[equityCurve.length - 1] - min) / diff) * 85 - 5} 
                              r="3" 
                              fill="#f2ca50"
                            />
                          </>
                        );
                      })()}
                    </svg>
                  </div>
                )}

                {equityCurve.length > 0 && (
                  <div className="flex justify-between items-center text-[9px] font-mono text-brand-on-surface-variant pt-2 border-t border-brand-outline-variant/15 relative z-10">
                    <span>START: ${startingCapital.toLocaleString()}</span>
                    <span className="text-brand-gold font-bold">ACTIVE SIMULATION CURVE</span>
                    <span>CURRENT: ${equityCurve[equityCurve.length - 1].toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Compiled Backtest Report */}
              {metrics && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 border border-brand-gold/20 bg-brand-surface-lowest/70 p-4 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest block font-medium">Final Capital</span>
                    <span className="text-sm font-mono font-bold text-white">${metrics.finalEquity.toLocaleString()}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest block font-medium">Total Profit</span>
                    <span className={`text-sm font-mono font-bold ${parseFloat(metrics.totalProfit) >= 0 ? "text-green-400" : "text-red-400"}`}>
                      +{metrics.totalProfit}%
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest block font-medium">Max Drawdown</span>
                    <span className={`text-sm font-mono font-bold ${parseFloat(metrics.maxDD) > 15 ? "text-red-400" : "text-amber-400"}`}>
                      {metrics.maxDD}%
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest block font-medium">Sharpe Ratio</span>
                    <span className="text-sm font-mono font-bold text-brand-gold">{metrics.sharpeRatio}</span>
                  </div>

                  <div className="space-y-1 pt-2 md:pt-0">
                    <span className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest block font-medium">Win/Loss Split</span>
                    <span className="text-xs text-brand-on-surface">
                      {metrics.wins}W - {metrics.losses}L
                    </span>
                  </div>

                  <div className="space-y-1 pt-2 md:pt-0">
                    <span className="text-[10px] text-brand-on-surface-variant uppercase tracking-widest block font-medium">Strategy Profiler</span>
                    <span className="text-xs text-brand-on-surface-variant italic block truncate max-w-[120px]">{bot.strategy}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-end pt-2 md:pt-0 gap-3">
                    <div className="flex items-center gap-1 text-[10px] text-brand-gold font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>STRATEGY ROBUST</span>
                    </div>
                    <button 
                      onClick={() => {
                        onClose();
                        // Open checkout / purchase flow mock alert
                        alert(`Request registered! An institutional specialist will contact you about obtaining license credentials for ${bot.name}.`);
                      }}
                      className="bg-brand-gold text-brand-on-primary px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 active:scale-95 transition-all"
                    >
                      <span>ACQUIRE KEY</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
