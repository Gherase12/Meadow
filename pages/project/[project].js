import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import React from "react";
import { ICOprojects } from "./../../data/ICOprojects";
import ProjectActionCard from "../../components/Project/ProjectActionCard";
import ProjectDetails from "../../components/Project/ProjectDetails";


function Project() {
  const router = useRouter();

  console.log(router.query);
  const project = ICOprojects[Number(router.query.project)];
  console.log(project);

  return (
    <div className='  w-screen'>
      {/* small object */}
      <div className='fixed left-[100px] lg:left-[925px] lg:-top-[230px] top-0  w-[233px] h-[233px] lg:w-[466.15px] lg:h-[466.15px] '>
        <Image
          loading='lazy'
          fill
          src={"/object-2.webp"}
          className='object-contain'
          alt='big-object'
        />
      </div>

      {/* big image */}
      <div className='absolute right-0 lg:right-[200px]  top-[140px] lg:top-0 w-[200px] h-[200px] lg:w-[612px] lg:h-[612px] bg-image-1   '>
        <Image
          loading='lazy'
          fill
          src={"/object-1.webp"}
          className='object-contain'
          alt='big-object'
        />
      </div>
      <div className='  relative z-40  lg:h-[947.31px]     w-full      '>
        {/* back button */}
        <button
          onClick={() => router.push("/")}
          className='ml-[20px] lg:ml-0 my-[36px] text-black flex space-x-[9px] items-center  h-[20px]'
        >
          <AiOutlineArrowLeft />
          <div className='text-[17px] font-avenir leading-[23px] font-extrabold'>
            Back
          </div>
        </button>
        {/* project name */}
        <div className=' ml-[20px] lg:ml-0 space-x-[20px] items-center flex  mb-[24px]'>
          <Image
            width={61}
            height={61}
            src={`/projects/${Number(router.query.project)}.png`}
            alt='meadow project'
            className=' rounded-full'
          />
          <h3 className='font-bold font-avenir text-[41px] flex items-center leading-[51px] space-x-5 text-black '>
            <p>{project?.name}</p> 
            <span className={`rounded-full h-10 flex items-center justify-center text-[15px] ${project?.role == "IDO Test" ? "bg-gradient-blue" : "bg-gradient-red" } p-2 `} >
            {project?.role == "IDO Test" ? "IDO Test" : "Private round 1"}
            </span>
            {/* {router.query.project == "1" && "(IDO Test only)"} */}
          </h3>
        </div>
        {/* project description */}
        <div className='  flex flex-col lg:flex-row lg:space-x-[26px] space-y-[26px] lg:space-y-0 '>
          {/* left */}
          <div className='flex flex-col space-y-[26px]  lg:w-[561.65px]'>
            {/* project description */}
            <div className='bg-white rounded-[30px] h-[349px] p-[30px]  '>
              <div className='font-bold text-[28px] leading-[110%] font-avenir mb-[20px]  '>
                Project Summary
              </div>
              <p className=' whitespace-pre-line overflow-y-scroll h-[265px] text-[16px] scrollbar-hide leading-[26px]  font-normal '>
                {project?.desc}
              </p>
            </div>
            {/* project details */}
            <ProjectDetails path={router.query.project} project={project}/>
          </div>
          {/* right */}

          <ProjectActionCard path={router.query.project} project={project} />
        </div>
      </div>
    </div>
  );
}

export default Project;
