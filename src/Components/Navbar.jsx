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
    " RINGS",
    "NOSE PIN",
    "COUPLE BAND",
    "NECKLACE",
    "NAVARATNA",
  ];


const Navbar = () => {
  return (
    <div className='flex flex-col bg-primary px-16 py-3'>

      <div className='flex flex-row items-center justify-between'>
        <div>
            {/* LOGO  */}
            <img src={Logo} alt="" />
        </div>
        {/* SEARCH + BUTTONS  */}
        <div className='flex flex-row items-center gap-5'>
            <div className='flex items-center bg-white px-5 rounded border-2 border-black/50'>
                <Search className='w-5 h-5' />
                <input type="search" name='search' className='outline-none py-2 w-72 ml-2 text-sm font-medium' placeholder='Search Here' />
            </div>
            <div className='flex flex-row justify-center items-center gap-3'>
                <img src={Notification} alt="" />
                <img src={Userprofile} alt="" />
                <img src={Whishlist} alt="" />
                <img src={Shoppingcart} alt="" />
            </div>
        </div>
      </div>

      {/* NAVIGATIONS  */}
       <div className='flex flex-row justify-between mt-4 flex-wrap'>
        {navItems.map((item, index) => (
          <button key={index} className='px-3 py-1 text-sm font-medium'>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar
