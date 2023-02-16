import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useWallet } from "@suiet/wallet-kit";
import { useAccount } from "wagmi";

function VoteNewsButton({ text, score, id }) {
  const production = "https://app.meadowlaunch.com/api/voteNews";
  const local = "http://localhost:3000/api/voteNews";
  const wallet = useWallet();
  const { address } = useAccount();

  const [points, setPoints] = useState(score);

  const handleClick = async () => {
    const type = text == "Bullish" ? "1" : "0";
    try {
      await fetch(production, {
        method: "POST",
        body: JSON.stringify({
          wallet: wallet?.address || address,
          news_id: id,
          type: type,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.data.success) {
            toast.success(data.data.message);
            setPoints(points + 1);
          } else {
            toast.error(data.data.message);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-white w-[138px] h-[34px] border-2 border-blue-6 rounded-full flex items-center justify-around text-gray-4  `}
    >
      <div className='flex space-x-[8px]  '>
        <Image
          src='/upArrow.svg'
          width={10}
          height={10}
          alt='upper arrow '
          className={text == "Bearish" && "rotate-180"}
        />
        <span className='font-black text-blue-6 text-[13px] leading-[16px]   '>
          {text}
        </span>
      </div>

      <span>{points}</span>
    </button>
  );
}

export default VoteNewsButton;
