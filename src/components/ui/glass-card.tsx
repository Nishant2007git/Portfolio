"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionDivBase = HTMLMotionProps<"div">;

interface GlassCardProps extends MotionDivBase {
  children?: React.ReactNode;
  gradient?: boolean;
  intensity?: "low" | "medium" | "high";
}

type CardMouseEvent = React.MouseEvent<HTMLDivElement>;

export function GlassCard({
  children,
  className,
  gradient = true,
  intensity = "medium",
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(e: CardMouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  const intensitySteps = {
    low: "bg-white/5 backdrop-blur-sm border-white/5",
    medium: "bg-white/10 backdrop-blur-xl border-white/10",
    high: "bg-white/15 backdrop-blur-2xl border-white/20",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-xl border p-6 transition-colors duration-500",
        intensitySteps[intensity],
        hovered ? "border-white/20 bg-white/15" : "",
        className
      )}
      {...props}
    >
      {/* 3D Depth effects */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10"
      >
        {children}
      </div>

      {/* Decorative Gradient Glow */}
      {gradient && (
        <div
          className={cn(
            "absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 -z-10",
            "bg-linear-to-br from-cyan-500/20 via-transparent to-purple-500/20",
            hovered && "opacity-100"
          )}
        />
      )}

      {/* Gloss reflection overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-20">
        <div className={cn(
          "absolute -inset-full bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12",
          "transition-transform duration-1000",
          hovered ? "translate-x-full" : "-translate-x-full"
        )} />
      </div>
    </motion.div>
  );
}
