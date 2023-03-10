import React, {useState} from "react";
import Image from "next/image";
import { ICOprojects } from '../data/ICOprojects';
import PageAnimation from './../components/Golbal/PageAnimation';
import Card from './../components/Index/Card';

const Launchpad = () => {
  const [filter, setFilter] = useState("All")
  const filters = ["All", "Ongoing", "Upcoming", "Ended IDO"];

  return (
    <PageAnimation>
      <div className='flex flex-col md:flex-row md:max-w-[1440px] mx-auto my-auto w-full'>
        <div className='w-full md:mb-[11px] relative px-[30px] md:px-0'>
          {/* big object */}
          <div className='absolute left-[70vw] lg:left-[625px] lg:-top-[30px] -top-[70px] z-20 w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px] bg-image-1 scale-[1.5]'>
            <Image src={"/object-3.webp"} fill alt='big-object' />
          </div>
          {/* small object */}
          <div className='fixed left-[100px] lg:left-[925px] lg:-top-[230px] top-0 w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px] -z-[10]'>
            <Image src={"/object-2.webp"} fill className='object-contain' alt='big-object' />
          </div>

          <p className='mt-[23px] md:mt-0 h-[23px] font-bold text-[18px] text-gray mb-[22.64px]'>Explore IDOs</p>
          <div className='z-20 lg:mb-[17.26px] w-[347.89px] h-[68px] text-[5vw] lg:w-[708.49px] lg:h-[102px] lg:text-[41px] font-extrabold leading-[34px] lg:leading-[51px]'>
            <h1 className='text-black text-[32px] lg:text-[41px] dark:text-blue-1'>Launchpad</h1>
          </div>
          <ul className='mb-[25px] items-center font-black text-[15px] lg:text-[16px] leading-[24px] h-[38px] md:w-[408px] flex justify-between'>
            {filters.map((l) => (
              <li key={l} onClick={()=>setFilter(l)} className={`${l == filter ? "bg-white dark:bg-black" : ""} hover:shadow-lg cursor-pointer hover:bg-white dark:hover:bg-black px-[17px] py-[7px] rounded-full  dark:text-blue-1`}>{l}</li>
            ))}
          </ul>

          <div className='overflow-y-scroll gap-[15px] h-[600px] lg:h-[700px] justify-items-center scrollbar-hide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4'>
            {filter == "All" && ICOprojects.map(({ name, alocation, twitter, website, discord, shortDesc, role }, i) => (
              <Card key={i} name={name} alocation={alocation} role={role} website={website} shortDesc={shortDesc} discord={discord} twitter={twitter} i={i} />
            ))}
          {
            filter == "Ongoing" &&
            ICOprojects.map(({ name, alocation, twitter, website, discord, shortDesc, role }, i) => ( i != 0 && (
              <Card key={i} name={name} alocation={alocation} role={role} website={website} shortDesc={shortDesc} discord={discord} twitter={twitter} i={i} />)
            ))
          }
          {
            filter == "Upcoming" &&
            ICOprojects.filter(proj => proj.role == "Private").map(({ name, alocation, twitter, website, discord, shortDesc, role }, i) => (
              <Card key={i} name={name} alocation={alocation} role={role} website={website} shortDesc={shortDesc} discord={discord} twitter={twitter} i={i} />
            ))
          }
          {
            filter == "Ended IDO" &&
            (<></>)
          }

          </div>
        </div>
      </div>
    </PageAnimation>
  );
};

export default Launchpad;