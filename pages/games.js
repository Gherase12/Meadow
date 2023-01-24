import {React, useState} from "react";
import Image from "next/image";
import { validateEmail } from './../utils/validateEmail';
import { toast } from 'react-toastify';
import PageAnimation from './../components/PageAnimation';
import GameCard from './../components/Games/GameCard';
import { BsArrowLeftShort } from 'react-icons/bs';
function Games() {
  const footerItems = [
    "Privacy Policy",
    "Teams of use",
    "Disclaimer",
    "Cookie Policy",
  ];

  const types = [
    "Shooter","Sport","Shooter","Shooter","Strategy","Shooter","Simulator", "Shooter","RPG"
  ]

  return (
    <PageAnimation>
    <div className=' lg:h-[947.31px]  overflow-hidden   w-full flex md:max-w-[1440px]   overflow-x-hidden  md:space-x-[62px] mx-auto my-auto  '>
      <div className='    w-full md:mb-[11px] relative px-[30px]  md:px-0  '>
        {/* big object */}
        <div className='absolute left-[70vw] lg:left-[625px] lg:-top-[30px] -top-[70px] z-20 w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px]  bg-image-1 scale-[1.5]   '>
          <Image src={"/object-3.webp"} fill alt='big-object' />
        </div>
        {/* small object */}
        <div className=' fixed left-[100px] lg:left-[925px] lg:-top-[230px] top-0  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px]    '>
          <Image
            src={"/object-2.webp"}
            fill
            className='object-contain'
            alt='big-object'
          />
        </div>

        <p className='mt-[23px] md:mt-0  h-[23px] font-bold text-[18px] text-gray mb-[22.64px] '>
          Games
        </p>
        <div className=' z-20   lg:mb-[10.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px]   lg:text-[41px] font-extrabold leading-[34px] lg:leading-[51px]  '>
          <h1 className='text-black text-[32px] lg:text-[41px] '>
            Upcoming games
          </h1>
        </div>
       

        <div className='overflow-y-scroll gap-[15px] md:h-[700px]  scrollbar-hide    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4  '>
          {types.map((t, i) => (
            
            <GameCard key={i} index={i} type={t} />
          ))}
        </div>
        {/*  */}
        <div className=" w-full flex justify-center mt-[20px] " >
          <div className="flex items-center space-x-[21px]">
            {/*  */}
            <button className="py-[6px] px-[9px] flex space-x-[5px] items-center border-[1px] rounded-full border-black/20" >
              <BsArrowLeftShort className="text-[24px]" />
              <div className="text-[14px] font-bold pr-[10px]" >New</div>
            </button>
              {/*  */}
            <div className="text-black/20" ><span className="text-blue-1 cursor-pointer " >1 </span>2 ... 8 9</div>

            <button className="py-[6px] px-[9px] flex space-x-[5px] items-center border-[1px] rounded-full border-black/20" >
              <div className="text-[14px] font-bold pl-[10px]" >Older</div>
              <BsArrowLeftShort className="text-[24px] rotate-180 " />
            </button>
          </div>
        </div>
        {/*  */}
        <div className='  flex  justify-start  space-x-[14px] my-[32px] '>
            {footerItems.map((item, i) => (
              <p
                key={i}
                className='text-black opacity-40 text-[12px] leading-[16px] '
              >
                {item}
              </p>
            ))}
          </div>
      </div>
    </div>
  </PageAnimation>
  );
}

export default Games;
