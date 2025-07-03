import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Generate stars with different sizes and positions
  const stars = Array.from({ length: 200 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  // Generate shooting stars
  const shootingStars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 10,
  }));

  // Generate floating planets/asteroids
  const celestialBodies = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 40 + 30,
    delay: Math.random() * 10,
    color: ['#4f46e5', '#7c3aed', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'][i],
  }));

  // Generate nebula clouds
  const nebulaClouds = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 300 + 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 60 + 40,
    delay: Math.random() * 15,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0b2e] to-[#0f0f23]" />
      
      {/* Animated cosmic dust layers */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, #4f46e5 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, #7c3aed 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)
            `,
            backgroundSize: '800% 800%',
          }}
        />
        
        <motion.div
          animate={{
            backgroundPosition: ['100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              radial-gradient(circle at 60% 20%, #06b6d4 0%, transparent 50%),
              radial-gradient(circle at 30% 60%, #10b981 0%, transparent 50%),
              radial-gradient(circle at 70% 90%, #f59e0b 0%, transparent 50%)
            `,
            backgroundSize: '600% 600%',
          }}
        />
      </div>

      {/* Twinkling stars field */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <motion.div
          key={shootingStar.id}
          className="absolute"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
          }}
          initial={{ opacity: 0, x: -100, y: -50 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, 300, 600],
            y: [0, 150, 300],
          }}
          transition={{
            duration: shootingStar.duration,
            repeat: Infinity,
            delay: shootingStar.delay,
            ease: 'easeOut',
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-200 to-transparent w-20 h-0.5 -translate-y-0.5" />
          </div>
        </motion.div>
      ))}

      {/* Floating celestial bodies (planets/asteroids) */}
      {celestialBodies.map((body) => (
        <motion.div
          key={body.id}
          className="absolute rounded-full opacity-30"
          style={{
            width: body.size,
            height: body.size,
            left: `${body.x}%`,
            top: `${body.y}%`,
            background: `radial-gradient(circle at 30% 30%, ${body.color}80, ${body.color}40, ${body.color}20)`,
            boxShadow: `0 0 ${body.size / 2}px ${body.color}40`,
          }}
          animate={{
            x: [0, Math.sin(body.id) * 100, 0],
            y: [0, Math.cos(body.id) * 80, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: body.duration,
            repeat: Infinity,
            delay: body.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Nebula clouds */}
      {nebulaClouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{
            width: cloud.size,
            height: cloud.size,
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            background: `radial-gradient(circle, 
              #7c3aed40 0%, 
              #ec489940 30%, 
              #06b6d440 60%, 
              transparent 100%)`,
          }}
          animate={{
            x: [0, Math.sin(cloud.id * 2) * 150, 0],
            y: [0, Math.cos(cloud.id * 2) * 100, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Cosmic energy waves */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="cosmicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="33%" stopColor="#7c3aed" />
            <stop offset="66%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cosmic wave paths */}
        <motion.path
          d="M0,200 Q400,100 800,200 T1600,200"
          stroke="url(#cosmicGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          animate={{
            d: [
              "M0,200 Q400,100 800,200 T1600,200",
              "M0,250 Q400,150 800,100 T1600,250",
              "M0,200 Q400,100 800,200 T1600,200",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.path
          d="M0,400 Q500,300 1000,400 T2000,400"
          stroke="url(#cosmicGradient)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          animate={{
            d: [
              "M0,400 Q500,300 1000,400 T2000,400",
              "M0,450 Q500,350 1000,250 T2000,450",
              "M0,400 Q500,300 1000,400 T2000,400",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
        
        <motion.path
          d="M0,600 Q300,500 600,600 T1200,600"
          stroke="url(#cosmicGradient)"
          strokeWidth="1"
          fill="none"
          filter="url(#glow)"
          animate={{
            d: [
              "M0,600 Q300,500 600,600 T1200,600",
              "M0,650 Q300,550 600,450 T1200,650",
              "M0,600 Q300,500 600,600 T1200,600",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10,
          }}
        />
      </svg>

      {/* Pulsing cosmic energy centers */}
      <motion.div
        animate={{
          scale: [1, 2, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.5, 0.8, 1.5],
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [0.8, 1.8, 0.8],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 8,
        }}
        className="absolute top-2/3 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
      />

      {/* Cosmic grid overlay */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Distant galaxy spirals */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            width: 150 + i * 50,
            height: 150 + i * 50,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 60 + i * 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `conic-gradient(from 0deg, 
                transparent 0deg, 
                #7c3aed40 60deg, 
                transparent 120deg, 
                #ec489940 180deg, 
                transparent 240deg, 
                #06b6d440 300deg, 
                transparent 360deg)`,
            }}
          />
        </motion.div>
      ))}

      {/* Final depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/60" />
      
      {/* Cosmic dust particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;