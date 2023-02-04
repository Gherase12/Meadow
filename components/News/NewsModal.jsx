import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MoreNewsPannel from './MoreNewsPannel';
import MoreNews from './MoreNews';
import Image  from 'next/image';
import { SlClose } from 'react-icons/si';

function NewsModal({ isOpen, closeModal, data, isLoading, newsIndex, type }) {
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
          <div className='fixed inset-0 bg-black bg-opacity-[88%]' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-scroll md:overflow-y-hidden'>
          <div className='flex min-h-full items-center justify-center    text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className=' w-full max-w-[1400px] flex justify-center md:h-screen lg:pt-[62px] mx-auto relative  '>
               

                <MoreNews data={data} isLoading={isLoading} closeModal={closeModal} type={type} />
                <MoreNewsPannel
                  data={data}
                  isLoading={isLoading}
                  newsIndex={newsIndex}
                  closeModal={closeModal}
                />
                <Image src="/closeIcon.svg"  onClick={closeModal} width={40} height={40} className=" hidden lg:flex my-auto cursor-pointer " />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default NewsModal;
