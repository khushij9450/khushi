import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const movingSkills = [
    "Frontend Development",
    "Backend Development", 
    "UI/UX Design",
    "Mobile Development",
    "Cloud Architecture",
    "DevOps & Deployment"
  ];

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

  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, TypeScript, Next.js, Tailwind CSS' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Python, PostgreSQL, MongoDB' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Sketch, Prototyping' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter, Progressive Web Apps' },
    { name: 'Web Technologies', icon: Globe, description: 'HTML5, CSS3, JavaScript, TypeScript' },
    { name: 'Performance Optimization', icon: Zap, description: 'Webpack, Vite, SEO, Web Vitals' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I started my journey in web development 5 years ago and have been passionate about creating 
              beautiful, functional websites ever since. I specialize in modern web technologies and love 
              to work on projects that challenge me to grow as a developer.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source 
              projects, or sharing my knowledge through technical writing and mentoring.
            </p>

            {/* Moving Skills Text */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Currently Specializing In:</h4>
              <div className="flex items-center h-8">
                <motion.span
                  key={currentSkill}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold text-xl"
                >
                  {movingSkills[currentSkill]}
                </motion.span>
                <motion.span
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                  className="ml-2 text-purple-400 font-bold text-2xl"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            <div className="flex space-x-4 pt-4">
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-purple-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  50+
                </motion.div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-pink-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  5+
                </motion.div>
                <div className="text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-cyan-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  100+
                </motion.div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-8xl">👩‍💼</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">What I Do</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I specialize in a wide range of technologies and services to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <skill.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{skill.name}</h4>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;