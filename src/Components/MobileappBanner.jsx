import React from 'react'
import playStore from '../assets/SVG/playstore.svg'
import appleStore from '../assets/SVG/applestore.svg'

const MobileappBanner = () => {
  return (
    <div className='bg-[#222222] flex flex-col pt-5 pb-15 px-5'>
      <div className='bg-black/50 max-w-7xl w-full flex flex-col mx-auto items-center pt-12 rounded-xl border border-primary'>
        <h1 className='text-primary text-lg sm:text-2xl md:text-4xl font-bold px-5 sm:px-3 md:px-0'>Download our Mobile App</h1>
        <p className='text-secondary max-w-3xl text-center mt-2 sm:mt-3 md:mt-5 text-sm sm:text-sm md:text-lg px-5 sm:px-3 md:px-0'>Get the top E-commerce app on your phone! We’ve got you covered with a super user-friendly experience and tons of events to check out. Dive in and explore!</p>
        <div className='flex justify-center gap-2 sm:gap-2 md:gap-5'>
        <img src={playStore} alt="" className='w-30 h-30' />
        <img src={appleStore} alt="" className='w-30 h-30' />
      </div>
      </div>
    </div>
  )
}

export default MobileappBanner
