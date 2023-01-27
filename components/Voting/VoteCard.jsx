import React from "react";
import Image from "next/image";
import Project from "../Project";
import Link from "next/link";

function VoteCard() {
  const projects = [
    {
      name: "Meadow",
      rateing: "1,204",
      img: "project1",
    },
    {
      name: "Reddish Blue",
      rateing: "1,185",
      img: "project2",
    },
    {
      name: "Crypto Unicorn",
      rateing: "1,059",
      img: "project3",
    },
  ];
  return (
    <div className='  relative w-full mb-[70px] lg:mb-0  lg:w-[591.99px]  lg:h-[310.52px] bg-white rounded-[30px] lg:py-[32px] lg:px-[30px] card1  '>
      {/* upper section mobile */}

      <div className='absolute  left-0 -top-[47px] w-full  lg:hidden   flex justify-between  mb-[35px]'>
        <div className='w-[208px] h-[24px] font-extrabold text-[22px] leading-[24px] '>
          Upcoming Games
        </div>
        <Link href='/games' className='cursor-pointer flex space-x-[11px] '>
          <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px]'>
            View
          </p>
          <Image
            loading='lazy'
            src='/arrow-sm.svg'
            width={6}
            height={5}
            alt='arrow icon down small'
          />
        </Link>
      </div>

      {/* upper section desktop */}
      <div className='hidden   lg:flex justify-between  mb-[35px]'>
        <h2 className='w-[208px] h-[24px] font-extrabold text-[22px] leading-[24px] '>
          Upcoming Games
        </h2>
        <Link href='/games' className='flex space-x-[11px]'>
          <p
            className='text-[15px] leading-[24px] text-blue-1 font-bold '
            href='/'
          >
            View
          </p>
          <Image
            loading='lazy'
            src='/arrow-sm.svg'
            width={6}
            height={5}
            alt='arrow icon down'
          />
        </Link>
      </div>

      {/* projects */}
      <div className='py-[20px] lg:py-0 md:justify-center overflow-x-scroll items-center scrollbar-hide  flex flex-row  w-auto px-[20px] lg:px-0   lg:h-[210px] lg:justify-between'>
        {projects.map(({ img }, i) => (
          <Project key={i} img={img} />
        ))}
      </div>
    </div>
  );
}

export default VoteCard;
