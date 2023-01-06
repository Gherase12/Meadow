import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function News({articles}  ) {

  


  return (
    <div className='relative z-[100]  w-full   lg:transform-none lg:w-[381.85px]  lg:h-[360px]   3xl:h-[310.52px]  rounded-[30px] mb-[80px] '>
      {/* top part */}
      
      <div className='absolute    w-full   text-white  flex justify-between  mb-[35px] z-40 px-[20px] py-[20px]'>
        <div className='w-[208px] h-[24px] font-bold text-[18px] leading-[24px] '>
          News
        </div>
        <Link href='/news' className='cursor-pointer flex justify-around space-x-[5px] md:space-x-[10px] bg-white rounded-full px-[10px] lg:px-[5px] '>
          <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px] '>
            View
          </p>
          <Image
            src='/arrow-sm.svg'
            width={6}
            height={5}
            alt='arrow icon down small'
          />
        </Link>
      </div>

      {/* carusel */}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        spaceBetween={15}
        className='absolute h-full    w-full flex items-center justify-center   '
      >
        {articles?.map((
            {content, urlToImage   }
        ,i)=>(

        <SwiperSlide key={i} className=" relative w-full h-full " >
           
                <img src={urlToImage} className=" object-cover w-full h-full rounded-[30px]" alt="news image" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/10 z-40 rounded-[30px]" />
                {/* title */}
                <h3 className=" sm:text-[20px] text-white font-bold absolute left-[20px] bottom-[20px] truncate w-[200px] z-50" >{content}</h3>
           
        </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}





export default News;
