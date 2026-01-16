import React from 'react'
import { productData } from "../Constants";

const RecentProducts = () => {

  const recentProducts = productData.filter(item =>
        item.tags?.includes("recentSearch")
      );

  return (
    <div className='bg-[#222222]'>
        <div className='max-w-7xl w-full mx-auto pt-10 px-5'>
            <div className='flex flex-col'>
              <p className="text-secondary font-bodoni font-bold text-2xl sm:text-2xl md:text-3xl">Recent Searched</p>
              <p className="text-gray-600 text-xs sm:text-xs md:text-base font-medium">243 New items added</p>
            </div>
      <div className="mt-5 overflow-x-auto pb-10">
  <div className="grid grid-flow-col auto-cols-max gap-x-5">
    {recentProducts.map((item) => (
      <div
        key={item.id}
        className="bg-linear-to-tr from-black via-primary/10 to-black
                   rounded-xl flex flex-col justify-between items-center
                   pb-5 w-64 border border-primary/50 shrink-0"
      >
        <img src={item.image} alt="" className="w-56 h-52" />

        <p className="text-secondary font-semibold mt-5 text-lg">{item.name}</p>
        <p className="text-gray-400 text-xs">SKU: {item.code}</p>

        <p className="text-white flex gap-4 mt-5">
          <span className="text-gray-500 line-through">
            ₹{item.price}
          </span>
          <span className="text-secondary">
            ₹{item.discountPrice}
          </span>
        </p>
      </div>
    ))}
  </div>
</div>

        </div>
    </div>
  )
}

export default RecentProducts
