import React from 'react'

function NewsRight({title , image}) {
  return (
    <div className="h-[150px] p-[10px] space-x-[20px] cursor-pointer  w-full  border-white flex items-center">
        {/* image */}
        
            <img src={image} className="object-cover w-[130px] h-[130px] rounded-lg "  alt="news card"/>
            <h2 className='text-white text-ellipsis  text-[15px] w-[300px] overflow-hidden  h-full trun ' >{title}</h2>
        
    </div>
  )
}

export default NewsRight