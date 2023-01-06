import React from 'react'
import Link  from 'next/link';

function NewsRight({title , image, index, containerRef}) {
  const handleClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Link href={`/news/${index}`} onClick={handleClick } >
    
    <div className="h-[150px] p-[10px] space-x-[20px] cursor-pointer  w-full  border-white flex items-center">
        {/* image */}
        
            <img src={image} className="object-cover w-[130px] h-[130px] rounded-lg "  alt="news card"/>
            <h2 className='text-white text-ellipsis  text-[15px] w-[300px] overflow-hidden  h-full trun ' >{title}</h2>
        
    </div>
    </Link>
  )
}

export default NewsRight