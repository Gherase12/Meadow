import React from "react";

import Image from "next/image";
import Warning from './Warning';


function ConnectWalletInsurance({setIsOpen}) {
 
  return (
    <div className='bg-white dark:bg-black dark:text-blue-1 flex-1 lg:grow-0 mt-[20px]  max-w-[1011px] 3xl:mx-auto   lg:h-[700px] relative z-50 rounded-t-[30px] shadow-md card1 pt-[70px] flex flex-col items-center lg:rounded-b-[30px] lg:w-[1011px]'>
      <Warning />
      <div className=' relative w-[143px] h-[143px] mb-[30px]'>
        <Image
          src='/shields/wallet-shield.svg'
          fill
          className='object-contain'
          alt="wallet shield"
        />
      </div>
      <p className='text-[16px] lg:text-[22px] w-[233px] text-center leading-[30px] lg:w-[344px] font-medium mb-[100px] '>
        Connect wallet to see if you are eligible for insurance
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className='max-w-[348px] h-[50px] w-[233px] rounded-[15px] bg-blue-1 text-white mb-[50px] lg:mb-[150px] '
      >
        Connect wallet
      </button>
    </div>
  );
}

export default ConnectWalletInsurance;
