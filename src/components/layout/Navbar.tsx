"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Protocol", href: "#philosophy" },
  { name: "Works", href: "#work" },
  { name: "Arsenal", href: "#arsenal" },
  { name: "Consult", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-100 transition-all duration-500",
      scrolled ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center font-black text-primary text-xs">
            N
          </div>
          <span className="text-xl font-bold tracking-[0.3em] text-white hidden sm:block">NISHANT</span>
        </motion.div>

        <ul className="flex items-center gap-8 md:gap-12">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a 
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
              </a>
            </motion.li>
          ))}
          
          <motion.li
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4 }}
          >
             <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono whitespace-nowrap text-white/20">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                SYSTEM ACTIVE
             </div>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
}
