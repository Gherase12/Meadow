import React from 'react'
import NewsRight from './NewsRight';
import { useQuery } from 'react-query';
import { fetchNews } from './../../fetchers/news';
import Loading from './../Loading';

function NewsRightContainer() {
  const { isLoading, isError, data, error } = useQuery("news", fetchNews);
  return (
    <div className=' py-[30px]   bg-blue-2 w-[400px] hidden 3xl:flex flex-col rounded-[30px] h-[800px]'>
      {isLoading ? (
        <div className='w-full h-full flex items-center justify-center '>
        <Loading />
      </div>
      ):
      data?.slice(0, 5).map(({ title, urlToImage }, i) => (
        <NewsRight
          key={i}
         
          title={title}
          image={urlToImage}
          index={i}
          
        />
      ))
    }
      
      </div>
  )
}

export default NewsRightContainer