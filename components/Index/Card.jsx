import React, {useEffect, useState} from "react";
import Image from "next/image";
import LogoRounded from "../LogoRounded";
import { useRouter } from "next/navigation";
import { AiFillLock } from "react-icons/ai";
import { JsonRpcProvider, Network  } from '@mysten/sui.js';
import Link from "next/link";

function Card({ i,name, twitter, website , discord, shortDesc, alocation }) {
  const provider = new JsonRpcProvider(Network.DEVNET);
  const [progres, setProgres] = useState()
    useEffect(()=>{

      const getObjectsForApp = async ()=>{
        const aloc = await provider.getObject(alocation)
        const percentComplete = (Number(aloc.details.data.fields.balance) / Number(aloc.details.data.fields.finishAmount)) * 100;
        setProgres(percentComplete) 
    }

    getObjectsForApp()
    },[])



  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const links = [
    website, twitter , discord
  ];
  const router = useRouter();
  return (
    <div className='relative    -ml-[30px] lg:ml-0 z-20 scale-[0.8] lg:transform-none w-[306px] h-[308px] lg:h-[316px] bg-white rounded-[30px] py-[30px] px-[27px]'>
      
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

        <Link href={`/project/${i }`}>
          <div className='flex justify-between items-center h-[50px]  mb-[26px] '>
            <div className='space-y-[10px] relative'>
              <h2 className='font-extrabold text-[21px] leading-[20px] mb-[25px]'>
                {name}
              </h2>
              
            </div>
            {/* logo */}
            <LogoRounded i={i} img={`/projects/${i + 1}.png`} /> 
          </div>
          {/* paragraf */}
          <p
            // onClick={() => router.push(`/projects/${i}`)}
            className=' cursor-pointer text-[13px] w-[220px] h-[57px] font-normal  leading-[19px] text-gray-3 mb-[29px] '
          >
           {shortDesc}
          </p>
          {/* prices */}
          
          <div className='text-black  hidden space-x-[25px] mb-[31px] '>
            {/* 1 */}
            <div className=' flex flex-col justify-start'>
              <p className='w-[150px]  font-extrabold leading-[19px] text-[14px] mb-[2px]  h-[16px] '>
                Total Raise (private)
              </p>
              <div className='text-[19px] font-medium leading-[130%]  '>
                $800,000
              </div>
            </div>
            {/* 2 */}
            <div className='flex flex-col justify-start'>
              <p className='w-[80px] font-extrabold leading-[19px] text-[14px]  h-[16px] '>
                Token Price
              </p>
              <div className='text-[19px] font-medium leading-[130%]  '>
                $0.10
              </div>
            </div>
          </div>


          {/* bar */}
          <div className="progress-bar-container-card mt-[40px] ">
            
          <div className="progress-bar" style={{ width: `${progres}%` }} />
            
             </div>
          {/* price */}
          <p className='laeding-[21px] text-[13px] w-[55px] h-[21px] text-gray-3 '>
            0 SUI
          </p>
        </Link>
        </div>

      

      {/* img */}
    </div>
  );
}

export default Card;
