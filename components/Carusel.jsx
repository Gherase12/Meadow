import React from "react";
import Card from "./Card";
import "swiper/css";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import  Image  from 'next/image';
import News from './News';

function Carusel({articles}) {
  const [swiper, setSwiper] = React.useState(null);

  const swipeNext = () => {
    swiper.slideNext();
  };
  const swipePreview = () => {
    swiper.slidePrev();
  };

  return (
    <div className=" relative">
      {/* news */}
      <div className="absolute left-[630px]  xl:left-[637px] top-[30px] hidden lg:flex 3xl:hidden" >
            <News articles={articles} />
        </div>
        {/* news end */}
      <div className=' flex items-center w-[276px] -mb-[20px]  lg:mb-[13px]  h-[40px] justify-between  '>
        <h2 className=' text-[18px] lg:text-[20px] leading-[24px] font-extrabold '>
          Upcoming IDOs
        </h2>
        <div className='hidden lg:flex space-x-1    '>
          <button
            onClick={() => swipePreview()}
            className='h-[40px] w-[40px] border-[1px]  border-gray-1 rounded-full flex items-center justify-center'
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={() => swipeNext()}
            className='h-[40px]  w-[40px] border-[1px]  border-gray-1 rounded-full flex items-center justify-center rotate-180'
          >
            <AiOutlineArrowRight className='rotate-180' />
          </button>
        </div>
      </div>
      {/* lower part */}
      <div className='  h-[316px]  mb-[34px] relative lg:w-[600px]  xl:w-[1510px]  '>
        
        <div className='absolute left-[40vw] lg:left-[525px] 3xl:left-[800px]  -top-[100px]   lg:-top-[250px] w-[400px] h-[400px] lg:w-[612px] lg:h-[612px] bg-image-1   '>
          <Image fill src={"/object-1.webp"} alt='big-object' />
        </div>
        <Swiper
          onSwiper={(s) => {
            setSwiper(s);
          }}
          slidesPerView={"auto"}
          spaceBetween={15}
          className='flex   space-x-[15px] w-full  h-full  z-50 '
        >
          {[...Array(6)].map((a, i) => (
            <SwiperSlide key={i}>
              <Card i={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carusel;
