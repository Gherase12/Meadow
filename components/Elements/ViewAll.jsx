import React from "react";
import Link from "next/link";
import Image from "next/image";

function ViewAll({closeModal}) {
  return (
    <div onClick={closeModal} href='/news' className='cursor-pointer flex space-x-[11px] '>
      <p className='text-[15px] leading-[24px] text-blue-1 font-black max-[375px]:text-[12px]'>
        View All
      </p>
      <Image
        loading='lazy'
        src='/arrow-sm.svg'
        width={6}
        height={5}
        alt='arrow icon down small'
      />
    </div>
  );
}

export default ViewAll;
