import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

const SplashScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center relative">
            <Code2 size={48} className="text-white" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-transparent border-t-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Welcome
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-300 text-lg mb-8"
        >
          Loading Portfolio...
        </motion.p>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          className="w-64 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-8"
        />
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <Sparkles className="text-yellow-400" size={24} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;