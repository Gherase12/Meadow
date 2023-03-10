import React from 'react'
import NewsGridCard from './NewsGridCard';
import { useQuery } from 'react-query';
import { fetchNews } from './../../fetchers/news';


function NewsGridBottom() {
    const { isLoading,  data } = useQuery("news", fetchNews);
   
  return (
    <div className='grid  grid-cols-1 mb-[20px] md:grid-cols-2 md:w-[800px]  xl:grid-cols-3 gap-[10px] px-[10px] md:px-0  '>
        {isLoading ? (
        <div className='w-full   h-full flex items-center justify-center '>
        
      </div>
      ):
          data?.map(({ title, urlToImage, description , author, publishedAt}, i) => (
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
  )
}

export default NewsGridBottom