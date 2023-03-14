import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import MetamaskButton from "../buttons/MetamaskButton";

import SuiButton from "../buttons/SuiButton";
import WalletConnect from './../buttons/WalletConnect';

function ConnectModalForWallets({ isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full border-2 h-[350px]  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  flex items-center flex-col'>
                <Dialog.Title
                  as='h3'
                  className='text-[20px] font-bold  text-blue-1 '
                >
                  Connect your wallet
                </Dialog.Title>
                {/* metamusk */}
                <div className='mt-4 relative '>
                  <MetamaskButton closeModal={closeModal} />
                </div>
                {/* walletConnect */}
                <div className='mt-4 relative '>
                  <WalletConnect closeModal={closeModal} />
                </div>
                {/* sui */}
                {/* <div className='mt-4 relative'>
                  <SuiButton closeModal={closeModal} />
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ConnectModalForWallets;
