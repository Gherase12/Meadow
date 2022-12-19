import React from "react";



import Calendar from "./Calendar";
import Carusel from './Carusel';
import VoteCard from './VoteCard';

function Main() {
  const footerItems = [
    "Privacy Policy",
    "Teams of use",
    "Disclaimer",
    "Cookie Policy",
  ];
  return (
    <div className='   w-full md:mb-[11px] relative pl-[30px] md:pl-0  '>
      <p className='mt-[23px] md:mt-0 w-[88px] h-[23px] font-extrabold text-[17px] text-gray mb-[22.64px] '>
        Dashboard
      </p>
      <div className='mb-[90px] z-20   lg:mb-[17.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px]  lg:h-[102px] lg:text-[41px] font-black leading-[34px] lg:leading-[51px]  '>
        <h1 className='text-black'>The Next Generation Web 3.0</h1>
        <h1 className='text-blue-1'>Multichain Launchpad</h1>
      </div>
      {/* carusel */}
      

      <Carusel />
      {/*  */}

      <div className='flex flex-col-reverse lg:flex-row lg:space-x-[34px] pr-[30px] lg:pr-0'>
        {/* 1 */}
        <VoteCard />

        {/* calendar */}
        <Calendar />
      </div>
      {/* privacy.. */}
      <div className='  flex justify-around lg:justify-start  lg:space-x-[14px] my-[32px] lg:mt-[18px]'>
        {footerItems.map((item, i) => (
          <p key={i} className='text-black opacity-40 text-[12px] leading-[16px] '>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Main;
