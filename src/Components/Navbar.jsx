import React from 'react'
import Logo from '../assets/Logo/logo.svg'
import { Search } from "lucide-react";
import Notification from '../assets/Icons/notification.svg'
import Userprofile from '../assets/Icons/userprofile.svg'
import Whishlist from '../assets/Icons/whishlist.svg'
import Shoppingcart from '../assets/Icons/shoppingcart.svg'

const navItems = [
  "OFFERS",
  "EARRINGS",
  "DEVOTIONAL",
  "BANGLE",
  "BRACELET",
  "PLATINUM",
  "SOLITAIRE",
  "PENDANT",
  "RINGS",
  "NOSE PIN",
  "COUPLE BAND",
  "NECKLACE",
  "NAVARATNA",
];

const Navbar = () => {
  return (
    <div className='flex flex-col bg-primary px-4 sm:px-8 md:px-16 pt-4'>
      <div className='flex items-center justify-between gap-4'>
        {/* LOGO */}
        <img src={Logo} alt="Logo" className="w-32 sm:w-40" />

        {/* SEARCH + ICONS */}
        <div className='flex items-center gap-4'>
          <div className='hidden sm:flex items-center bg-white px-5 rounded border-2 border-black/50'>
            <Search className='w-5 h-5' />
            <input
              type="search"
              name='search'
              className='outline-none py-2 w-72 ml-2 text-sm font-medium'
              placeholder='Search Here'
            />
          </div>

          <div className='flex items-center gap-3'>
            <img src={Notification} alt="Notification" />
            <img src={Userprofile} alt="User" />
            <img src={Whishlist} alt="Wishlist" />
            <img src={Shoppingcart} alt="Cart" />
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto scrollbar-hide flex w-full">
        <div className="flex gap-6 mx-auto justify-between w-full">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="text-sm font-medium whitespace-nowrap px-1 cursor-pointer pb-4 border-b-2 border-primary hover:border-black transition-all">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
