import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdInsertChartOutlined } from "react-icons/md";
import { ImStack } from "react-icons/im";
import { RiCheckboxMultipleLine, RiPieChartLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { SlGameController } from "react-icons/sl";
import { GiNewspaper } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";





import { useAccount } from "wagmi";
import AddressBoard from "./AddressBoard";
import { useWallet } from "@suiet/wallet-kit";

import BigNav from "./Types/BigNav";
import ConnectModalForWallets from './ConnectModalForWallets';
import MobileNav from "./Types/MobileNav";

function Nav() {
  // nav open
  const [open, setOpen] = useState(false);
  // connect wallet modal open
  let [isOpen, setIsOpen] = useState(false);

  const { isConnected, address } = useAccount();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  

  

  const elements = [
    {
      Icon: MdInsertChartOutlined,
      name: "Dashboard",
      pagePath: "",
    },
    {
      Icon: ImStack,
      name: "Launchpad",
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
    {
      Icon: GiNewspaper,
      name: "News / Blogs",
      pagePath: "news",
    },
  ];

  const socialMedia = [
    {
      name: "twitter",
      Icon: AiOutlineTwitter,
      link: "https://twitter.com/meadowlaunch",
    },
    { name: "discord", Icon: FaDiscord, link: "https://t.co/FLNKZU3ujp" },
    {
      name: "instagram",
      Icon: AiOutlineInstagram,
      link: "https://www.instagram.com/meadow_launch/",
    },
  ];

  //conection

  const wallet = useWallet();
  const connected = wallet?.connected || isConnected;

  

  return (
    <>
      
      <div className=' xl:hidden flex items-center justify-between px-[18px] fixed top-0 z-50 left-0 right-0 h-[70px] bg-blue-2   '>
        <Link href='/'>
          {connected ? (
            <div className='relative w-[50px] h-[50px]'>
              <Image
                src='/logo-icon.png'
                fill
                className='object-contain'
                alt={"Meadown sui launchpad logo"}
              />
            </div>
          ) : (
            <div className='relative w-[156px] h-[50px]'>
              <Image
                src='/logo.png'
                fill
                className='object-contain'
                alt={"Meadown sui launchpad logo"}
              />
            </div>
          )}
        </Link>
        <AddressBoard />
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

      
          <MobileNav elements={elements} socialMedia={socialMedia} open={open} setOpen={setOpen}  connected={connected} />
      

      <BigNav elements={elements} socialMedia={socialMedia} openModal={openModal} connected={connected} />
      <ConnectModalForWallets isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default Nav;
