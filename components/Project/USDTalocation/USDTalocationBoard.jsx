import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";

import MetamaskWalletDetails from "./MetamaskWalletDetails";
import { useAccount } from "wagmi";
import { useQuery, useQueryClient } from "react-query";
import { getUSDTbalance } from "../../../fetchers/getUSDTbalance";
import { getTotalAlocated } from "../../../fetchers/getTotalAlocated";
import USDTalocationInput from "./USDTalocationInput";
import { isAllowing } from "../../../fetchers/isAllowing";
import { participate } from "../../../fetchers/participate";
import { toast } from "react-toastify";

function USDTalocationBoard({ project }) {
  const { isConnected, address } = useAccount();
  const { data: usdtBalance, refetch } = useQuery("getBalance", () =>
    getUSDTbalance(address)
  );
  const { data: totalAlocated } = useQuery("getTotalAlocated", () =>
    getTotalAlocated()
  );
  const {
    data: isAllowed,
    isLoading: loadingAllowed,
    refetch: refetchAllowed,
  } = useQuery("isAllowing", () => isAllowing(address));
  const [laodingAmount, setLoadingAmount] = useState(false);

  const progress = (totalAlocated / 200000) * 100;
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];

  const refetchAll = () => {
    refetch();
    refetchAllowed();
  };

  const handleClick = () => {
    if (!isConnected) {
      toast.error("Please connect your wallet!");
    }
    participate(address, refetchAll);
  };

  return (
    <div className='max-w-[354px] mx-auto relative'>
      <div className='font-avenir relative lg:w-[354px] h-auto dark:bg-black dark:text-blue-1  rounded-[30px] bg-white p-[30px] '>
        <div className='inset-0 backdrop-blur-md rounded-[30px] '>
          Please connect to bnb network
        </div>
        {/* details */}
        <div className='font-bold text-[27px] leading-[110%] font-avenir mb-[30px] dark:text-blue-1  '>
          Sale Details
        </div>

        <div>
          <div className='flex w-full justify-between font-bold  mt-[40px] md:mt-0 dark:text-blue-1 '>
            <p>Finished:</p>
            <p>{0}%</p>
          </div>
          <div className='progress-bar-container'>
            <div className='progress-bar ' style={{ width: `${progress}%` }} />
          </div>
          <div className='flex w-full justify-between font-bold text-sm pt-1 '>
            <p>{totalAlocated} USDT</p>
            <p>200,000 USDT</p>
          </div>
        </div>

        {/* /bar */}
        {isConnected && (
          <MetamaskWalletDetails
            laodingAmount={laodingAmount}
            usdtBalance={usdtBalance}
          />
        )}
        {isAllowed ? (
          <USDTalocationInput
            setLoadingAmount={setLoadingAmount}
            usdtBalance={usdtBalance}
            refetch={refetchAll}
          />
        ) : (
          <button
            onClick={() => {
              handleClick();
            }}
            className='h-[40px] dark:border-2 dark:border-blue-1 bg-black w-full mt-[20px] rounded-[14px] flex items-center justify-center space-x-[10px]  '
          >
            <div className='text-[18px] font-medium leading-[24px] text-white '>
              {loadingAllowed ? "Loading..." : "Participate"}
            </div>
            <Image
              src='/upArrow.svg'
              className='rotate-90  '
              width={14}
              height={22}
              alt='upArrow'
            />
          </button>
        )}
      </div>

      <div className=' rounded-xl w-full p-5 mt-4 flex flex-col justify-center space-x-[10px] text-blue-1 items-center'>
        <div className='bg-white dark:bg-black rounded-xl w-full  mt-4 flex  space-x-[10px] text-red items-center'>
          <div className='m-5'>
            <p>Contribution per wallet:</p>
            <br />
            <p>Min: $5</p>
            <p>Max: $5,000</p>
          </div>
        </div>
        <div className=' flex justify-center space-x-[10px] items-center mx-auto mt-[21px] '>
          {/* website */}
          <Link
            href={project?.website || "/"}
            target='_blank'
            rel='noreferrer noopener'
            className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
          >
            <Image
              src={icons[0]}
              width={18.43}
              height={14.79}
              alt={"Meadown logo button"}
            />
          </Link>

          {/* twitter */}
          <Link
            href={project?.twitter || "/"}
            target='_blank'
            rel='noreferrer noopener'
            className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
          >
            <Image
              src={icons[1]}
              width={18.43}
              height={14.79}
              alt={"Meadown logo button"}
            />
          </Link>
          {/* discord */}
          <Link
            href={project?.discord || "/"}
            target='_blank'
            rel='noreferrer noopener'
            className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
          >
            <Image
              src={icons[2]}
              width={18.43}
              height={14.79}
              alt={"Meadown logo button"}
            />
          </Link>

          <Link
            href='https://meadow.gitbook.io/docs/'
            className='bg-white h-[49px] rounded-full flex items-center justify-center px-[10px] font-bold text-gray-2'
          >
            Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
}

export default USDTalocationBoard;
