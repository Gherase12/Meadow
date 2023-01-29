import React from "react";
import Image from "next/image";
import LogoRounded from "../LogoRounded";
import Link from "next/link";

function Card({i,a}) {
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const links = [
    "https://meadowlaunch.com/",
    "https://twitter.com/meadowlaunch",
    "https://t.co/FLNKZU3ujp",
  ];
  return (
    <div className='relative  z-20 max-w-[300px]  h-[308px] lg:h-[308px] bg-white rounded-[30px] py-[27px] px-[27px]'>
     
     {i == 0 ? (
      <div className="relative" >
        <div className='w-[83px] h-[25px] flex flex-start space-x-[4px] opacity-60 absolute top-[33px]  z-30'>
            {icons.map((i , index) => (
              <Link
              target="_blank" rel="noreferrer noopener"
              href={links[index]} key={index}>
                <Image
                  key={index}
                  src={i}
                  width={18.43}
                  height={14.79}
                  className='text-gray-3 '
                  alt={"Meadown logo button"}
                />
              </Link>
            ))}
          </div>

        <Link href="/project/meadow">
          <div className='flex justify-between items-center h-[50px]  mb-[26px]'>
        <div className='space-y-[10px]'>
          <h2 className='font-extrabold text-[21px] leading-[29px] mb-[25px]' >Meadow</h2>
          
          
        </div>
        {/* logo */}
        <LogoRounded  />
      </div>
      {/* paragraf */}
      <p className='  text-[13px] font-normal w-[261px] h-[57px]  leading-[19px] text-gray-3 mb-[29px] '>
      Meadow will incubate and launch the most anticipated projects on the Sui Network
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
            Token Price
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
        </Link>
      </div>
      ) : (
        <Image
          src={`/projects/project${a}.png`}
          fill
          className='object-cover rounded-[30px]'
          alt="project"
        />
      )}

    </div>
  );
}

export default Card;
