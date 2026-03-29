import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaWater, FaBug, FaChartLine, FaCloudSun, FaTruckLoading } from 'react-icons/fa';

const services = [
  {
    title: "Organic Crop Solutions",
    desc: "Premium organic seeds and natural fertilization techniques to boost yield without chemicals.",
    icon: <FaSeedling />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Smart Irrigation",
    desc: "Automated water management systems that reduce waste and ensure optimal soil moisture.",
    icon: <FaWater />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Pest Management",
    desc: "Eco-friendly pest control strategies that protect your crops while preserving the ecosystem.",
    icon: <FaBug />,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Soil Analysis",
    desc: "In-depth laboratory testing to identify nutrient deficiencies and improve soil health.",
    icon: <FaChartLine />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Climate Adaptation",
    desc: "Expert guidance on selecting crops that thrive in changing local weather patterns.",
    icon: <FaCloudSun />,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Supply Chain",
    desc: "Efficient logistics and storage solutions to get your produce from farm to market fresh.",
    icon: <FaTruckLoading />,
    color: "bg-red-100 text-red-600"
  }
];

const Services = () => {
  return (
    <div className="bg-white overflow-hidden">
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <FaSeedling className="text-[500px] text-white absolute -top-20 -left-20 rotate-12" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Expert Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive agricultural solutions tailored to modern farming needs and sustainable growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="p-10 rounded-3xl border border-border bg-white transition-all duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-8`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              <motion.button 
                whileHover={{ x: 5 }}
                className="mt-8 text-secondary font-bold flex items-center gap-2 group"
              >
                Learn More <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
