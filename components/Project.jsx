import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
function Project({name, rateing, img, index}) {



  return (
   
      
      <div  className=' w-[168.33px] h-[206px]  flex flex-col justify-between '>
        <div className=' h-[149.94px] relative z-30 rounded-[20px] text-white  flex   items-end  '>
          <Image src={`/${img}.png`} className=" absolute z-10 rounded-[20px]" width={168.33} height={149.94} alt="meadow icon"  />
          
          <div className='flex justify-between items-center w-full px-[14.56px] py-[6.54px]'>
            <p className='w-[18px] font-black text-[14px] leading-[24px] z-20  '>
              #{index + 1}
            </p>
            <button className=' border-white-2 relative border-[1px] rounded-full flex justify-between  items-center w-[74px] h-[32px] px-[12px] '>
              <div className='project-btn-background absolute left-0 right-0 top-0 bottom-0 rounded-full z-10 ' />

              <Image
                src='/arrow-sm-white.svg'
                width={8}
                height={10}
                alt='upper arrow '
                className='z-20'
              />
              <div className='z-20 text-[14px] leading-[19px] font-medium  w-[30px] h-[19px]  '>
                Vote
              </div>
            </button>
          </div>
        </div>
        {/* title */}
        <div className=' font-avenir font-black text-[16px] leading-[24px] text-black'>
            {name}
        </div>
        {/* rateing */}
        <div className="flex  ">
          <Image src="/star.svg" width={11.91} height={11.91} alt="star-icon" />
          <div className="font-avenir text-blue-1 font-normal text-[14px] leading-[19px]">
            {rateing}
          </div>
        </div>

      </div>
  
  );
}

export default Project;
