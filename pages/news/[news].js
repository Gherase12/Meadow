import React from "react";
import { useRef } from "react";
import TextParagraph from "../../components/TextParagraph";
import NewsRight from "../../components/NewsRight";
import NewsGridCard from "../../components/NewsGridCard";
import { useRouter } from "next/router";

function News({ news, content, id }) {
  const containerRef = useRef(null);
  const router = useRouter();
  const newsIndex = router.query.news;
  console.log(content);
  

  const news1 = news.articles[newsIndex];
  return (
    <div className=' lg:h-[947.31px] space-x-[30px]  pt-[70px] xl:pt-0   w-full flex md:max-w-[1440px]   pr-0 overflow-hidden  mx-auto my-auto relative '>
      {/* new */}
      <div className=' flex-1 overflow-y-scroll scrollbar-hide items-center flex flex-col  '>
        {/* image container */}
        <div ref={containerRef} className='h-[200px] md:h-[400px] relative  '>
          <img
            src={news1.urlToImage}
            className='object-cover h-[200px] md:h-[400px] w-[800px]  md:rounded-[30px]'
          />
        </div>
        {/* info */}
        <div className="flex flex-col items-center">
          {/* title */}
          <h2 className='text-[20px] max-w-[800px] md:text-[30px] my-[30px]  leading-normal px-[10px] md:px-0'>
            {news1.title}
          </h2>
          {/* pharagraphs */}
          <div className=' text-base  px-[10px] md:px-0 '>
            <TextParagraph text={content.content} />
          </div>
          <h2 className='text-[30px] font-bold my-[30px] px-[10px] md:px-0 '>
            More news
          </h2>
          {/* more news */}
          <div className='grid  grid-cols-1 mb-[20px] md:grid-cols-2  xl:grid-cols-3 gap-[10px] px-[10px] md:px-0 '>
            {news.articles.slice(0, 10).map(({ title, urlToImage }, i) => (
              <NewsGridCard
                key={i}
                title={title}
                image={urlToImage}
                index={i}
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>
      </div>
      {/* news container */}
      <div className=' py-[30px]   bg-blue-2 w-[400px] hidden 3xl:flex flex-col rounded-[30px] h-[800px]'>
        {news.articles.slice(0, 5).map(({ title, urlToImage }, i) => (
          <NewsRight
            key={i}
            title={title}
            image={urlToImage}
            index={i}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (params) => {
  const id = 0
  const res1 = await fetch(
    `https://newsapi.org/v2/everything?q=crypto&apiKey=${process.env.NEWS_API_KEY}`
  );
  const news = await res1.json();

  const res2 = await fetch(`${process.env.API_URL}/content`,{method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id })});
  const content = await res2.json();
  console.log(content);
  

  return { props: { news,content } };
};

export default News;
