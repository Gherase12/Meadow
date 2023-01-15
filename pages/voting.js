import React, { useEffect, useState } from "react";

import VoteProjectCard from "./../components/VoteProjectCard";
import Image from "next/image";
import PageAnimation from "../components/PageAnimation";


function Voting({ projects }) {
  

  return (
    <PageAnimation>
      <div className=' lg:h-[947.31px]   overflow-hidden   w-full flex md:max-w-[1440px] z-40 relative   overflow-x-hidden  md:space-x-[62px] mx-auto my-auto  '>
        <div className='    w-full md:mb-[11px] relative   '>
          {/* sm-image */}
          <div className='fixed rotate-[3.7deg] lg:hidden z-10   left-[60vw]  -top-[40px] w-[233px] h-[233px]    '>
            <Image src={"/object-4-sm.webp"} fill alt='big-object' />
          </div>
          {/* lg-image */}
          <div className='fixed rotate-[3.7deg] hidden lg:flex   right-[50px] top-[80px]   w-[466.15px] h-[466.15px] z-10    '>
            <Image src={"/object-4-md.webp"} fill alt='big-object' />
          </div>
          {/* sphere */}
          <div className='fixed   right-[80px]  top-[25px] lg:scale-[3] lg:-top-[10px] lg:right-[450px] w-[100px] h-[100px] z-10    '>
            <Image src={"/object-6.webp"} fill alt='sphere-object' />
          </div>

          <p className='mx-[30px] md:mx-0 mt-[23px] md:mt-0 relative  h-[23px] font-bold text-[17px] text-gray mb-[22.64px] '>
            Voting
          </p>
          <div className='mx-[30px] md:mx-0 z-30  mb-[15px] lg:mb-[17.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px]  lg:h-[52px]  lg:text-[41px] font-black leading-[34px] lg:leading-[51px]  '>
            <h1 className='text-black relative  text-[32px] lg:text-[41px] z-40'>
            Vote for Projects
            </h1>
          </div>
          <div className='px-[30px] md:px-0   text-[16px] text-gray-2 bg-white-1 md:bg-white-1/0 relative font-normal mb-[21px] items-center font-avenir  leading-[24px]  lg:h-[52px]  lg:w-[546px] z-40 '>
          Users will have the opportunity to vote for their favourite project. The project with the most votes will be incubated by Meadow.
          </div>

          {/* voting */}
          <div className=' mt-[28px] h-[650px]  max-w-[1200px]  lg:h-[720px]  bg-white rounded-t-[30px] px-[27px]  pt-[23px] lg:pt-[30px] z-40 relative '>
            <div className='overflow-y-scroll scrollbar-hide  h-[660px] '>
              {projects.map(
                ({ id, name, img, website, votes, twitter, discord }, i) => (
                  <VoteProjectCard
                    key={i}
                    index={i}
                    docId={id}
                    name={name}
                    img={img}
                    website={website}
                    votes={votes}
                    twitter={twitter}
                    discord={discord}
                    
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

export const getServerSideProps = async () => {
  //get projects
  const res = await fetch(`${process.env.API_URL}/projects`, { method: "GET" });
  const data = await res.json();

  return { props: { projects: data.projects.data } };
};

export default Voting;
