import React, { useState, useEffect } from 'react';

function CountdownTimer({timestamp}) {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    const target = new Date("3/7/2023 19:00:00");

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

  // Format remaining time as dd:hh:mm:ss


  return (
    <div className="font-bold flex flex-col mb-[30px] space-y-[10px] text-blue-1 ">
      <p className="font-black text-black " >Starts in:</p>
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
    </div> 
  );
}


export default CountdownTimer