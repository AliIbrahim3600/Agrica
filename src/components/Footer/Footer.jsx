import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaLeaf } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-dark pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/">
            <img src={logo} alt="Agrica Logo" className="h-12" />
          </Link>
          <p className="text-gray-600 leading-relaxed max-w-xs">
            Leading the way in sustainable agriculture. Providing innovative solutions to help farmers grow more with less environmental impact.
          </p>
          <div className="flex gap-4">
            {[FaTwitter, FaFacebook, FaYoutube, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm border border-border"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaLeaf className="text-secondary text-sm" /> Services
          </h4>
          <ul className="space-y-4">
            {["Organic Farming", "Crop Rotation", "Soil Health", "Smart Irrigation", "Sustainable Harvest"].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-gray-600 hover:text-secondary hover:translate-x-1 inline-block transition-all">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaLeaf className="text-secondary text-sm" /> Company
          </h4>
          <ul className="space-y-4">
            {["Home", "About Us", "Our Blog", "Latest News", "Contact Us"].map((item) => (
              <li key={item}>
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase().split(' ')[0]}`} className="text-gray-600 hover:text-secondary hover:translate-x-1 inline-block transition-all">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaLeaf className="text-secondary text-sm" /> Newsletter
          </h4>
          <p className="text-gray-600 mb-4">Subscribe to get latest agricultural updates.</p>
          <form className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-5 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-secondary/30 pr-12 bg-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1.5 bg-secondary text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              ➔
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Agrica. All rights reserved. Cultivating a greener future.</p>
      </div>
    </footer>
  );
};

export default Footer;
