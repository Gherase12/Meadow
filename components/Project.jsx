import React from "react";


import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
function Project({ img }) {
  return (
    <div className='relative flex-none  w-[200px] lg:w-[168.33px] h-[206px]     '>
      <Image
        src={`/${img}.png`}
        fill
        className='object-contain'
        alt='project image'
      />
    </div>
  );
}

export default Project;
