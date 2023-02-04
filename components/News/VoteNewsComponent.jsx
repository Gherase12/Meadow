import React from "react";
import VoteNewsButton from "./../Elements/VoteNewsButton";

function VoteNewsComponent() {
  return (
    <div className='flex justify-between '>
      <VoteNewsButton text='Bullish' score='1,092' />
      <VoteNewsButton text='Bearish' score='371' />
    </div>
  );
}

export default VoteNewsComponent;
