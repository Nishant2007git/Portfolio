"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

// Inline SVGs
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    label: "Email",
    handle: "nishantkoundal@gmail.com",
    href: "mailto:nishantkoundalkoundal@gmail.com",
    icon: <Mail size={16} />,
    hint: "For project inquiries",
  },
  {
    label: "GitHub",
    handle: "Nishant2007git",
    href: "https://github.com/Nishant2007git",
    icon: <GithubIcon size={16} />,
    hint: "Source code & projects",
    external: true,
  },
  {
    label: "LinkedIn",
    handle: "nishant-koundal-ap",
    href: "https://www.linkedin.com/in/nishant-koundal-ap",
    icon: <LinkedinIcon size={16} />,
    hint: "Professional profile",
    external: true,
  },
];

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-primary font-semibold">
              Available · Actively Taking Work · 2026
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]"
          >
            Got an idea?<br />
            <span className="text-primary italic">Let&apos;s ship it.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg font-light max-w-xl mx-auto leading-relaxed"
          >
            Whether it&apos;s a full product build, a feature sprint, or just a technical chat —
            I&apos;m always up for a conversation.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left — Social / Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Quick info card */}
            <GlassCard className="p-6" gradient={false}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Nishant Koundal</div>
                  <div className="text-primary text-[10px] font-mono uppercase tracking-widest">Full-Stack Engineer</div>
                </div>
              </div>
              <div className="space-y-2 text-[11px] font-mono text-white/30 border-t border-white/5 pt-4">
                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="text-white/50">India · Remote OK</span>
                </div>
                <div className="flex justify-between">
                  <span>Response time</span>
                  <span className="text-primary">≤ 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="text-green-400">Open to work</span>
                </div>
                <div className="flex justify-between">
                  <span>Timezone</span>
                  <span className="text-white/50">IST (UTC +5:30)</span>
                </div>
              </div>
            </GlassCard>

            {/* Social link cards */}
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="group flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-primary group-hover:border-primary/30 transition-all">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold group-hover:text-primary transition-colors">{link.label}</div>
                    <div className="text-white/30 text-[10px] font-mono truncate max-w-35">{link.hint}</div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-white/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-10 relative overflow-hidden">
              {/* Decorative corner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] pointer-events-none rounded-full" />

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      required
                      className="bg-transparent border-b border-white/10 py-3 focus:border-primary transition-all outline-none text-white text-sm placeholder:text-white/15 font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="bg-transparent border-b border-white/10 py-3 focus:border-primary transition-all outline-none text-white text-sm placeholder:text-white/15 font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30">Project Budget</label>
                  <select className="bg-transparent border-b border-white/10 py-3 focus:border-primary transition-all outline-none text-white/50 text-sm font-light appearance-none cursor-pointer hover:text-white">
                    <option value="" className="bg-[#0a0a0a]">Select a range...</option>
                    <option value="small" className="bg-[#0a0a0a]">Under ₹50,000</option>
                    <option value="medium" className="bg-[#0a0a0a]">₹50k – ₹2L</option>
                    <option value="large" className="bg-[#0a0a0a]">₹2L – ₹5L</option>
                    <option value="enterprise" className="bg-[#0a0a0a]">₹5L+ / Enterprise</option>
                    <option value="discuss" className="bg-[#0a0a0a]">Let&apos;s discuss</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30">Tell Me About Your Project</label>
                  <textarea
                    rows={4}
                    placeholder="What are you building? What's the timeline? What problem does it solve?"
                    required
                    className="bg-transparent border-b border-white/10 py-3 focus:border-primary transition-all outline-none text-white text-sm resize-none placeholder:text-white/15 font-light"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="w-full relative group h-14 bg-primary text-black font-bold uppercase tracking-[0.3em] text-xs transition-all hover:bg-accent flex items-center justify-center gap-3 overflow-hidden rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {formState === "idle" && <><Send size={14} /> Send Message</>}
                    {formState === "sending" && <span className="animate-pulse">Sending your message...</span>}
                    {formState === "success" && <><CheckCircle size={14} /> Message received — I&apos;ll be in touch!</>}
                  </span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>

                <p className="text-center text-[10px] text-white/20 font-mono">
                  No spam. No cold pitches. Just real conversations.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/20"
        >
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse mr-2" />
            <span>Nishant Koundal</span>
            <span className="text-white/10 mx-3">·</span>
            <span>Full-Stack Engineer</span>
            <span className="text-white/10 mx-3">·</span>
            <span>India</span>
          </div>
          <div className="text-white/10">
            © 2026 · Built with Next.js & Tailwind CSS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
