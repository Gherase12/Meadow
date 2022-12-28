import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
function LogoRounded({ img }) {
  const router = useRouter();
  return (
    <button onClick={()=> router.push("project/meadow")}>
      <Image
        src={"/meadow.svg"}
        width={50}
        height={50}
        alt='Meadow sui launchpad logo'
        className='rounded-[15px]'
      />
    </button>
  );
}

export default LogoRounded;
