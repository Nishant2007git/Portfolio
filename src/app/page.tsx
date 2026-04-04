import React from "react";
import { HeroTerminal } from "@/components/system/HeroTerminal";
import { ThreeNetwork } from "@/components/visuals/ThreeNetwork";
import { ArchitecturalProtocol } from "@/components/system/ArchitecturalProtocol";
import { WorksShowcase } from "@/components/system/WorksShowcase";
import { Arsenal } from "@/components/system/Arsenal";
import { Contact } from "@/components/system/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <ThreeNetwork />
      
      {/* Unified System Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section 00: Hero */}
        <section className="relative min-h-screen flex items-center">
            <HeroTerminal />
        </section>

        {/* Section 01: Philosophy */}
        <ArchitecturalProtocol />

        {/* Section 02: Works */}
        <WorksShowcase />

        {/* Section 03: Arsenal */}
        <Arsenal />

        {/* Section 04: Contact */}
        <Contact />
      </main>

      {/* Decorative System Divider */}
      <div className="fixed bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent z-50 pointer-events-none" />
      
      {/* Footer Info Overlay */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-none opacity-40 flex items-center gap-4 text-[9px] font-mono uppercase tracking-[0.2em] text-white/50">
        <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full" />
            SECURE: AES-256
        </div>
        <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-secondary rounded-full" />
            PROTO: v4.0.2
        </div>
      </div>
    </div>
  );
}
