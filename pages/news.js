import React from "react";
import TextParagraph from './../components/TextParagraph';

function news({ news, content }) {

    console.log(content)
  console.log(news);
  const news1 = news.articles[0];
  return (
    <div className=' lg:h-[947.31px]    w-full flex md:max-w-[1440px]   pr-0 overflow-hidden  mx-auto my-auto relative '>
        {/* new */}
      <div className=' flex-1 overflow-y-scroll scrollbar-hide'>
        {/* image container */}
        <div className=' h-[400px]  relative '>
          <img
            src={news1.urlToImage}
            className='object-cover h-[400px] w-[800px] border-2 rounded-[30px]'
          />
        </div>
        {/* info */}
        <div>
          <h2 className='text-[30px] my-[30px] mx-[20px] leading-normal'>
            {news1.title}
          </h2>
          <div className='p-[20px] text-base'>
            <TextParagraph text={content.content} />

          </div>
        </div>
      </div>
      {/* news container */}
      <div className='border-2 w-[400px] '></div>
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

export default news;
