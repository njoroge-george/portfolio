"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle effect
  const particles = Array.from({ length: 20 }, (_, i) => i);

  // Generate random positions only on client side
  const getRandomPosition = () => {
    if (typeof window === 'undefined') return 0;
    return Math.random();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="/hero1.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        
        {/* Animated gradient overlay - Sweet green blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/30 to-black" />
        
        {/* Floating particles - Sweet mint and lime */}
        <div className="absolute inset-0 overflow-hidden">
          {mounted && particles.map((i) => {
            const randomX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920);
            const randomY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080);
            const randomScale = Math.random() * 1.5;
            const randomOpacity = Math.random() * 0.5 + 0.3;
            const randomDuration = Math.random() * 10 + 10;
            const randomEndX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920);
            const randomEndY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080);
            const randomEndScale = Math.random() * 2;
            const randomEndOpacity = Math.random() * 0.8;
            
            return (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-mint-300' : i % 3 === 1 ? 'bg-lime-400' : 'bg-emerald-400'}`}
                style={{
                  backgroundColor: i % 3 === 0 ? '#6ee7b7' : i % 3 === 1 ? '#bef264' : '#34d399',
                }}
                initial={{
                  x: randomX,
                  y: randomY,
                  scale: randomScale,
                  opacity: randomOpacity,
                }}
                animate={{
                  y: [null, randomEndY],
                  x: [null, randomEndX],
                  scale: [null, randomEndScale],
                  opacity: [null, randomEndOpacity],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            );
          })}
        </div>

        {/* Geometric shapes - Sweet green tones */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-mint-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border-2 border-lime-400/20 rounded-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.5s ease-out',
              }}
            >

            {/* Floating icons - Sweet colors */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-mint-400"
              >
                <Code2 size={40} />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-lime-400"
              >
                <Sparkles size={40} />
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-emerald-400"
              >
                <Rocket size={40} />
              </motion.div>
            </div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text-animated">
                George Njoroge
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-block px-6 py-3 glass rounded-full border border-mint-400/30 mb-6">
                <p className="text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-mint-300 to-lime-400 font-semibold">
                  Full Stack Developer | Creative Coder
                </p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with modern technologies,
              stunning animations, and pixel-perfect designs that bring ideas to life
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-mint-400 to-lime-500 hover:from-mint-300 hover:to-lime-400 text-black px-8 py-4 rounded-full text-lg font-semibold overflow-hidden shadow-lg shadow-mint-500/30"
              >
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-lime-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="button-gradient"
                />
              </motion.a>
              
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 glass border-2 border-mint-400/50 hover:border-mint-400 hover:bg-mint-400/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              {/* Outer glow ring - Sweet mint and lime */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-mint-400 via-lime-400 to-emerald-400 blur-xl opacity-70"
                style={{ padding: '4px' }}
              />
              
              {/* Image container - Made larger */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-mint-400/60 shadow-2xl shadow-mint-400/40"
                >
                  <Image
                    src="/hero.jpg"
                    alt="George Njoroge"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Gradient overlay on hover - Sweet peach tint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    className="absolute inset-0 bg-gradient-to-br from-mint-300 to-lime-400"
                  />
                </motion.div>
              </div>

              {/* Animated dots around image - Sweet colors */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={angle}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateY(-${200}px) translateX(-50%)`,
                      backgroundColor: index % 3 === 0 ? '#6ee7b7' : index % 3 === 1 ? '#bef264' : '#fda4af',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: angle / 100,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center gap-2 text-mint-400 hover:text-lime-300 transition-colors group">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={32} className="group-hover:scale-110 transition-transform" />
              </motion.div>
            </a>
          </motion.div>
        </div>
    </section>
  );
}
