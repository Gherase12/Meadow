import React from "react";

import Image from "next/image";
import { useQuery } from "react-query";
import PageAnimation from "./../components/PageAnimation";
import { fetchNews } from './../fetchers/news';
import NewsGridCard from './../components/News/NewsGridCard';

function News() {
    const { isLoading,  data } = useQuery("news", fetchNews);
  const filters = ["All", "New", "Treding", " Popular"];
 console.log(data)
    
  return (
    <PageAnimation>
      <div className=' lg:h-[947.31px]  overflow-hidden   w-full flex md:max-w-[1440px]   overflow-x-hidden  md:space-x-[62px] mx-auto my-auto  '>
        <div className='    w-full md:mb-[11px] relative px-[30px]  md:px-0  '>
          {/* big object */}
          {/* <div className='absolute left-[70vw] lg:left-[625px] lg:-top-[30px] -top-[70px]  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px]  bg-image-1 scale-[1.5]   '>
            <Image src={"/object-3.webp"} fill alt='big-object' />
          </div> */}
          {/* small object */}
          {/* <div className=' fixed left-[100px] lg:left-[925px] lg:-top-[230px] top-0  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px]    '>
            <Image
              src={"/object-2.webp"}
              fill
              className='object-contain'
              alt='big-object'
            />
          </div> */}

          <p className='mt-[23px] md:mt-0  h-[23px] font-bold text-[18px] text-gray mb-[22.64px] '>
            News
          </p>
          <div className=' z-20   lg:mb-[17.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px]  lg:h-[102px] lg:text-[41px] font-extrabold leading-[34px] lg:leading-[51px]  '>
            <h1 className='text-black text-[20px]   md:text-[32px] lg:text-[42px] '>
              News from the
              <span  className="text-blue-1  ml-[10px]" >

               crypto world
              </span>
            </h1>
          </div>
          <ul className='mb-[25px]  items-center font-black  text-[12px] lg:text-[16px]  leading-[24px] h-[38px] md:w-[408px]  flex justify-between '>
            {filters.map((l, i) => (
              <li key={i} className='first:bg-white hover:shadow-lg cursor-pointer hover:bg-white px-[17px] py-[7px] rounded-full   '>
                {l}
              </li>
            ))}
          </ul>

          <div className='overflow-y-scroll gap-[15px] h-[600px] lg:h-[700px]  scrollbar-hide    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 '>
            {data?.map(({ title, urlToImage, description , author, publishedAt}, i) => (
              <NewsGridCard
              //   setLoading={setLoading}
                  key={i}
                  title={title}
                  image={urlToImage}
                  index={i}
                  description={description}
                  author={author}
                  publishedAt={publishedAt}
                />
            ))}
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

export default News;
