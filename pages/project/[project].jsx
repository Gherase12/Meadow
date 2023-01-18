import React from "react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TokenSaleDetail from "./../../components/TokenSaleDetail";
import { useRouter } from "next/navigation";
import Link  from 'next/link';
function Project() {
  const router = useRouter();
  const prices = [
    {
      price: "0.10",
      text: "Private Round",
    },

    {
      price: "155,500",
      text: "Initial marketcap",
    },
  ];

  const dates = [
    {
      date: "TBA",
      time: "Start Time",
    },
    {
      date: "TBA",
      time: "End Time",
    },
  ];

  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];

  return (
    <div className='  w-screen'>
      {/* small object */}
      <div className='fixed left-[100px] lg:left-[925px] lg:-top-[230px] top-0  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px] '>
        <Image
          loading='lazy'
          fill
          src={"/object-2.webp"}
          className='object-contain'
          alt='big-object'
        />
      </div>

      {/* big image */}
      <div className='absolute right-0 lg:right-[200px]  top-[140px] lg:top-0 w-[200px] h-[200px] lg:w-[612px] lg:h-[612px] bg-image-1   '>
          <Image   loading="lazy" fill src={"/object-1.webp"} className="object-contain" alt='big-object' />
        </div>
      <div className='  relative z-40  lg:h-[947.31px]     w-full      '>
        {/* back button */}
        <button
          onClick={() => router.back()}
          className='ml-[20px] lg:ml-0 my-[36px] text-black flex space-x-[9px] items-center  h-[20px]'
        >
          <AiOutlineArrowLeft />
          <div className='text-[17px] font-avenir leading-[23px] font-extrabold'>
            Back
          </div>
        </button>
        {/* project name */}
        <div className=' ml-[20px] lg:ml-0 space-x-[20px] items-center flex  mb-[24px]'>
          <Image
            width={61}
            height={61}
            src='/meadow.svg'
            alt='meadow project'
            className=' rounded-full'
          />
          <h3 className='font-bold font-avenir text-[41px] leading-[51px]  text-black '>
            Meadow
          </h3>
        </div>
        {/* project description */}
        <div className='  flex flex-col lg:flex-row lg:space-x-[26px] space-y-[26px] lg:space-y-0 '>
          {/* left */}
          <div className='flex flex-col space-y-[26px]  lg:w-[561.65px]'>
            {/* project description */}
            <div className='bg-white rounded-[30px] h-[349px] p-[30px]  '>
              <div className='font-bold text-[28px] leading-[110%] font-avenir mb-[20px]  '>
                Project Summary
              </div>
              <p className=' overflow-y-scroll h-[265px] text-[16px] scrollbar-hide leading-[26px]  font-normal '>
                Built for the next generation of users, Meadow will Incubate and
                launch the most anticipated projects on the Sui Network. With
                MystenLabs receiving a investment from the South Korean gaming
                giant NCSoft and Sui offering 0 latency. <br /> <br />
                Sui Network is believed to be perfect for gaming, Meadow will
                utltise this network to host the most creative, game changing
                IGOS (Initial game offering). Meadow Team consist of Veterans
                and partners who bring years of qualified experience in the
                incubation space which puts us far ahead of our competition.
              </p>
            </div>
            {/* project details */}
            <div className=' h-[369px] bg-white row-span-2 rounded-[30px] p-[30px] '>
              {/* prices */}
              <div className='font-bold text-[27px] leading-[110%] font-avenir mb-[30px]  '>
                Token Sale details
              </div>
              <div className=' flex flex-col scale-[0.8] '>
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
                    upText={"5% on TGE, 2 months Cliff 18 Months Vesting"}
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
              <div className='font-bold text-[27px] leading-[110%] font-avenir mb-[30px]  '>
                Sale Details
              </div>
              <div className='text-black flex space-x-[35px] mb-[20px] '>
                {/* 1 */}
                <div className=' flex flex-col justify-start'>
                  <p className='w-[80px] font-black leading-[16px] text-[12px]  h-[16px] '>
                    Total Raise
                  </p>
                  <div className='font-[18px] leading-[23px]  '>$800,000</div>
                </div>
                {/* 2 */}
                <div className='flex flex-col justify-start'>
                  <p className='w-[80px] font-black leading-[16px] text-[12px]  h-[16px] '>
                    Token Price
                  </p>
                  <div className='font-[18px] leading-[23px]   '>$0.10</div>
                </div>
              </div>
              {/* bar */}
              <div className='h-[8px] rounded-full bg-gray-1 mb-[10px] ' />
              {/* price */}
              {/* <p className='laeding-[21px] text-[13px] w-[55px] h-[21px] text-gray-3 '>
                $124,202
              </p> */}
              {/* end event */}
              <div>
                <div className='text-[15px] font-normal  leading-[19px]'></div>
                <div className='text-[14px] leading-[18px] text-gray-2 '>
                  TBA -TBA
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
            <div className=' flex justify-center space-x-[10px] items-center mx-auto mt-[21px] '>
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
              <Link href="https://meadow.gitbook.io/docs/" className="bg-white h-[49px] rounded-full flex items-center justify-center px-[10px] font-bold text-gray-2">
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
