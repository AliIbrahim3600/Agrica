import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white text-[#234821] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-20">
      <Motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <Motion.div variants={itemVariants} className="text-center lg:text-left mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h2>
          <div className="h-1.5 w-20 bg-[#25771b] mx-auto lg:mx-0 rounded-full"></div>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info Panel */}
          <Motion.div variants={itemVariants} className="space-y-8 md:space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-md">
                We're here to help you with your agricultural needs. 
                Whether you have a question or need a consultation, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-[#f3fff2] rounded-full text-[#03bc2a] group-hover:bg-[#03bc2a] group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</p>
                  <p className="text-base md:text-lg font-medium">contact@agrica.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-[#f3fff2] rounded-full text-[#03bc2a] group-hover:bg-[#03bc2a] group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</p>
                  <p className="text-base md:text-lg font-medium">(10) 892-293 2678</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-[#f3fff2] rounded-full text-[#03bc2a] group-hover:bg-[#03bc2a] group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Our Location</p>
                  <p className="text-base md:text-lg font-medium">768/A, Green lane 790, New York</p>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Form Panel */}
          <Motion.div variants={itemVariants} className="relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <Motion.form
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 bg-[#f3fff2] p-6 md:p-10 rounded-2xl border border-[#d4ecd2]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase text-[#234821]">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-[#d4ecd2]'} rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25771b] transition-all`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase text-[#234821]">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-[#d4ecd2]'} rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25771b] transition-all`}
                      />
                      {errors.email && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold uppercase text-[#234821]">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={`w-full bg-white border ${errors.subject ? 'border-red-500' : 'border-[#d4ecd2]'} rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25771b] transition-all`}
                    />
                    {errors.subject && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.subject}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase text-[#234821]">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-[#d4ecd2]'} rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#25771b] transition-all resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{errors.message}</p>}
                  </div>

                  <Motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitting}
                    className="w-full bg-[#25771b] hover:bg-[#1e5f15] text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-70 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
                    <div className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <FaPaperPlane className="text-sm" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </Motion.button>
                </Motion.form>
              ) : (
                <Motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#f3fff2] p-10 md:p-16 rounded-2xl border border-[#03bc2a]/30 text-center flex flex-col items-center shadow-lg"
                >
                  <div className="mb-6 p-4 bg-[#03bc2a] rounded-full text-white shadow-md">
                    <FaCheckCircle className="text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-gray-600 mb-8 max-w-xs">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#25771b] font-bold hover:underline transition-all"
                  >
                    Send another message
                  </button>
                </Motion.div>
              )}
            </AnimatePresence>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Contact;
