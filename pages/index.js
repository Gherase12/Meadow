import React, { useEffect, useState } from "react";
import Carusel from "../components/Index/Carusel";
import VoteCard from "../components/Index/VoteCard";
import Calendar from "../components/Index/Calendar";

import Image from "next/image";



import VotingMobile from "../components/Voting/VotingMobile";

import PageAnimation from './../components/Golbal/PageAnimation';
import MeadowCountDown from './../components/Golbal/MeadowCountDown';

export default function Home() {
   const footerItems = [
    "Privacy Policy",
    "Teams of use",
    "Disclaimer",
    "Cookie Policy",
  ];

  return (
    <PageAnimation>
      <div className='lg:h-[947.31px]     w-full flex md:max-w-[1440px]   pr-0 3xl:overflow-hidden  mx-auto my-auto relative '>
        {/* <PopUp /> */}
        {/* small object */}
        <div className='fixed left-[100px] lg:left-[925px] lg:-top-[230px] top-0  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px] '>
          <Image
            loading='lazy'
            fill
            src={"/object-2.webp"}
            className='object-contain'
            alt='big-object'
          />
        </div>

        <div className='   w-full md:mb-[11px] relative pl-[30px]  md:pl-0  '>
          <div>
          <p className='mt-[23px] md:mt-0 w-[88px] h-[23px] font-bold text-[17px] text-gray mb-[22.64px] '>
            Dashboard
          </p>
            
          </div>
          <div className="flex flex-col md:flex-row   " >
          <div className=' max-[375px]:text-[1.5rem]  text-[27px]  max-[375px]:w-auto max-[375px]:h-auto mb-[50px] z-20   lg:mb-[17.26px] w-[347.89px] h-[68px]  md:w-[708.49px]  md:h-[102px] md:text-[41px]   leading-[34px] lg:leading-[51px]  '>
            <h1 className='text-black dark:text-white font-black'>
              The Next Generation Web 3.0
              <span className='text-blue-1 font-black  md:hidden ml-[10px]'>
                Multichain Launchpad
              </span>
            </h1>
            <h1 className='text-blue-1 font-black hidden md:flex '>
              Multichain Launchpad
            </h1>
          </div>
          <div className="  md:hidden">

<MeadowCountDown  />
</div>

          </div>
         

          <Carusel />

          <div className='flex flex-col lg:flex-row lg:space-x-[34px]  pr-[30px] lg:pr-0  '>
            <VoteCard />

            <VotingMobile />

            <Calendar />

            <div className='lg:hidden 3xl:flex  lg:h-[310px]  '>
              {/* <News /> */}
              <div className="hidden md:flex dark:border-2">

              <MeadowCountDown />
              </div>
            </div>
          </div>

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


