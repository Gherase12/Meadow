
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
const socialLinks = [ project?.website,project?.twitter, project?.discord ]
   const prices = [
    {
      // price: "0.10",
      price: "TBA",
      text: "Price",
    },

    {
      // price: "155,500",
      price: "TBA",
      text: "Initial marketcap",
    },
  ];

  const medPrices = [
    {
      price: "0.10",
      // price: "TBA",
      text: "Price",
    },

    {
      price: "155,500",
      // price: "TBA",
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
            src={`/projects/${Number(router.query.project) + 1}.png`}
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
              <p className=' overflow-y-scroll h-[265px] text-[16px] scrollbar-hide leading-[26px]  font-normal '>
                {project?.desc}
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
                  { router.query.project == "0" ?  medPrices.map(({ price, text }, i) => (
                    <TokenSaleDetail
                      key={i}
                      upText={`$${price}`}
                      downText={text}
                    />
                  )):
                  prices.map(({ price, text }, i) => (
                    <TokenSaleDetail
                      key={i}
                      upText={`$${price}`}
                      downText={text}
                    />
                  ))
                
                }
                </div>
                {/* dates */}
                <div className=' border-blue-7/50  h-[76px] mt-[20px] space-x-[40px] flex lg:border-y-[1px] '>
                  {dates.map(({ date, time }, i) => (
                    <TokenSaleDetail key={i} upText={date} downText={time} />
                  ))}
                </div>
                {/* details */}
                <div className=' h-[76px] mt-[20px]  '>
                  {
                    router.query.project == "0" ? 
                    (
                      <TokenSaleDetail
                    upText={"5% TGE 2 months Cliff 5.27% per month"}
                    
                    downText={"Lock-up"}
                  />
                    ):
                    (
                      <TokenSaleDetail
                    upText={"100% TGE"}
                    
                    downText={"Lock-up"}
                  />
                    )
                  }
                  
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="max-w-[354px]" >
            <div className='font-avenir lg:w-[354px] h-auto   rounded-[30px] bg-white p-[30px] '>
              {/* details */}
              <div className='font-bold text-[27px] leading-[110%] font-avenir mb-[30px]  '>
                Sale Details
              </div>

            {router.query.project != "0" && (<CountdownTimer timestamp={timestamp} />) }  
                    


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
              <div>

              <div className="flex w-full justify-between font-bold " >
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
              {/* /bar */}

              { wallet.connected && (<WalletDetails symbol={project.symbol} package={project?.package} module={project?.module} setButtonClick={setButtonClick} buttonClick={buttonClick} coins={coins} />)}
    

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
                router.query.project == "0" &&(
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
            <p>Before you start any action you need to have sui for gas fee, for that find the airdrop or faucet option in your sui wallet. </p>
            </div>
            <div className="bg-white rounded-xl w-full h-14 mt-4 flex justify-center space-x-[10px] text-red items-center">
            <AiOutlineWarning  />
            <p>This is just an experimental demo</p>
            </div>
            <div className=' flex justify-center space-x-[10px] items-center mx-auto mt-[21px] '>
              {icons.map((icon, index) => (
                <Link
                href={socialLinks[index]}
                target="_blank" rel="noreferrer noopener"
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
                </Link>
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
