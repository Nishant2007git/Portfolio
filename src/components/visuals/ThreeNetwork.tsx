"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate stable particle positions once at module load time (outside component)
// so Math.random() is never called during render, satisfying React's purity rules.
const PARTICLE_COUNT = 2000;
const PARTICLE_POSITIONS = (() => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 10;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  return pos;
})();

function NeuralParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x += delta * 0.05;
    pointsRef.current.rotation.y += delta * 0.075;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={PARTICLE_POSITIONS} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export function ThreeNetwork() {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <NeuralParticles />
      </Canvas>
    </div>
  );
}
