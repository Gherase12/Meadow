import { React, useState } from "react";
import Image from "next/image";

import PageAnimation from "./../components/PageAnimation";

function Stake() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  return (
    <PageAnimation>
      <div className='scrollbar-hide -mt-[70px] pt-[70px] lg:mt-0 lg:pt-0 lg:h-[947.31px] h-screen   w-full flex md:max-w-[1440px]   pr-0 overflow-x-hidden overflow-y-scroll  mx-auto my-auto relative'>
        {/* object-1 */}
        <div className='lg:w-[500px] lg:h-[500px]  w-[200px] h-[200px] lg:scale-[1.1] fixed -right-[50px]  lg:right-[100px] top-[60px] rotation -bottom-[250px]   bg-image-1'>
          <Image
            src='/object-1.webp'
            fill
            className='object-cover'
            alt='object-1'
          />
        </div>
        {/* object-5 */}
        <div className='w-[200px]   h-[200px] fixed  lg:right-[300px] -bottom-[100px]  z-10 lg:-rotate-[15deg] lg:scale-[2.5]  '>
          <Image fill src='/object-5.webp' className='' alt='object-5' />
        </div>
        {/* object-6 */}
        <div className='  w-[200px]  h-[200px] fixed bottom-[30px] lg:bottom-[40px]  lg:left-[450px] lg:scale-[1.7]  z-10 '>
          <Image
            fill
            src='/object-6.webp'
            className='object-cover '
            alt='object-6'
          />
        </div>
        {/* title */}

        <div className=' w-full md:mb-[11px] relative   '>
          <p className='mt-[23px] ml-[30px] lg:ml-0 md:mt-0 w-[88px] h-[23px] font-bold text-[17px] text-gray mb-[22.64px] '>
            Staking
          </p>
          <h1 className='text-[41px] ml-[30px] lg:ml-0 font-black leading-[51px] mb-[49px] '>
            Stake
          </h1>
          {/* board */}
          <div className='bg-white  max-w-[1011px] 3xl:mx-auto h-full  lg:h-[596px] relative z-50 rounded-[30px] shadow-md card1 flex pt-[30px] lg:pt-0 lg:items-center justify-center  '>
            {/* <Image src="/stake-hidden.png" fill className="z-20 object-cover "  /> */}
            <div className='lg:w-[519px]    w-[80%]'>
              <h2 className=' text-[20px] lg:text-[22px] font-black leading-[33px] text-black mb-[30px] '>
                Enter amount and days
              </h2>

              <div className='w-[519px]  h-[108px] flex flex-col justify-between '>
                <p className='text-[15px] font-black leading-[24px] text-gray-2  '>
                  MED to be staked:
                </p>
                <div className='flex  justify-between flex-col lg:flex-row '>
                  <div className='w-[231.51px] -ml-[34px] scale-[0.7] lg:scale-[1] lg:ml-0  items-center card1 h-[72px] rounded-full flex justify-between px-[32px] bg-black'>
                    {/* eth */}
                    <div className=' space-x-[8px] flex items-center '>
                      <Image src='/eth.svg' width={28} height={28} alt="ethereum" />
                      <p className='text-[16px] font-normal leading-[160%] text-white '>
                        ETH
                      </p>
                    </div>
                    <div className='w-[10px] border-[1px] border-gray-2 ' />
                    {/* dai */}
                    <div className=' space-x-[8px] flex items-center '>
                      <Image src='/dai.svg' width={28} height={28} alt="dai"  />
                      <p className='text-[16px] font-normal leading-[160%] text-white '>
                        DAI
                      </p>
                    </div>

                    <Image src='/down-arrow.svg' width={11} height={8} alt="down arrow" />
                  </div>
                  <div className='-ml-[40px] scale-[0.7] lg:scale-[1] lg:ml-0  w-[276.51px] card1 h-[72px] rounded-full flex justify-between items-center px-[32px] bg-white-1 '>
                    <p className='text-[16px] font-bold leding-[24px] '>
                      10.0 MED
                    </p>
                    <p className='text-[15px] font-medium leding-[24px]  text-gray-2 '>
                      = $800
                    </p>
                  </div>
                </div>
              </div>

              <div className='lg:w-[519px]  mt-[60px]  lg:mt-[30px] space-y-[10px] lg:space-y-0 lg:h-[108px] flex flex-col justify-between '>
                <p className='text-[15px] font-black leading-[24px] text-gray-2  '>
                  Enter days to be staked:
                </p>

                <div className='w-full  card1  h-[50px]  lg:h-[72px] rounded-full items-center flex justify-between px-[32px] bg-white-1 '>
                  <p className='text-[18px] font-bold '>15</p>
                  <p className='text-[15px] font-medium leding-[24px]  text-gray-2 '>
                    days
                  </p>
                </div>
              </div>
              {/* slider-bar */}
              <div className='flex   justify-between items-center mt-[25px] mb-[49px] '>
                <p className='text-[13px] font-black leading-[24px] text-gray-2  '>
                  10
                </p>

                {/* range slider */}

                <input
                  type='range'
                  min={0}
                  max={20}
                  value={maxValue}
                  onChange={(e) => setMaxValue(e.target.value)}
                  className='w-[466px]'
                  id='maxValueSlider'
                />

                {/* /range slider */}

                <p className=' text-[13px] font-black leading-[24px] text-gray-2  '>
                  30
                </p>
              </div>
              {/* stake button */}
              <button className='bg-blue-1 rounded-[15px] h-[67px] font-medium text-[18px] text-white flex items-center justify-center w-full'>
                Stake
              </button>
            </div>
          </div>
        </div>
        {/* stake container */}
      </div>
    </PageAnimation>
  );
}

export default Stake;
