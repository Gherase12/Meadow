import React from "react";
import { useRef, useState, useEffect } from "react";
import TextParagraph from "../../components/News/TextParagraph";

import { useRouter } from "next/router";

import { useQuery } from "react-query";
import { fetchNews } from "./../../fetchers/news";

import Image from "next/image";
import MoreNews from './../../components/News/MoreNews';

import MoreNewsPannel from './../../components/News/MoreNewsPannel';

function NewsPage() {
  const containerRef = useRef(null);
  const router = useRouter();
  const newsIndex = router.query.news;
  

  const { isLoading, data } = useQuery("news", fetchNews());

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [newsIndex]);

  return (
    <div className=' w-full max-w-[1400px] flex justify-center mx-auto relative '>

      <div className="fixed inset-0  " >

      <Image src="/news-bg.webp" className="object-cover "  fill />
      </div>
      <MoreNews data={data} isLoading={isLoading} />
      <MoreNewsPannel data={data} isLoading={isLoading} newsIndex={newsIndex} />

     
    </div>
  );
}

export default NewsPage;
