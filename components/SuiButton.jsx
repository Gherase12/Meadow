import React from "react";
import { SignInButton } from "ethos-connect";

import { ethos } from "ethos-connect";
import Image from "next/image";
import ConnectedWrapper from "./ConnectedWrapper";
function SuiButton({ closeModal }) {
  const { status, wallet } = ethos.useWallet();
  console.log(status);
  return (
    <div className='relative  rounded-md shadow-lg border-2 '>
      {status == "connected" ? (
        <button
          className='inline-flex justify-center   border-2   px-[45px] py-2 text-[15px] font-bold  '
          onClick={() => {
            closeModal();
            wallet.disconnect();
          }}
        >
          <ConnectedWrapper />
          <Image
            src='/sui-logo.svg'
            alt='sui'
            className='mx-auto '
            width='40'
            height='40'
          />
        </button>
      ) : (
        <SignInButton
          className='inline-flex justify-center   border-2   px-[45px] py-2 text-[15px] font-bold  '
          onClick={() => {
            closeModal();
          }}
        >
          <Image
            src='/sui-logo.svg'
            alt='sui'
            className='mx-auto '
            width='40'
            height='40'
          />
        </SignInButton>
      )}
    </div>
  );
}

export default SuiButton;
