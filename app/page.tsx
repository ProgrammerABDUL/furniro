import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <main className='main w-full bg-white'>

      {/* Hero Section */}
      <section className="hero-section relative w-full h-[90vh] md:h-[80vh]">
        {/* Background Image */}
        <div className="relative w-full h-full">
          <Image
            className="object-cover"
            src="/Images/Hero-section.png"
            alt="Hero Background"
            fill={true}
            priority
          />
        </div>

        {/* Card Content */}
        <div className="absolute top-[15%] right-[8%] bg-[#FFF3E3] p-8 rounded-lg max-w-[90%] md:max-w-[40rem] h-[443px] gap-2 flex-col flex justify-center">
          <p className="text-gray-600 font-semibold">New Arrival</p>
          <h2 className="text-3xl md:text-[3.25rem] font-bold text-[#B88E2F] leading-snug md:leading-[4.06rem] capitalize whitespace-pre-wrap">
            Discover our
            
            new Collection
          </h2>
          <p className="text-base md:text-[1.125rem] text-[#333333] leading-6 md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B68D40] text-white text-sm md:text-base hover:bg-[#A37A37] uppercase font-bold transition-all w-[220px] h-[74px]">
            Buy Now
          </button>
        </div>
      </section>

      {/* Browse Section */}
      <section className='mx-auto flex flex-col h-auto bg-white'> {/*h-[685px]*/}

        <div className='flex flex-col justify-center items-center p-11'>
          <p className='font-bold text-[2em] text-[#333333]'>Browse The Range</p>
          <p className='text-xl text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='Images flex justify-evenly items-center text-center'>
          <div>
            <Image className=''
              src={'/Images/Dining.png'}
              alt=''
              width={381}
              height={480}
            />
            <p className='font-semibold text-2xl mt-[30px]'>Dining</p>
          </div>
          <div>
            <Image className=''
              src={'/Images/Living.png'}
              alt=''
              width={381}
              height={480}
            />
            <p className='font-semibold text-2xl mt-[30px]'>Living</p>
          </div>
          <div>
            <Image className=''
              src={'/Images/Bedroom.png'}
              alt=''
              width={381}
              height={480}
            />
            <p className='font-semibold text-2xl mt-[30px]'>Bedroom</p>
          </div>
        </div>
      </section>

      <section className='products h-10'>

      </section>
    </main>
  )
}

export default Home