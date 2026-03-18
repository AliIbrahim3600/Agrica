import React from "react";

const Video = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      
      {/* Video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/85kTHwJ1Ju8?autoplay=1&mute=1&loop=1&playlist=85kTHwJ1Ju8&controls=0&showinfo=0&modestbranding=1"
        title="Background Video"
        allow="autoplay; fullscreen"
      ></iframe>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          Welcome to Agrica
        </h2>
        <p className="max-w-xl text-sm md:text-base lg:text-lg">
          Discover modern agriculture solutions and expert insights.
        </p>
      </div>

    </section>
  );
};

export default Video;