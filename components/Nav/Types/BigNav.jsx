import React from 'react'
import DarkToggler from './../DarkToggler';
import  Image  from 'next/image';
import Link  from 'next/link';
import { useRouter } from "next/router";
import AddressBoard from '../AddressBoard';

function BigNav({elements, socialMedia, openModal ,connected }) {
  const router = useRouter()
  const path =  router.pathname;
  const isOnNews = path == "/news/[news]" || path == "/blogs/[blog]";

  return (
    <div
        className={`text-gray-4 hidden  dark:text-blue-1 dark:bg-black  dark:shadow-lg dark:shadow-blue-1 ${
          !isOnNews && "xl:flex"
        }  flex-col z-50 relative w-[295px]  rounded-[28px] bg-blue-2  px-[24.5px] py-[30px]  `}
      >
        {/* logo */}
        <div className="flex space-x-10">

        <Image
          src='/logo.png'
          width={147.23}
          height={47.11}
          className='mb-[38px]'
          alt='Meadown sui launchpad logo'
        />
        <DarkToggler />
        </div>

        {/* sectiune */}
        {/* frame */}

        <div className='w-[246px] h-[384px]  mb-[220px] '>
          <div className='w-[246px] h-[368px] flex flex-col space-y-[10px]  border-b border-blue-4/50  pb-[10px] '>
            {elements.map(({ Icon, name, pagePath }, i) => (
              <button
                key={i}
                onClick={() => router.push(`/${pagePath}`)}
                className={`w-[246px] h-[88px]  ${
                  path == `/${pagePath}` && "text-blue-1 dark:text-white dark:bg-blue-1  bg-black"
                }  flex items-center rounded-[12px] hover:bg-black group`}
              >
                <Icon className=' mx-[20px] text-[24px]  ' />
                <div className='text-[16px] nav-font font-normal  '>{name}</div>
              </button>
            ))}
          </div>
          <div className='p-[24.5px] text-[16px]  nav-font flex flex-col items-between '>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              href='https://meadow.gitbook.io/docs/'
              className='h-[42px] py-[12px] pr-[16px] hover:text-blue-1 cursor-pointer'
            >
              Docs
            </Link>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              href='https://drive.google.com/drive/folders/1r0gJEzF07XEQ4fGNcLycJUu-BK6uRl-a?usp=share_link'
              className='h-[42px] py-[12px]  hover:text-blue-1 cursor-pointer '
            >
              Brand Kit
            </Link>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              href='https://meadow.gitbook.io/docs/socials-and-links/team'
              className='h-[42px] py-[12px] pr-[16px] hover:text-blue-1 cursor-pointer'
            >
              Team
            </Link>
          </div>
        </div>

        {/*  social media buttons*/}
        <div className='flex flex-col items-center w-[246px] absolute bottom-[30px]  '>
          {/* buttons */}
          <div className='w-[140px] flex justify-around h-[40px] mb-[35px] '>
            {socialMedia.map(({  link, Icon }, i) => (
              <Link
                target='_blank'
                rel='noreferrer noopener'
                href={link}
                key={i}
                className='rounded-full w-[40px] h-[40px] flex items-center justify-center bg-black dark:border-2 dark:border-blue-1 '
              >
                <Icon />
              </Link>
            ))}
          </div>

          <AddressBoard />

          {/* buttons */}
          <div className='w-[246px] text-white h-[110px]  flex flex-col justify-around space-y-[10px]  text-[15px] '>
            <Link href='https://meadowlaunch.com/'>
              <button className='transition dark:text-blue-1 dark:border-2 dark:border-blue-1 duration-700 ease-in-out hover:shadow-lg hover:shadow-white hover:bg-white hover:text-black flex items-center justify-center h-[50px] border-white w-[246px] bg-black rounded-[15px] btn-text '>
                {" "}
                Home
              </button>
            </Link>
            <button
              onClick={openModal}
              className='transition duration-700 ease-in-out hover:shadow-lg hover:shadow-white hover:bg-white hover:text-black flex items-center justify-center h-[50px] bg-blue-1 w-[246px] rounded-[15px]  btn-text '
            >
              {connected ? "Disconnect" : "Connect wallet"}
            </button>
          </div>
        </div>
      </div>
  )
}

export default BigNav