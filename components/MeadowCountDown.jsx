import React, { useState, useEffect } from 'react';
import { FaExclamation } from 'react-icons/fa';
import Image from "next/image";
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
    <div className={`font-bold relative  flex flex-col ${i != 1 ? "md:p-[30px] mb-[30px] ": "mt-[20px]" }  md:rounded-[30px]  space-y-[10px] text-blue-1 z-30 md:bg-white  md:pb-10  `}>
      {/* <Image src={"/countdown-bg.png"} className="rounded-[30px]" fill /> */}
    <p className="font-black text-black " > <span className="text-blue-1 font-black" >Meadow</span>  private round starts in:</p>
    <div className='font-bold flex space-x-7'>

     
      <p className={counterBoxStyle} >{days}
      <p className={counterBoxTitleStyle} >Days</p>
      </p>
      <p className={counterBoxStyle} >{hours}
      <p className={counterBoxTitleStyle}>Hours</p>
      </p>
      <p className={counterBoxStyle} >{minutes}
      <p className={counterBoxTitleStyle}>Minutes</p>
      </p>
      <p className={counterBoxStyle} >{seconds}
      <p className={counterBoxTitleStyle}>Seconds</p>
      </p>
    </div>
  </div> 
  )
}

export default MeadowCountDown