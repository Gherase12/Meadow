import React from "react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TokenSaleDetail from "./../../components/TokenSaleDetail";
import { useRouter } from "next/navigation";
function Project() {
  const router = useRouter();
  const prices = [
    {
      price: 0.1,
      text: "Token Price",
    },
    {
      price: 1700000,
      text: "Token Rise Amount",
    },
    {
      price: 600000,
      text: "Initial marketcap",
    },
  ];

  const dates = [
    {
      date: "Dec 8th 16:00 (UTC)",
      time: "Start Time",
    },
    {
      date: "Dec 15th 24:00 (UTC)",
      time: "End Time",
    },
  ];

  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];

  return (
    <div className='  w-screen'>
      <div className='fixed left-0 right-0  top-0 h-[340.86px] z-10'>
        <Image
          src={"/bg-img.png"}
          fill
          className='object-cover'
          alt={"bg-image"}
        />
      </div>
      <div className='  relative z-40  lg:h-[947.31px]     w-full      '>
        {/* back button */}
        <button
          onClick={() => router.back()}
          className='ml-[20px] lg:ml-0 my-[36px] text-white flex space-x-[9px] items-center  h-[20px]'
        >
          <AiOutlineArrowLeft />
          <div className='text-[17px] font-avenir leading-[23px] font-normal'>
            Back
          </div>
        </button>
        {/* project name */}
        <div className=' ml-[20px] lg:ml-0 space-x-[20px] items-center flex  mb-[24px]'>
          <Image
            width={61}
            height={61}
            src='/projects/meadow.svg'
            alt='meadow project'
            className=' rounded-full'
          />
          <h3 className='font-bold font-avenir text-[41px] leading-[51px]  text-white '>
            Meadow
          </h3>
        </div>
        {/* project description */}
        <div className='  flex flex-col lg:flex-row lg:space-x-[26px] space-y-[26px] lg:space-y-0 '>
          {/* left */}
          <div className='flex flex-col space-y-[26px]  lg:w-[561.65px]'>
            {/* project description */}
            <div className='bg-white rounded-[30px] h-[349px] p-[30px]  '>
              <div className='font-black text-[27px] leading-[110%] font-avenir mb-[20px]  '>
                Project Summary
              </div>
              <p className=' overflow-y-scroll h-[265px] text-[15px] scrollbar-hide leading-[26px]   '>
                Meadow is a decentralized launchpad that will launch projects on
                the Sui Network. The Sui Network will be one of the most unique
                Layer 1 networks. Meadow has been in the works for a number of
                months, and it is at this point poised to cause a ruckus in the
                industry. The experience that the Meadow teams bring to the
                table includes working with various prominent incubators as well
                as top-tier businesses. Before launching, all projects on Meadow
                will go through a rigorous process of due diligence to ensure
                their legitimacy.
               
              </p>
            </div>
            {/* project details */}
            <div className=' h-[369px] bg-white row-span-2 rounded-[30px] p-[30px] '>
              {/* prices */}
              <div className='font-black text-[27px] leading-[110%] font-avenir mb-[30px]  '>
                Token Sale details
              </div>
              <div className=' flex flex-col  '>
                <div className=' h-[76px] flex space-x-[40px] '>
                  {prices.map(({ price, text }, i) => (
                    <TokenSaleDetail
                      key={i}
                      upText={`$${price}`}
                      downText={text}
                    />
                  ))}
                </div>
                {/* dates */}
                <div className=' border-blue-7/50  h-[76px] mt-[20px] space-x-[40px] flex lg:border-y-[1px] '>
                  {dates.map(({ date, time }, i) => (
                    <TokenSaleDetail key={i} upText={date} downText={time} />
                  ))}
                </div>
                {/* details */}
                <div className=' h-[76px] mt-[20px]  '>
                  <TokenSaleDetail
                    upText={"15% unlock, 3 months cliff then monthly unlock"}
                    downText={"Lock-up"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div>
            <div className='font-avenir lg:w-[354px] h-[300px] rounded-[30px] bg-white p-[30px] '>
              {/* details */}
              <div className='font-black text-[27px] leading-[110%] font-avenir mb-[30px]  '>
                IDO Details
              </div>
              <div className='text-black flex space-x-[35px] mb-[20px] '>
                {/* 1 */}
                <div className=' flex flex-col justify-start'>
                  <p className='w-[80px] font-black leading-[16px] text-[12px]  h-[16px] '>
                    Total Raise
                  </p>
                  <div className='font-[18px] leading-[23px]  '>$750,000</div>
                </div>
                {/* 2 */}
                <div className='flex flex-col justify-start'>
                  <p className='w-[80px] font-black leading-[16px] text-[12px]  h-[16px] '>
                    Total Price
                  </p>
                  <div className='font-[18px] leading-[23px]   '>$0.10</div>
                </div>
              </div>
              {/* bar */}
              <div className='h-[8px] rounded-full bg-blue-1 mb-[10px] ' />
              {/* price */}
              <p className='laeding-[21px] text-[13px] w-[55px] h-[21px] text-gray-3 '>
                $124,202
              </p>
              {/* end event */}
              <div>
                <div className='text-[15px] font-normal  leading-[19px]'>
                  Ends in 2d 5h 16m
                </div>
                <div className='text-[14px] leading-[18px] text-gray-2 '>
                  Dec 8th 16:00 (UTC) - Dec 15th 24:00 (UTC)
                </div>
              </div>
              <button className='h-[40px] bg-black w-full mt-[20px] rounded-[14px] flex items-center justify-center space-x-[10px]  '>
                <div className='text-[18px] font-medium leading-[24px] text-white '>
                  Participate
                </div>
                <Image
                  src='/upArrow.svg'
                  className='rotate-90  '
                  width={14}
                  height={22}
                  alt='upArrow'
                />
              </button>
            </div>
            <div className='w-[165px] flex justify-between items-center mx-auto mt-[21px] text-blue-1'>
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
                >
                  <Image
                    key={index}
                    src={icon}
                    width={18.43}
                    height={14.79}
                    alt={"Meadown logo button"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
