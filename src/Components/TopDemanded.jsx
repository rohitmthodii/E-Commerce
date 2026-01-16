import React from 'react'
import { productData } from "../Constants";

const TopDemanded = () => {

  const topDemanded = productData.filter(item =>
      item.tags?.includes("topDemanded")
    );

  return (
    <div className='bg-[#222222] pt-10'>
      <div className='max-w-7xl w-full mx-auto px-5'>
        <div className='flex flex-col text-start sm:text-start md:items-center'>
        <h1 className="text-secondary font-bodoni font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl">Top Demanded Items</h1>
        <p className="text-gray-400 text-xs sm:text-xs md:text-sm font-light">234 New items added</p>
      </div>

      <div className="mt-5 overflow-x-auto scrollbar-hide">
  <div className="flex gap-5 w-max">
    {topDemanded.map((item) => (
      <div
        key={item.id}
        className="bg-linear-to-tr from-black via-primary/10 to-black
                   rounded-xl shrink-0
                   w-64 pb-5
                   flex flex-col items-center
                   border border-primary/50">
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-contain"
        />

        <p className="text-secondary mt-5 text-lg">{item.name}</p>
        <p className="text-gray-400 text-xs">SKU: {item.code}</p>

        <p className="text-white flex gap-4 mt-5">
          <span className="text-slate-500 line-through">₹{item.price}</span>
          <span className="text-secondary">₹{item.discountPrice}</span>
        </p>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  )
}

export default TopDemanded
