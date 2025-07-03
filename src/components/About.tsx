import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      title: "Software Engineer",
      company_name: "Google",
      icon: "🌐",
      iconBg: "#383E56",
      date: "March 2022 - Present",
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
        "Developed and maintained mobile applications using React Native.",
        "Worked closely with product managers to implement new features.",
        "Collaborated with designers to create intuitive user interfaces.",
        "Optimized applications for maximum speed and scalability.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: "🛍️",
      iconBg: "#383E56",
      date: "Jan 2020 - Jan 2021",
      points: [
        "Built and maintained e-commerce websites using modern web technologies.",
        "Implemented payment gateways and shopping cart functionality.",
        "Optimized websites for search engines and performance.",
        "Collaborated with the design team to create pixel-perfect implementations.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Meta",
      icon: "📘",
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Jan 2020",
      points: [
        "Developed full-stack web applications using React, Node.js, and MongoDB.",
        "Designed and implemented RESTful APIs and database schemas.",
        "Worked with version control systems like Git for collaborative development.",
        "Participated in agile development processes and daily standups.",
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

        {/* Work Experience Section - Adrian Hajdin Style */}
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

        <div className="max-w-7xl mx-auto">
          <div className="mt-20 flex flex-col">
            {experiences.map((experience, index) => (
              <motion.div
                key={`experience-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 relative overflow-hidden group"
                    >
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
                        <div className="flex items-center gap-5">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg"
                            style={{ backgroundColor: experience.iconBg }}
                          >
                            {experience.icon}
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-white text-[24px] font-bold">
                              {experience.title}
                            </h3>
                            <p className="text-purple-400 text-[16px] font-semibold">
                              {experience.company_name}
                            </p>
                          </div>
                        </div>

                        <ul className="mt-5 list-disc ml-5 space-y-2">
                          {experience.points.map((point, index) => (
                            <motion.li
                              key={`experience-point-${index}`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                              viewport={{ once: true }}
                              className="text-white-100 text-[14px] pl-1 tracking-wider text-gray-300"
                            >
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Date badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  {experience.date}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;