import React from "react";

import Image from "next/image";
import { useQuery } from "react-query";
import PageAnimation from "./../components/PageAnimation";
import { fetchNews } from './../fetchers/news';
import NewsGridCard from './../components/News/NewsGridCard';
import FilterBar from './../components/Elements/FilterBar';
import { blogs } from './../utils/blog';

function Blogs() {
    // const { isLoading,  data } = useQuery("news", fetchNews);
  
 
    
  return (
    <PageAnimation>
      <div className=' lg:h-[947.31px]     w-full flex md:max-w-[1440px]   overflow-x-hidden  md:space-x-[62px] mx-auto   '>
        <div className='    w-full md:mb-[11px] relative px-[30px]  md:px-0  '>
       

          <p className='mt-[23px] md:mt-0  h-[23px] font-bold text-[18px] text-gray mb-[22.64px] '>
            Blogs
          </p>
          <div className=' z-20   lg:mb-[17.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px]  lg:h-[102px] lg:text-[41px] font-extrabold leading-[34px] lg:leading-[51px]  '>
            <h1 className='text-black text-[20px]   md:text-[32px] lg:text-[42px] '>
              Blogs from the
              <span  className="text-blue-1  ml-[10px]" >

               crypto world
              </span>
            </h1>
          </div>
          <FilterBar />

        

          <div className='overflow-y-scroll p-[10px] gap-[15px] h-auto lg:h-[700px]  scrollbar-hide  justify-items-center   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 '>
            {
                blogs.map((blog, i)=>(
                  <NewsGridCard
                  //   setLoading={setLoading}
                      key={i}
                      title={blog.titles[0]}
                      image={`/blogs/img-${i + 1}.webp`}
                      index={i}
                      description={blog.texts[0]}
                      author={"Meadow"}
                      publishedAt={`Dec ${27 - i}, 2022`}
                      type="blog"
                    />

                ))

            }
          
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

export default Blogs;
