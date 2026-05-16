"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useMotionValue, useSpring } from "framer-motion";
import { Montserrat } from "next/font/google";
import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  Zap, 
  Shield, 
  RefreshCw,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Sparkles
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const FLOW_STEPS = [
  {
    id: 1,
    title: "Discovery & Analysis",
    description: "We deeply understand your business goals, target audience, and technical requirements.",
    icon: Search,
    color: "from-red-500 to-orange-500",
    duration: "1-2 Weeks",
    features: ["Requirement Analysis", "Market Research", "Technical Assessment"],
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Creating intuitive user interfaces and interactive prototypes for your approval.",
    icon: Palette,
    color: "from-orange-500 to-amber-500",
    duration: "2-3 Weeks",
    features: ["UI/UX Design", "Wireframing", "Interactive Prototypes"],
  },
  {
    id: 3,
    title: "Development",
    description: "Building robust, scalable solutions with modern technologies and best practices.",
    icon: Code,
    color: "from-amber-500 to-yellow-500",
    duration: "4-8 Weeks",
    features: ["Frontend Development", "Backend Development", "API Integration"],
  },
  {
    id: 4,
    title: "Testing & Quality",
    description: "Rigorous testing to ensure flawless performance, security, and user experience.",
    icon: Shield,
    color: "from-yellow-500 to-lime-500",
    duration: "1-2 Weeks",
    features: ["Unit Testing", "Security Audit", "Performance Testing"],
  },
  {
    id: 5,
    title: "Deployment",
    description: "Smooth launch and migration with zero downtime and comprehensive documentation.",
    icon: Rocket,
    color: "from-lime-500 to-green-500",
    duration: "1 Week",
    features: ["Server Setup", "Database Migration", "SSL Configuration"],
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and optimization to keep your solution running perfectly.",
    icon: RefreshCw,
    color: "from-green-500 to-emerald-500",
    duration: "Ongoing",
    features: ["24/7 Monitoring", "Regular Updates", "Performance Optimization"],
  },
];

