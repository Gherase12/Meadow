import React from "react";
import LaunchpadCard from "./../components/LaunchpadCard";
import Image from "next/image";
import { projects } from "./../data/projects";

import PageAnimation from "./../components/PageAnimation";

function Launchpad() {
  const filters = ["All", "Ongoing", "Upcoming", "Ended IDO"];
  return (
    <PageAnimation>
      <div className=' lg:h-[947.31px]  overflow-hidden   w-full flex md:max-w-[1440px]   overflow-x-hidden  md:space-x-[62px] mx-auto my-auto  '>
        <div className='    w-full md:mb-[11px] relative px-[30px]  md:px-0  '>
          {/* big object */}
          <div className='absolute left-[70vw] lg:left-[625px] lg:-top-[30px] -top-[70px] w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px]  bg-image-1 scale-[1.5]   '>
            <Image src={"/object-3.svg"} fill alt='big-object' />
          </div>
          {/* small object */}
          <div className='fixed left-[100px] lg:left-[925px] lg:-top-[140px] top-0  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px]    '>
            <Image src={"/object-2.svg"} fill alt='big-object' />
          </div>

          <p className='mt-[23px] md:mt-0  h-[23px] font-extrabold text-[17px] text-gray mb-[22.64px] '>
            Explore IDOs
          </p>
          <div className=' z-20   lg:mb-[17.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px]  lg:h-[102px] lg:text-[41px] font-black leading-[34px] lg:leading-[51px]  '>
            <h1 className='text-black text-[32px] lg:text-[41px] '>Launchpad</h1>
          </div>
          <ul className='mb-[21px] items-center max-[375px]:text-[12px] font-black leading-[24px] h-[38px] lg:w-[368px] flex justify-between '>
            {filters.map((l, i) => (
              <li key={i} className=" cursor-pointer font-extrabold max-[375px]:pl-[5px]" >{l}</li>
            ))}
          </ul>

          <div className='overflow-y-scroll gap-[15px] h-[600px] lg:h-[700px]  scrollbar-hide    grid grid-cols-1 lg:grid-cols-3 '>
            {projects.map(({ name, img }, i) => (
              <LaunchpadCard key={i} name={name} img={img} />
            ))}
          </div>
        </div>
      </div>
    </PageAnimation>
  );
}

export default Launchpad;
