import React, { useEffect, useState } from "react";
import Carusel from "./../components/Carusel";
import VoteCard from "./../components/VoteCard";
import Calendar from "./../components/Calendar";

import Image from "next/image";

import PageAnimation from "./../components/PageAnimation";
import News from "./../components/News";
import PopUp from './../components/PopUp';


export default function Home({ news }) {
  const footerItems = [
    "Privacy Policy",
    "Teams of use",
    "Disclaimer",
    "Cookie Policy",
  ];


  return (
    <PageAnimation>
      <div className='lg:h-[947.31px]     w-full flex md:max-w-[1440px]   pr-0 overflow-hidden  mx-auto my-auto relative '>
      {/* <PopUp /> */}
        {/* small object */}
        <div className='fixed left-[100px] lg:left-[925px] lg:-top-[230px] top-0  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px] '>
          <Image
            loading="lazy"
            fill
            src={"/object-2.webp"}
            className='object-contain'
            alt='big-object'
          />
        </div>

        <div className='   w-full md:mb-[11px] relative pl-[30px]  md:pl-0  '>
          <p className='mt-[23px] md:mt-0 w-[88px] h-[23px] font-bold text-[17px] text-gray mb-[22.64px] '>
            Dashboard
          </p>
          <div className=' max-[375px]:text-[1.5rem]  text-[27px]  max-[375px]:w-auto max-[375px]:h-auto mb-[50px] z-20   lg:mb-[17.26px] w-[347.89px] h-[68px]  md:w-[708.49px]  md:h-[102px] md:text-[41px]   leading-[34px] lg:leading-[51px]  '>
            <h1 className='text-black font-black'>
              The Next Generation Web 3.0
            </h1>
            <h1 className='text-blue-1 font-black'>
              Multichain Launchpad
            </h1>
          </div>
          {/* carusel */}

          <Carusel articles={news.data} />
          {/*  */}

          <div className='flex flex-col-reverse lg:flex-row lg:space-x-[34px]  pr-[30px] lg:pr-0  '>
            {/* 1 */}
            <VoteCard />

            {/* calendar */}
            <Calendar />
            {/* news */}
            <div className='lg:hidden 3xl:flex  lg:h-[310px]'>
              {news && <News articles={news.data} />}
            </div>
          </div>
          {/* privacy.. */}
          <div className='  flex  justify-start  space-x-[14px] my-[32px] lg:mt-[18px]'>
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

export const getServerSideProps = async () => {
  const res1 = await fetch(`${process.env.API_URL}/news`, { method: "GET" });
  const news = await res1.json();

  return { props: { news: news.news } };
};
