import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      title: 'Field Ready Solutions',
      description: 'Comprehensive preparation and technological support to ensure your fields are optimized for the highest possible yield.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '02',
      title: 'Global Transportation',
      description: 'State-of-the-art logistics and temperature-controlled transport systems to deliver your produce fresh to any market.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const stats = [
    { value: '25 +', label: 'Years of Experience' },
    { value: '12 K', label: 'Happy Customers' },
    { value: '150 +', label: 'Green Projects' },
    { value: '80 +', label: 'Global Partners' }
  ];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-secondary font-bold uppercase tracking-widest mb-4">Our Services</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-dark">
            Solutions We Provide
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row bg-accent rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="md:w-1/2 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <span className="text-secondary font-bold mb-4">{service.id}</span>
                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-bold group"
                >
                  Get The Service <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-accent rounded-2xl border border-border"
            >
              <h4 className="text-4xl font-extrabold text-primary mb-2">{stat.value}</h4>
              <p className="text-gray-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
