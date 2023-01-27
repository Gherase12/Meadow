import React from 'react'
import { AiOutlineWarning } from 'react-icons/ai';
function Warning() {
  return (
    <div className="  flex w-[4 00px] h-[70px]  items-center " >
            <AiOutlineWarning  className="m-[10px] text-[20px] text-blue-1" />
            <p className="font-bold  text-[12px]" >This is just a showcase, this is not yet functional</p>
    </div>
  )
}

export default Warning