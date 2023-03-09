import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import AlocationBoard from "./../../components/Project/AlocationBoard";
import { useWallet, useAccountBalance } from "@suiet/wallet-kit";
import { JsonRpcProvider, Network } from "@mysten/sui.js";
import WalletDetails from "./../../components/Project/WalletDetails";

import { AiOutlineWarning } from "react-icons/ai";
import Image from "next/image";
import { AddToCalendarButton } from 'add-to-calendar-button-react';


import { convertToSui } from "./../../utils/convertToSui";
import MeadowCountDown from './../Golbal/MeadowCountDown';

function ProjectActionCard({ path, project }) {
  const timestamp = Math.floor(Date.now() / 1000) + 151200;
  const icons = ["/pin.svg", "/twitter-gray.svg", "/discord-gray.svg"];
  const [progres, setProgers] = useState(0);
  const [coins, setCoins] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [alocationObject, setAlocationObject] = useState({});
  const [participateing, setParticipateing] = useState();
  const [buttonClick, setButtonClick] = useState(false);
  const { balance } = useAccountBalance();
  const [participateingId, setParticipateingId] = useState();

  const wallet = useWallet();
  const provider = new JsonRpcProvider(Network.DEVNET);

  useEffect(() => {
    const getObjectsForUser = async () => {
      if (!wallet.connected) return;
      const objects = await provider?.getObjectsOwnedByAddress(wallet?.address);
      // const part =  objects.some(obj => obj.type === `${package_}::meadow::Participation`)
      
      const part = objects.some(
        (obj) =>
          obj.type === `${project?.package}::${project?.module}::Participation`
      );
      // const partObj =  objects.find(obj => obj.type === `${package_}::meadow::Participation`)
      const partObj = objects.find(
        (obj) =>
          obj.type === `${project?.package}::${project?.module}::Participation`
      );
      //  setCoins(objects.find(obj => obj.type === "0x2::coin::Coin<0x2::sui::SUI>"))
      const cids = objects
        .filter((obj) => obj.type === `0x2::coin::Coin<0x2::sui::SUI>`)
        .map((o) => o.objectId);
      setCoins(cids);
      setParticipateingId(partObj?.objectId);
      setParticipateing(part);
      //
    };

    const getObjectsForApp = async () => {
      const aloc = await provider?.getObject(project?.alocation);
      setAlocationObject(aloc);
      const percentComplete =
        (Number(aloc?.details?.data?.fields?.balance) /
          Number(aloc?.details?.data?.fields?.finishAmount)) *
        100;
      setIsFinished(
        Number(aloc?.details?.data?.fields?.balance) >
          Number(aloc?.details?.data?.fields?.finishAmount)
      );
      setProgers(percentComplete);
    };

    getObjectsForUser();
    getObjectsForApp();
  }, [wallet?.connected, buttonClick, balance]);

  const mintParticipation = async () => {
    if (!wallet.connected) {
      toast.error("Please connect your Sui wallet");
      return;
    }
    try {
      const resData = await wallet.signAndExecuteTransaction({
        transaction: {
          kind: "moveCall",
          data: {
            packageObjectId: project.package,
            module: project.module,
            function: "participate",
            typeArguments: [],
            arguments: [project?.alocation],
            gasBudget: 10000,
          },
        },
      });

      toast.success("Participated successfully");
      setButtonClick(!buttonClick);
    } catch (e) {
      console.error("nft mint failed", e);
    }
    setButtonClick(!buttonClick);
  };

  const claim = async () => {
    if (!wallet.connected) {
      toast.error("Please connect your Sui wallet");
      return;
    }
    try {
      const resData = await wallet.signAndExecuteTransaction({
        transaction: {
          kind: "moveCall",
          data: {
            packageObjectId: project.package,
            module: project.module,
            function: "claim",
            typeArguments: [],
            arguments: [project?.alocation, participateingId],
            gasBudget: 10000,
          },
        },
      });

      toast.success("Claimed tokens");
      setButtonClick(!buttonClick);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='max-w-[354px] mx-auto'>
      <div className='font-avenir lg:w-[354px] h-auto dark:bg-black dark:text-blue-1  rounded-[30px] bg-white p-[30px] '>
        {/* details */}
        <div className='font-bold text-[27px] leading-[110%] font-avenir mb-[30px] dark:text-blue-1  '>
          Sale Details
        </div>

        {path == "0" && (
          <MeadowCountDown i={1} />  
        )}

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

        {path == "0" ? (
          <div>
            <div className='flex w-full justify-between font-bold  mt-[40px] md:mt-0 '>
              <p>Finished:</p>
              <p>{0}%</p>
            </div>
            <div className='progress-bar-container'>
              <div className='progress-bar' style={{ width: `${0}%` }} />
            </div>
            <div className='flex w-full justify-between font-bold text-sm pt-1 '>
              <p>0 USDT</p>
              <p>200,000 USDT</p>
            </div>
          </div>
        ) : (
          <div>
            <div className='flex w-full justify-between font-bold mt-[40px] md:mt-0'>
              <p>Progress:</p>
              <p>{progres.toFixed(0)}% Filled</p>
            </div>
            <div className='progress-bar-container dark:bg-gray-1'>
              <div className='progress-bar' style={{ width: `${progres}%` }} />
            </div>
            <div className='flex w-full justify-between font-bold text-sm pt-1 '>
              <p>
                {convertToSui(
                  Number(alocationObject?.details?.data?.fields?.balance)
                )
                  .toFixed(6)
                  .replace(/\.?0+$/, "")}{" "}
                SUI
              </p>
              <p>
                {convertToSui(
                  Number(alocationObject?.details?.data?.fields?.finishAmount)
                )}{" "}
                SUI
              </p>
            </div>
          </div>
        )}

        {/* <button onClick={handleAddEvent} className="p-2 bg-blue-1 rounded-full">Schedule</button> */}
        <div className="mt-10" > 
                {path == "0" && (
                    <AddToCalendarButton
                    name="Meadow private round"
                    startDate="2023-03-15"
                    endDate="2023-03-17"
                    
                    lightMode="bodyScheme"
                    customCss="https://add-to-calendar-button.com/atcb.css"
                    buttonStyle="custom"
                    listStyle="modal"
                    options={["Apple", "Google", "Yahoo", "Microsoft365"]}
                    ></AddToCalendarButton>
                )}
        
        </div>

        {/* /bar */}

        {wallet.connected && path != "0" && (
          <WalletDetails
            symbol={project.symbol}
            _package={project?.package}
            _module={project?.module}
            setButtonClick={setButtonClick}
            buttonClick={buttonClick}
            coins={coins}
          />
        )}

        <div>
          <div className='text-[15px] font-normal  leading-[19px]'></div>
          <div className='text-[14px] leading-[18px] mt-4 text-gray-2 '></div>
        </div>
        <div>
          {path != "0" &&
            ((isFinished && !wallet.connected) ||
            (isFinished && wallet.connecte && !participateing)
             ? (
              <div className='text-gray-1 w-fill h-[40px] flex items-center justify-center'>
                Finished!
              </div>
            )
            //  : isFinished && !participateing && wallet.connected ? (
            //   <div className='text-gray-1 w-fill h-[40px] flex items-center justify-center'>
            //     Finished!
            //   </div>
            // ) 
            // : isFinished && participateing ? (
            //   <button
            //     onClick={() => claim()}
            //     className='h-[40px] bg-blue-1 w-full mt-[20px] rounded-[14px] text-white font-bold flex items-center justify-center shadow-lg shadow-blue-1'
            //   >
            //     Claim
            //   </button>
            // ) 
            : 
            !participateing ? (
              <button
                onClick={() => mintParticipation()}
                className='h-[40px] bg-black w-full mt-[20px] rounded-[14px] flex items-center justify-center space-x-[10px]  '
              >
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
            ) : (
              <AlocationBoard
                _package={project?.package}
                _module={project?.module}
                alocation={project?.alocation}
                participateingId={participateingId}
                coins={coins}
                buttonClick={buttonClick}
                setButtonClick={setButtonClick}
              />
            ))}
        </div>
      </div>


      

      <div className='bg-white dark:bg-black rounded-xl w-full p-5 mt-4 flex justify-center space-x-[10px] text-blue-1 items-center'>
        <p className='whitespace-pre-line text-[13px] '>
          {path == "0"
            ? "Starts: March 15th 1:00pm UTC \n \n(OGs can only contribute in the first 15 mins)\n \n Starts March 15th 1:15pm UTC (Public can contribute)"
            : "Before you start any action you need to have sui for gas fee, for that find the airdrop or faucet option in your sui wallet."}
        </p>
      </div>
      <div className='bg-white dark:bg-black rounded-xl w-full  mt-4 flex  space-x-[10px] text-red items-center'>
        {path == "0" ? (
          <div className='m-5'>
            <p>Contribution per wallet:</p><br/>
            <p>Min: $5</p>
            <p>Max: $5,000</p>
          </div>
        ) : (
          <div className='m-5 flex items-center space-x-2'>
            <AiOutlineWarning />
            <p>This is an IDO test</p>
          </div>
        )}
      </div>
      <div className=' flex justify-center space-x-[10px] items-center mx-auto mt-[21px] '>
        {/* website */}
        <Link
          href={project?.website || "/"}
          target='_blank'
          rel='noreferrer noopener'
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
          target='_blank'
          rel='noreferrer noopener'
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
          href={project?.discord || "/"}
          target='_blank'
          rel='noreferrer noopener'
          className='w-[49px] h-[49px] rounded-full flex items-center justify-center bg-white  '
        >
          <Image
            src={icons[2]}
            width={18.43}
            height={14.79}
            alt={"Meadown logo button"}
          />
        </Link>

        <Link
          href='https://meadow.gitbook.io/docs/'
          className='bg-white h-[49px] rounded-full flex items-center justify-center px-[10px] font-bold text-gray-2'
        >
          Whitepaper
        </Link>
      </div>
    </div>
  );
}

export default ProjectActionCard;
