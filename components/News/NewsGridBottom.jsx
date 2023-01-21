import React from 'react'
import NewsGridCard from './NewsGridCard';
import { useQuery } from 'react-query';
import { fetchNews } from './../../fetchers/news';
import Loading from './../Loading';

function NewsGridBottom() {
    const { isLoading,  data } = useQuery("news", fetchNews);
  return (
    <div className='grid  grid-cols-1 mb-[20px] md:grid-cols-2  xl:grid-cols-3 gap-[10px] px-[10px] md:px-0 '>
        {isLoading ? (
        <div className='w-full h-full flex items-center justify-center '>
        <Loading />
      </div>
      ):
          data?.map(({ title, urlToImage }, i) => (
              <NewsGridCard
            //   setLoading={setLoading}
                key={i}
                title={title}
                image={urlToImage}
                index={i}
                
              />
            ))}
          </div>
  )
}

export default NewsGridBottom