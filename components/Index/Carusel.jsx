import React from "react";
import Card from "./Card";
import "swiper/css";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import Image from "next/image";
import News from "../News/News";
import { ICOprojects } from './../../data/ICOprojects';

import MeadowCountDown from './../Golbal/MeadowCountDown';

function Carusel() {
  const [swiper, setSwiper] = React.useState(null);

  const swipeNext = () => {
    swiper.slideNext();
  };
  const swipePreview = () => {
    swiper.slidePrev();
  };

  return (
    <div className=' relative'>
      {/* news */}
      <div className='absolute left-[670px]  xl:left-[627px] top-[50px] hidden lg:flex 3xl:hidden'>
        {/* <News /> */}
        <MeadowCountDown   />
      </div>
      {/* news end */}
      <div className=' flex items-center w-[276px] -mb-[20px]  lg:mb-[13px]  h-[40px] justify-between  '>
        <h2 className=' text-[20px] lg:text-[22px] dark:text-white leading-[24px] font-black '>
          Upcoming IDOs
        </h2>
        <div className='hidden lg:flex space-x-1    '>
          <button
            onClick={() => swipePreview()}
            className='h-[40px] w-[40px] border-[1px] dark:text-white  border-gray-1 rounded-full flex items-center justify-center'
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={() => swipeNext()}
            className='h-[40px]  w-[40px] border-[1px]  dark:text-white border-gray-1 rounded-full flex items-center justify-center rotate-180'
          >
            <AiOutlineArrowRight className='rotate-180' />
          </button>
        </div>
      </div>
      {/* lower part */}
      <div className='  h-[316px]  mb-[34px] relative lg:w-[600px]  3xl:w-[1510px]  '>
        <div className='absolute left-[40vw] lg:left-[525px] 3xl:left-[800px]  -top-[100px]   lg:-top-[250px] w-[400px] h-[400px] lg:w-[612px] lg:h-[612px] bg-image-1   '>
          <Image
            loading='lazy'
            fill
            src={"/object-1.webp"}
            className='object-contain'
            alt='big-object'
          />
        </div>
        <Swiper
          onSwiper={(s) => {
            setSwiper(s);
          }}
          slidesPerView={"auto"}
          spaceBetween={15}
          className='flex   space-x-[15px] w-full  h-full  z-50 '
        >
          {ICOprojects.map(({name,alocation, twitter, website , discord, shortDesc, role}, i) => (
            <SwiperSlide key={i}>
              <Card name={name} alocation={alocation} role={role} website={website} shortDesc={shortDesc} discord={discord}  twitter={twitter} i={i}  />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carusel;
