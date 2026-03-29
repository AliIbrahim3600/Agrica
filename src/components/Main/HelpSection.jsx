import React from "react";
import { motion } from "framer-motion";
import agrica from "../../assets/agrica.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const HelpSection = () => {
  return (
    <section className="bg-accent py-24 overflow-hidden">
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
            <h2 className="text-secondary font-bold uppercase tracking-widest">Support</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
              Need Expert Help?
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our team of agricultural experts is available 24/7 to assist you with any inquiries. From technical support to custom farming plans, we've got you covered.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-md group-hover:bg-secondary group-hover:text-white transition-all">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                <p className="text-lg font-bold text-dark">(10) 892-293 2678</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-md group-hover:bg-secondary group-hover:text-white transition-all">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                <p className="text-lg font-bold text-dark">contact@agrica.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-md group-hover:bg-secondary group-hover:text-white transition-all">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Visit Us</p>
                <p className="text-lg font-bold text-dark">768/A, Green lane 790, New York</p>
              </div>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all"
          >
            Drop Your Message
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 border-2 border-secondary/20 rounded-3xl translate-x-8 translate-y-8" />
          <img
            src={agrica}
            alt="Agricultural Expert"
            className="relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HelpSection;
