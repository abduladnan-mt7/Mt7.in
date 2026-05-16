"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text, MeshDistortMaterial, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
});

function AnimatedBackground() {
  return (
    <group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <mesh rotation={[0, 0, 0]}>
        <sphereGeometry args={[20, 32, 32]} />
        <MeshDistortMaterial
          color="#1a0a05"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

function FloatingShape({ position, color, speed = 1, distort = 0.3 }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * speed;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color={color} speed={speed * 3} distort={distort} roughness={0.1} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full bg-[#050202] overflow-hidden flex items-center justify-center">
      {/* 3D CANVAS */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#d83b00" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#ffae42" intensity={1} />
          
          <AnimatedBackground />
          
          <FloatingShape position={[5, 2, 0]} color="#d83b00" speed={0.5} />
          <FloatingShape position={[-5, -2, 2]} color="#ffae42" speed={0.8} />
          <FloatingShape position={[2, -4, -2]} color="#333" speed={1.2} />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* OVERLAY CONTENT */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`${montserrat.className} text-5xl md:text-8xl font-black tracking-tighter text-white mb-6`}>
            MT7 <span className="text-[#d83b00]">OPERATIONS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light mb-10 tracking-wide max-w-2xl mx-auto leading-relaxed">
            The premium matchmaking engine for startups and top-tier agencies. 
            One invoice. One point of contact. <span className="text-white">Zero friction.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(216,59,0,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#d83b00] text-white font-bold rounded-full text-lg shadow-2xl transition-all"
            >
              Get Started Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-full text-lg backdrop-blur-md transition-all"
            >
              Explore Network
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM GRADIENT MASK */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050202] to-transparent z-20" />
    </section>
  );
}
