import React from 'react'
import Logo from '../assets/Logo/logoDark.svg'
import { Search } from "lucide-react";
import Notification from '../assets/Icons/notification.svg'
import Userprofile from '../assets/Icons/userprofile.svg'
import Whishlist from '../assets/Icons/whishlist.svg'
import Shoppingcart from '../assets/Icons/shoppingcart.svg'
import Hamburger from '../assets/Icons/hamburger.svg'
import { useCart } from '../Contexts/CartContext';
import { Link } from "react-router-dom";
import { navItems } from "../Constants";

const Navbar = () => {

  const { cartCount } = useCart();

  return (
    <div className='flex flex-col bg-primary px-5 pt-4 pb-4 sm:pb-4 md:pb-0 lg:pb-0'>
      <div className='flex items-center justify-between gap-4 max-w-7xl w-full mx-auto'>
        {/* LOGO */}
        <Link to='/'><img src={Logo} alt="Logo" className="w-32 sm:w-40" /></Link>

        {/* SEARCH + ICONS */}
        <div className='flex items-center gap-4'>
          <div className='hidden sm:flex items-center bg-white px-5 rounded border-2 border-black/50 cursor-text'>
            <Search className='w-5 h-5' />
            <input
              type="search"
              name='search'
              className='outline-none py-2 w-72 ml-2 text-sm font-medium'
              placeholder='Search Here'
            />
          </div>

          <div className='flex items-center gap-3'>
            <img src={Notification} alt="Notification" className='hidden sm:hidden md:flex lg:flex cursor-pointer w-6 h-6' />
            
            <img src={Userprofile} alt="User" className='hidden sm:hidden md:flex lg:flex cursor-pointer w-6 h-6' />

            <Link>
              <img src={Whishlist} alt="Wishlist" className='cursor-pointer w-6 h-6' />
            </Link>

            <div className='relative'>
              <Link to='/cartitems'>
              <img src={Shoppingcart} alt="Cart" className='cursor-pointer relative w-6 h-6' />
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-green-500 text-white font-medium text-xs flex items-center justify-center rounded-full border-2 border-primary py-0.5 px-2">
                  {cartCount}
                </span>
              )}
            </Link>
            </div>
            <img src={Hamburger} alt="" className='flex md:hidden lg:hidden w-7 h-7' />
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:flex mt-4 overflow-x-auto scrollbar-hide max-w-7xl w-full mx-auto justify-between">
        <div className="flex gap-6 w-max">
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
