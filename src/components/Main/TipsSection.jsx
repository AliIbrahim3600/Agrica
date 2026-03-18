import React from "react";
import Infocard from "./infocard";

const TipsSection = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-6 flex flex-col gap-8 md:gap-10 items-center justify-center text-[#325430]">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
        Tips from experts
      </h2>

      {/* Cards */}
      <div className="flex flex-col gap-6 md:gap-8 w-full max-w-6xl">
        <Infocard img="https://preview.colorlib.com/theme/agrica/assets/img/gallery/services3.png" />
        <Infocard img="https://preview.colorlib.com/theme/agrica/assets/img/gallery/services4.png" />
      </div>

      {/* Button */}
      <button className="relative overflow-hidden py-2.5 md:py-3 px-6 md:px-8 border border-[#47a739] text-[#47a739] text-sm md:text-base rounded-lg group">
        
        {/* Background animation */}
        <span className="absolute inset-0 bg-green-500 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out will-change-transform z-0"></span>

        {/* Text */}
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          More Tips
        </span>
      </button>

    </div>
  );
};

export default TipsSection;