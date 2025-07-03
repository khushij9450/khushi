import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Eye, Code2, Layers, Award, Terminal, Cpu, Database, Cloud, Brain, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      name: "AI-Powered Analytics",
      description: "Machine learning platform for real-time data analysis with neural network visualization and predictive modeling capabilities.",
      tags: [
        { name: "tensorflow", color: "blue-text-gradient" },
        { name: "python", color: "green-text-gradient" },
        { name: "kubernetes", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/",
      live_demo_link: "https://example.com/",
      category: "AI/ML"
    },
    {
      name: "Quantum Computing Simulator",
      description: "Web-based quantum circuit simulator with real-time visualization of quantum states and gate operations.",
      tags: [
        { name: "qiskit", color: "blue-text-gradient" },
        { name: "react", color: "green-text-gradient" },
        { name: "webgl", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/",
      live_demo_link: "https://example.com/",
      category: "Quantum"
    },
    {
      name: "Blockchain DeFi Platform",
      description: "Decentralized finance platform with smart contracts, yield farming, and automated market making protocols.",
      tags: [
        { name: "solidity", color: "blue-text-gradient" },
        { name: "web3", color: "green-text-gradient" },
        { name: "ethereum", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/",
      live_demo_link: "https://example.com/",
      category: "Blockchain"
    },
    {
      name: "Cloud-Native Microservices",
      description: "Scalable microservices architecture with container orchestration, service mesh, and observability stack.",
      tags: [
        { name: "kubernetes", color: "blue-text-gradient" },
        { name: "docker", color: "green-text-gradient" },
        { name: "istio", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/",
      live_demo_link: "https://example.com/",
      category: "Cloud"
    },
    {
      name: "Neural Network Visualizer",
      description: "Interactive 3D visualization of deep learning models with real-time training progress and layer analysis.",
      tags: [
        { name: "threejs", color: "blue-text-gradient" },
        { name: "pytorch", color: "green-text-gradient" },
        { name: "webgl", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/",
      live_demo_link: "https://example.com/",
      category: "AI/ML"
    },
    {
      name: "Edge Computing IoT Hub",
      description: "Real-time IoT data processing platform with edge computing capabilities and predictive maintenance algorithms.",
      tags: [
        { name: "golang", color: "blue-text-gradient" },
        { name: "mqtt", color: "green-text-gradient" },
        { name: "tensorflow-lite", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/",
      live_demo_link: "https://example.com/",
      category: "IoT"
    },
  ];

  const techStack = [
    { name: 'TensorFlow', level: 95, color: 'from-orange-400 to-orange-600', icon: Brain },
    { name: 'Kubernetes', level: 90, color: 'from-blue-500 to-blue-700', icon: Cloud },
    { name: 'React/Next.js', level: 95, color: 'from-cyan-400 to-cyan-600', icon: Code2 },
    { name: 'Python/Go', level: 88, color: 'from-green-400 to-green-600', icon: Terminal },
    { name: 'AWS/Azure', level: 85, color: 'from-yellow-400 to-yellow-600', icon: Cloud },
    { name: 'PostgreSQL', level: 82, color: 'from-blue-600 to-blue-800', icon: Database },
    { name: 'Docker', level: 90, color: 'from-blue-400 to-blue-600', icon: Layers },
    { name: 'Blockchain', level: 75, color: 'from-purple-400 to-purple-600', icon: Zap },
  ];

  const certificates = [
    {
      title: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: Cloud,
      level: 'Professional'
    },
    {
      title: 'Google Cloud ML Engineer',
      issuer: 'Google Cloud',
      date: '2024',
      icon: Brain,
      level: 'Professional'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      icon: Layers,
      level: 'Expert'
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      date: '2023',
      icon: Brain,
      level: 'Specialist'
    },
    {
      title: 'Ethereum Developer Certification',
      issuer: 'ConsenSys Academy',
      date: '2023',
      icon: Zap,
      level: 'Advanced'
    },
    {
      title: 'Quantum Computing Fundamentals',
      issuer: 'IBM Qiskit',
      date: '2024',
      icon: Cpu,
      level: 'Emerging Tech'
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'techstack', label: 'Tech Stack', icon: Layers },
    { id: 'certificates', label: 'Certifications', icon: Award }
  ];

  // Enhanced ProjectCard with futuristic design
  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.8,
          ease: "easeOut"
        }}
        className="group relative cursor-grab w-full max-w-[360px] mx-auto"
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            rotateX: 5,
            z: 50
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          className="relative w-full h-[500px] bg-slate-900/40 backdrop-blur-xl rounded-[20px] p-5 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* Tech grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
              {[...Array(36)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-cyan-400/20"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>

          {/* Category badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white px-3 py-1 rounded-full text-xs font-mono z-20"
          >
            {project.category}
          </motion.div>
          
          {/* Holographic pin effect */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg z-20"
          />
          
          {/* Pin shadow with glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
            className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-cyan-400/40 to-transparent rounded-full blur-sm z-10"
          />

          {/* Image container with tech overlay */}
          <div className="relative w-full h-[240px] rounded-[15px] overflow-hidden mb-4 mt-4">
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Tech overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            
            {/* Scanning line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-1"
              animate={{
                y: ['-10%', '110%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100"
            >
              <motion.a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/60 transition-all duration-300 border border-cyan-400/30"
              >
                <Github size={16} />
              </motion.a>
              <motion.a
                href={project.live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500/60 transition-all duration-300 border border-purple-400/30"
              >
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              className="text-white font-bold text-[22px] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 font-mono"
            >
              {project.name}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
              className="text-gray-300 text-[14px] leading-[20px] mb-4 font-mono"
            >
              {project.description}
            </motion.p>

            {/* Enhanced tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map((tag: any, tagIndex: number) => (
                <motion.p
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + tagIndex * 0.1 + 0.8, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-[12px] font-medium cursor-pointer transition-all duration-300 px-2 py-1 rounded-full border font-mono ${
                    tag.color === 'blue-text-gradient' 
                      ? 'text-cyan-400 hover:text-cyan-300 border-cyan-400/30 bg-cyan-400/10' 
                      : tag.color === 'green-text-gradient'
                      ? 'text-green-400 hover:text-green-300 border-green-400/30 bg-green-400/10'
                      : 'text-purple-400 hover:text-purple-300 border-purple-400/30 bg-purple-400/10'
                  }`}
                >
                  #{tag.name}
                </motion.p>
              ))}
            </motion.div>

            {/* Enhanced bottom actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
              className="flex items-center justify-between pt-4 border-t border-cyan-500/20"
            >
              <motion.a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group/link"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Github size={18} />
                </motion.div>
                <span className="text-sm font-medium font-mono">Source</span>
              </motion.a>
              
              <motion.a
                href={project.live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all duration-300 group/link"
              >
                <span className="text-sm font-medium font-mono">Demo</span>
                <motion.div
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ExternalLink size={18} />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Enhanced animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
                'linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
                'linear-gradient(45deg, rgba(236, 72, 153, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(168, 85, 247, 0.05) 100%)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-400/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                borderColor: [
                  'rgba(6, 182, 212, 0.1)',
                  'rgba(168, 85, 247, 0.2)',
                  'rgba(6, 182, 212, 0.1)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-cyan-500/30 mb-6"
          >
            <Terminal className="text-cyan-400" size={20} />
            <span className="text-cyan-300 font-mono text-sm">PORTFOLIO.LOAD()</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 font-mono"
          >
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
            <span className="text-cyan-400">.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-mono"
          >
            Cutting-edge projects showcasing expertise in AI/ML, blockchain, quantum computing, and cloud-native technologies. Each solution pushes the boundaries of what's possible.
          </motion.p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-16"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full mx-2 mb-4 transition-all duration-500 relative overflow-hidden backdrop-blur-xl font-mono ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50'
                  : 'bg-slate-900/40 text-gray-300 hover:bg-slate-800/60 border border-cyan-500/20 hover:border-cyan-500/40'
              }`}
            >
              <tab.icon size={20} />
              <span className="font-medium">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Enhanced Projects Tab */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto"
              style={{ perspective: "1000px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
                {projects.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Enhanced Tech Stack Tab */}
          {activeTab === 'techstack' && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                          <tech.icon className="text-cyan-400" size={20} />
                        </div>
                        <h3 className="text-lg font-semibold text-white font-mono">{tech.name}</h3>
                      </div>
                      <span className="text-gray-400 font-mono">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        className={`h-3 bg-gradient-to-r ${tech.color} rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Enhanced Certificates Tab */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 rounded-full flex items-center justify-center">
                      <cert.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-white font-mono">{cert.title}</h3>
                      </div>
                      <p className="text-gray-400 font-mono text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-semibold font-mono">{cert.date}</span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full font-mono">
                      {cert.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;