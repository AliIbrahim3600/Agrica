import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaLeaf, FaHandshake } from 'react-icons/fa';
import ChooseUs from '../../components/Main/ChooseUs';

const About = () => {
  const stats = [
    { icon: <FaAward />, label: "Years Experience", value: "25+" },
    { icon: <FaUsers />, label: "Happy Farmers", value: "12k+" },
    { icon: <FaLeaf />, label: "Green Projects", value: "150+" },
    { icon: <FaHandshake />, label: "Partnerships", value: "80+" },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-dark mb-6"
          >
            Our Roots & Vision
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Cultivating excellence since 1998, Agrica is dedicated to bringing sustainable innovation to the heart of every farm.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-dark mb-6 underline decoration-secondary decoration-4 underline-offset-8">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To empower farmers globally with eco-friendly technologies and expert knowledge, ensuring food security and environmental health for generations to come.
            </p>
            <h2 className="text-3xl font-bold text-dark mb-6 underline decoration-secondary decoration-4 underline-offset-8">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the world's most trusted partner in sustainable agriculture, leading the transition toward a greener, smarter, and more resilient food system.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" 
              alt="Farmers in field" 
              className="rounded-3xl shadow-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl hidden lg:block"
            >
              <p className="text-4xl font-bold">25</p>
              <p className="text-sm uppercase tracking-widest">Years of Trust</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="text-4xl text-secondary flex justify-center">{stat.icon}</div>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-gray-300 uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ChooseUs />
    </div>
  );
};

export default About;
