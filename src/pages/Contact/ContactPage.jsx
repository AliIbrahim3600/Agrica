import React from 'react';
import Contact from '../../components/Contact/Contact';

const ContactPage = () => {
  return (
    <div className="bg-white">
      <section className="bg-primary py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Contact Our Experts</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our services or need a customized farming plan? We're here to help you grow.
          </p>
        </div>
      </section>
      
      <div className="py-12">
        <Contact />
      </div>

      {/* Map Placeholder */}
      <section className="container mx-auto px-6 pb-24">
        <div className="w-full h-[450px] bg-gray-200 rounded-3xl overflow-hidden relative border border-border shadow-inner">
           <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col gap-4">
              <svg className="w-16 h-16 opacity-20" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              <p className="text-xl font-medium uppercase tracking-widest">Interactive Map Placeholder</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
