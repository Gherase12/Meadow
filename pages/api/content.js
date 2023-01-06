const axios = require('axios');

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');


export default function handler(req, res) {


    
let content


let url = `https://newsapi.org/v2/everything?q=crypto&apiKey=${process.env.NEWS_API_KEY}`


axios.get(url).then(function(r1) {


  let firstResult = r1.data.articles[0];


  axios.get(firstResult.url).then(function(r2) {


    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });


    let article = new Readability(dom.window.document).parse();



    content = article.textContent
    console.log(req.query.id)
    res.status(200).json({ content: content, id:req.query.id });
  })
})
  }