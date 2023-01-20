import React from "react";
import Indicator from "./Indicator";
import Image from "next/image";

function GoldInsurance({ tierName, address, setIsOpen }) {
  return (
    <div className='bg-white flex-1 lg:grow-0 mt-[86px]  max-w-[1011px] 3xl:mx-auto   lg:h-[700px] relative z-50 rounded-t-[30px] shadow-md card1 pt-[40px] flex flex-col items-center lg:rounded-b-[30px] lg:w-[1011px]'>
      <p className='text-gray-2 text-[15px] leading-[20px] mb-[12px] lg:text-[17px] '>
        Your tier:
      </p>
      <div className='bg-black rounded-full flex items-center justify-center space-x-[11px] w-[108px] h-[46px] lg:w-[149px] lg:h-[65px] mb-[50px]'>
        <div className='relative w-[21px] h-[22px] lg:w-[30px] lg:h-[32px] md:w-[30px]  md:h-[32px]'>
          <Image
            src={`/shields/${tierName.toLowerCase()}-shield.svg`}
            fill
            className='object-contain'
            alt="shield"
          />
        </div>
        <p className='text-white font-bold text-[15px] lg:text-[20px] '>
          {tierName}
        </p>
      </div>
      {/* indicator */}

      <Indicator tierName={tierName} />
      <h3 className='text-[16px] leading-[21px]   w-[207px] text-center mb-[46px] lg:text-[22px] font-medium lg:mt-[40px] lg:leading-[31px] lg:w-[276px]   '>
        You have{" "}
        <span className='text-blue-1 font-bold'>
          {" "}
          {tierName == "Gold" ? 15 : 30}% protection{" "}
        </span>
        of your capital
      </h3>
      <div className=' lg:mb-[20px] items-center flex flex-col lg:flex-row lg:space-x-[11px] lg:items-center '>
        <p className='text-gray-2 text-[13px]  leading-[18px] lg:text-[16px]'>
          For wallet:
        </p>
        <h3 className='font-bold text-[14px]  text-black mb-[11px] lg:mb-0 flex items-center lg:text-[16px]'>
          {address}
        </h3>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className='text-blue-1 font-medium text-[13px] leading-[18px] lg:text-[15px] mb-[30px]  '
      >
        Check another wallet
      </button>
    </div>
  );
}

export default GoldInsurance;
