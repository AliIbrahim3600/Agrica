import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const VideoSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-24 h-24 bg-white text-secondary rounded-full flex items-center justify-center text-3xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:bg-secondary hover:text-white transition-all duration-500 relative"
          >
            <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
            <FaPlay className="ml-2" />
          </motion.button>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Watch Our Success Story
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          See how Agrica is helping farmers transition to more profitable and sustainable farming methods across the globe.
        </motion.p>
      </div>
    </section>
  );
};

export default VideoSection;
