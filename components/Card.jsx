import React from "react";
import Image from "next/image";
import LogoRounded from "./LogoRounded";
import { useRouter } from 'next/navigation';

function Card({name, img }) {
  
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const router = useRouter();
  return (
    <div onClick={()=> router.push("project/meadow")} className=' cursor-pointer -ml-[30px] lg:ml-0 z-20 scale-[0.8] lg:transform-none w-[306px] h-[308px] lg:h-[316px] bg-white rounded-[30px] py-[30px] px-[27px]'>
      <div className='flex justify-between items-center h-[50px]  mb-[26px]'>
        <div className='space-y-[10px]'>
          <h2>{name}</h2>
          <div className='w-[83px] h-[25px] flex flex-start space-x-[4px] opacity-60 '>
            {icons.map((icon , index) => (
              <Image
              key={index}
                src={icon}
                width={18.43}
                height={14.79}
                className='text-gray-3'
                alt={"Meadown logo button"}
              />
            ))}
          </div>
        </div>
        {/* logo */}
        <LogoRounded img={img}/>
      </div>
      {/* paragraf */}
      <p className='  text-[13px] w-[261px] h-[57px] font-normal  leading-[19px] text-gray-3 mb-[29px] '>
        Meadow is ready to launch the most fascinating tier 1 projects on the
        most scalable Layer 1 blockchain
      </p>
      {/* prices */}
      <div className='text-black flex space-x-[35px] mb-[31px] '>
        {/* 1 */}
        <div className=' flex flex-col justify-start'>
          <p className='w-[80px] font-black leading-[16px] text-[12px]  h-[16px] '>
            Total Raise
          </p>
          <div className='font-[18px] leading-[23px]  '>$750,000</div>
        </div>
        {/* 2 */}
        <div className='flex flex-col justify-start'>
          <p className='w-[80px] font-black leading-[16px] text-[12px]  h-[16px] '>
            Total Price
          </p>
          <div className='font-[18px] leading-[23px]   '>$0.10</div>
        </div>
      </div>
      {/* bar */}
      <div className='h-[8px] rounded-full bg-blue-1 mb-[10px] ' />
      {/* price */}
      <p className='laeding-[21px] text-[13px] w-[55px] h-[21px] text-gray-3 '>
        $124,202
      </p>
    </div>
  );
}

export default Card;
