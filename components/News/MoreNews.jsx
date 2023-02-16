import React from "react";

import ViewAll from "../Elements/ViewAll";

import MoreNewsCard from "./MoreNewsCard";

import { motion } from "framer-motion";

function MoreNews({ data, isLoading, closeModal, type }) {
 
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={`w-[334px] h-full  hidden  ${ type == "news" && "xl:flex" }  flex-col overflow-y-scroll scrollbar-hide z-20`}   
    >
      <div className='flex justify-between w-full items-center h-[30px] mb-[35px] '>
        <h2 className='text-white text-[24px] font-black  '>
          {type == "news" ? "More news" : "More blogs"}
        </h2>

        <ViewAll closeModal={closeModal} />
      </div>
      {isLoading ? (
        <h1 className='text-white'>Coming soon </h1>
      ) : (
        data?.map(
          ({ id, title, urlToImage, description, author, publishedAt, bullish, bearish }, i) => (
            <MoreNewsCard
            id={id}
              key={i}
              title={title}
              image={urlToImage}
              
              description={description}
              author={author}
              publishedAt={publishedAt}
              bullish={bullish}
              bearish={bearish}
            />
          )
        )
      )}
    </motion.div>
  );
}

export default MoreNews;
