import React from 'react'
import bluestoneBanner from '../assets/PNG/bluestonebanner.png'

const BluestoneBanner = () => {
  return (
    <div className='bg-[#222222]'>
      <div className='max-w-7xl flex mx-auto pt-10 px-5'>
        <img src={bluestoneBanner} alt="" className='rounded-xl' />
      </div>
    </div>
  )
}

export default BluestoneBanner
