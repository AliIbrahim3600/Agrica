import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Robert Fox",
    role: "Wheat Farmer",
    content: "Agrica has completely transformed how we manage our soil health. Their sustainable practices are second to none.",
    image: "https://i.pravatar.cc/150?u=robert"
  },
  {
    name: "Jane Cooper",
    role: "Organic Orchard Owner",
    content: "The smart irrigation system they implemented saved us 30% on water costs in the first season alone!",
    image: "https://i.pravatar.cc/150?u=jane"
  },
  {
    name: "Guy Hawkins",
    role: "Agricultural Consultant",
    content: "Highly professional team with deep knowledge of modern agricultural technology. Highly recommended.",
    image: "https://i.pravatar.cc/150?u=guy"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary font-bold uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-dark">What Our Farmers Say</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-accent p-8 rounded-3xl border border-border relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <FaQuoteLeft className="text-secondary/20 text-5xl absolute top-8 right-8" />
              <p className="text-gray-600 mb-8 relative z-10 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <p className="text-sm text-secondary font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
