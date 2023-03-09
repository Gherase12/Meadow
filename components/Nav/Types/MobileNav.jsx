import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link  from 'next/link';

function MobileNav({ elements, socialMedia, open, openModal,setOpen, connected }) {
    const router = useRouter()
  const path =  router.pathname;
  return (
    <div
      className={`${
        !open
          ? "fixed right-[100%]"
          : " text-gray-4 fixed top-0 pt-[100px]    left-0 h-screen  w-[100%] px-[29px] nav-container  overflow-y-scroll  flex  flex-col    bg-blue-2    duration-500 ease-in-out z-[100] xl:hidden"
      }  `}
    >
      <AiOutlineClose
        onClick={() => setOpen(false)}
        className=' absolute top-[20px] right-[20px] text-white text-[25px]'
      />
      <div className='     '>
        <div className=' pb-[36px]  h-[276px] flex flex-col justify-between  border-b border-gray-4/50   '>
          {elements.map(({ Icon, name, pagePath }, i) => (
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
              <div className='text-[16px] nav-font font-normal   '>{name}</div>
            </button>
          ))}
        </div>

        <div className='py-[10px] text-[16px] nav-font flex flex-row items-between  justify-around'>
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://meadow.gitbook.io/docs/'
            className='h-[42px] py-[12px]  '
          >
            Docs
          </Link>
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://drive.google.com/drive/folders/1r0gJEzF07XEQ4fGNcLycJUu-BK6uRl-a?usp=share_link'
            className='h-[42px] py-[12px]  '
          >
            Brand Kit
          </Link>
          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://meadow.gitbook.io/docs/socials-and-links/team'
            className='h-[42px] py-[12px]  '
          >
            Team
          </Link>
        </div>
      </div>

      {/* social buttons*/}
      <div className=' flex flex-col items-center w-full    '>
        {/* butoane */}
        <div className='w-[165px] flex justify-around h-[40px] mb-[35px] '>
          {socialMedia.map(({ name, Icon, link }, i) => (
            <Link
              target='_blank'
              rel='noreferrer noopener'
              href={link}
              key={i}
              className='rounded-full w-[40px] h-[40px] flex items-center justify-center bg-black '
            >
              <Icon />
            </Link>
          ))}
        </div>

        {/* buttons */}
        <div className='   flex flex-col justify-around space-y-[10px] w-full   '>
          <button
            onClick={() => {
              openModal();
              setOpen(false);
            }}
            className=' w-full md:max-w-[200px] flex items-center justify-center h-[50px] text-white bg-blue-1  rounded-[15px]  btn-text '
          >
            {connected ? "Disconnect" : "Connect wallet"}
          </button>
          <Link href='https://meadowlaunch.com/'>
            <button className=' bg-black  flex items-center justify-center h-[50px] md:max-w-[200px] w-full rounded-[15px] btn-text '>
              {" "}
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
