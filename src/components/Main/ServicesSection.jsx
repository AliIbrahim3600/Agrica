import React from 'react';
import { motion as Motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      title: 'Field Ready',
      description: 'Technological information and others, in addition to information about companies in the sector, list of any and all companies related to agribusiness.',
      image: 'https://preview.colorlib.com/theme/agrica/assets/img/gallery/services1.png'
    },
    {
      id: '02',
      title: 'Transportation',
      description: 'Technological information and others, in addition to information about companies in the sector, list of any and all companies related to agribusiness.',
      image: 'https://preview.colorlib.com/theme/agrica/assets/img/gallery/services2.png'
    }
  ];

  const stats = [
    { value: '20 +', label: 'List of any and all companies related to agribusiness.' },
    { value: '10 K', label: 'List of any and all companies related to agribusiness.' },
    { value: '12 +', label: 'List of any and all companies related to agribusiness.' },
    { value: '280 +', label: 'List of any and all companies related to agribusiness.' }
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-20 text-[#234821]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Services we provide
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 md:mb-24">
          {services.map((service, index) => (
            <Motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row bg-[#f3fff2] overflow-hidden rounded-sm"
            >
              {/* Image Side */}
              <div className="md:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover min-h-[250px]"
                />
              </div>
              {/* Content Side */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-sm font-medium text-gray-400 mb-4">{service.id}</span>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <button className="relative overflow-hidden bg-[#25771b] text-white py-2.5 px-6 rounded-sm w-fit group">
                  <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
                  <span className="relative z-10 text-sm font-bold">Get The Service</span>
                </button>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <Motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-4xl md:text-5xl font-extrabold mb-4">{stat.value}</span>
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.label}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
