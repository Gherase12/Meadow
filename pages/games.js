import React from "react";
import Image from "next/image";

function Games() {
  return (
    <div className='lg:h-[947.31px]   z-30  w-full flex md:max-w-[1440px]  pr-0 overflow-hidden md:space-x-[62px] mx-auto my-auto relative  font-avenir lg:items-center justify-center '>
      {/* object-1 */}
      <div className='w-[500px] h-[500px] lg:scale-[1.5] fixed left-[150px]  lg:left-[1500px] lg:bottom-[50px] -bottom-[250px]   bg-image-1'>
        <Image
          src='/object-1.svg'
          fill
          className='object-cover'
          alt='object-1'
        />
      </div>
      {/* object-5 */}
      <div className='w-[200px]   h-[200px] fixed -left-[40px] lg:left-[700px] top-[40px]  z-10 lg:-rotate-[15deg] lg:scale-[2] lg:top-[90px] '>
        <Image fill src='/object-5.svg' className='border-2 z-10' alt='object-5' />
      </div>
      {/* object-6 */}
      <div className='w-[200px]   h-[200px] fixed -top-[20px] lg:-top-[50px] right-[20px] lg:right-[380px] lg:scale-[1.7]  z-10 '>
        <Image
          fill
          src='/object-6.svg'
          className='object-cover '
          alt='object-6'
        />
      </div>
      {/* page content */}
      <div className='z-30 flex flex-col justify-center  items-center pb-[100px] '>
        <div className=' text-[32px] lg:text-[41px] font-black leading-[32px] lg:leading-[51px] mb-[22px] text-center '>
          Upcoming IGOs
        </div>
        <div className=' text-[14px] lg:text-[16px] text-center w-[325px] lg:w-[572px] mb-[51px]  '>
          Meadow is ready to launch the most fascinating tier 1 projects on the
          most scalable, safest Layer 1 blockchain, with a team of highly
          qualified experts who have trackrecord of success.
        </div>
        <div className='text-[14px] lg:text-[15px] text-center font-black  mb-[22px] h-[44px]  w-[319px]  lg:w-[396.86px]'>
          Leave your email to be the first to know about the launch of IGOs
          
        </div>
        <form action='' className='space-y-[16px]'>
          <div className='relative'>
            <input
              type='text'
              className='bg-white w-[342px] lg:w-[465px] lg:h-[72px] outline-none h-[56px] rounded-full px-[34px] py-[17px] text-[16px]  '
              placeholder='Your email'
            />
            <input
              type='submit'
              className='bg-black w-[164px] h-[72px] rounded-full lg:flex items-center justify-center text-[16px] text-white leading-[22px] font-medium hidden absolute right-0 top-0 '
              value='Notify me'
            />
          </div>
          <input
            type='submit'
            className='bg-black w-[342px] outline-none h-[56px] rounded-full flex items-center justify-center text-[16px] text-white leading-[22px] font-medium lg:hidden z-30 relative '
            value='Subscribe'
          />
        </form>
      </div>
    </div>
  );
}

export default Games;