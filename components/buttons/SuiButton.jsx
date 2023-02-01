import React, {useEffect} from "react";
import { SignInButton } from "ethos-connect";
import { useAccount,  useDisconnect } from "wagmi";
import { ethos } from "ethos-connect";
import Image from "next/image";
import ConnectedWrapper from "../ConnectedWrapper";
import { useRouter } from 'next/navigation';
function SuiButton({ closeModal }) {
  const { status, wallet } = ethos.useWallet();
  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const router = useRouter()

  const Connect = async () =>{
    closeModal();
    localStorage.setItem("connectedAt", Date.now());
    if (isConnected) {
      await disconnectAsync()
      
    }
  }



  const disconnect = ()=>{
    
    wallet.disconnect();
    localStorage.removeItem("connectedAt");
    router.refresh() 
  }
  
  return (
    <div className='relative  rounded-md shadow-lg border-2 '>
      {status == "connected" ? (
        <button
          className='inline-flex justify-center   border-2   px-[45px] py-2 text-[15px] font-bold  '
          onClick={() => {
            disconnect()
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
            Connect()
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
