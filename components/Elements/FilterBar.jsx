import React from 'react'
import { useRouter } from 'next/router';

function FilterBar() {
    const filters = ["All", "New", "Trending", "Blogs"] ;
    const router = useRouter()
    
    const handleClick = (i)=>{
            if(i == 3){
                router.push("/blogs")
            }else{
                router.push("/news")
            }

            
    }


  return (
    <ul className='mb-[25px]  items-center font-black  text-[12px] lg:text-[16px] dark:text-blue-1   leading-[24px] h-[38px] md:w-[408px]  flex justify-between '>
            {filters.map((l, i) => (
              <li onClick={()=>handleClick(i)}  key={i} className={`${ router.asPath != "/blogs" ? "first:bg-white": "last:bg-white"} hover:shadow-lg cursor-pointer dark:bg-black   hover:bg-white px-[17px] py-[7px] rounded-full   `}>
                {l}
              </li>
            ))}
          </ul>
  )
}

export default FilterBar