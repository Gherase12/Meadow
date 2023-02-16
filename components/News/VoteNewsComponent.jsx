import React from "react";
import VoteNewsButton from "./../Elements/VoteNewsButton";

function VoteNewsComponent({bullish, bearish, id}) {
  return (
    <div className='flex justify-between '>
      <VoteNewsButton text='Bullish' score={bullish} id={id} />
      <VoteNewsButton text='Bearish' score={bearish} id={id} />
    </div>
  );
}

export default VoteNewsComponent;
