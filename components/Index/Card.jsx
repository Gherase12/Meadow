import React, {useEffect, useState} from "react";
import Image from "next/image";
import LogoRounded from "../LogoRounded";
import { useRouter } from "next/navigation";
import { AiFillLock } from "react-icons/ai";
import { JsonRpcProvider, Network  } from '@mysten/sui.js';
import Link from "next/link";
import { convertToSui } from '../../utils/convertToSui';

function Card({ i,name,role, twitter, website , discord, shortDesc, alocation, launchpad }) {
  const provider = new JsonRpcProvider(Network.DEVNET);
  const [progress, setProgress] = useState()
  const [balance, setBalance] = useState()
    useEffect(()=>{

      const getObjectsForApp = async ()=>{
        const aloc = await provider.getObject(alocation)
        const percentComplete = (Number(aloc?.details?.data?.fields?.balance) / Number(aloc?.details?.data?.fields?.finishAmount)) * 100;
        setProgress(percentComplete) 
        setBalance(aloc?.details?.data?.fields?.balance)
    }

    getObjectsForApp()
    },[])



  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const links = [
    website, twitter , discord
  ];
  const router = useRouter();
  return (
    <div className={`relative shadow-md dark:bg-black dark:text-blue-1 dark:shadow-md dark:shadow-blue-1 ${launchpad ? " ": "-ml-[30px] scale-[0.8]" }  lg:ml-0 z-20  lg:scale-[0.94] w-[306px] h-[308px] lg:h-[316px] bg-white rounded-[30px] py-[30px] px-[27px]`}>
      
      <div className={`absolute -top-[10px] left-[85%]   whitespace-nowrap  md:-left-[10px]   rounded-full bg-gradient z-40 text-white font-bold px-2 py-1 ${i == 0 ? "bg-gradient-red":"bg-gradient-blue"} flex items-center align-center `} > {role}</div>
        <div className=" relative " >
          <div className='w-[83px] h-[25px] flex flex-start space-x-[4px] opacity-60 absolute top-[33px]  z-30'>
                {icons.map((icon, index) => (
                  <Link
                  target="_blank" rel="noreferrer noopener"
                  href={links[index]} key={index}>
                    <Image
                      key={index}
                      src={icon}
                      width={18.43}
                      height={14.79}
                      className='text-gray-3 '
                      alt={"Meadown logo button"}
                    />
                  </Link>
                ))}
              </div>

        <Link  href={`/project/${i}`}>
          <div className=' relative flex justify-between items-center h-[50px]  mb-[26px] '>
        
            <div className='space-y-[10px]  relative'>
              <div className="flex space-x-2 items-center  mb-[25px]" >
              <h2 className='font-extrabold text-[21px] leading-[20px] '>
                {name}
              </h2>
              
              </div>
              
              
            </div>
            {/* logo */}
            <LogoRounded i={i} img={`/projects/${i }.png`} /> 
          </div>
          {/* paragraf */}
          <p
            // onClick={() => router.push(`/projects/${i}`)}
            className='dark:text-blue-1 cursor-pointer text-[13px] w-[220px] h-[57px] font-normal  leading-[19px] text-gray-3 mb-[29px] '
          >
           {shortDesc}
          </p>
          {/* prices */}
          
          <div className={`text-black dark:text-blue-1   space-x-[25px] flex `}>
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
              <div className={`progress-bar-container-card dark:bg-gray-1  mt-[10px]   `}>
            
              <div className="progress-bar" style={{ width: `${0}%` }} />
                
                 </div>
            ):(
              <div className={`progress-bar-container-card   mt-[10px]   `}>
            
              <div className="progress-bar" style={{ width: `${progress}%` }} />
                
                 </div>
            )
          }
          
          {/* price */}
          <p className='laeding-[21px] text-[13px]  h-[21px] text-gray-3  dark:text-blue-1'>
            {i == 0 ? "0 USDT" : `${convertToSui(balance).toFixed(2)} SUI`}
            {/* {i == 0 ? "0 USDT" : `0 SUI`} */}
         
            
      </p>
        </Link>
        </div>

      

      {/* img */}
    </div>
  );
}

export default Card;
