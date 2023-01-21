import React from 'react'
import Link  from 'next/link';


function NewsRight({title , image, index}) {


  return (
    <Link href={`/news/${index}`} >
    
    <div className="h-[150px] p-[10px] px-[20px] space-x-[20px] cursor-pointer  w-full  border-white flex items-center">
        {/* image */}
        <img src={image ?? "/news.webp" } className="object-cover w-[130px] h-[130px] rounded-[25px] "  alt="news card"/>
            <h2 className='text-white  text-ellipsis  pr-[10px] text-[15px] w-[300px] overflow-hidden  h-full trun ' >{title}</h2>
        
    </div>
    </Link>
  )
}

export default NewsRight