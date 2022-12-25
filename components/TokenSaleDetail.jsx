import React from 'react'

function TokenSaleDetail({upText, downText}) {
  return (
    <div className='flex flex-col justify-around '>
    <div className='font-normal font-avenir leading-[27px] text-[21px]'>
      {upText}
    </div>
    <div className='opacity-[0.5] font-medium font-avenir leading-[24px] text-blue-7 text-[15px]'>
      {downText}
    </div>
  </div>
  )
}

export default TokenSaleDetail