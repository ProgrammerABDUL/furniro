import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <main className='main w-full bg-white'>

      {/* Hero Section */}
      <section className="hero-section relative w-full h-[77vh] md:h-[80vh]">
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
        <div className="absolute top-[20%] 2xl:top-[25%] right-[5%] sm:right-[8%] bg-[#FFF3E3] p-6 sm:p-8 rounded-lg max-w-[85%] sm:max-w-[30rem] xl:max-w-[643px] h-auto xl:h-[443px] flex flex-col gap-4 justify-center">
          <p className="text-gray-600 font-semibold text-sm sm:text-base">
            New Arrival
          </p>
          <h2 className="text-2xl sm:text-3xl L-Laptop:text-[3.25rem] font-bold text-[#B88E2F] leading-snug sm:leading-[2.5rem] xl:leading-[4.06rem] capitalize xl:w-[430px] 2xl:w-auto">
            Discover our new Collection
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#333333] leading-5 sm:leading-6 md:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B68D40] text-white text-sm sm:text-base 2xl:text-lg hover:bg-[#A37A37] uppercase font-bold transition-all w-full sm:w-[220px] h-[50px] sm:h-[74px]">
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