import React from 'react'
import Link  from 'next/link';
import Image  from 'next/image';

function NewsRight({title , image, index, containerRef, setLoading}) {
  const handleClick = () => {
    setLoading(true)
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Link href={`/news/${index}`} onClick={handleClick } >
    
    <div className="h-[150px] p-[10px] px-[20px] space-x-[20px] cursor-pointer  w-full  border-white flex items-center">
        {/* image */}
        <div className='relative w-[200px] h-[130px]' >

            <Image src={image ?? "/news.webp" } className="object-cover  rounded-[25px] " fill alt="news card"/>
        </div>
            <h2 className='text-white  text-ellipsis  pr-[10px] text-[15px] w-[300px] overflow-hidden  h-full trun ' >{title}</h2>
        
    </div>
    </Link>
  )
}

export default NewsRight