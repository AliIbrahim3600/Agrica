import React from "react";
import agrica from "../../assets/agrica.jpg";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const HelpSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-[#234821] py-12 md:py-16 lg:py-20 px-4 md:px-6 gap-10 lg:gap-0 items-center">
      
      {/* Left Content */}
      <div className="flex flex-col justify-center  gap-6 md:gap-8 lg:gap-10 lg:px-20 text-center lg:text-left">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Need any help?
        </h2>

        {/* Paragraph */}
        <p className="w-full max-w-prose text-sm md:text-base leading-relaxed mx-auto lg:mx-0">
          The information is also part of the MF Rural, where you can find news,
          quotes, technological information and others, in addition.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-3 md:gap-4">
          
          <span className="flex items-center gap-3 justify-center lg:justify-start">
            <FaPhone className="text-lg" />
            (10) 892-293 2678
          </span>

          <span className="flex items-center gap-3 justify-center lg:justify-start">
            <CiMail className="text-lg" />
            contact@agrica.com
          </span>

          <span className="flex items-center gap-3 justify-center lg:justify-start">
            <FaLocationDot className="text-lg" />
            768/A, Green lane 790, Max town New York
          </span>
        </div>

        {/* Button */}
        <button className="relative overflow-hidden py-2.5 md:py-3 px-6 md:px-8 border border-[#47a739] text-[#47a739] text-sm md:text-base rounded-lg group self-center lg:self-start">
          
          {/* Background animation */}
          <span className="absolute inset-0 bg-green-500 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>

          {/* Text */}
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Drop Your Message
          </span>
        </button>

      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src={agrica}
          alt="agrica"
          className="w-full h-auto object-cover rounded-lg max-h-100 lg:max-h-none"
        />
      </div>

    </div>
  );
};

export default HelpSection;