import React from "react";
import { useRef } from 'react';
import TextParagraph from '../../components/TextParagraph';
import NewsRight from '../../components/NewsRight';
import NewsGridCard from '../../components/NewsGridCard';
import {useRouter}  from 'next/router';

function News({ news, content }) {
  const containerRef = useRef(null);
  const router = useRouter();
  const newsIndex = router.query.news

  
  const news1 = news.articles[newsIndex];
  return (
    <div className=' lg:h-[947.31px] space-x-[30px]  pt-[70px] xl:pt-0   w-full flex md:max-w-[1440px]   pr-0 overflow-hidden  mx-auto my-auto relative '>
        {/* new */}
      <div   className=' flex-1 overflow-y-scroll scrollbar-hide '>
        {/* image container */}
        <div ref={containerRef} className='h-[200px] md:h-[400px] relative  '>
         
          <img
            src={news1.urlToImage}
            className='object-cover h-[200px] md:h-[400px] w-[800px]  md:rounded-[30px]'
          />
        </div>
        {/* info */}
        <div>
            {/* title */}
          <h2 className='text-[20px] max-w-[800px] md:text-[30px] my-[30px]  leading-normal px-[10px] md:px-0'>
            {news1.title}
          </h2>
          {/* pharagraphs */}
          <div className=' text-base  px-[10px] md:px-0 '>
            <TextParagraph text={content.content} />
          </div>
          <h2 className="text-[30px] font-bold my-[30px] px-[10px] md:px-0 " >More news</h2>
          {/* more news */}
          <div className="grid  grid-cols-1 mb-[20px] md:grid-cols-2  xl:grid-cols-3 gap-[10px] px-[10px] md:px-0 ">
            {
              news.articles.slice(0, 10).map(({title,urlToImage }, i)=>(

                <NewsGridCard key={i}  title={title} image={urlToImage} index={i} containerRef={containerRef}/>
              ))
            }
                
          </div>
        </div>
      </div>
      {/* news container */}
      <div className=' py-[30px]   bg-blue-2 w-[400px] hidden 3xl:flex flex-col rounded-[30px] h-[800px]'>
        {news.articles.slice(0, 5).map(({title, urlToImage},i)=>(

        <NewsRight key={i} title={title} image={urlToImage} index={i} containerRef={containerRef}  />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=crypto&apiKey=64dcac9aeb734fd4a3b900eb3b1390d1"
  );

  const articleres = await fetch("https://meadow-delta.vercel.app/api/content");
  const content = await articleres.json();

  const news = await res.json();

  return { props: { news,content } };
};

export default News;
