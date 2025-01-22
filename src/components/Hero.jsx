import React from "react";
import image1 from "../assets/image1.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center min-h-[30vh] bg-gradient-to-r from-blue-50 to-blue-400 rounded-lg shadow-md overflow-hidden">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-6 sm:py-0 px-4">
        <div className="text-[#414141] text-center sm:text-left">
          {/* Products Section */}
          <div className="flex items-center gap-1 justify-center sm:justify-start">
            <p className="w-6 md:w-8 h-[1.5px] bg-[#414141]"></p>
            <p className="font-medium text-xs md:text-sm">OUR PRODUCTS</p>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:py-2 lg:text-3xl leading-snug font-bold">
            Latest Arrivals
          </h1>

          {/* Shop Now Section */}
          <div className="flex items-center gap-1 justify-center sm:justify-start">
            <p className="font-semibold text-xs md:text-sm cursor-pointer hover:underline">
              SHOP NOW
            </p>
            <p className="w-6 md:w-8 h-[1.5px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side with Full Image */}
      <div className="w-full sm:w-1/2 h-full">
        <img
          className="w-full h-full object-cover"
          src={image1}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
