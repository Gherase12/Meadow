import React from "react";
import Link from "next/link";
import Image from "next/image";
import VoteProjectCard from "./VoteProjectCard";

import { fetchProjects } from "../../fetchers/projects";
import { useQuery } from "react-query";
import { useWallet } from "@suiet/wallet-kit";
import Loading from './../Golbal/Loading';

function VotingMobile() {
  const wallet = useWallet();

  const { isLoading, data } = useQuery("getProjects", () =>
    fetchProjects(wallet?.address)
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
          data?.projects
            ?.sort((a, b) => b.votes - a.votes)
            .slice(0, 3)
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
