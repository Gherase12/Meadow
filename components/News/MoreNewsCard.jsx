import React from 'react'
import Image  from 'next/image';
import VoteNewsButton from './../Elements/VoteNewsButton';
import VoteNewsComponent from './VoteNewsComponent';

function MoreNewsCard({ id, title,   description, author, publishedAt, bullish, bearish } ) {
  return (
    <div className='w-full  rounded-[30px] p-[25px] bg-white mb-[20px]  ' >
            <h3 className='truncate-2 text-[20px] leading-[120%] font-extrabold mb-[10px] text-start ' >{title} </h3>
            <p className='text-gray-2 text-[12px] leading-[120%] truncate-5 mb-[22px] text-start' >{description}</p>
            <div className="flex w-full justify-between items-center mb-[25px] " >
            <div className="font-black text-blue-6  text-[14px] leading-[19px] ">
            {author}
            </div>

            <div className="rounded-full bg-gray-2/50 w-[67px] h-[27px] flex items-center justify-center font-medium " >
                DeFi
            </div>
            </div>

            <VoteNewsComponent publishedAt={publishedAt} bullish={bullish} bearish={bearish} id={id} />
    </div>
  )
}

export default MoreNewsCard