import React, { useEffect, useState } from "react";
import { WalletStandardAdapterProvider } from "@mysten/wallet-adapter-all-wallets";

import Image from "next/image";
import ConnectedWrapper from "../ConnectedWrapper";

function SurfWalletButton({ closeModal }) {
    const [connected, setConnected] = useState(false);
  const adapters = new WalletStandardAdapterProvider().get();


  useEffect(() => {
    const storedConnected = localStorage.getItem("connected");
    
    setConnected(storedConnected === "true" );
    
  }, []);

  const Connect = async () => {
    await adapters[0].connect();
    const accounts = await adapters[0].getAccounts();
    localStorage.setItem("connected", "true");
    
  };
  const DisConnect = async () => {
    await adapters[0].disconnect();
    localStorage.setItem("connected", "false");
  };

 

  return (
    <div className='relative  rounded-md shadow-lg border-2 '>
      {connected ? (
        <button
          className='inline-flex justify-center   border-2   px-[45px] py-2 text-[15px] font-bold  '
          onClick={() => {
            closeModal();
            DisConnect();
          }}
        >
          <ConnectedWrapper />
          <Image
            src='/surf.png'
            alt='surf'
            className='mx-auto '
            width={40}
            height={40}
          />
        </button>
      ) : (
        <button
          className='inline-flex justify-center   border-2   px-[45px] py-2 text-[15px] font-bold  '
          onClick={() => {
            Connect();
            closeModal();
          }}
        >
          <Image
            src='/surf.png'
            alt='sui'
            className='mx-auto '
            width={40}
            height={40}
          />
        </button>
      )}
    </div>
  );
}

export default SurfWalletButton;
