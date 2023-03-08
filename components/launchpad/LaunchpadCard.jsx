import React, {useEffect, useState} from "react";
import Image from "next/image";
import LogoRounded from "../LogoRounded";
import Link from "next/link";
import { JsonRpcProvider, Network  } from '@mysten/sui.js';
import { convertToSui } from '../../utils/convertToSui';
function Card({ i,name, twitter, website , discord, shortDesc, alocation }) {
  const provider = new JsonRpcProvider(Network.DEVNET);
  const [progres, setProgres] = useState()
  const [balance, setBalance] = useState()
    useEffect(()=>{

      const getObjectsForApp = async ()=>{
        const aloc = await provider.getObject(alocation)
        const percentComplete = (Number(aloc.details.data.fields.balance) / Number(aloc.details.data.fields.finishAmount)) * 100;
        setProgres(percentComplete) 
        setBalance(aloc.details.data.fields.balance)
    }

    getObjectsForApp()
    },[])



  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const links = [
    website, twitter , discord
  ];
  return (
    <div className='relative  z-20 max-w-[300px]  h-[308px] lg:h-[308px] bg-white rounded-[30px] py-[27px] px-[27px]'>
     
    
      <div className="relative" >
        <div className='w-[83px] h-[25px] flex flex-start space-x-[4px] opacity-60 absolute top-[33px]  z-30'>
            {icons.map((i , index) => (
              <Link
              target="_blank" rel="noreferrer noopener"
              href={links[index]} key={index}>
                <Image
                  key={index}
                  src={i}
                  width={18.43}
                  height={14.79}
                  className='text-gray-3 '
                  alt={"Meadown logo button"}
                />
              </Link>
            ))}
          </div>

        <Link href={`/project/${i}`}>
          <div className='flex justify-between items-center h-[50px]  mb-[26px]'>
        <div className='space-y-[10px]'>
          <h2 className='font-extrabold text-[21px] leading-[29px] mb-[25px]' >{name}</h2>
          
          
        </div>
        {/* logo */}
        <LogoRounded i={i} img={`/projects/${i}.png`} />
      </div>
      {/* paragraf */}
      <p className='  text-[13px] font-normal w-[261px] h-[57px]  leading-[19px] text-gray-3 mb-[29px] '>
      {shortDesc}
      </p>
      {/* prices */}
      <div className={`text-black   space-x-[25px] flex `}>
            {/* 1 */}
            <div className=' flex flex-col justify-start'>
              <p className='w-[150px]  font-extrabold leading-[19px] text-[14px] mb-[2px]  h-[16px] '>
                Start date:
              </p>
              <div className='text-[14px] font-medium   '>
                {i == 0 ? "March 15th 1:00pm UTC":"March 7, 12PM UTC"}
              
              </div>
            </div>
            {/* 2 */}
            <div className='flex flex-col justify-start'>
              <p className='w-[80px] font-extrabold leading-[19px] text-[14px]  h-[16px] '>
              End date:
              </p>
              <div className='text-[14px] font-medium   '>
              {i == 0 ? "March 17th 1:00pm UTC ":"March 9, 12PM UTC"}
              
              </div>
            </div>
          </div>
      {/* bar */}
      {
            i == 0 ? (
              <div className={`progress-bar-container-card   mt-[10px]   `}>
            
              <div className="progress-bar" style={{ width: `${0}%` }} />
                
                 </div>
            ):(
              <div className={`progress-bar-container-card   mt-[10px]   `}>
            
              <div className="progress-bar" style={{ width: `${progres}%` }} />
                
                 </div>
            )
          }
      {/* price */}
      <p className='laeding-[21px] text-[13px]  h-[21px] text-gray-3 '>
            {i == 0 ? "0 USDT" : `${convertToSui(balance).toFixed(2)} SUI`}
            {/* {i == 0 ? "0 USDT" : `0 SUI`} */}
         
            
      </p>
        </Link>
      </div>
      

    </div>
  );
}

export default Card;
