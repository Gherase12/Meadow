import React from "react";
import { useQuery } from "react-query";
import { fetchNewsContent } from "../fetchers/news";
import Loading from "./Loading";

function TextParagraph({ newsIndex }) {
  const { isLoading, data } = useQuery(`newsDetail${newsIndex}`, () =>
    fetchNewsContent(newsIndex)
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
      {isLoading ? (
        <div className='w-full h-full flex items-center justify-center '>
          <Loading />
        </div>
      ) : (
        paragraphs?.map((paragraph, index) => (
          <div key={index}>
            <p className='font-bold max-w-[800px]'>{paragraph} </p>
            <br />
          </div>
        ))
      )}
    </div>
  );
}

export default TextParagraph;
