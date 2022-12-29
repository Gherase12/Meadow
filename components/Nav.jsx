import Image from "next/image";
import {  useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { MdInsertChartOutlined } from "react-icons/md";
import { ImStack } from "react-icons/im";
import { RiCheckboxMultipleLine, RiPieChartLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { SlGameController } from "react-icons/sl";
import { GrGamepad } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  EthosConnectStatus } from 'ethos-connect'


import ConnectModal from './ConnectModal';

function Nav({ path }) {
  // nav open
  const [open, setOpen] = useState(false);
  // connect wallet modal open
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  console.log(path);
  const router = useRouter();

  const elemente = [
    {
      Icon: MdInsertChartOutlined,
      name: "Dashboard",
      pagePath: "",
    },
    {
      Icon: ImStack,
      name: "Lounchpad",
      pagePath: "launchpad",
    },
    {
      Icon: RiCheckboxMultipleLine,
      name: "IDO insurance",
      pagePath: "ido-insurance",
    },
    {
      Icon: SlGameController,
      name: "Games",
      pagePath: "games",
    },
    {
      Icon: RiPieChartLine,
      name: "Voting",
      pagePath: "voting",
    },
    {
      Icon: HiOutlineUsers,
      name: "Stake",
      pagePath: "stake",
    },
  ];

  const socialMedia = [
    { name: "twitter", link: "https://twitter.com/meadowlaunch" },
    { name: "discord", link: "https://t.co/FLNKZU3ujp" },
    { name: "medium", link: "/" },
  ];

  return (
    <>
      <div className=' xl:hidden flex items-center justify-between px-[18px] fixed top-0 z-50 w-full h-[70px] bg-blue-2 '>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={157.19}
            height={50.3}
            alt={"Meadown sui launchpad logo"}
          />
        </Link>
        {!open ? (
          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className='text-white text-[30px]'
          />
        ) : (
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className='text-white text-[30px]'
          />
        )}
      </div>

      {/* mobile nav open */}
      <div
        className={`${
          !open
            ? "fixed right-[100%]"
            : " text-gray-4 fixed top-[70px] pb-[70px] left-0 h-screen w-[100%] px-[29px] justify-around  overflow-y-scroll  flex  flex-col    bg-blue-2    duration-500 ease-in-out z-50 xl:hidden"
        }  `}
      >
        <div className='   mt-[48px]  '>
          <div className=' pb-[36px]  h-[276px] flex flex-col justify-between  border-b border-gray-4/50   '>
            {elemente.map(({ Icon, name, pagePath }, i) => (
              <button
                key={i}
                onClick={() => {
                  router.push(`/${pagePath}`);
                  setOpen(false);
                }}
                className={`w-[246px]   flex items-center rounded-[12px] ${
                  path == `/${pagePath}` && "text-blue-1"
                } `}
              >
                <Icon className='mr-[16px]' />
                <div className='text-[16px] nav-font font-normal   '>
                  {name}
                </div>
              </button>
            ))}
          </div>

          <div className='py-[24.5px] text-[16px] nav-font flex flex-col items-between '>
            <Link href="https://meadow.gitbook.io/docs/" className='h-[42px] py-[12px]  '>Docs</Link>
            <Link href="https://meadow.gitbook.io/docs/socials-and-links/team" className='h-[42px] py-[12px]  '>Team</Link>
          </div>
        </div>

        {/* social buttons*/}
        <div className=' flex flex-col items-center w-full     '>
          {/* butoane */}
          <div className='w-[165px] flex justify-around h-[40px] mb-[35px] '>
            {socialMedia.map(({ name, link }, i) => (
              <Link
                href={link}
                key={i}
                className='rounded-full w-[40px] h-[40px] flex items-center justify-center bg-black '
              >
                <Image src={`/${name}.svg`} width={20} height={16} alt={name} />
              </Link>
            ))}
          </div>

          {/* buttons */}
          <div className='   flex flex-col justify-around space-y-[10px] w-full   '>
            <Link href="https://meadow-landing.vercel.app/" >
            <button  className=' bg-black  flex items-center justify-center h-[50px]  w-full rounded-[15px] btn-text '>
              {" "}
              Home
            </button>
            </Link>
            <button   onClick={()=>{openModal(); setOpen(false)}} className=' w-full flex items-center justify-center h-[50px] text-white bg-blue-1  rounded-[15px]  btn-text '>
              Connect wallet
            </button>
          </div>
        </div>
      </div>
      {/* mobile nav open */}

      {/* big nav */}

      <div className='text-gray-4 hidden xl:flex flex-col z-50 relative w-[295px]  rounded-[28px] bg-blue-2  px-[24.5px] py-[30px]  '>
        {/* logo */}
        <Image
          src='/logo.svg'
          width={147.23}
          height={47.11}
          className='mb-[38px]'
          alt='Meadown sui launchpad logo'
        />

        {/* sectiune */}
        {/* frame */}

        <div className='w-[246px] h-[384px]  mb-[220px] '>
          <div className='w-[246px] h-[268px] flex flex-col  border-b border-blue-4/50   '>
            {elemente.map(({ Icon, name, pagePath }, i) => (
              <button
                key={i}
                onClick={() => router.push(`/${pagePath}`)}
                className={`w-[246px] h-[48px] ${
                  path == `/${pagePath}` && "text-blue-1 bg-black"
                }  flex items-center rounded-[12px] hover:bg-black group`}
              >
                <Icon className=' mx-[20px] text-[24px]  ' />
                <div className='text-[16px] nav-font font-normal  '>{name}</div>
              </button>
            ))}
          </div>
          <div className='p-[24.5px] text-[16px]  nav-font flex flex-col items-between '>
            <Link href="https://meadow.gitbook.io/docs/" className='h-[42px] py-[12px] pr-[16px] hover:text-blue-1 cursor-pointer'>
              Docs
            </Link>
            <Link href="https://meadow.gitbook.io/docs/socials-and-links/team" className='h-[42px] py-[12px] pr-[16px] hover:text-blue-1 cursor-pointer'>
              Team
            </Link>
          </div>
        </div>

        {/*  social media buttons*/}
        <div className='flex flex-col items-center w-[246px] absolute bottom-[30px]  '>
          {/* buttons */}
          <div className='w-[140px] flex justify-around h-[40px] mb-[35px] '>
            {socialMedia.map(({ name, link }, i) => (
              <Link
                href={link}
                key={i}
                className='rounded-full w-[40px] h-[40px] flex items-center justify-center bg-black '
              >
                <Image src={`/${name}.svg`} width={20} height={16} alt={name} />
              </Link>
            ))}
          </div>

          {/* buttons */}
          <div className='w-[246px] text-white h-[110px]  flex flex-col justify-around space-y-[10px]  text-[15px] '>
          <Link href="https://meadow-landing.vercel.app/" >

            <button className='flex items-center justify-center h-[50px] border-white w-[246px] bg-black rounded-[15px] btn-text '>
              {" "}
              Home
            </button>
          </Link>

            <button
           
            onClick={openModal}
            className='  flex items-center justify-center h-[50px] bg-blue-1 w-[246px] rounded-[15px]  btn-text '
            >Connect wallet</button>
            
          </div>
        </div>
      </div>
      <ConnectModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default Nav;
