import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Generate random particles - positioned away from all corners
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 60 + 20, // Start from 20% to 80% to avoid all corners
    y: Math.random() * 60 + 20, // Start from 20% to 80% to avoid all corners
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const floatingShapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 50 + 25, // Start from 25% to 75% to avoid all corners
    y: Math.random() * 50 + 25, // Start from 25% to 75% to avoid all corners
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]" />
      
      {/* Animated wave layers */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 30% 60%, #3b82f6 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, #8b5cf6 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, #06b6d4 0%, transparent 50%)
            `,
            backgroundSize: '400% 400%',
          }}
        />
        
        <motion.div
          animate={{
            backgroundPosition: ['100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-5"
          style={{
            background: `
              radial-gradient(circle at 60% 40%, #ec4899 0%, transparent 50%),
              radial-gradient(circle at 40% 70%, #10b981 0%, transparent 50%),
              radial-gradient(circle at 80% 60%, #f59e0b 0%, transparent 50%)
            `,
            backgroundSize: '300% 300%',
          }}
        />
      </div>

      {/* Floating particles - positioned away from corners */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Large floating geometric shapes - positioned away from corners */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.shape === 'circle' 
              ? 'rounded-full' 
              : shape.shape === 'square' 
              ? 'rounded-lg' 
              : 'rounded-none'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background: `linear-gradient(45deg, 
              ${['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'][shape.id % 6]}20, 
              transparent)`,
            transform: shape.shape === 'triangle' ? 'rotate(45deg)' : 'none',
          }}
          animate={{
            x: [0, Math.cos(shape.id) * 200, 0],
            y: [0, Math.sin(shape.id) * 150, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated mesh gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, #3b82f610 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, #8b5cf610 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, #06b6d410 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, #ec489910 0%, transparent 50%)',
            'radial-gradient(circle at 30% 30%, #3b82f610 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0"
      />

      {/* Pulsing orbs - positioned away from corners */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,100 Q250,50 500,100 T1000,100",
              "M0,150 Q250,100 500,50 T1000,150",
              "M0,100 Q250,50 500,100 T1000,100",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          animate={{
            d: [
              "M0,200 Q300,150 600,200 T1200,200",
              "M0,250 Q300,200 600,150 T1200,250",
              "M0,200 Q300,150 600,200 T1200,200",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </svg>

      {/* Grid overlay with animation */}
      <motion.div
        animate={{
          opacity: [0.02, 0.05, 0.02],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Final overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40" />
    </div>
  );
};

export default AnimatedBackground;