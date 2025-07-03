import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Globe, Zap, Star, Sparkles, Heart, Coffee, Rocket, Target } from 'lucide-react';

const About: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Mouse tracking for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 500, damping: 28 });

  // Velocity tracking for dynamic effects
  const mouseXVelocity = useVelocity(mouseX);
  const mouseYVelocity = useVelocity(mouseY);
  const velocityFactor = useTransform([mouseXVelocity, mouseYVelocity], ([x, y]) => Math.min(Math.sqrt(x * x + y * y) / 1000, 2));

  const movingSkills = [
    "Frontend Development",
    "Backend Development", 
    "UI/UX Design",
    "Mobile Development",
    "Cloud Architecture",
    "DevOps & Deployment"
  ];

  // Enhanced skills with more details
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Code, 
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      color: 'from-blue-400 to-cyan-400',
      particles: 12,
      delay: 0
    },
    { 
      name: 'Backend Development', 
      icon: Database, 
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      color: 'from-green-400 to-emerald-400',
      particles: 10,
      delay: 0.1
    },
    { 
      name: 'UI/UX Design', 
      icon: Palette, 
      description: 'Figma, Adobe XD, Sketch, Prototyping',
      color: 'from-purple-400 to-pink-400',
      particles: 15,
      delay: 0.2
    },
    { 
      name: 'Mobile Development', 
      icon: Smartphone, 
      description: 'React Native, Flutter, Progressive Web Apps',
      color: 'from-orange-400 to-red-400',
      particles: 8,
      delay: 0.3
    },
    { 
      name: 'Web Technologies', 
      icon: Globe, 
      description: 'HTML5, CSS3, JavaScript, TypeScript',
      color: 'from-indigo-400 to-purple-400',
      particles: 11,
      delay: 0.4
    },
    { 
      name: 'Performance Optimization', 
      icon: Zap, 
      description: 'Webpack, Vite, SEO, Web Vitals',
      color: 'from-yellow-400 to-orange-400',
      particles: 9,
      delay: 0.5
    },
  ];

  // Floating elements data
  const floatingElements = [
    { icon: Star, delay: 0, duration: 8 },
    { icon: Sparkles, delay: 1, duration: 10 },
    { icon: Heart, delay: 2, duration: 12 },
    { icon: Coffee, delay: 3, duration: 9 },
    { icon: Rocket, delay: 4, duration: 11 },
    { icon: Target, delay: 5, duration: 7 }
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Toggle cursor every 500ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Change skill every 2.5 seconds
  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % movingSkills.length);
    }, 2500);

    return () => clearInterval(skillInterval);
  }, []);

  // Particle system for skills
  const SkillParticles = ({ count, color }: { count: number; color: string }) => {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${color} rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </>
    );
  };

  // 3D Tilt Effect Component
  const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotateX(rotateX);
      setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <motion.div
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-purple-400/20"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${30 + (index * 10)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(index) * 30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <element.icon size={24} />
          </motion.div>
        ))}
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          scale: velocityFactor,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          style={{ y, opacity, scale }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            About{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Me
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Enhanced Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Story
            </motion.h3>
            
            {/* Animated text blocks */}
            <motion.div className="space-y-6">
              {[
                "I started my journey in web development 5 years ago and have been passionate about creating beautiful, functional websites ever since. I specialize in modern web technologies and love to work on projects that challenge me to grow as a developer.",
                "When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="text-gray-300 text-lg leading-relaxed cursor-pointer"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Enhanced Moving Skills Text */}
            <TiltCard className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))',
                    'linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))',
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.05))'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <h4 className="text-lg font-semibold text-white mb-4 relative z-10">Currently Specializing In:</h4>
              <div className="flex items-center h-8 relative z-10">
                <motion.span
                  key={currentSkill}
                  initial={{ opacity: 0, x: 50, rotateX: 90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  exit={{ opacity: 0, x: -50, rotateX: -90 }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200
                  }}
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold text-xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {movingSkills[currentSkill]}
                </motion.span>
                <motion.span
                  animate={{ 
                    opacity: showCursor ? 1 : 0,
                    scaleY: showCursor ? 1 : 0.1
                  }}
                  transition={{ duration: 0.1 }}
                  className="ml-2 text-purple-400 font-bold text-2xl origin-bottom"
                >
                  |
                </motion.span>
              </div>
            </TiltCard>

            {/* Enhanced Stats */}
            <motion.div 
              className="flex space-x-8 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { value: "50+", label: "Projects", color: "text-purple-400" },
                { value: "5+", label: "Years", color: "text-pink-400" },
                { value: "100+", label: "Happy Clients", color: "text-cyan-400" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`text-3xl font-bold ${stat.color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: 1 + index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Side - 3D Character */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="relative w-full h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated background rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-purple-400/20"
                  style={{
                    scale: 1 + i * 0.1,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
              
              {/* Main character container */}
              <motion.div 
                className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.3)",
                    "0 0 40px rgba(236, 72, 153, 0.3)",
                    "0 0 20px rgba(168, 85, 247, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Floating particles around character */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      x: [0, Math.sin(i) * 50, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                <motion.div 
                  className="text-8xl relative z-10"
                  animate={{ 
                    rotateY: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    transition: { duration: 0.3 }
                  }}
                >
                  👩‍💼
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            What I Do
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            I specialize in a wide range of technologies and services to bring your ideas to life.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1000px" }}
        >
          {skills.map((skill, index) => (
            <TiltCard
              key={skill.name}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: skill.delay, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Particle system for each skill */}
                <SkillParticles count={skill.particles} color={skill.color} />
                
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      `linear-gradient(45deg, rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))`,
                      `linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))`,
                      `linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.05))`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Icon with enhanced animations */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mb-4 relative z-10`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                  }}
                  transition={{ duration: 0.6 }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(168, 85, 247, 0)",
                      "0 0 20px rgba(168, 85, 247, 0.3)",
                      "0 0 0px rgba(168, 85, 247, 0)"
                    ]
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <skill.icon className="text-white" size={28} />
                  </motion.div>
                </motion.div>

                <motion.h4 
                  className="text-xl font-semibold text-white mb-3 relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#a855f7"
                  }}
                >
                  {skill.name}
                </motion.h4>
                
                <motion.p 
                  className="text-gray-400 relative z-10"
                  whileHover={{ color: "#e5e7eb" }}
                >
                  {skill.description}
                </motion.p>

                {/* 3D depth effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/20 pointer-events-none rounded-2xl"
                  style={{ transform: "translateZ(-10px)" }}
                />
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;