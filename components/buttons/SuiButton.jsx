import React from "react";

import { useAccount, useDisconnect } from "wagmi";

import Image from "next/image";

//
import { ConnectButton } from "@suiet/wallet-kit";
import { useWallet } from "@suiet/wallet-kit";

function SuiButton({}) {
  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();

  const wallet = useWallet();

  const Connect = async () => {
    if (isConnected) {
      await disconnectAsync();
    }
  };

  return (
    <div
      onClick={() => Connect()}
      className={`   ${!wallet.connected && "border-2 shadow-lg rounded-md"}`}
    >
      <ConnectButton className='bg-white h-[40px] flex items-center   w-[135px] border-2 border-black hover:bg-gray-100   '>
        <Image
          src='/sui-logo.svg'
          alt='sui'
          className='mx-auto  z-20'
          width='40'
          height='40'
        />
        {""}
      </ConnectButton>
    </div>
  );
}

export default SuiButton;
