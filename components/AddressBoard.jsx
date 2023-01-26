import React from "react";
import { IoMdWallet } from "react-icons/io";
import { ethos } from "ethos-connect";
import { useAccount } from "wagmi";
import Image from "next/image";
function AddressBoard() {
  const { wallet } = ethos.useWallet();
  const { address } = useAccount();
  return (
    <div
      className={` w-full  mt-[10px] xl:mt-0  px-[20px]  xl:px-0  flex   truncate space-x-[10px]  py-[5px]  items-center  xl:w-[200px]  z-[60]  text-blue-1 mb-[10px] ${
        !wallet && !address && "hidden"
      } `}
    >
      {wallet?.address ? (
        <Image src='/sui.svg' width={20} height={20} alt="sui logo"  />
      ) : (
        <Image src='/metamask.svg' width={20} height={20} alt="metamask logo" />
      )}

      <p className=' truncate font-extrabold  md:w-[200px] mr-[10px] xl:mr-0 '>
        {wallet?.address || address}
      </p>
    </div>
  );
}

export default AddressBoard;
