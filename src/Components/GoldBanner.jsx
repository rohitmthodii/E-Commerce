import React from "react";
import Demo from "../assets/SVG/product1.svg";

const GoldBanner = () => {
  return (
    <div className="bg-[#222222] pt-10 px-5">
      <div className="max-w-7xl w-full flex flex-col sm:flex-col md:flex-row mx-auto items-center justify-between bg-linear-to-r from-[#4F570E] to-[#000000] py-0 sm:py-2 md:py-5 rounded-xl px-10">
        {/* banner image */}
        <div className="flex justify-center">
          <img src={Demo} alt="" className="max-w-full h-auto" />

        </div>

        {/* banner title  */}
        <div className="flex flex-col text-center md:text-start relative pb-5 sm:pb-5 md:pb-0">
          <div className="flex flex-col gap-2 px-5">
            <h1 className="text-secondary font-bodoni font-bold text-2xl md:text-4xl">The Best Gold Ever</h1>
            <p className="text-gray-400 max-w-xs md:max-w-lg w-full text-xs sm:text-sm md:text-base">People thinking about th future why gold make high value here is the answer for all aboute</p>
          </div>
          <div className="mt-5 sm:mt-5 md:mt-0 flex justify-around md:pt-8">
            <button className="text-primary font-medium border border-primary px-20 sm:px-32 md:px-14 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-black hover:shadow-lg active:scale-95">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldBanner;
