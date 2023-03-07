
import Image from "next/image";
import { AiOutlineArrowLeft ,AiOutlineWarning  } from "react-icons/ai";
import TokenSaleDetail from "./../../components/TokenSaleDetail";
// import { useRouter } from "next/navigation";
import { useRouter } from 'next/router'
import Link  from 'next/link';
import { toast } from 'react-toastify';
import React, { useState ,useEffect} from 'react';
import AlocationBoard from './../../components/Project/AlocationBoard';
import { useWallet, useAccountBalance } from '@suiet/wallet-kit';
import { JsonRpcProvider, Network  } from '@mysten/sui.js';
import WalletDetails from './../../components/Project/WalletDetails';

import { convertToSui } from './../../utils/convertToSui';
import { ICOprojects } from './../../data/ICOprojects';
import CountdownTimer from "../../components/CountDown/CountDown";
import MeadowCountDown from "../../components/MeadowCountDown";
function Project() {
  const timestamp = Math.floor(Date.now() / 1000) + 151200;
  const wallet = useWallet()
  const provider = new JsonRpcProvider(Network.DEVNET);
  const router = useRouter();
  const [buttonClick, setButtonClick] = useState(false);
  const [participateing, setParticipateing] = useState()
  const [participateingId, setParticipateingId] = useState()
  const [progres, setProgers] = useState(0)
  const [coins , setCoins] = useState([])
  const [isFinished, setIsFinished] = useState(false);
  const [alocationObject, setAlocationObject] = useState({})
  const {balance} = useAccountBalance()
  console.log(timestamp)
  // const { project } .= router

  // console.log(project)
  console.log(router.query)
  const project = ICOprojects[Number(router.query.project) ]
  console.log(project)
//   const {twitter, website, discord} = project
// const socialLinks = [ project?.website,project?.twitter, project?.discord ]


  const prices = [
    {
      price:"$0.10",
      totalAlocation:"$200.000",
      marketCap:" $155,000",
      startDate:"March 15, 1:00 PM UTC",
      endDate:"March 17, 1PM UTC",
      minPrice:"$5",
      maxPrice:"$5,000",
      currency:"USDT",
      network:"BEP20",
      
      tga:"5% TGE 2 months Cliff 5.27% per month"
    },
      {
      price:"TBA",
      totalAlocation:"TBA",
      marketCap:" TBA",
      startDate:"TBA",
      endDate:" TBA",
      minPrice:"TBA",
      maxPrice:"TBA",
      currency:"TBA",
      network:"SUI",
      endDate:"TBA",
      tga:"100% TGE"
    },

  ]


   

  

  

  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  

  // useEffect(()=>{
  //   console.log(router)
  // },[])


  useEffect(()=>{
    
    const getObjectsForUser = async ()=>{
      if(!wallet.connected) return
      const objects = await provider.getObjectsOwnedByAddress(
        wallet?.address
        );
        // const part =  objects.some(obj => obj.type === `${package_}::meadow::Participation`)
        console.log(objects)
        const part =  objects.some(obj => obj.type === `${project?.package}::${project?.module}::Participation`)
        // const partObj =  objects.find(obj => obj.type === `${package_}::meadow::Participation`)
        const partObj =  objects.find(obj => obj.type === `${project?.package}::${project?.module}::Participation`)
        //  setCoins(objects.find(obj => obj.type === "0x2::coin::Coin<0x2::sui::SUI>"))
        const cids =  objects.filter(obj => obj.type === `0x2::coin::Coin<0x2::sui::SUI>`).map((o)=> o.objectId)
        setCoins(cids)
        setParticipateingId(partObj?.objectId)
        setParticipateing(part)
        // 
         
    }

    const getObjectsForApp = async ()=>{
        const aloc = await provider.getObject(project?.alocation)
        setAlocationObject(aloc)
        const percentComplete = (Number(aloc.details.data.fields.balance) / Number(aloc.details.data.fields.finishAmount)) * 100;
        setIsFinished(Number(aloc.details.data.fields.balance) > Number(aloc.details.data.fields.finishAmount))
        setProgers(percentComplete) 
    }

    getObjectsForUser()
    getObjectsForApp()

  },[wallet?.connected, buttonClick, balance])


  const mintParticipation = async ()=>{
    if (!wallet.connected) {
      toast.error("Please connect your Sui wallet");
      return
    }
try {
  const resData = await wallet.signAndExecuteTransaction({
    transaction: {
      kind: 'moveCall',
      data: {
        packageObjectId: project.package,
        module: project.module,
        function: 'participate',
        typeArguments: [],
        arguments: [
          project?.alocation
        ],
        gasBudget: 10000,
      }
    }
  });
  
  toast.success("Participated successfully");
      setButtonClick(!buttonClick);
    } catch (e) {
      console.error('nft mint failed', e);
    }
    setButtonClick(!buttonClick);
  }


  const claim = async ()=>{
    if (!wallet.connected) {
      toast.error("Please connect your Sui wallet");
      return
    }
try {
  const resData = await wallet.signAndExecuteTransaction({
    transaction: {
      kind: 'moveCall',
      data: {
        packageObjectId: project.package,
        module: project.module,
        function: 'claim',
        typeArguments: [],
        arguments: [
          project?.alocation,
          participateingId,

        ],
        gasBudget: 10000,
      }
    }
  });
  
  toast.success("Claimed tokens");
      setButtonClick(!buttonClick);
    } catch (e) {
      console.error( e);
    }
  }

 
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
          onClick={() => router.push("/")}
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
            src={`/projects/${Number(router.query.project)}.png`}
            alt='meadow project'
            className=' rounded-full'
          />
          <h3 className='font-bold font-avenir text-[41px] leading-[51px]  text-black '>
            {project?.name}
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
              <p  className=' whitespace-pre-line overflow-y-scroll h-[265px] text-[16px] scrollbar-hide leading-[26px]  font-normal '>
                {project?.desc}
              </p>
            </div>
            {/* project details */}
            <div className=' h-[369px] bg-white row-span-2 rounded-[30px] p-[30px] '>
              {/* prices */}
              <div className='font-bold text-[27px] leading-[110%] font-avenir mb-[30px]  '>
                {router.query.project == "0" ? 
                    "Private round 1 details"
                :

                "Token Sale details"
                }
              </div>


              <div className=' flex flex-col scale-[0.8] '>
                <div className=' h-[76px] flex space-x-[40px] '>
                  { router.query.project == "0" || router.query.project == "1" ?  (
                    <>
                    <TokenSaleDetail                      
                      upText={`${prices[0].price}`}
                      downText={"Price"}
                    />
                    <TokenSaleDetail
                      
                      upText={`${prices[0].marketCap}`}
                      downText={"Initial marketcap"}
                    />
                    <TokenSaleDetail
                      
                      upText={`${prices[0].totalAlocation}`}
                      downText={"Total alocation"}
                    />
                    <TokenSaleDetail
                      
                      upText={`${prices[0].network}`}
                      downText={"Network"}
                    />
                    </>
                  ):
                  (
                    <>
                    
                    <TokenSaleDetail
                      
                      upText={`${prices[1].price}`}
                      downText={"Initial marketcap"}
                    />
                    <TokenSaleDetail
                      
                      upText={`${prices[1].marketCap}`}
                      downText={"Initial marketcap"}
                    />
                    <TokenSaleDetail
                      
                      upText={`${prices[1].totalAlocation}`}
                      downText={"Total alocation"}
                    />
                     <TokenSaleDetail
                      
                      upText={`${prices[1].network}`}
                      downText={"Network"}
                    />
                    </>
                  )
                
                }
                </div>
                {/* dates */}
                <div className=' border-blue-7/50  h-[76px] mt-[20px] space-x-[40px] flex lg:border-y-[1px] '>
                { router.query.project == "0" || router.query.project == "1" ?  (
                    <>
                    <TokenSaleDetail                      
                      upText={`${prices[0].startDate}`}
                      downText={"Start date"}
                    />
                    <TokenSaleDetail
                      
                      upText={`${prices[0].endDate}`}
                      downText={"End date"}
                    />
                    </>
                  ):
                  (
                    <>
                    
                    <TokenSaleDetail
                      
                      upText={`${prices[1].startDate}`}
                      downText={"Start date"}
                    />
                    <TokenSaleDetail
                      
                      upText={`${prices[1].endDate}`}
                      downText={"End date"}
                    />
                    </>
                  )
                
                }
                 
                </div>
                {/* details */}
                <div className=' h-[76px] mt-[20px]  '>
                  {
                    router.query.project == "0" || router.query.project == "1" ? 
                    (
                      <TokenSaleDetail
                    upText={prices[0].tga}
                    
                    downText={"Lock-up"}
                  />
                    ):
                    (
                      <TokenSaleDetail
                    upText={prices[1].tga}
                    
                    downText={"Lock-up"}
                  />
                    )
                  }
                  
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="max-w-[354px] mx-auto" >
            <div className='font-avenir lg:w-[354px] h-auto   rounded-[30px] bg-white p-[30px] '>
              {/* details */}
              <div className='font-bold text-[27px] leading-[110%] font-avenir   '>
                Sale Details
              </div>
              
            {  router.query.project != "0" ? (<CountdownTimer timestamp={timestamp} />):(<MeadowCountDown i={1} />) }  
                    


              <div className='text-black hidden  space-x-[35px] mb-[20px] '>
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

              {router.query.project == "0" ? (

<div>

<div className="flex w-full justify-between font-bold  mt-[40px] md:mt-0 " >
  <p>Progress:</p>
  <p>{0}%</p>
</div>
<div className="progress-bar-container">
<div className="progress-bar" style={{ width: `${0}%` }} />
</div>
<div className="flex w-full justify-between font-bold text-sm pt-1 " >
  <p>0 USDT</p>
  <p>200.000 USDT</p>
</div>
</div>
              ):(
                <div>

                <div className="flex w-full justify-between font-bold mt-[40px] md:mt-0" >
                  <p>Progress:</p>
                  <p>{progres.toFixed(0)}%</p>
                </div>
                <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progres}%` }} />
                </div>
                <div className="flex w-full justify-between font-bold text-sm pt-1 " >
                  <p>{convertToSui(Number(alocationObject?.details?.data?.fields?.balance)).toFixed(6).replace(/\.?0+$/, '')} SUI</p>
                  <p>{convertToSui(Number(alocationObject?.details?.data?.fields?.finishAmount))} SUI</p>
                </div>
                </div>
              )}
          
              {/* /bar */}

              { (wallet.connected && (router.query.project != "0")  ) && (<WalletDetails symbol={project.symbol} package={project?.package} module={project?.module} setButtonClick={setButtonClick} buttonClick={buttonClick} coins={coins} />)}
    

              {/* price */}
              {/* <p className='laeding-[21px] text-[13px] w-[55px] h-[21px] text-gray-3 '>
                $124,202
              </p> */}
              {/* end event */}
              <div>
                <div className='text-[15px] font-normal  leading-[19px]'></div>
                <div className='text-[14px] leading-[18px] mt-4 text-gray-2 '>
                
                </div>
              </div>
              <div  >
              {
                false &&(
                (isFinished && !wallet.connected) || (isFinished && wallet.connecte && !participateing ) ? (
                  <div className="text-gray-1 w-fill h-[40px] flex items-center justify-center">
                  Finished!
                </div>
                ):

                isFinished && !participateing && wallet.connected ? (
                  <div className="text-gray-1 w-fill h-[40px] flex items-center justify-center">
                  Finished!
                  </div>
                ):
                isFinished && participateing  ? (
                  <button onClick={()=>claim()} className="h-[40px] bg-blue-1 w-full mt-[20px] rounded-[14px] text-white font-bold flex items-center justify-center shadow-lg shadow-blue-1" >
                    Claim
                  </button>
                ):

                !participateing ? (
                  <button onClick={()=>mintParticipation()}  className='h-[40px] bg-black w-full mt-[20px] rounded-[14px] flex items-center justify-center space-x-[10px]  '>
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
                ): (
                  <AlocationBoard _package={project?.package} _module={project?.module}  alocation={project?.alocation} participateingId={participateingId} coins={coins} buttonClick={buttonClick} setButtonClick={setButtonClick} />
                ))
              }

              </div>
              
              
            </div>

            <div className="bg-white rounded-xl w-full p-5 mt-4 flex justify-center space-x-[10px] text-blue-1 items-center">
              
            <p className="whitespace-pre-line text-[13px] ">
            {router.query.project == "0" ? "Starts: March 15, 1:00 PM UTC (OG roles can contribute in the first 15 mins (see below for OG details)\n Starts: March 15, 1:15 PM UTC (Public can contribute)":"Before you start any action you need to have sui for gas fee, for that find the airdrop or faucet option in your sui wallet." }
               </p>
            </div>
            <div className="bg-white rounded-xl w-full  mt-4 flex  space-x-[10px] text-red items-center">
              {router.query.project == "0" ? (
                  <div className="m-5" >
                    
                    <p>Contribution (per wallet)</p>
                    <p>Min: $5</p>
                    <p>Max: $5,000</p>
                  </div>
              ):(

                <div className="m-5 flex items-center space-x-2" >
                <AiOutlineWarning  />
            <p>This is an IDO test</p>
                </div>
              ) }
            
            </div>
            <div className=' flex justify-center space-x-[10px] items-center mx-auto mt-[21px] '>
              {/* website */}
                <Link
                href={project?.website || "/"}
                target="_blank" rel="noreferrer noopener"
                  
                  className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
                >
                  
                  <Image
                    
                    src={icons[0]}
                    width={18.43}
                    height={14.79}
                    alt={"Meadown logo button"}
                  />
                </Link>

                {/* twitter */}
                <Link
                href={project?.twitter || "/"}
                target="_blank" rel="noreferrer noopener"
                  
                  className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
                >
                  
                  <Image
                    
                    src={icons[1]}
                    width={18.43}
                    height={14.79}
                    alt={"Meadown logo button"}
                  />
                </Link>
                {/* discord */}
                <Link
                href={project?.discord  || "/"}
                target="_blank" rel="noreferrer noopener"
                  
                  className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
                >
                  
                  <Image
                    
                    src={icons[2]}
                    width={18.43}
                    height={14.79}
                    alt={"Meadown logo button"}
                  />
                </Link>
              
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
