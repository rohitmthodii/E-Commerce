import React from 'react'
import Hero from '../assets/PNG/hero_img.png'
import { heroFooter } from "../Constants";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Hero})` }}
      className="w-full bg-center bg-cover bg-no-repeat relative min-h-162.5 md:min-h-212.5">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-white pt-24 sm:pt-32 max-w-7xl w-full mx-auto px-5">
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl font-solway leading-snug">
          The World First Jewellery E-Commerce Platform Explore The Future Talent
        </p>

        <p className="text-sm sm:text-base md:text-lg max-w-xl mt-3">
          Discover the future of jewelry shopping with our innovative e-commerce
          platform, showcasing exceptional talent and unique designs.
        </p>
      </div>

      {/* Footer Grid */}
      <div className="absolute bottom-0 w-full bg-black/30 backdrop-blur-md py-4 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 md:gap-16 items-center max-w-7xl w-full mx-auto">
          {heroFooter.map((item) => (
            <button key={item.id} className="px-2 py-1">
              <div className="flex flex-col items-center justify-center text-center">
                <img src={item.image} alt={item.title} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
                <p className="mt-2 font-medium text-secondary text-sm sm:text-base">
                  {item.title}
                </p>
                <p className="text-[#A5B2BA] text-xs sm:text-sm">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
