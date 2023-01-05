import React from "react";

import VoteProjectCard from "./../components/VoteProjectCard";
import Image from "next/image";
import PageAnimation from "../components/PageAnimation";
import {prisma} from './../lib/prisma';


function Voting({partner}) {
  

  return (
    <PageAnimation>
      <div className=' lg:h-[947.31px]   overflow-hidden   w-full flex md:max-w-[1440px] z-40 relative   overflow-x-hidden  md:space-x-[62px] mx-auto my-auto  '>
        <div className='    w-full md:mb-[11px] relative   '>
          {/* sm-image */}
          <div className='fixed rotate-[3.7deg] lg:hidden z-10   left-[60vw]  -top-[40px] w-[233px] h-[233px]    '>
            <Image src={"/object-4-sm.svg"} fill alt='big-object' />
          </div>
          {/* lg-image */}
          <div className='fixed rotate-[3.7deg] hidden lg:flex   right-[50px] top-[140px]   w-[466.15px] h-[466.15px] z-10    '>
            <Image src={"/object-4-md.svg"} fill alt='big-object' />
          </div>
          {/* sphere */}
          <div className='fixed   right-[80px]  top-[25px] lg:scale-[3] lg:-top-[10px] lg:right-[450px] w-[100px] h-[100px] z-10    '>
            <Image src={"/object-6.svg"} fill alt='sphere-object' />
          </div>

          <p className='mx-[30px] md:mx-0 mt-[23px] md:mt-0 relative  h-[23px] font-extrabold text-[17px] text-gray mb-[22.64px] '>
            Voting
          </p>
          <div className='mx-[30px] md:mx-0 z-30   lg:mb-[17.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px]  lg:h-[102px] lg:text-[41px] font-black leading-[34px] lg:leading-[51px]  '>
            <h1 className='text-black relative  text-[32px] lg:text-[41px] z-40'>
              Most Engange Community on SUI
            </h1>
          </div>
          <div className='px-[30px] md:mx-0  text-[16px] text-gray-2 bg-white-1 md:bg-white-1/0 relative font-normal mb-[21px] items-center font-avenir  leading-[24px]  lg:h-[52px]  lg:w-[846px] z-40 '>
          In this section each community can also support the weekly project. To be able to vote you need to connect your SUI Wallet.
          </div>

          {/* voting */}
          <div className=' mt-[28px] h-[650px]   lg:h-[720px]  bg-white rounded-t-[30px] px-[27px]  pt-[23px] lg:pt-[30px] z-40 relative '>
            <div className='overflow-y-scroll scrollbar-hide  h-[660px] '>
              {partner?.map(({ id, name,  image, website,votes, twitter, discord }, i) => (
                <VoteProjectCard
                  key={i}
                  index={i}
                  docId={id}
                  name={name}
                  img={image}
                  website={website }
                  votes={votes}
                  twitter={twitter }
                  discord={discord }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}


export const getServerSideProps = async () => {
  const partner = await prisma.partner.findMany()
  return { props: { partner } }
}

export default Voting;
