import React from "react";
import { useState } from "react";
import { alocate } from "../../../fetchers/alocate";
import { useAccount } from "wagmi";

function USDTalocationInput({laodingAmount,
  refetch,
  usdtBalance,
  setLoadingAmount,
}) {
  let [amount, setAmount] = useState(0);
  const { address } = useAccount();
  console.log(setLoadingAmount);
  const handleClick = async () => {
    if (amount > usdtBalance && amount <= 5) {
      toast.error("Please provide a valid amount");
      return;
    }
    await alocate(amount, address, refetch, setLoadingAmount);
  };

  return (
    <>
      <div className='flex items-center space-x-[20px] mt-4'>
        <input
          type='number'
          placeholder={"USDT amount"}
          onChange={(e) => setAmount(e.target.value)}
          className='pl-2 border rounded-[14px] border-gray text-blue-600 h-[40px] font-bold text-sm focus:ring-0   w-full  '
        />

        <button
          onClick={() => handleClick()}
          className='h-[40px] bg-blue-1 w-full text-white  rounded-[14px] flex items-center justify-center space-x-[10px]'
        >
         {laodingAmount ? "Loading" : "Contribute"} 
        </button>
      </div>
      {amount > usdtBalance && (
        <p className='text-red text-[14px] mt-5'>Over your usdt amount</p>
      )}
      {amount < 5 && <p className='text-red text-[14px] mt-5 '>Please provide an amount greater than 5 USDT </p>}
    </>
  );
}

export default USDTalocationInput;
