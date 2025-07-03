import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const movingTexts = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "React Specialist",
    "Problem Solver",
    "Creative Thinker"
  ];

  // Toggle cursor every 500ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Change text every 3 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % movingTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sarah
              </span>
            </motion.h1>
            
            {/* Moving Text with Toggle Cursor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center lg:justify-start"
            >
              <motion.span
                key={currentText}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
              >
                {movingTexts[currentText]}
              </motion.span>
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                className="ml-1 text-purple-400 font-bold text-3xl"
              >
                |
              </motion.span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              I create beautiful, functional websites and applications that deliver exceptional user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Download CV</span>
                <Download size={18} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                View Portfolio
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Character Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <div className="text-white text-8xl font-bold">👩‍💻</div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-yellow-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;