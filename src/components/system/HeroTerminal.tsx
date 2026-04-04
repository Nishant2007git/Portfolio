"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Activity } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const words = ["Architecting", "Perfecting", "Deploying", "Dominating"];

export function HeroTerminal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">
      {/* Text Content */}
      <div className="lg:col-span-8 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">
              Available for Hire · 2026
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
            Based in India · Open to Remote
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white mb-8">
          <div className="h-[1.1em] overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute inset-0 block text-primary italic"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="block mt-2">The Future.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-10"
        >
          Full-stack engineer who builds products people actually love — from 
          pixel-perfect interfaces to AI-powered backends that scale under pressure. 
          I turn ambitious ideas into shipped software.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-6"
        >
          <button className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-accent overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View My Work <Activity size={14} />
            </span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </button>
          
          <button className="px-8 py-4 border border-white/10 text-white/80 font-bold uppercase tracking-widest text-xs rounded hover:bg-white/5 transition-all">
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>

      {/* Identity Card */}
      <div className="lg:col-span-4 flex items-center justify-center relative">
        <GlassCard className="w-full aspect-4/5 flex flex-col justify-between group overflow-hidden">
          <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Terminal size={20} />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                System.Identity
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-4xl font-bold text-white mb-1">Nishant</div>
              <div className="text-primary font-mono text-[10px] uppercase tracking-widest">
                Full-Stack Engineer · Open to Work
              </div>
            </div>

            {/* Fake Log Stream */}
            <div className="pt-6 font-mono text-[9px] space-y-1 text-white/30">
              <div className="flex gap-2">
                <span className="text-primary">[OK]</span>
                <span>Loading portfolio data...</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary">[OK]</span>
                <span>Projects shipped: 12+ and counting</span>
              </div>
              <div className="flex gap-2 text-secondary">
                <span>[LOG]</span>
                <span>Tech stack: Full-spectrum verified</span>
              </div>
              <div className="flex gap-2">
                <span className="text-primary">[OK]</span>
                <span>Status: Available for new projects</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
            <div className="flex-1">
              <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Reliability</div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-primary" 
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Sync</div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "85%" }}
                   transition={{ duration: 1.5, delay: 1.2 }}
                  className="h-full bg-secondary" 
                />
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Ambient Glows */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 blur-[80px] pointer-events-none" />
      </div>
    </div>
  );
}
