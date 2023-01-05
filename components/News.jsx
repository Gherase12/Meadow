import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function News({articles}  ) {

  


  return (
    <div className='relative z-[100]  w-full   lg:transform-none lg:w-[381.85px] h-[310.52px] bg-white rounded-[30px] mb-[80px] '>
      {/* top part */}
      <div className='absolute    w-full     flex justify-between  mb-[35px]  px-[20px] py-[20px]'>
        <div className='w-[208px] h-[24px] font-bold text-[18px] leading-[24px] '>
          News
        </div>
        <Link href='/news' className='cursor-pointer flex space-x-[11px] '>
          <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px]'>
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
        className='absolute top-[60px]    w-full flex items-center justify-center   '
      >
        {articles?.map((
            {content, urlToImage   }
        ,i)=>(

        <SwiperSlide key={i} className="flex justify-center">
            <div className=" w-[300px] h-[250px] flex flex-col justify-center items-center">
                {/* iamge */}
                
                <img src={urlToImage} className="w-[200px] h-[200px] object-cover"  />
                
                {/* title */}
                <h3 className="text-[20px] font-bold  truncate w-[200px]" >{content}</h3>
            </div>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}





export default News;
