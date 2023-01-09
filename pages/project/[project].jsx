import React from "react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TokenSaleDetail from "./../../components/TokenSaleDetail";
import { useRouter } from "next/navigation";
function Project() {
  const router = useRouter();
  

  

  return (
    <div className='relative  w-full h-screen ]'>
      <Image src="/coming-soon.webp" fill className="object-contain " />
    </div>
  );
}

export default Project;
