import React, {useEffect, useState} from "react";
import Image from "next/image";
function VoteNewsButton({ text, score }) {
  

  

    const handleClick = ()=>{
        
    }


  return (
    <button  onClick={()=>handleClick()}  className={`bg-white w-[138px] h-[34px] border-2 border-blue-6 rounded-full flex items-center justify-around text-gray-4  `}>
      <div className='flex space-x-[8px]  '>
        <Image
          src='/upArrow.svg'
          width={10}
          height={10}
          alt='upper arrow '
          className={text == "Bearish" && "rotate-180"}
        />
        <span className='font-black text-blue-6 text-[13px] leading-[16px]   '>
          {text}
        </span>
      </div>

      <span>{score}</span>
    </button>
  );
}

export default VoteNewsButton;
