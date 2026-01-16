import React from 'react'
import { budgetData } from "../Constants";

const BudgetCards = () => {
  return (
    <div className="flex flex-col bg-[#222222] w-full">

      {/* Heading */}
      <div className="flex flex-col max-w-7xl px-5 w-full mx-auto mt-10">
        <div className="flex flex-col items-start sm:items-start md:items-center text-center">
          <p className="text-primary font-bodoni font-bold text-2xl sm:text-2xl md:text-3xl">
            Shop on Budget
          </p>
          <p className="text-secondary text-sm md:text-base">
            We have every style at your affordable budget
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 gap-8 lg:gap-16 mt-8 overflow-auto">
          {budgetData.map((item) => (
              <div key={item.id} className="relative w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-full object-cover"/>

                {/* Title */}
                <div className="flex flex-col absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 justify-center">
                  <p className="text-center text-white text-lg md:text-2xl font-medium">
                    {item.title}
                  </p>
                  <p className="text-center text-xs sm:text-sm md:text-base text-primary">
                    {item.subtitle}
                  </p>
                </div>

              </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BudgetCards
