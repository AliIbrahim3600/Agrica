import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const ChooseUs = () => {
  const features = [
    "25+ Years of Agricultural Excellence",
    "Sustainable & Organic Farming Practices",
    "Innovative Smart Irrigation Systems",
    "Global Partnerships & Local Support"
  ];

  return (
    <section className="bg-white overflow-hidden py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-secondary font-bold uppercase tracking-widest">Why Choose Us</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
              Cultivating Success With <br /> Modern Technology
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            We provide cutting-edge technological solutions and expert guidance to help agribusinesses thrive in a changing world. Our commitment to sustainability ensures long-term prosperity.
          </p>

          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-4 text-dark font-medium"
              >
                <FaCheckCircle className="text-secondary text-xl shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-hover text-white flex items-center gap-3 px-8 py-4 rounded-full transition-all shadow-xl group"
          >
            <FaPhoneAlt className="group-hover:rotate-12 transition-transform" />
            <span className="font-bold">(10) 892-293 2678</span>
          </motion.button>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-secondary/10 rounded-3xl -rotate-3" />
          <img
            src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
            alt="Farmer in the field"
            className="relative z-10 w-full rounded-3xl shadow-2xl object-cover h-[500px]"
          />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block border border-border"
          >
            <div className="flex items-center gap-4">
              <div className="bg-accent p-3 rounded-full">
                <FaCheckCircle className="text-secondary text-3xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-dark">100%</p>
                <p className="text-gray-500 text-sm">Organic Certified</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ChooseUs;
