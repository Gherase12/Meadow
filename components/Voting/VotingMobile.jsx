import React from "react";
import Link from "next/link";
import Image from "next/image";
import VoteProjectCard from "./VoteProjectCard";
import Loading from "../Loading";
import { fetchProjects } from "../../fetchers/projects";
import { useQuery } from "react-query";

function VotingMobile() {
  const { isLoading, isError, data, error } = useQuery(
    "projects",
    fetchProjects
  );
  return (
    <div className='h-[240px] mb-[150px] md:hidden '>
      {/* upper section */}
      <div className='w-full flex justify-between mb-[13px]'>
        <div className='w-[208px] h-[24px] font-extrabold text-[22px] leading-[24px] '>
          Vote for projects
        </div>
        <Link href='/voting' className='cursor-pointer flex space-x-[11px] '>
          <p className='text-[15px] leading-[24px] text-blue-1 font-bold max-[375px]:text-[12px]'>
            View
          </p>
          <Image
            loading='lazy'
            src='/arrow-sm.svg'
            width={6}
            height={5}
            alt='arrow icon down small'
          />
        </Link>
      </div>
      {/* card */}
      <div className=' w-full bg-white  rounded-[30px] p-[18px]'>
        {!isLoading ? (
          data
            ?.slice(0, 3)
            .map(({ id, name, img, website, votes, twitter, discord }, i) => (
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
            ))
        ) : (
          <div className='w-full flex justify-center'>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}

export default VotingMobile;
