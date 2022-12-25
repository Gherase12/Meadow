import React from "react";
import { projects } from "./../data/projects";
import VoteProjectCard from "./../components/VoteProjectCard";
import Image from "next/image";
import PageAnimation from "../components/PageAnimation";

function Voting() {
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
            <h1 className='text-black z-50 text-[32px] lg:text-[41px]'>
              Vote for projects
            </h1>
          </div>
          <div className='px-[30px] md:mx-0 font-avenir text-[16px] text-gray-2 bg-white-1 md:bg-white-1/0 relative font-normal mb-[21px] items-center font-avenir  leading-[24px]  lg:h-[52px] lg:w-[846px] z-40 '>
            Meadow is a decentralized launchpad that will launch projects on the
            Sui Network. The Sui Network will be one of the most unique Layer 1
            networks. Meadow has been in the works for a number of months, and
            it is at this point poised to cause a ruckus in the industry. The
            experience that the Meadow teams bring to the table includes working
            with various prominent incubators as well as top-tier businesses.
            Before launching, all projects on Meadow will go through a rigorous
            process of due diligence to ensure their legitimacy.
          </div>

          {/* voting */}
          <div className=' mt-[28px]  lg:mt-[100px] h-[620px]  bg-white rounded-t-[30px] px-[27px]  pt-[23px] lg:pt-[30px] z-40 relative '>
            <div className='overflow-y-scroll scrollbar-hide   h-[600px] '>
              {projects.map(({ name, img, type, score }, i) => (
                <VoteProjectCard
                  key={i}
                  index={i}
                  name={name}
                  img={img}
                  type={type}
                  score={score}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

export default Voting;
