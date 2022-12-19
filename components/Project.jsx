import React from "react";
import Image from "next/image";
function Project() {
  return (
    <div className='h-[72px] shrink-0 last:border-b-0 w-full lg:w-[531px] border-b-[1px] border-white-2 flex items-center justify-between  '>
      <div className='flex space-x-[20px] items-center scale-[0.8] md:transform-none -ml-[18px] lg:ml-0'>
        <p className='w-[18px] font-black text-[15px] leading-[24px] text-gray-3  '>
          #1
        </p>

        {/* logo */}
        <div className='animate-pulse w-[39.4px] h-[39.4px] rounded-full bg-blue-5 flex items-center justify-center'>
          <Image src='/logo-card.svg' width={28.85} height={28.85} alt="Meadow sui launchpad logo" />
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
          <Image src='/upArrow.svg' width={8} height={10} alt="upper arrow " />
          <div className=' text-[14px] leading-[19px] font-medium text-gray-2 w-[30px] h-[19px]  '>
            Vote
          </div>
        </button>
      </div>
    </div>
  );
}

export default Project;
