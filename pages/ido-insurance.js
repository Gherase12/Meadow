import React, { useState, useEffect } from "react";
import Image from "next/image";

import PageAnimation from "../components/PageAnimation";
import { useAccount } from "wagmi";
import { getSession } from "next-auth/react";
import InsuranceCard from "../components/insurance/InsuranceCard";
import ConnectWalletInsurance from "../components/insurance/ConnectWalletInsurance";
import { ethos } from "ethos-connect";
import ConnectModal from "../components/ConnectModalForWallets";
import Warning from "./../components/insurance/Warning";
import { useWallet } from "@suiet/wallet-kit";

function Stake() {
  // const { status, wallet } = ethos.useWallet();

  const wallet = useWallet();
  let [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  function closeModal() {
    setIsOpen(false);
  }

  const { isConnected, address } = useAccount();

  return (
    <PageAnimation>
      <div className='scrollbar-hide -mt-[70px] pt-[70px] lg:mt-0 lg:pt-0 lg:h-[947.31px] h-screen   w-full flex md:max-w-[1440px]   pr-0 overflow-x-hidden overflow-y-scroll  mx-auto my-auto relative'>
        <ConnectModal isOpen={isOpen} closeModal={closeModal} />
        {/* object-1 */}
        <div className='lg:w-[500px] lg:h-[500px]  w-[200px] h-[200px] lg:scale-[1.1] fixed -right-[50px]  lg:right-[100px] top-[60px] rotation -bottom-[250px]   bg-image-1'>
          <Image
            src='/object-1.webp'
            fill
            className='object-cover'
            alt='object-1'
          />
        </div>
        {/* object-5 */}
        <div className='w-[200px]   h-[200px] fixed  lg:right-[300px] -bottom-[100px]  z-10 lg:-rotate-[15deg] lg:scale-[2.5]  '>
          <Image fill src='/object-5.webp' className='' alt='object-5' />
        </div>
        {/* object-6 */}
        <div className='  w-[200px]  h-[200px] fixed bottom-[30px] lg:bottom-[40px]  lg:left-[450px] lg:scale-[1.7]  z-10 '>
          <Image
            fill
            src='/object-6.webp'
            className='object-cover '
            alt='object-6'
          />
        </div>
        {/* title */}

        <div className=' w-full md:mb-[11px] relative  flex flex-col '>
          <p className='mt-[23px] ml-[30px] lg:ml-0 md:mt-0 w-[88px] h-[23px] font-bold text-[17px] text-gray mb-[22.64px] '>
            Insurance
          </p>
          <h1 className='text-[41px] ml-[30px] lg:ml-0 font-extrabold leading-[51px]  '>
            Insurance
          </h1>
          {!wallet?.connected && !isConnected && (
            <p className='text-[17px] leading-[23px] ml-[30px] lg:ml-0 font-medium max-w-[289px] my-[20px] lg:my-[25px] lg:max-w-[629px] lg:text-[22px]  '>
              Connect wallet to see if you are eligible for insurance
            </p>
          )}
          {/* board */}
          {wallet?.connected || isConnected ? (
            <InsuranceCard
              tierName={"Gold"}
              address={wallet?.account?.address || address}
              setIsOpen={setIsOpen}
            />
          ) : (
            <ConnectWalletInsurance setIsOpen={setIsOpen} />
          )}
        </div>
        {/* stake container */}
      </div>
    </PageAnimation>
  );
}

export default Stake;
