import React from "react";
import Link  from 'next/link';


function NewsGridCard({ title, image, index, description, author, publishedAt  }) {

  const date = new Date(publishedAt);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString("en-US", options);
  
  return (
    <Link href={`/news/${index}`} className="rounded-[30px] shadow-md bg-white p-[10px] max-h-[402px] max-w-[327px] " >
      <img
          src={image ?? "/news.webp"}
          className='h-[165px] object-cover w-[300px]   rounded-[20px] mb-[15px] mx-auto  '
          alt='news card'
        />

        <div className="w-[287px] h-[191px] flex flex-col mx-auto" >
          <h3 className="font-bold text-[16px] leading-[130%] mb-[10px] " >
            {title}
          </h3>
          <p className="text-gray-2 font-normal leading-[18px] flex-1 text-[13px]">
            {description}
          </p>
          <div className="flex justify-between mb-[10px] ">
          <div className="font-black text-blue-6  text-[14px] leading-[19px] ">
            {author}
            </div>
          <div className="font-medium text-gray-2  text-[14px] leading-[19px] ">
            {formattedDate}
            </div>
          </div>
        </div>

      
    </Link>
  );
}

export default NewsGridCard;
