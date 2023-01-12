import React from "react";
import Image  from 'next/image';

function LoadeingOverlay() {
  return (
    <div className='fixed inset-0 bg-blue-2/20 border-2 z-50 flex items-center justify-center '>
      <Image src={"/gif/spinner.gif"}  width={60} height={60} />
    </div>
  );
}

export default LoadeingOverlay;
