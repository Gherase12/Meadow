import React from 'react'


import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { blogs } from './../../utils/blog';

function BlogPannel({closeModal, newsIndex}) {
    const {titles, texts} = blogs[newsIndex]


  return (
    <div className=" w-full md:max-w-[883px] mx-auto  relative  overflow-y-scroll   scrollbar-hide " >

    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='  space-x-[30px]     xl:pt-0    flex  bg-white lg:rounded-[45px]   pr-0 overflow-hidden lg:mb-[60px]  '
    >
      {/* new */}
      <div className=' lg:pt-[50px]  flex-1 overflow-y-scroll scrollbar-hide items-center flex flex-col  w-screen lg:w-auto overflow-x-hidden    '>
        {/* image container */}

        <div className='h-[400px] md:h-[400px] w-[800px]  relative   '>
          
            <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
              src={
               `/blogs/img-${newsIndex +1}.webp`
              }
              className='object-cover h-[400px]  md:h-[400px] w-[800px]  md:rounded-[30px]'
            />
        

        </div>
        {/* info */}
        <div className='flex flex-col items-start  '>
          <div className=' pl-[20px] md:pl-0  w-full md:w-[800px] flex flex-start'>
            <div
            onClick={closeModal}
              
              className='cursor-pointer flex space-x-[11px] mt-[40px]   '
            >
              <Image
                loading='lazy'
                src='/arrow-sm.svg'
                className='rotate-180'
                width={6}
                height={5}
                alt='arrow icon down small'
              />
              <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px]'>
                Back to blogs
              </p>
            </div>
          </div>
          {/* title */}
          <motion.h2  
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-[30px] font-bold  leading-[119%] max-w-[800px] md:text-[42px] my-[30px] text-start   px-[20px]'>
            {titles[0]}
          </motion.h2>
          {/* pharagraphs */}
         <motion.p
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.5 }}
         className="font-medium text-[18px] text-gray-6 max-w-[800px] text-start px-[20px]"
         >

            {texts[0]}

         </motion.p>
              {[...Array(4)].map((_, i)=>(
                <div key={i} >

                    <motion.h3 
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-[20px] font-bold  leading-[119%] max-w-[800px] md:text-[30px] my-[30px] text-start   px-[20px]'> {titles[i + 1] }</motion.h3>
                      <motion.p className="font-medium text-[18px] text-gray-6 max-w-[800px] text-start lg:mb-[20px] px-[20px] text-wrap ">  {texts[i + 1]?.replace(/\n/g, " ")}</motion.p>
                </div>
              ))}

                {/* <div className="flex px-[20px] space-x-[10px] mt-[10px] " >
                    <div className="flex-1 ">

                Official link:
                    </div>
              <Link  target='_blank' rel='noreferrer noopener' className="text-gray-2 hover:text-blue-1 font-bold "  href="https://meadowlaunch.medium.com/revenue-models-sustainability-c070e7929fa5" >  https://meadowlaunch.medium.com/revenue-models-sustainability-c070e7929fa5  </Link>
                </div> */}
         

          
        </div>
      </div>
    
    </motion.div>
    </div>
  )
}

export default BlogPannel