const ProcessFlow = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Interactive cursor glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true);
      const interval = setInterval(() => {
        setActiveStep(prev => {
          if (prev >= FLOW_STEPS.length) {
            clearInterval(interval);
            return 1;
          }
          return prev + 1;
        });
      }, 1500);
      
      return () => clearInterval(interval);
    }
  }, [isInView, isAnimating]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
      id="process"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />
        
        {/* Interactive cursor glow */}
        <motion.div
          style={{
            left: dx,
            top: dy,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full z-10 will-change-transform"
        />
        
        {/* Pulsing orb animation */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-red-500/20 to-orange-500/10 blur-[100px] rounded-full"
        />
        
        {/* Moving particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.4, 0], 
              y: [0, -200],
              x: Math.sin(i) * 50 
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            style={{
              left: `${(i * 7) % 100}%`,
              bottom: "0%",
            }}
          />
        ))}
        
        {/* Circuit pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-4">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-orange-500 mb-2 flex items-center justify-center gap-2`}>
              <Sparkles size={14} />
              Our Process
              <Sparkles size={14} />
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-xs mx-auto"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${montserrat.className} text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white`}
          >
            Our <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">Seamless</span> Workflow
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${montserrat.className} text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
          >
            From concept to launch and beyond, our proven process ensures excellence at every stage.
          </motion.p>
        </motion.div>

        {/* Main Process Flow */}
        <div className="relative">
          {/* Connecting Lines - Desktop */}
          <div className="hidden lg:block">
            {/* Main horizontal line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent origin-left"
            />
            
            {/* Animated flowing line */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={isInView ? { x: "100%" } : { x: "-100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
            />
            
            {/* Connection dots */}
            {FLOW_STEPS.map((step, index) => {
              const position = (index / (FLOW_STEPS.length - 1)) * 100;
              return (
                <motion.div
                  key={`dot-${step.id}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  animate={activeStep >= step.id ? {
                    scale: [1, 1.2, 1],
                    boxShadow: ["0 0 0px rgba(255,69,0,0)", "0 0 20px rgba(255,69,0,0.5)", "0 0 0px rgba(255,69,0,0)"],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="absolute top-1/2 w-3 h-3 bg-red-500 rounded-full -translate-y-1/2"
                  style={{ left: `${position}%` }}
                >
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile connecting lines (vertical) */}
          <div className="lg:hidden">
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-orange-500/50 to-transparent -translate-x-1/2" />
            
            {FLOW_STEPS.map((step, index) => (
              <motion.div
                key={`mobile-dot-${step.id}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5 }}
                animate={activeStep >= step.id ? {
                  scale: [1, 1.2, 1],
                  boxShadow: ["0 0 0px rgba(255,69,0,0)", "0 0 20px rgba(255,69,0,0.5)", "0 0 0px rgba(255,69,0,0)"],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute left-1/2 w-3 h-3 bg-red-500 rounded-full -translate-x-1/2"
                style={{ top: `${(index / (FLOW_STEPS.length - 1)) * 100}%` }}
              >
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
              </motion.div>
            ))}
          </div>

          {/* Process Steps Grid */}
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {FLOW_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveStep(step.id)}
                  className="relative z-20"
                >
                  {/* Step Number Indicator */}
                  <motion.div
                    animate={isActive ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                    } : {}}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center ${montserrat.className} text-xs font-bold z-30 bg-black border-2 ${
                      isActive ? "border-red-500 text-red-500" : "border-gray-700 text-gray-500"
                    }`}
                  >
                    {step.id}
                  </motion.div>

                  {/* Main Step Card */}
                  <motion.div
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      borderColor: "rgba(255, 69, 0, 0.5)",
                    }}
                    animate={isActive ? {
                      y: -10,
                      scale: 1.05,
                      borderColor: "rgba(255, 69, 0, 0.5)",
                    } : {}}
                    className={`
                      relative rounded-2xl p-6 backdrop-blur-sm border-2
                      transition-all duration-300 cursor-pointer
                      ${isActive 
                        ? "bg-gradient-to-br from-black/80 to-black/60 border-red-500/50 shadow-2xl shadow-red-900/20" 
                        : "bg-black/40 border-white/10 hover:border-orange-500/30"
                      }
                      flex flex-col items-center text-center
                      min-h-[320px]
                    `}
                  >
                    {/* Animated glow effect for active card */}
                    {isActive && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-500/20 via-orange-500/10 to-transparent blur-xl -z-10"
                        />
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent via-red-500/5 to-transparent -z-10"
                        />
                      </>
                    )}

                    {/* Icon Container */}
                    <motion.div
                      animate={isActive ? {
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`mb-6 p-4 rounded-full bg-gradient-to-br ${step.color} ${
                        isActive ? "shadow-lg shadow-orange-500/30" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Step Content */}
                    <h3 className={`${montserrat.className} text-xl font-bold text-white mb-3`}>
                      {step.title}
                    </h3>
                    
                    <p className={`${montserrat.className} text-gray-400 text-sm mb-4 flex-grow`}>
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <div className={`${montserrat.className} text-xs font-medium px-3 py-1 rounded-full mb-4 ${
                      isActive 
                        ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                        : "bg-white/5 text-gray-400 border border-white/10"
                    }`}>
                      ⏱️ {step.duration}
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 w-full">
                      {step.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex items-center gap-2 text-xs ${montserrat.className} ${
                            isActive ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Animated Arrows - Desktop */}
          <div className="hidden lg:flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 px-12 z-10 pointer-events-none">
            {[...Array(FLOW_STEPS.length - 1)].map((_, i) => (
              <motion.div
                key={`arrow-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3 + 0.8 }}
                animate={activeStep > i + 1 ? {
                  x: [0, 10, 0],
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-orange-500"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className={`${montserrat.className} text-xl font-bold text-white mb-2`}>
                Current Phase: <span className="text-orange-500">{FLOW_STEPS[activeStep - 1]?.title}</span>
              </h3>
              <p className={`${montserrat.className} text-gray-400`}>
                Step {activeStep} of {FLOW_STEPS.length}
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${(activeStep / FLOW_STEPS.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full relative overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
              <div className="flex justify-between mt-2">
                {FLOW_STEPS.map((step) => (
                  <div
                    key={`label-${step.id}`}
                    className={`text-xs ${montserrat.className} ${
                      activeStep >= step.id ? "text-orange-500 font-bold" : "text-gray-500"
                    }`}
                  >
                    {step.id}
                  </div>
                ))}
              </div>
            </div>

            {/* Manual Navigation */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                className="p-3 rounded-full bg-black border border-white/10 text-white hover:border-orange-500/50 transition-all"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(prev => Math.min(FLOW_STEPS.length, prev + 1))}
                className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-6`}>
            Ready to start your journey with us?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className} px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2`}
            >
              Begin Your Project
              <Rocket className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${montserrat.className} px-8 py-4 bg-black border border-white/10 text-white font-bold rounded-full hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2`}
            >
              Schedule a Call
              <Zap className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;