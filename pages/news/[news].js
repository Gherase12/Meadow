import React from "react";
import { useRef, useState, useEffect } from "react";
import TextParagraph from "../../components/News/TextParagraph";

import { useRouter } from "next/router";

import { useQuery } from "react-query";
import { fetchNews } from "./../../fetchers/news";
import NewsRightContainer from "../../components/News/NewsRightContainer";

import NewsGridBottom from "../../components/News/NewsGridBottom";
import Loading from "./../../components/Loading";
import Link  from 'next/link';
import  Image  from 'next/image';

function NewsPage() {
  const containerRef = useRef(null);
  const router = useRouter();
  const newsIndex = router.query.news;

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
    <div className=' lg:h-[947.31px] space-x-[30px]   xl:pt-0   w-full flex md:max-w-[1440px]   pr-0 overflow-hidden  mx-auto my-auto relative '>
      
      {/* new */}
      <div  className=' lg:pt-[10px] flex-1 overflow-y-scroll scrollbar-hide items-center flex flex-col  w-screen lg:w-auto overflow-x-hidden   '>
        {/* image container */}

        <p ref={containerRef} className='mt-[23px] pl-[30px] md:pl-0 md:mt-0  h-[23px]  font-bold text-[17px] mb-[22px] text-gray   w-full md:w-[800px]  '>
          News
          </p>
        <div
          
          className='h-[200px] md:h-[400px] w-[800px]  relative  '
        >
          {isLoading ? (
            <div className='w-full h-full flex items-center justify-center '>
              <Loading />
            </div>
          ) : (
            <img
              src={data && data[newsIndex] ? data[newsIndex].urlToImage : "/news.webp"}
              className='object-cover h-[200px] md:h-[400px] w-[800px]  md:rounded-[30px]'
            />
          )}
        </div>
        {/* info */}
        <div className='flex flex-col items-center  '>
          <div className=" pl-[20px] md:pl-0  w-full md:w-[800px] flex flex-start" >

        <Link href='/news' className='cursor-pointer flex space-x-[11px] mt-[40px]   '>
          <Image
            loading='lazy'
            src='/arrow-sm.svg'
            className="rotate-180"
            width={6}
            height={5}
            alt='arrow icon down small'
          />
          <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px]'>
            Back to news
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

          <div className="flex items-center justify-between w-full md:w-[800px]">
          <h2 className='text-[36px]  leading-[130%]  font-black  my-[30px] px-[10px] md:px-0 '>
            More news
          </h2>

          <Link href='/news' className='cursor-pointer flex space-x-[11px] '>
          <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px]'>
            View All
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
          {/* more news */}
          <NewsGridBottom />
        </div>
      </div>
      {/* news container */}
      <NewsRightContainer />
    </div>
  );
}

export default NewsPage;
