import React, { useEffect, useState } from "react";
import carouselimage1 from "../assets/carouselimage1.png";



export default function OrbitCarousel() {
  const images = [carouselimage1,carouselimage1,carouselimage1]; // add more images here
  const [current, setCurrent] = useState(0);

  // Auto carousel (every 3s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  return (
    <div className="relative w-[90%] h-[90%] rounded-4xl bg-[#0B56A4] z-100 flex flex-col items-center justify-center gap-10">
        <span
          className="
            absolute
            -top-90 -right-90
            w-180 h-180
            rounded-full
            bg-linear-to-b from-white/40 to-white/40 "
        ></span>
      {/* Image Section */}
      <div
        className="scroll-container flex justify-center items-center  cursor-pointer z-1"
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
      >
        <img src={images[current]} alt="" className="w-100 transition-all duration-700" />
      </div>

      

      {/* Caption */}
      <div className="w-[90%] text-center inter mt-4">
        <h1 className="text-white text-2xl">Bills Payments Options</h1>
        <p className="text-white">Analyzing previous trends ensures that businesses always make the right decision. And as the scale of the decision and it’s impact magnifies...</p>
      </div>

      {/* Dots */}
      <div className="flex gap-2  ">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-[#2066ac] scale-110" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
      
    </div>
  );
}
