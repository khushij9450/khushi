import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

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

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: "☕",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: "🚗",
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: "🛍️",
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: "📘",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mb-4 tracking-wider uppercase"
          >
            What I have done so far
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Work{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Experience.
            </span>
          </motion.h3>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400 hidden md:block origin-top"
              style={{
                background: 'linear-gradient(180deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
              }}
            />
            
            {experiences.map((experience, index) => (
              <div key={`experience-${index}`} className="relative mb-16 md:ml-24">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.2, duration: 0.6, ease: "easeOut", type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute -left-24 top-8 hidden md:flex"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    className="relative"
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl border-4 border-white/20 backdrop-blur-sm relative z-10"
                      style={{ backgroundColor: experience.iconBg }}
                    >
                      {experience.icon}
                    </div>
                    {/* Glowing ring effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur-md"
                    />
                  </motion.div>
                </motion.div>

                {/* Experience card */}
                <motion.div
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        background: [
                          'linear-gradient(45deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
                          'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
                          'linear-gradient(45deg, rgba(236, 72, 153, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(168, 85, 247, 0.05) 100%)'
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                          <motion.div 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl lg:hidden shadow-lg"
                            style={{ backgroundColor: experience.iconBg }}
                          >
                            {experience.icon}
                          </motion.div>
                          <div>
                            <motion.h4
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.3 + 0.3, duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-2xl font-bold text-white mb-1"
                            >
                              {experience.title}
                            </motion.h4>
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                            >
                              {experience.company_name}
                            </motion.p>
                          </div>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2 text-gray-400 bg-slate-700/50 px-4 py-2 rounded-full"
                        >
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{experience.date}</span>
                        </motion.div>
                      </div>

                      <motion.ul 
                        className="space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {experience.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: pointIndex * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4 text-gray-300 group/item"
                          >
                            <motion.div
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                              className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 shadow-lg"
                            />
                            <motion.span
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                              className="leading-relaxed text-base group-hover/item:text-white transition-colors duration-300"
                            >
                              {point}
                            </motion.span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;