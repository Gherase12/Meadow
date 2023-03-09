import React from 'react'

function TokenSaleDetail({upText, downText}) {
  return (
    <div className='flex flex-col justify-around dark:text-blue-1 '>
    <div className='font-normal font-avenir leading-[27px] text-[21px] dark:text-blue-1'>
      {upText}
    </div>
    <div className='opacity-[0.5] font-medium font-avenir leading-[24px] text-blue-7 text-[15px] dark:text-blue-1 dark:opacity-[0.9]'>
      {downText}
    </div>
  </div>
  )
}

export default TokenSaleDetail