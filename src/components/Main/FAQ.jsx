import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "What agricultural services do you provide?",
    answer: "We offer a wide range of services including organic farming consultancy, smart irrigation installation, soil testing, crop rotation planning, and sustainable harvesting solutions."
  },
  {
    question: "How can I start a sustainable farm?",
    answer: "Starting a sustainable farm involves soil assessment, choosing the right crops for your climate, and implementing water-saving technologies. Our team provides step-by-step guidance for beginners."
  },
  {
    question: "Do you offer modern farming equipment?",
    answer: "While we focus on consultancy and systems, we partner with leading equipment manufacturers to provide you with the latest smart farming technology at competitive rates."
  },
  {
    question: "Is organic farming more profitable?",
    answer: "In the long run, yes. Organic farming reduces dependency on expensive chemical inputs and allows farmers to tap into premium-priced organic markets."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary font-bold uppercase tracking-widest mb-3">Questions & Answers</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-dark">Common Inquiries</h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-dark">{faq.question}</span>
                <span className="text-secondary">
                  {activeIndex === idx ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
