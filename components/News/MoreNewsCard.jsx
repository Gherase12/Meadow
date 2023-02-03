import React from 'react'
import Image  from 'next/image';
import VoteNewsButton from './../Elements/VoteNewsButton';

function MoreNewsCard({ title,   description, author } ) {
  return (
    <div className='w-full  rounded-[30px] p-[25px] bg-white mb-[20px]  ' >
            <h3 className='truncate-2 text-[14px] leading-[120%] font-extrabold mb-[10px]' >{title} </h3>
            <p className='text-gray-2 text-[12px] leading-[120%] truncate-5 mb-[22px]' >{description}</p>
            <div className="flex w-full justify-between items-center mb-[25px] " >
            <div className="font-black text-blue-6  text-[14px] leading-[19px] ">
            {author}
            </div>

            <div className="rounded-full bg-gray-2/50 w-[67px] h-[27px] flex items-center justify-center font-medium " >
                DeFi
            </div>
            </div>

            <div className="flex justify-between " >
              
                <VoteNewsButton text="Bullish" score="1,092" />
                <VoteNewsButton text="Bearish" score="371" />
            </div>
    </div>
  )
}

export default MoreNewsCard