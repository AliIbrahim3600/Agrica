import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div className="text-[#234821] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-30">
      
      {/* Left Content */}
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-15 items-center lg:items-start text-center md:text-left">
        
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Why you should <br className="hidden md:block" />
          choose us
        </h1>

        {/* Paragraph */}
        <p className="max-w-prose text-sm md:text-lg leading-relaxed mx-auto md:mx-0">
          Technological information and others, in addition to information about
          companies in the sector, list of any and all companies related to
          agribusiness.
        </p>

        {/* List */}
        <ul className="flex flex-col gap-3 md:gap-4 list-disc pl-5 md:pl-6 text-sm md:text-lg text-left">
          <li>
            Technological information and others, in addition to information
            about companies.
          </li>
          <li>
            Technological information and others, in addition to information
            about companies.
          </li>
          <li>
            Technological information and others, in addition to information
            about companies.
          </li>
        </ul>

        {/* Button */}
        <button className="bg-[#25771b] w-fit mx-auto md:mx-0 text-white relative overflow-hidden py-2.5 md:py-3 px-6 md:px-8 rounded-lg group">
          
          <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></span>
          
          <div className="relative z-10 flex gap-3 items-center justify-center">
            <FaPhoneAlt />
            <span className="group-hover:text-white transition-colors duration-300 text-sm md:text-base">
              (10) 892-293 2678
            </span>
          </div>
        </button>

      </div>

      {/* Right Content */}
      <figure className="w-full flex justify-center">
        <img
          src="https://preview.colorlib.com/theme/agrica/assets/img/gallery/about2.png"
          alt="agrica"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
        />
        <figcaption className="sr-only">agrica image</figcaption>
      </figure>

    </div>
  );
};

export default ChooseUs;