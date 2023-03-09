import React from 'react'
import { useState } from 'react';

function ConnectedWrapper() {
  const [text, setText] = useState("Connected");
  return (
    <div onMouseEnter={()=> setText("Disconnect")} onMouseLeave={()=> setText("Connected")} className="cursor-pointer absolute inset-0 z-30 bg-black/60 flex items-center justify-center rounded-md font-black text-white text-[16px]" >{text}</div>
  )
}

export default ConnectedWrapper