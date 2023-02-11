import React from "react";

import Image from "next/image";
import { useQuery } from "react-query";
import PageAnimation from "./../components/PageAnimation";
import { fetchNews } from './../fetchers/news';
import NewsGridCard from './../components/News/NewsGridCard';
import FilterBar from './../components/Elements/FilterBar';

function News() {
    const { isLoading,  data } = useQuery("news", fetchNews);
  

    
  return (
    <PageAnimation>
      <div className=' lg:h-[947.31px]  overflow-hidden   w-full flex md:max-w-[1440px]   overflow-x-hidden  md:space-x-[62px] mx-auto my-auto  '>
        <div className='    w-full md:mb-[11px] relative px-[30px]  md:px-0  '>
       

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
          <FilterBar />

        

          <div className='overflow-y-scroll p-[10px] gap-[15px] h-auto lg:h-[700px]  scrollbar-hide  justify-items-center   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 '>
              {isLoading && (
                <div  className="font-black text-[30px] lg:text-[40px]">
                  Coming soon!
                </div>
              ) }
            
            {data?.map(({ title, urlToImage, description , author, publishedAt}, i) => (
              
              <NewsGridCard
              //   setLoading={setLoading}
              data={data}
                  key={i}
                  title={title}
                  image={urlToImage}
                  index={i}
                  description={description}
                  author={author}
                  publishedAt={publishedAt}
                  type={"news"}
                />
            ))}
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

export default News;
