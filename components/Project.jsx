import React from "react";
import Image from "next/image";
function Project() {
  return (
    <>
      {/* mobile */}
      <div className='lg:hidden h-[72px] shrink-0 last:border-b-0 w-full lg:w-[531px] border-b-[1px] border-white-2 flex items-center justify-between  '>
        <div className='flex space-x-[20px] items-center scale-[0.8] md:transform-none -ml-[18px] lg:ml-0'>
          <p className='w-[18px] font-black text-[15px] leading-[24px] text-gray-3  '>
            #1
          </p>

          {/* logo */}
          <div className='animate-pulse w-[39.4px] h-[39.4px] rounded-full bg-blue-5 flex items-center justify-center'>
            <Image
              src='/logo-card.svg'
              width={28.85}
              height={28.85}
              alt='Meadow sui launchpad logo'
            />
          </div>
          {/*  */}
          <p className='font-black text-[16px] leading-[24px] text-black'>
            Meadow
          </p>
        </div>
        {/*  */}
        <div className='flex space-x-[19px] items-center scale-[0.8] md:transform-none -mr-[18px] lg:mr-0 '>
          <p className='font-black text-[16px] leading-[22px] w-[43px] text-black'>
            1,204
          </p>
          <button className='border-white-2 py-[11.5px] border-[1px] rounded-full flex justify-center space-x-[10px] items-center w-[82px]  '>
            <Image
              src='/upArrow.svg'
              width={8}
              height={10}
              alt='upper arrow '
            />
            <div className=' text-[14px] leading-[19px] font-medium text-gray-2 w-[30px] h-[19px]  '>
              Vote
            </div>
          </button>
        </div>
      </div>
      {/* desktop */}
      <div className='hidden w-[168.33px] h-[206px]  lg:flex flex-col justify-between '>
        <div className=' h-[149.94px] relative z-30 rounded-[20px] text-white  flex   items-end  '>
          <Image src="/project1.png" className=" absolute z-10 rounded-[20px]" width={168.33} height={149.94} alt="meadow icon"  />
          
          <div className='flex justify-between items-center w-full px-[14.56px] py-[6.54px]'>
            <p className='w-[18px] font-black text-[14px] leading-[24px] z-20  '>
              #1
            </p>
            <button className=' border-white-2 relative border-[1px] rounded-full flex justify-between  items-center w-[74px] h-[32px] px-[12px] '>
              <div className='project-btn-background absolute left-0 right-0 top-0 bottom-0 rounded-full z-10 ' />

              <Image
                src='/arrow-sm-white.svg'
                width={8}
                height={10}
                alt='upper arrow '
                className='z-20'
              />
              <div className='z-20 text-[14px] leading-[19px] font-medium  w-[30px] h-[19px]  '>
                Vote
              </div>
            </button>
          </div>
        </div>
        {/* title */}
        <div className=' font-avenir font-black text-[16px] leading-[24px] text-black'>
            Meadow
        </div>
        {/* rateing */}
        <div className="flex  ">
          <Image src="/star.svg" width={11.91} height={11.91} alt="star-icon" />
          <div className="font-avenir text-blue-1 font-normal text-[14px] leading-[19px]">
            1,204
          </div>
        </div>

      </div>
    </>
  );
}

export default Project;
