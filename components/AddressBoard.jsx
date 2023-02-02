import React from "react";
import { IoMdWallet } from "react-icons/io";

import { useAccount } from "wagmi";
import Image from "next/image";
import Loading from './Loading';
import { useWallet } from '@suiet/wallet-kit';
function AddressBoard() {
  
  const { address } = useAccount();
  const wallet = useWallet()


  
  return (
    <div
      className={` w-full  mt-[10px] xl:mt-0  px-[20px]  xl:px-0  flex   truncate space-x-[10px]  py-[5px]  items-center  xl:w-[200px]  z-[60]  text-blue-1 mb-[10px] ${
        !wallet.account?.address && !address && "hidden"
      } `}
    >
      {wallet.account?.address ? (
        <Image src='/sui.svg' width={20} height={20} alt="sui logo"  />
      ) : 
      
      address?
      (
        <Image src='/metamask.svg' width={20} height={20} alt="metamask logo" />
      ):
      <Loading />
    }

      <p className=' truncate font-extrabold  md:w-[200px] mr-[10px] xl:mr-0 '>
        {wallet.account?.address || address}
      </p>
    </div>
  );
}

export default AddressBoard;
