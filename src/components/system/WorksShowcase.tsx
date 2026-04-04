"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, ChevronRight } from "lucide-react";

// Inline SVG — Github not available in this lucide-react version
const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
import { GlassCard } from "@/components/ui/glass-card";
import Image from "next/image";

const projects = [
  {
    id: "library-os",
    title: "Library OS",
    description: "A full-scale institutional management platform — real-time inventory tracking, AI-powered analytics, automated fine calculations, and a QR-based attendance system built for thousands of daily users.",
    image: "/assets/library_preview.png",
    tags: ["Next.js 14", "Turbo Repo", "Postgres", "Redis"],
    stats: { performance: "99%", latency: "<50ms" },
    featured: true
  },
  {
    id: "carenexus",
    title: "CareNexus AI",
    description: "A HIPAA-aligned healthcare platform with role-based access, AES-256 encrypted records, AI-assisted triage suggestions, and a real-time appointment management system.",
    image: "/assets/hospital_preview.png",
    tags: ["Firebase", "OpenAI", "Vercel AI"],
    stats: { performance: "94%", encryption: "AES-256" },
  },
  {
    id: "driveshare",
    title: "DriveShare Pro",
    description: "A peer-to-peer vehicle rental marketplace with Stripe-powered escrow payments, dynamic pricing, an admin analytics dashboard, and a booking approval workflow.",
    image: "/assets/vehicle_preview.png",
    tags: ["Fastify", "Stripe", "Three.js"],
    stats: { performance: "98%", reliability: "99.9%" },
  }
];

type ModeMap = { [key: string]: "overview" | "architecture" };

export function WorksShowcase() {
  const seed: ModeMap = {};
  const initialModes = projects.reduce(
    (acc, p) => { acc[p.id] = "overview"; return acc; },
    seed
  );
  const [activeMode, setActiveMode] = useState(initialModes);

  return (
    <section id="work" className="py-32 relative">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-primary text-xs uppercase tracking-[0.4em] font-bold">Selected Work</span>
          <div className="h-px w-12 bg-primary/40" />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Products I&apos;ve <span className="text-primary italic">Shipped.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={project.featured ? "md:col-span-8" : "md:col-span-4"}
          >
            <GlassCard className="relative overflow-hidden h-full group p-0">
              {/* Media Container */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-white/5">
                <AnimatePresence mode="wait">
                  {activeMode[project.id] === "overview" ? (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="architecture"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/90 p-8 flex flex-col justify-center gap-6"
                    >
                      <div className="space-y-4 font-mono text-[10px]">
                        <div className="flex items-center gap-3 text-primary">
                          <Cpu size={14} />
                          <span>SYSTEM ARCHITECTURE DETECTED</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           {Object.entries(project.stats).map(([k, v]) => (
                             <div key={k} className="p-3 bg-white/5 rounded border border-white/10">
                               <div className="text-white/40 uppercase mb-1">{k}</div>
                               <div className="text-white font-bold">{v}</div>
                             </div>
                           ))}
                        </div>
                         <div className="p-4 bg-primary/5 border border-primary/20 rounded text-primary leading-relaxed">
                           <span>{'// Loading reactive flow diagram...'}</span><br />
                           <span>{'// Initializing '}{project.tags[0]}{' nodes...'}</span>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mode Toggle */}
                <div className="absolute bottom-4 left-4 z-20 flex bg-black/60 backdrop-blur-md rounded-full p-1 border border-white/10">
                   <button 
                     onClick={() => setActiveMode(prev => ({...prev, [project.id]: "overview"}))}
                     className={`px-3 py-1 text-[9px] uppercase tracking-widest rounded-full transition-all ${activeMode[project.id] === "overview" ? "bg-primary text-black" : "text-white/60 hover:text-white"}`}
                   >
                     Overview
                   </button>
                   <button 
                     onClick={() => setActiveMode(prev => ({...prev, [project.id]: "architecture"}))}
                     className={`px-3 py-1 text-[9px] uppercase tracking-widest rounded-full transition-all ${activeMode[project.id] === "architecture" ? "bg-primary text-black" : "text-white/60 hover:text-white"}`}
                   >
                     Structure
                   </button>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-white/50">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                      <GithubIcon className="text-white/40 hover:text-primary cursor-pointer transition-colors" size={20} />
                     <ExternalLink className="text-white/40 hover:text-primary cursor-pointer transition-colors" size={20} />
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                <button className="flex items-center gap-2 text-[10px] font-mono text-primary uppercase tracking-[0.2em] group/btn">
                  View Case Study <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
