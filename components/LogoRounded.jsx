import React from "react";
import Image from "next/image";
function LogoRounded() {
  return (
    <div className='animate-pulse w-[50px] h-[50px] rounded-full bg-blue-5 flex items-center justify-center'>
      <Image src='/logo-card.svg' width={36.83} height={36.83} alt="Meadow sui launchpad logo" />
    </div>
  );
}

export default LogoRounded;
