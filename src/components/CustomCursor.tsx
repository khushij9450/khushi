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
      setTrails(prev => [...prev.slice(-6), newTrail]);
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
      {/* Trail dots with enhanced visibility */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] rounded-full border border-cyan-400/40"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            width: 8,
            height: 8,
          }}
          initial={{ 
            opacity: 0.8,
            scale: 1,
            background: 'rgba(6, 182, 212, 0.3)',
            borderColor: 'rgba(6, 182, 212, 0.6)'
          }}
          animate={{ 
            opacity: 0,
            scale: 0.3,
            background: 'rgba(6, 182, 212, 0.1)',
            borderColor: 'rgba(6, 182, 212, 0.2)'
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Main cursor with high contrast design */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border-2"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          background: isHovering 
            ? 'rgba(6, 182, 212, 0.8)' 
            : 'rgba(6, 182, 212, 0.6)',
          borderColor: isHovering
            ? '#06b6d4'
            : '#0891b2',
          boxShadow: isHovering
            ? '0 0 25px rgba(6, 182, 212, 0.8), inset 0 0 15px rgba(255, 255, 255, 0.3)'
            : '0 0 15px rgba(6, 182, 212, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.2)'
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
        style={{
          width: 32,
          height: 32,
        }}
      >
        {/* Inner dot for better visibility */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            width: isHovering ? 6 : 4,
            height: isHovering ? 6 : 4,
            opacity: isHovering ? 0.9 : 0.7
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        />
      </motion.div>

      {/* Outer ring for enhanced hover effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full border border-cyan-300/50"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
        animate={{
          scale: isHovering ? 1.5 : 0,
          opacity: isHovering ? 0.8 : 0,
          borderColor: isHovering ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.3)'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        style={{
          width: 48,
          height: 48,
        }}
      />

      {/* Pulsing effect for better visibility */}
      <motion.div
        className="fixed pointer-events-none z-[9996] rounded-full"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          background: [
            'rgba(6, 182, 212, 0.1)',
            'rgba(6, 182, 212, 0.2)',
            'rgba(6, 182, 212, 0.1)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: 40,
          height: 40,
        }}
      />
    </>
  );
};

export default CustomCursor;