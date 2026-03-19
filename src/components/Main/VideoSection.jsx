import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      
      {/* Video Wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/85kTHwJ1Ju8?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=85kTHwJ1Ju8"
          title="Background Video"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      {/* Content */}
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

export default VideoSection;