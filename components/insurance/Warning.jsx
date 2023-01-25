import React from 'react'
import { AiOutlineWarning } from 'react-icons/ai';
function Warning() {
  return (
    <div className="fixed bg-white flex w-screen md:w-[300px] h-[70px] bottom-0 z-[60] items-center md:right-0" >
            <AiOutlineWarning  className="m-[10px] text-[40px] " />
            <p className="font-bold text-[15px] " >This is just a showcase, this is not yet functional</p>
    </div>
  )
}

export default Warning