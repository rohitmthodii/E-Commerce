import React from 'react'
import Image1 from '../assets/SVG/girl1.svg'
import Image2 from '../assets/SVG/girl2.svg'
import Image3 from '../assets/SVG/girl3.svg'
import Image4 from '../assets/SVG/girl4.svg'

  const budgetData = [
    {
        id: "1",
        image: Image1,
        title: "Over 250k",
        subtitle: "72000 styles",
    },
    {
        id: "2",
        image: Image2,
        title: "100k-250k",
        subtitle: "58000 styles",
    },
    {
        id: "3",
        image: Image3,
        title: "50k-100k",
        subtitle: "34000 styles",
    },
    {
        id: "4",
        image: Image4,
        title: "Under 50k",
        subtitle: "19000 styles",
    },
  ];

const BudgetCards = () => {
  return (
    <div className='flex flex-col bg-[#222222] w-full'>

        {/* Heading */}
        <div className='flex flex-col max-w-7xl mx-auto'>
            <div className='flex flex-col items-center mt-16'>
            <p className='text-primary font-bodoni font-bold text-3xl'>Shop on Budget</p>
            <p className='text-secondary mt-2'>We have every style at your affordable budget</p>
        </div>

        {/* Grid */}
<div className="grid grid-cols-4 gap-16 mt-8">
  {budgetData.map((item, index) => (
    <div key={index} className="flex justify-center">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-md"
        />

        {/* Title */}
        <div className="flex flex-col absolute bottom-4 left-0 right-0 justify-center">
          <p className="text-center text-white text-xl font-medium">
            {item.title}
          </p>
          <p className='text-center text-primary font-light'>{item.subtitle}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}

export default BudgetCards
