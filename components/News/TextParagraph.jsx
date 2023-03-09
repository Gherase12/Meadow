import React from "react";
import { useQuery } from "react-query";


import { motion } from "framer-motion";
import { fetchNewsContent } from './../../fetchers/newsContent';
function TextParagraph({ newsIndex, url }) {

  
  const { isLoading, data } = useQuery(`newsDetail${newsIndex}`, () =>
    fetchNewsContent( url)
  );

  const SpllitInParagraphs = (text) => {
    let paragraphs = [];
    let currentParagraph = "";
    let dotCount = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === ".") {
        dotCount++;
      }
      currentParagraph += char;
      if (dotCount === 5) {
        paragraphs.push(currentParagraph);
        currentParagraph = "";
        dotCount = 0;
      }
    }

    // Add the final paragraph, even if it doesn't have 5 dots
    if (currentParagraph !== "") {
      paragraphs.push(currentParagraph);
    }

    return paragraphs;
  };

  const paragraphs = data && SpllitInParagraphs(data);

  return (
    <div>
      {
        paragraphs?.map((paragraph, index) => (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{  duration: 0.5, delay: 0.8 }}
          key={index}>
            <p className='font-medium text-[18px] text-gray-6 max-w-[800px] text-start'>{paragraph} </p>
            <br />
          </motion.div>)
       
      )}
    </div>
  );
}

export default TextParagraph;
