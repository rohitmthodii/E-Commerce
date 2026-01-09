import React from 'react'
import { Heart } from "lucide-react"

import Product1 from '../assets/SVG/Product1.svg'
import Product2 from '../assets/SVG/Product2.svg'
import Product3 from '../assets/SVG/Product3.svg'
import Product4 from '../assets/SVG/Product4.svg'

const budgetData = [
  {
    id: 1,
    image: Product1,
    title: "Diamond ring",
    subtitle: "SKU: 18037",
    price: "₹27,000",
  },
  {
    id: 2,
    image: Product2,
    title: "Diamond ring",
    subtitle: "SKU: 18037",
    price: "₹27,000",
  },
  {
    id: 3,
    image: Product3,
    title: "Diamond ring",
    subtitle: "SKU: 18037",
    price: "₹27,000",
  },
  {
    id: 4,
    image: Product4,
    title: "Diamond ring",
    subtitle: "SKU: 18037",
    price: "₹27,000",
  },
];

const NewArrivals = () => {
  return (
    <div className="flex flex-col bg-[#222222] w-full pb-10">

      {/* Heading */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mt-16">
          <div>
            <p className="text-secondary font-bodoni font-bold text-3xl">
              New Arrivals
            </p>
            <p className="text-gray-500/80 text-sm">
              243 New items added
            </p>
          </div>

          <p className="text-secondary cursor-pointer hover:underline">
            See all
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-5 mt-10">
          {budgetData.map((item) => (
            <div
              key={item.id}
              className="bg-black rounded-xl flex justify-center"
            >
              <div className="w-80 pb-4">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-xl w-full"
                />

                {/* Title & Price */}
                <div className="flex justify-between items-center px-4 mt-4">
                  <p className="text-secondary text-xl font-medium">
                    {item.title}
                  </p>
                  <p className="text-secondary font-semibold">
                    {item.price}
                  </p>
                </div>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm px-4 mt-1">
                  {item.subtitle}
                </p>

                {/* Button + Heart */}
                <div className="flex items-center gap-3 px-4 mt-4 justify-between">
                  <button className="bg-primary px-8 py-2 rounded-lg text-black font-medium hover:opacity-90 transition w-56">
                    ADD TO CART
                  </button>

                  <button className="border border-secondary p-2 rounded-lg hover:bg-secondary/10 transition">
                    <Heart
                      size={20}
                      className="text-secondary hover:fill-secondary transition"
                    />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default NewArrivals
