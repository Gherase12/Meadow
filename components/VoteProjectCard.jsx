import React from "react";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillLock } from 'react-icons/ai';

function VoteProjectCard({ index, name, type, img, score }) {
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const notify = () => toast("Voted");
  return (
    <div className='relative h-[75px] lg:h-[88px]  last:border-b-0 w-full  border-b-[1px] border-white-2 flex items-center justify-between  '>
      {name != "Meadow" && (
      <div className=" rounded-[30px] z-50 bg-black absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
       
      <AiFillLock className="text-gray-2  text-[30px]" />
      </div>
     )}
      {/* <ToastContainer /> */}
      <div className='  flex space-x-[12px] lg:space-x-[18px] items-center scale-[0.8] md:transform-none -ml-[12px] lg:ml-0'>
        <p className='w-[18px] font-black text-[15px] leading-[24px] text-gray-3  '>
          #{index + 1}
        </p>
        <div className='w-[42px] relative  h-[42px]  lg:w-[60px] lg:h-[60px] '>
          <Image fill src={`/projects/${img}.svg`} className="rounded-[14px]" alt={name} />
        </div>

        {/*  */}
        <div className='flex flex-col justify-around '>
          <p className='font-black text-[16px] lg:text-[18px] leading-[24px] text-black'>
            {name}
          </p>
          <div className='avenir-font font-normal text-[14px] leading-[19px] text-gray-3'>
            {type}
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex space-x-[12px]  lg:w-[340px] lg:justify-between items-center scale-[0.8] md:transform-none -mr-[18px] lg:mr-0 '>
        <div className='w-[93px] h-[25px] hidden lg:flex flex-start space-x-[15px] opacity-60 '>
          {icons.map((i, index) => (
            <Image
              key={index}
              src={i}
              width={18.43}
              height={14.79}
              className='text-gray-3'
              alt={"Meadown logo button"}
            />
          ))}
        </div>
        <div className='flex space-x-[12px] lg:space-x-[17px]'>
          <div className='flex items-center space-x-[4px]  justify-end'>
            <Image
              src='/star.svg'
              width={11.91}
              height={11.91}
              alt='star icon'
            />
            <p className='font-black text-[16px] leading-[22px]  text-blue-1'>
              {score}
            </p>
          </div>
          <button onClick={notify} className='border-white-2 py-[11.5px] border-[1px] rounded-full flex justify-center space-x-[10px] items-center w-[82px]  '>
            <Image
              src='/upArrow.svg'
              width={8}
              height={10}
              alt='upper arrow '
            />
            <div  className=' text-[14px] leading-[19px] font-medium text-gray-2 w-[30px] h-[19px]  '>
              Vote
            </div>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default VoteProjectCard;
