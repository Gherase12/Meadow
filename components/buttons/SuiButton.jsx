import React, {useEffect} from "react";
import { SignInButton } from "ethos-connect";
import { useAccount,  useDisconnect } from "wagmi";
import { ethos } from "ethos-connect";
import Image from "next/image";
import ConnectedWrapper from "../ConnectedWrapper";
import { useRouter } from 'next/navigation';
// 
import { ConnectButton } from '@suiet/wallet-kit';
import { useWallet } from '@suiet/wallet-kit';

function SuiButton({ closeModal }) {
  
  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const router = useRouter()
  const wallet = useWallet()

  const Connect = async () =>{
    // !wallet?.account?.address &&  closeModal();
    // localStorage.setItem("connectedAt", Date.now());
    if (isConnected) {
      await disconnectAsync()
      
    }
  }

 



  // const disconnect = ()=>{
    
  //   wallet.disconnect();
  //   localStorage.removeItem("connectedAt");
  //   router.refresh() 
  // }
  
  return (
    <div onClick={()=>Connect()} className={`   ${!wallet.connected && "border-2 shadow-lg rounded-md"}`} >
      <ConnectButton   className="bg-white h-[40px] flex items-center   w-[135px] border-2 border-black hover:bg-gray-100   " >
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
