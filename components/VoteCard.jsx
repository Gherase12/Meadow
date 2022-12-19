import React from "react";
import Image from "next/image";
import Project from "./Project";
import  Link  from 'next/link';

function VoteCard() {
  return (
    <div className='relative w-full  lg:w-[591.99px] h-[212.38px] lg:h-[310.52px] bg-white rounded-[30px] lg:py-[32px] lg:px-[30px] card1   '>
      {/* upper section mobile */}
      <div className='absolute  left-0 -top-[47px] w-full  lg:hidden   flex justify-between  mb-[35px]'>
        <h2 className='w-[208px] h-[24px]'>Vote for projects</h2>
        <Link href='/' className='flex space-x-[11px]'>
          <p
            className='text-[15px] leading-[24px] text-blue-1 font-black '
            href='/'
          >
            View All
          </p>
          <Image src='/arrow-sm.svg' width={10} height={5}  alt="arrow icon down small"/>
        </Link>
      </div>

      {/* upper section desktop */}
      <div className='hidden   lg:flex justify-between  mb-[35px]'>
        <h2 className='w-[208px] h-[24px]'>Vote for projects</h2>
        <Link href='/' className='flex space-x-[11px]'>
          <p
            className='text-[15px] leading-[24px] text-blue-1 font-black '
            href='/'
          >
            View All
          </p>
          <Image src='/arrow-sm.svg' width={10} height={5} alt="arrow icon down" />
        </Link>
      </div>

      {/* projects */}
      <div className='overflow-x-hidden scrollbar-hide flex flex-col last:border-0 w-auto px-[20px] lg:px-0 overflow-y-scroll border-2 h-[210px]'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default VoteCard;
