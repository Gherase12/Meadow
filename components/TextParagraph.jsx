
import React from 'react'

function TextParagraph(text) {
  const paragraphs = text.text.split('\n')

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <div key={index} >
            
        <p >{paragraph} </p><br/>
            </div>
      ))}
    </div>
  )
}

export default TextParagraph