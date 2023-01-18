import React from "react";
import { useRef, useState ,useEffect} from "react";
import TextParagraph from "../../components/TextParagraph";
import NewsRight from "../../components/NewsRight";
import NewsGridCard from "../../components/NewsGridCard";
import { useRouter } from "next/router";
import LoadeingOverlay from "../../components/LoadeingOverlay";
import Image  from 'next/image';
import Link  from 'next/link';

function News({ news }) {
  const[loading, setLoading] = useState(false)
  const containerRef = useRef(null);
  const router = useRouter();
  const newsIndex = router.query.news;
  
  
  useEffect(()=>{setLoading(false)},[news])

  const news1 = news[newsIndex];
  return (
    <div className=' lg:h-[947.31px] space-x-[30px]  pt-[70px] xl:pt-0   w-full flex md:max-w-[1440px]   pr-0 overflow-hidden  mx-auto my-auto relative '>
      {loading && (

      <LoadeingOverlay/>
      )}
      {/* new */}
      <div className=' flex-1 overflow-y-scroll scrollbar-hide items-center flex flex-col  '>
        {/* image container */}
        
        <div ref={containerRef} className='h-[200px] md:h-[400px] w-[800px]  relative  '>
          
          <Image
            src={news1.image_url}
            className='object-cover  md:rounded-[30px]'
            fill
            alt="news image"
          />
        </div>
        {/* info */}
        <div className='flex flex-col items-center'>
          {/* title */}
          <h2 className='text-[20px] font-black max-w-[800px] md:text-[30px] my-[30px]  leading-normal px-[10px] md:px-0'>
            {news1.title}
          </h2>
          {/* pharagraphs */}
          <div className=' text-base  px-[10px] md:px-0 '>
            <TextParagraph text={news1.text} />
            <p> Full article: <Link className="text-blue-1" href={news1.news_url} >{news1.news_url}</Link></p>
          </div>
          <h2 className='text-[30px] font-bold my-[30px] px-[10px] md:px-0 '>
            More news
          </h2>
          {/* more news */}
          <div className='grid  grid-cols-1 mb-[20px] md:grid-cols-2  xl:grid-cols-3 gap-[10px] px-[10px] md:px-0 '>
            {news.map(({ title, image_url }, i) => (
              <NewsGridCard
              setLoading={setLoading}
                key={i}
                title={title}
                image={image_url}
                index={i}
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>
      </div>
      {/* news container */}
      <div className=' py-[30px]   bg-blue-2 w-[400px] hidden 3xl:flex flex-col rounded-[30px] h-[800px]'>
        {news.map(({ title, image_url }, i) => (
          <NewsRight
            key={i}
            setLoading={setLoading}
            title={title}
            image={image_url}
            index={i}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const pageIndex = context.query.news;
  
  // get news
  const res1 = await fetch(
    `${process.env.API_URL}/news`,{method:"GET"}
  );
  const news = await res1.json();
  // get content
  // const res2 = await fetch(`${process.env.API_URL}/news?pageIndex=${pageIndex}`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
   
  // });
  // const content = await res2.json();
  

  return { props: { news: news.news.data } };
};

export default News;