import React from "react";
import { useQuery } from "react-query";
import { useAccount } from "wagmi";

import { useEffect } from "react";
import { getAlocation } from "../../../fetchers/getAlocation";

function MetamaskWalletDetails({ usdtBalance, laodingAmount }) {
  const { address } = useAccount();
  const { data: alocatedAmount, refetch } = useQuery("getContribution", () =>
    getAlocation(address)
  );
  useEffect(() => {
    refetch();
  }, [usdtBalance]);

  return (
    <div className='w-full text-black my-5 font-bold'>
      <div className='flex justify-between  items-center'>
        <p> USDT balance: {laodingAmount ? "Loading..." : usdtBalance} </p>
      </div>
      <div>Contributed: {alocatedAmount} USDT</div>
      <div className='truncate'>{address}</div>
      {/* <p>1 MED= 1 {symbol}</p> */}
    </div>
  );
}

export default MetamaskWalletDetails;
