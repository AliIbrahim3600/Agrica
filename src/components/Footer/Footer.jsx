import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f3fff2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[#234821] px-6 md:px-12 lg:px-20 pt-10 md:pt-16 lg:pt-20 pb-10">
      <div className="gap-6 flex flex-col items-center sm:items-start text-center sm:text-left">
        <img
          src="https://preview.colorlib.com/theme/agrica/assets/img/logo/logo2_footer.png"
          alt="preview"
        />
        <p className="w-full max-w-sm text-[clamp(14px,2vw,18px)] leading-relaxed">
          The information is also part of the MF Rural, where you can find news,
          quotes, technological information and others, in addition.
        </p>
        <div className="flex gap-4">
          <div className="rounded-full p-3 bg-[#e8f9e6] w-fit text-[#03bc2a] hover:bg-[#04b62a] hover:text-white duration-150">
            <FaTwitter />
          </div>
          <div className="rounded-full p-3 bg-[#e8f9e6] w-fit text-[#03bc2a] hover:bg-[#04b62a] hover:text-white duration-150">
            <FaFacebook />
          </div>
          <div className="rounded-full p-3 bg-[#e8f9e6] w-fit text-[#03bc2a] hover:bg-[#04b62a] hover:text-white duration-150">
            <FaYoutube />
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-4 items-center sm:items-start">
        <span className="text-2xl font-medium mb-4">Quick Links</span>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Design & creatives</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Telecommunication</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Restaurant</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Programing</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Architecture</a></li>
      </ul>

      <ul className="flex flex-col gap-4 items-center sm:items-start">
        <span className="text-2xl font-medium mb-4">Company</span>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Design & creatives</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Telecommunication</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Restaurant</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Programing</a></li>
        <li><a href="#" className="hover:text-[#03bc2a] hover:underline duration-200">Architecture</a></li>
      </ul>

      <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-sm md:text-base text-center mt-4 border-t border-[#d4ecd2] pt-6">
        <p>Copyright ©2026 All rights reserved | This template is made with by Colorlib</p>
      </div>
    </div>
  );
};

export default Footer;

