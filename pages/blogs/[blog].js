import React from "react";
import { useRef, useState, useEffect } from "react";
import TextParagraph from "../../components/News/TextParagraph";

import { useRouter } from "next/router";

import { useQuery } from "react-query";
import { fetchNews } from "./../../fetchers/news";
import NewsRightContainer from "../../components/News/NewsRightContainer";

import NewsGridBottom from "../../components/News/NewsGridBottom";
import Loading from "./../../components/Loading";
import Link from "next/link";
import Image from "next/image";
import MoreNews from './../../components/News/MoreNews';
import ViewAll from "../../components/Elements/ViewAll";
import VoteNewsButton from './../../components/Elements/VoteNewsButton';

function NewsPage() {
  const containerRef = useRef(null);
  const router = useRouter();
  const newsIndex = router.query.news;
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];

  const { isLoading, data } = useQuery("news", fetchNews());

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [newsIndex]);

  return (
    <div className=' w-full max-w-[1400px] flex justify-center mx-auto relative '>

      <div className="fixed inset-0  " >

      <Image src="/news-bg.webp" className="object-cover "  fill />
      </div>
      <MoreNews data={data} isLoading={isLoading} />

      <div className=' lg:h-[947.31px] space-x-[30px]   xl:pt-0   w-full flex md:max-w-[883px] bg-white lg:rounded-t-[45px]   pr-0 overflow-hidden  mx-auto my-auto relative  '>
        {/* new */}
        <div className=' lg:pt-[50px] flex-1 overflow-y-scroll scrollbar-hide items-center flex flex-col  w-screen lg:w-auto overflow-x-hidden   '>
          {/* image container */}

         
          <div className='h-[400px] md:h-[400px] w-[800px]  relative  '>
            {isLoading ? (
              <div className='w-full h-full flex items-center justify-center   '>
                <Image
                  src='/news.webp'
                  className='rounded-[30px] object-cover '
                  fill
                />

                {/* <Loading /> */}
              </div>
            ) : (
              <img
                src={
                  data && data[newsIndex]
                    ? data[newsIndex].urlToImage
                    : "/news.webp"
                }
                className='object-cover h-[200px] md:h-[400px] w-[800px]  md:rounded-[30px]'
              />
            )}
          </div>
          {/* info */}
          <div className='flex flex-col items-center  '>
            <div className=' pl-[20px] md:pl-0  w-full md:w-[800px] flex flex-start'>
              <Link
                href='/blogs'
                className='cursor-pointer flex space-x-[11px] mt-[40px]   '
              >
                <Image
                  loading='lazy'
                  src='/arrow-sm.svg'
                  className='rotate-180'
                  width={6}
                  height={5}
                  alt='arrow icon down small'
                />
                <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px]'>
                  Back to Blogs
                </p>
              </Link>
            </div>
            {/* title */}
            <h2 className='text-[25px] font-bold  leading-[119%] max-w-[800px] md:text-[42px] my-[30px]   px-[10px] md:px-0'>
              {data && data[newsIndex] ? data[newsIndex].title : ""}
            </h2>
            {/* pharagraphs */}
            <div className=' text-base   px-[20px] md:px-0 '>
              <TextParagraph newsIndex={newsIndex} />
            </div>

          
            <div className=' flex justify-center space-x-[10px] items-center mx-auto mt-[21px] '>
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className='w-[49px] h-[49px] cursor-pointer rounded-full flex items-center justify-center bg-white shadow-lg '
                >
                  
                  <Image
                    key={index}
                    src={icon}
                    width={18.43}
                    height={14.79}
                    alt={"Meadown logo button"}
                  />
                </div>
              ))}
             
            </div>

            <div className="bg-blue-6  flex flex-col space-y-10  md:space-y-0  md:flex-row w-full md:justify-between items-center md:rounded-[31px] mt-[45px] px-[56px] py-[38px] " >
          <h2 className="text-white text-[22px] font-black leading-[120%] " >Vote!</h2>

          <div className="md:flex  space-y-[20px] md:space-y-0">
          <VoteNewsButton text="Bullish" score="1,092" />
          <VoteNewsButton text="Bearish" score="371" />
          </div>

        </div>

          </div>
        </div>

       
      </div>
    </div>
  );
}

export default NewsPage;
