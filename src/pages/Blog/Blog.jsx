import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const posts = [
  {
    title: "5 Tips for Transitioning to Organic Farming",
    excerpt: "Moving away from chemicals can be daunting. Here are the essential steps to make the switch smoothly...",
    date: "March 15, 2026",
    author: "Dr. Sarah Green",
    category: "Organic",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Future of Smart Irrigation Systems",
    excerpt: "How AI and IoT are changing the way we think about water conservation in modern agriculture...",
    date: "March 10, 2026",
    author: "Mark Rivers",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1463123081488-729f3a2ee3ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Understanding Soil pH and Its Impact",
    excerpt: "Soil chemistry is the foundation of a healthy crop. Learn how to test and balance your soil's pH levels...",
    date: "March 05, 2026",
    author: "Elena Soil",
    category: "Soil Health",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Best Practices for Sustainable Harvesting",
    excerpt: "Ensure your soil remains fertile for the next season with these low-impact harvesting techniques...",
    date: "Feb 28, 2026",
    author: "Robert Field",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="bg-white">
      <section className="bg-accent py-20 border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-dark mb-4"
          >
            Agrica Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Latest news, tips, and trends from the world of sustainable farming.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 2) * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-md">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-4 font-medium">
                <span className="flex items-center gap-2"><FaCalendarAlt className="text-secondary" /> {post.date}</span>
                <span className="flex items-center gap-2"><FaUser className="text-secondary" /> {post.author}</span>
              </div>
              <h2 className="text-3xl font-bold text-dark mb-4 group-hover:text-secondary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <motion.button 
                whileHover={{ gap: "20px" }}
                className="flex items-center gap-3 font-bold text-dark transition-all"
              >
                Read Full Article <FaArrowRight className="text-secondary" />
              </motion.button>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
