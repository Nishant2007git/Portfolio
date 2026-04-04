"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Database, Sparkles, Layers } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const arsenal = [
  {
    category: "Interaction",
    color: "primary",
    icon: <Globe size={18} />,
    skills: [
      { name: "Next.js 14", level: "Expert" },
      { name: "Three.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Master" },
      { name: "Framer Motion", level: "Expert" },
    ]
  },
  {
    category: "Structure",
    color: "secondary",
    icon: <Database size={18} />,
    skills: [
      { name: "Node.js / Bun", level: "Architect" },
      { name: "PostgreSQL", level: "Fluent" },
      { name: "Redis / Caching", level: "High Perf" },
      { name: "Turbo Repo", level: "Expert" },
    ]
  },
  {
    category: "Intelligence",
    color: "accent",
    icon: <Sparkles size={18} />,
    skills: [
      { name: "LLM Orchestration", level: "Vercel AI" },
      { name: "RAG Pipelines", level: "Pinecone" },
      { name: "Prompt Engineer", level: "Expert" },
      { name: "Agentic Apps", level: "Core" },
    ]
  }
];

export function Arsenal() {
  return (
    <section id="arsenal" className="py-32 relative bg-white/5 border-y border-white/5">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
          >
             <Layers size={12} className="text-primary" />
             <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/40">Tools of the Trade</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What I Build With.</h2>
          <p className="text-white/40 max-w-xl mx-auto font-light">
            The technologies I reach for when the stakes are high and the deadline is real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arsenal.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full border-t-2 border-t-white/10 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-2 rounded bg-${group.color}/10 text-${group.color} border border-${group.color}/20 group-hover:scale-110 transition-transform`}>
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-widest uppercase">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {group.skills.map((skill, skIndex) => (
                    <div key={skill.name} className="flex justify-between items-center text-sm group/skill">
                      <span className="text-white/60 group-hover/skill:text-white transition-colors">{skill.name}</span>
                      <div className="flex items-center gap-3">
                         <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">{skill.level}</span>
                         <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "100%" }}
                             transition={{ duration: 1, delay: 0.5 + (skIndex * 0.1) }}
                             className={`h-full bg-${group.color}`} 
                           />
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
