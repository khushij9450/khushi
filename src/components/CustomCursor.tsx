import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails(prev => [...prev.slice(-8), newTrail]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Enhanced trail dots - bigger and more visible */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] rounded-full border-2 border-cyan-400/60"
          style={{
            left: trail.x - 12,
            top: trail.y - 12,
            width: 24,
            height: 24,
          }}
          initial={{ 
            opacity: 0.9,
            scale: 1,
            background: 'rgba(6, 182, 212, 0.4)',
            borderColor: 'rgba(6, 182, 212, 0.8)'
          }}
          animate={{ 
            opacity: 0,
            scale: 0.2,
            background: 'rgba(6, 182, 212, 0.1)',
            borderColor: 'rgba(6, 182, 212, 0.2)'
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Main cursor - much bigger */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border-4"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          background: isHovering 
            ? 'rgba(6, 182, 212, 0.8)' 
            : 'rgba(6, 182, 212, 0.6)',
          borderColor: isHovering
            ? '#06b6d4'
            : '#0891b2',
          boxShadow: isHovering
            ? '0 0 40px rgba(6, 182, 212, 0.9), inset 0 0 20px rgba(255, 255, 255, 0.4)'
            : '0 0 25px rgba(6, 182, 212, 0.7), inset 0 0 15px rgba(255, 255, 255, 0.3)'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8
        }}
        style={{
          width: 60,
          height: 60,
        }}
      >
        {/* Inner dot - bigger */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            width: isHovering ? 12 : 8,
            height: isHovering ? 12 : 8,
            opacity: isHovering ? 0.9 : 0.8
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        />

        {/* Cross pattern for tech look */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: isHovering ? 45 : 0,
            opacity: isHovering ? 0.8 : 0.6
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <div className="w-8 h-0.5 bg-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="w-0.5 h-8 bg-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </motion.div>

      {/* Outer ring - much bigger */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full border-2 border-cyan-300/60"
        style={{
          left: mousePosition.x - 45,
          top: mousePosition.y - 45,
        }}
        animate={{
          scale: isHovering ? 1.3 : 0,
          opacity: isHovering ? 0.9 : 0,
          borderColor: isHovering ? 'rgba(6, 182, 212, 0.9)' : 'rgba(6, 182, 212, 0.4)',
          rotate: [0, 360]
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 250,
            damping: 20
          },
          opacity: {
            type: "spring",
            stiffness: 250,
            damping: 20
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        style={{
          width: 90,
          height: 90,
        }}
      />

      {/* Pulsing effect - bigger */}
      <motion.div
        className="fixed pointer-events-none z-[9996] rounded-full"
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          background: [
            'rgba(6, 182, 212, 0.15)',
            'rgba(6, 182, 212, 0.3)',
            'rgba(6, 182, 212, 0.15)'
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: 80,
          height: 80,
        }}
      />

      {/* Additional outer glow ring */}
      <motion.div
        className="fixed pointer-events-none z-[9995] rounded-full"
        style={{
          left: mousePosition.x - 60,
          top: mousePosition.y - 60,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          background: [
            'rgba(6, 182, 212, 0.05)',
            'rgba(6, 182, 212, 0.15)',
            'rgba(6, 182, 212, 0.05)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: 120,
          height: 120,
        }}
      />
    </>
  );
};

export default CustomCursor;