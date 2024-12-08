import React from 'react'
import Image from 'next/image'
import './style.css'

const page = () => {
  return (
    <main className=''>

      {/* Hero Section */}
      <div className="hero-section">
        <Image className='object-cover'
          src={'/Images/Hero-section.png'}
          alt=''
          width={1440}
          height={1008}
        />

        {/* Card */}
        <div className="absolute top-[20%] left-[8%] bg-[#FFF3E3] p-8 rounded-lg shadow-lg max-w-[40.1875rem] h-[27.6875rem]">
          <p className="text-sm text-gray-600 font-medium mb-2">New Arrival</p>
          <h2 className="text-[3.25rem] font-bold text-gray-800 mb-4 leading-10">
            Discover Our New Collection
          </h2>
          <p className="text-[18px] text-gray-600 mb-6 leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B68D40] text-white text-[16px] px-[72px] py-[25px] hover:bg-[#A37A37] uppercase font-bold">
            Buy Now
          </button>
        </div>
      </div>

    </main>
  )
}

export default page
