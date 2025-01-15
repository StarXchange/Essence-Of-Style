import React from "react";
import image1 from "../assets/image1.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center min-h-[50vh] bg-gradient-to-r from-blue-50 to-blue-400 rounded-lg shadow-md overflow-hidden">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6">
        <div className="text-[#414141] text-center sm:text-left">
          {/* Products Section */}
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR PRODUCTS</p>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold">
            Latest Arrivals
          </h1>

          {/* Shop Now Section */}
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <p className="font-semibold text-sm md:text-base cursor-pointer hover:underline">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
        className="w-full sm:w-1/2 object-cover h-full"
        src={image1}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;