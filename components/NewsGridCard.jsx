import React from 'react'
import Link  from 'next/link';
import Image  from 'next/image';

function NewsGridCard({title, image, index,containerRef, setLoading }) {
 
    const handleClick = () => {
      setLoading(true)
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };


  return (
    <Link href={`/news/${index}`} onClick={handleClick}  >


    <div className=' group relative h-[300px] w-[300px] rounded-[30px] overflow-hidden  ' >
    <img src={image ?? "/news.webp" } className=" object-cover w-full h-full rounded-[30px] group-hover:scale-[1.3] transition duration-300 ease-in-out" alt="news card" />
        <div className=" cursor-pointer absolute inset-0 bg-gradient-to-t from-black to-black/10 z-40 rounded-[30px]" />
        <div className=" text-white font-bold cursor-pointer p-[15px] absolute bg-blue-2 left-0 right-0   bottom-0 z-40  h-[100px] ">
          {title}
        </div>
    </div>
    </Link>
  )
}

export default NewsGridCard