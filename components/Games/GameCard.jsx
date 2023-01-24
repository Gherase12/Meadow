import React from 'react'
import Image  from 'next/image';

function GameCard({index, type}) {
  return (
    <div className='border-1 p-[10px] w-full  md:w-[327px] h-[236px] max-[375px]:h-auto  relative z-50 bg-white shadow-md rounded-[24px] lg:scale-[0.9] lg:-my-[10px] lg:-mx-[10px] ' >
            <div className="absolute px-[14px] py-[5px] top-[26px]  right-[26px] flex items-center justify-center rounded-full bg-white/80 text-[14px] font-bold leading-[21px] ">
                {type}
            </div>
            
            <Image src={`/games/Rectangle-1687-${index}.webp`} className='pb-[20px]' width={307}  height={165} />
            <div className="w-full px-[10px] flex justify-center">
            <div className=" height-[21px] font-black text-[16px] leading-[130%] ">
            TO BE ANNOUNCED
                </div>
                
            </div>
    </div>
  )
}

export default GameCard


