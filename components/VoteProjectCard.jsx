import React, { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import Image from "next/image";

import { ethos } from "ethos-connect";

function VoteProjectCard({
  index,
  name,
  type,
  votes,
  docId,
  img,
  website,
  twitter,
  discord,
  
}) {
  const [score, setScore] = useState(votes);
  
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const links = [website, twitter, discord];
  const { wallet } = ethos.useWallet();

  const addVote = async (id) => {
    try {
      await fetch(`https://app.meadowlaunch.com/api/projects`, {
        method: "POST",
        body: JSON.stringify({ wallet: wallet?.address, pid: id }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data.success) {
            toast.success(data.data.message);
            setScore(votes + 1);
          } else {
            toast.error(data.data.message);
          }
        });
    } catch (err) {
      
    }
  };

  const { status } = ethos.useWallet();

  const notify = async () =>
    status == "connected"
      ? await addVote(docId)
      : toast.error("Please connect your sui wallet");

  return (
    <div className='relative h-[75px] lg:h-[88px]   last:border-b-0 w-full  border-b-[1px] border-white-2 flex items-center justify-between  '>
      <div className='  flex space-x-[12px] lg:space-x-[18px] items-center  md:transform-none '>
        <p className='w-[18px] font-black text-[12px] md:text-[15px] leading-[24px] text-gray-3  '>
          #{index + 1}
        </p>
        <div className='w-[30px] h-[23px]  md:w-[42px] relative  md:h-[42px]  lg:w-[60px] lg:h-[60px] '>
          <Image
            fill
            src={`/partners/${img}.jpg`}
            className='md:rounded-[14px] object-contain md:object-cover '
            alt={name}
          />
        </div>

        {/*  */}
        <div className='flex flex-col justify-around '>
          <p className='font-black text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] text-black'>
            {name}
          </p>
          <div className='avenir-font font-normal text-[14px] leading-[19px] text-gray-3'>
            {type}
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex space-x-[12px]  lg:w-[340px] 3xl:w-[250px] lg:justify-between items-center scale-[0.8] md:transform-none -mr-[18px] lg:mr-0 '>
        <div className='w-[93px] h-[25px] hidden lg:flex flex-start space-x-[15px] opacity-60 items-center '>
          {links.map(
            (l, index) =>
              l && (
                <Link key={index} href={l}>
                  <Image
                    src={icons[index]}
                    width={18.43}
                    height={14.79}
                    className='text-gray-3'
                    alt={"Meadown logo button"}
                  />
                </Link>
              )
          )}
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
          <button
            onClick={notify}
            className='border-white-2 cursor-pointer py-[11.5px] border-[1px] rounded-full flex justify-center space-x-[10px] items-center w-[82px]  '
          >
            <Image
              src='/upArrow.svg'
              width={8}
              height={10}
              alt='upper arrow '
            />
            <div className=' text-[14px] leading-[19px] font-medium text-gray-2 w-[30px] h-[19px]  '>
              Vote
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoteProjectCard;
