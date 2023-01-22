import React from "react";
import { useRef, useState, useEffect } from "react";
import TextParagraph from "../../components/News/TextParagraph";

import { useRouter } from "next/router";

import { useQuery } from "react-query";
import { fetchNews } from "./../../fetchers/news";
import NewsRightContainer from "../../components/News/NewsRightContainer";

import NewsGridBottom from "../../components/News/NewsGridBottom";
import Loading from "./../../components/Loading";

function News() {
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
    <div className=' lg:h-[947.31px] space-x-[30px]  pt-[70px] xl:pt-0   w-full flex md:max-w-[1440px]   pr-0 overflow-hidden  mx-auto my-auto relative '>
      {/* new */}
      <div className=' flex-1 overflow-y-scroll scrollbar-hide items-center flex flex-col  w-screen lg:w-auto overflow-x-hidden  '>
        {/* image container */}

        <div
          ref={containerRef}
          className='h-[200px] md:h-[400px] w-[800px]  relative  '
        >
          {isLoading ? (
            <div className='w-full h-full flex items-center justify-center '>
              <Loading />
            </div>
          ) : (
            <img
              src={data && data[newsIndex] ? data[newsIndex].urlToImage : ""}
              className='object-cover h-[200px] md:h-[400px] w-[800px]  md:rounded-[30px]'
            />
          )}
        </div>
        {/* info */}
        <div className='flex flex-col items-center'>
          {/* title */}
          <h2 className='text-[20px] font-black max-w-[800px] md:text-[30px] my-[30px]  leading-normal px-[10px] md:px-0'>
            {data && data[newsIndex] ? data[newsIndex].title : ""}
          </h2>
          {/* pharagraphs */}
          <div className=' text-base  px-[10px] md:px-0 '>
            <TextParagraph newsIndex={newsIndex} />
          </div>
          <h2 className='text-[30px] font-bold my-[30px] px-[10px] md:px-0 '>
            More news
          </h2>
          {/* more news */}
          <NewsGridBottom />
        </div>
      </div>
      {/* news container */}
      <NewsRightContainer />
    </div>
  );
}

export default News;
