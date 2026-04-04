import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishant | System Architect",
  description: "Senior Full-Stack Engineer & AI Architect Portfolio. Precision x AI performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground relative overflow-x-hidden`}>
        {/* Global UI Overlays */}
        <div className="noise-overlay" />
        <div className="fixed inset-0 grid-background -z-10" />
        
        {/* Navigation System */}
        <Navbar />

        {/* Unified System Container */}
        <main className="relative z-0">
          {children}
        </main>

        {/* System Footer Overlay */}
        <div className="fixed bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/10 to-transparent z-50 pointer-events-none" />
      </body>
    </html>
  );
}
