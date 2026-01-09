import React from 'react'
import Hero from '../assets/PNG/hero_img.png'
import Freeshipping from '../assets/Icons/freeshipping.svg'
import Moneyback from '../assets/Icons/moneyback.svg'
import Support from '../assets/Icons/support.svg'
import Payment from '../assets/Icons/payment.svg'

  const heroFooter = [
    {
        id: 1,
        image: Freeshipping,
        title: "Free shiping",
        description: "On order over ₹2000",
    },
    {
        id: 2,
        image: Moneyback,
        title: "Moneyback",
        description: "Moneyback guarantee",
    },
    {
        id: 3,
        image: Support,
        title: "24/7 Support",
        description: "Online consultations",
    },
    {
        id: 4,
        image: Payment,
        title: "Secure payment",
        description: "Safe Shopping Guarantee",
    },
  ];

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${Hero})`, backgroundSize: 'cover', backgroundPosition: '', height: '858px', width: '100%' }} className='bg-center relative'>
      <div className='flex flex-col text-white pt-32 pl-40 relative z-10'>
        <p className='font-bold text-5xl max-w-2xl font-solway relative leading-snug font-solway'>The World First Jewellery E-Commerce Platform Explore The Future Talent</p>
        <p className='text-lg max-w-xl mt-3'>Discover the future of jewelry shopping with our innovative e-commerce platform, showcasing exceptional talent and unique designs.</p>
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>

      {/* GRID  */}
      <div className='flex flex-row justify-center gap-16 mt-60 bg-black/30 backdrop-blur-md absolute bottom-0 py-10 w-full'>
        {heroFooter.map((item, index) => (
          <button key={index} className='px-3 py-1'>
            <div className='flex flex-col items-center justify-center'>
                <img src={item.image} alt="" className='rounded-full'/>
                <p className='mt-2 font-medium text-secondary'>{item.title}</p>
                <p className='text-[#A5B2BA] text-sm'>{item.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header
