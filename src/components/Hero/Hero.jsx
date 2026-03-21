import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import slide1 from "../../assets/agrica.jpg";
import slide2 from "../../assets/Agricultural_Photo.webp";
import slide3 from "../../assets/farming-vast-fields-stockcake.webp";

const slides = [
  {
    bg: slide1,
    title: "Agricultural solution",
    description:
      "High-performing products that keep large turf areas beautiful and healthy-while saving you time, water and energy.",
  },
  {
    bg: slide2,
    title: "Agricultural solution",
    description:
      "High-performing products that keep large turf areas beautiful and healthy-while saving you time, water and energy.",
  },
  {
    bg: slide3,
    title: "Agricultural solution",
    description:
      "High-performing products that keep large turf areas beautiful and healthy-while saving you time, water and energy.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Our Services <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 hover:text-green-500 transition-colors"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 hover:text-green-500 transition-colors"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-green-500 w-6" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}