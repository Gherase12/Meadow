import React from "react";
import { useQuery } from "react-query";
import ViewAll from "../Elements/ViewAll";
import { fetchNews } from "./../../fetchers/news";
import MoreNewsCard from "./MoreNewsCard";

function MoreNews({data, isLoading}) {
  
  return (
    <div className='w-[334px] h-full  hidden xl:flex flex-col overflow-y-scroll scrollbar-hide z-20'>
      <div className='flex justify-between w-full items-center h-[30px] mb-[35px] '>
        <h2 className='text-white text-[24px] font-black leading-[130%] '>
          More news
        </h2>

        <ViewAll />
      </div>
      {isLoading ? (
        <h1>Coming soon </h1>
      ) : (
        data?.map(
          ({ title, urlToImage, description, author, publishedAt }, i) => (
            <MoreNewsCard
              key={i}
              title={title}
              image={urlToImage}
              index={i}
              description={description}
              author={author}
              publishedAt={publishedAt}
            />
          )
        )
      )}
    </div>
  );
}

export default MoreNews;
