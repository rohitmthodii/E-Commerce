import React from 'react'
import Logo from '../assets/Logo/logoLight.svg'
import Instagram from '../assets/Icons/instagram.svg'
import Youtube from '../assets/Icons/youtube.svg'
import Linkedin from '../assets/Icons/linkedin.svg'

const Footer = () => {
  return (
    <div className='bg-[#4C5123] flex flex-col gap-10 pt-16 px-5 sm:px-3 md:px-0'>
      <div className='max-w-7xl w-full flex flex-col sm:flex-col md:flex-row mx-auto justify-between gap-10 sm:gap-6 md:gap-0'>
        <img src={Logo} alt="" className='w-40 flex mx-auto sm:mx-auto md:mx-0' />

        <div className='flex flex-col'>
            <h3 className='text-secondary font-medium'>Company</h3>
            <p className='text-secondary text-sm mt-2'>Products</p>
            <p className='text-secondary text-sm mt-2'>About</p>
        </div>

        <div className='flex flex-col'>
            <h3 className='text-secondary font-medium'>Legal</h3>
            <p className='text-secondary text-sm mt-2'>Privacy Policy</p>
            <p className='text-secondary text-sm mt-2'>Terms & Conditions</p>
        </div>

        <div className='flex flex-col'>
            <h3 className='text-secondary font-medium'>Link Up with Friends!</h3>
            <div className='flex mt-2 gap-2'>
                <img src={Instagram} alt="" />
                <p className='text-secondary text-sm'>Instagram</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <img src={Youtube} alt="" />
                <p className='text-secondary text-sm'>Youtube</p>
            </div>
            <div className='flex mt-2 gap-2'>
                <img src={Linkedin} alt="" />
                <p className='text-secondary text-sm'>LinkedIn</p>
            </div>
        </div>

        <div className='flex flex-col items-start md:items-end'>
            <p className='text-secondary text-sm flex gap-2'>
                <span>Questions?</span>
                <span>Comments?</span>
                <span>Concerns?</span>
            </p>
            <button className='bg-secondary text-[#4C5123] w-fit px-4 py-1 rounded-lg mt-5 outline-none hover:bg-secondary/80 transition-all'>Help</button>
        </div>
      </div>

      <div className='flex justify-center bottom-0 left-0 right-0 pb-2'>
        <p className='text-secondary text-sm'>© 2025 Gold E commerce All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
