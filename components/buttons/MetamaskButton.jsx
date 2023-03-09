import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import React from "react";
import Image from "next/image";
import ConnectedWrapper from "../Nav/ConnectedWrapper";


function MetamaskButton({ closeModal }) {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  
  const handleAuth = async () => {
    closeModal();
    if (isConnected) {
      await disconnectAsync();
      return;
    }

   

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });
  };

  return (
    <button
      type='button'
      className='relative inline-flex justify-center border-2 rounded-md shadow-lg   px-4 py-2 text-[15px] font-bold  '
      onClick={() => {
        handleAuth();
      }}
    >
      {isConnected && <ConnectedWrapper />}
      <Image
        src='/metamask.svg'
        className='mr-[10px]'
        alt='metamask'
        width='20'
        height='20'
      />
      Metamask
    </button>
  );
}

export default MetamaskButton;
