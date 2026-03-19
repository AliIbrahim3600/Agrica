import React from "react";

const Infocard = ({img}) => {
  return (
    <div className="bg-[#f3fff2] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center lg:items-start">
      <figure className="relative">
        <img
          src={img}
          alt="agrica"
          className="w-full max-w-md lg:max-w-lg"
        />
        <figcaption className="sr-only">agrica</figcaption>
      </figure>
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 justify-center text-center lg:text-left">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">20+ years agricultural cooperative</h2>
        <p className="w-full max-w-prose text-sm md:text-base leading-relaxed">
          The information is also part of the MF Rural, where you can find news,
          quotes, technological information and others, in addition to
          information about companies in the sector, list of any and all
          companies related to agribusiness, just access the Rural List section.
        </p>
        <a href="#" className="underline text-[#47a739] text-sm md:text-base hover:text-green-700 transition">Read More</a>
      </div>
    </div>
  );
};

export default Infocard;
