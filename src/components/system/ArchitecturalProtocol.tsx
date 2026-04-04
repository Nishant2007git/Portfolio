"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Brain, Zap, Database } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const protocols = [
  {
    id: "01",
    title: "Atomic Scalability",
    description: "Every system I build starts with a foundation that handles 10x scale from day one — clean separation, zero debt, no surprises in production.",
    icon: <Database className="text-primary" size={24} />,
    tag: "[Structure]"
  },
  {
    id: "02",
    title: "Agentic Intelligence",
    description: "I wire LLMs into the core of applications — not as features bolted on, but as first-class citizens that make the product genuinely smarter.",
    icon: <Brain className="text-secondary" size={24} />,
    tag: "[Intelligence]"
  },
  {
    id: "03",
    title: "Obsessive UX",
    description: "If your users notice the interface, it&apos;s not good enough. I obsess over micro-interactions, load states, and transitions until everything feels effortless.",
    icon: <Zap className="text-accent" size={24} />,
    tag: "[Interaction]"
  },
  {
    id: "04",
    title: "Immutable Security",
    description: "Auth, encryption, and access controls aren&apos;t afterthoughts — they&apos;re engineered into the schema before the first line of feature code is written.",
    icon: <Shield className="text-white" size={24} />,
    tag: "[Protection]"
  },
];

export function ArchitecturalProtocol() {
  return (
    <section id="philosophy" className="py-32 relative">
      <div className="flex items-center gap-8 mb-20 overflow-hidden">
        <div className="h-px w-24 bg-linear-to-r from-transparent to-white/10" />
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono whitespace-nowrap text-white/40">
           How I Think About Engineering
        </span>
        <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Headline */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl font-bold text-white mb-8 tracking-tight"
            >
              Built to <br />
              <span className="text-primary italic">Last.</span>
            </motion.h2>
            <p className="text-lg text-white/50 leading-relaxed font-light mb-8">
              Great software isn&apos;t written — it&apos;s engineered. I work with a set 
              of non-negotiable principles that every project is held against, 
              regardless of deadline pressure or scope creep.
            </p>
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-px bg-primary group-hover:w-24 transition-all duration-500" />
              <span className="text-xs uppercase tracking-widest font-mono text-primary">My Engineering Principles</span>
            </div>
          </div>
        </div>

        {/* Protocol Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {protocols.map((protocol, i) => (
            <motion.div
              key={protocol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full border-l-primary/40 border-l-2 p-8 group">
                <div className="text-[10px] font-mono text-primary mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  ID: {protocol.id} {/* // {protocol.tag} */}
                </div>
                <div className="mb-6 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  {protocol.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {protocol.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {protocol.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
