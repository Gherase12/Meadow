import React, { useState, useEffect } from 'react';
import  Image  from "next/image";
import Link  from 'next/link';
function MeadowCountDown({i}) {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
        const target = new Date("3/16/2023 5:00:00");
    
        const interval = setInterval(() => {
          const now = new Date();
          const difference = target.getTime() - now.getTime();
    
          const d = Math.floor(difference / (1000 * 60 * 60 * 24));
          setDays(d);
    
          const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          setHours(h);
    
          const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          setMinutes(m);
    
          const s = Math.floor((difference % (1000 * 60)) / 1000);
          setSeconds(s);
    
          if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
            setPartyTime(true);
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);


      const counterBoxStyle = "border-2 p-2 rounded-lg w-10 h-10 flex items-center justify-center  relative  " 
  const counterBoxTitleStyle = " orizontal-center font-bold -bottom-[70%] " 

  return (
    <div className={`font-bold relative   flex flex-col  ${i != 1 ? "relative  z-[100] overflow-hidden w-full h-[200px] items-center space-y-[40px] justify-center   lg:transform-none lg:w-[381.85px]  lg:h-[320px]   3xl:h-[310.52px]  rounded-[30px] md:bg-white mb-[30px] ": "mt-[20px]" }  md:rounded-[30px]  space-y-[10px] text-blue-1 z-30   md:pb-10  `}>
      {/* <Image src={"/countdown-bg.png"} className="rounded-[30px]" fill /> */}
      <div className={i == 1 && "hidden"} >

      <Image src="/object-1.webp" width={170} height={100} className=" hidden lg:flex absolute -bottom-20 -left-10  " />
      <Image src="/object-2.webp" width={150} height={100} className="hidden lg:flex absolute -top-10 right-10 " />
      <Image src="/object-3.webp" width={150} height={100} className=" hidden lg:flex absolute top-0 -right-20 " />
      </div>

      <div className={`flex flex-col  ${i == 1 ? "items-start" : "items-center"} `}>
      <Image src="/meadow-countdown.png" width={200} height={20}  className={i == 1 ? "hidden" : ""}/>
    <p className={`font-black text-black  ${i != 1 && "text-[20px]"} `} >Private round starts in:</p>
      </div>
    <div className='font-bold flex space-x-7'>

     
      <p className={counterBoxStyle} >{days}
      <span className={counterBoxTitleStyle} >Days</span>
      </p>
      <p className={counterBoxStyle} >{hours}
      <span className={counterBoxTitleStyle}>Hours</span>
      </p>
      <p className={counterBoxStyle} >{minutes}
      <span className={counterBoxTitleStyle}>Minutes</span>
      </p>
      <p className={counterBoxStyle} >{seconds}
      <span className={counterBoxTitleStyle}>Seconds</span>
      </p>
    </div>
    <Link href="/project/0" className={`bg-blue-1  rounded-full shadow-lg shadow-blue-1 text-white font-bold p-2 ${i == 1 && "hidden"}`} >
      Participate
    </Link>
  </div> 
  )
}

export default MeadowCountDown