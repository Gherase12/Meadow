import React from "react";
import Image from "next/image";
import LogoRounded from "./LogoRounded";


function Card({i}) {
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  return (
    <div className='relative  z-20 max-w-[300px]  h-[308px] lg:h-[308px] bg-white rounded-[30px] py-[27px] px-[27px]'>
     
     {i == 0 ? (
        <>
          <div className='flex justify-between items-center h-[50px]  mb-[26px]'>
        <div className='space-y-[10px]'>
          <h2 className='font-extrabold text-[21px] leading-[29px]' >Meadow</h2>
          
          <div className='w-[83px] h-[25px] flex flex-start space-x-[4px] opacity-60 '>
            {icons.map((i , index) => (
              <Image
              key={index}
                src={i}
                width={18.43}
                height={14.79}
                className='text-gray-3'
                alt={"Meadown logo button"}
              />
            ))}
          </div>
        </div>
        {/* logo */}
        <LogoRounded  />
      </div>
      {/* paragraf */}
      <p className='  text-[13px] font-normal w-[261px] h-[57px]  leading-[19px] text-gray-3 mb-[29px] '>
        Meadow is ready to launch the most fascinating tier 1 projects on the
        most scalable Layer 1 blockchain
      </p>
      {/* prices */}
      <div className='text-black flex space-x-[25px] mb-[31px] '>
        {/* 1 */}
        <div className=' flex flex-col justify-start'>
          <p className='w-[100px] font-extrabold leading-[19px] text-[14px] mb-[2px]  h-[16px] '>
          Total Raise 
          </p>
          <div className='text-[19px] font-medium leading-[130%]  '>$800,000</div>
        </div>
        {/* 2 */}
        <div className='flex flex-col justify-start'>
          <p className='w-[80px] font-extrabold leading-[19px] text-[14px] mb-[2px]  h-[16px] '>
            Total Price
          </p>
          <div className='text-[19px] font-medium leading-[130%]  '>$0.10</div>
        </div>
      </div>
      {/* bar */}
      <div className='h-[8px] rounded-full bg-gray-5 mb-[10px] ' />
      {/* price */}
      <p className='laeding-[21px] text-[13px] w-[55px] h-[21px] text-gray-3 '>
        $0
      </p>
        </>
      ) : (
        <Image
          src={`/projects/project${i + 1}.png`}
          fill
          className='object-cover rounded-[30px]'
          alt="project"
        />
      )}

    </div>
  );
}

export default Card;
