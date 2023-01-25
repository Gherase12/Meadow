import React from 'react'
import { IoMdWallet } from 'react-icons/io';
import { ethos } from 'ethos-connect'
function AddressBoard() {
  const { wallet } = ethos.useWallet()
  return (
    <div className={`fixed bg-white flex  boredr-2 rounded-full truncate space-x-[10px]  py-[5px]  items-center  md:w-[200px] md:right-[50px] xl:top-[50px] top-[100px] z-[60]  right-[20px] text-black  ${!wallet && "hidden"} `}>
            <IoMdWallet className=" md:text-[30px] ml-[10px]" />
            <p className=" truncate font-extrabold w-[60px] md:w-[200px] mr-[10px]" >
            {wallet?.address}
              </p>
    </div>
  )
}

export default AddressBoard