const axios = require("axios");

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

export default async function handler(req, res) {
  const { method } = req;

  let url = `https://newsapi.org/v2/top-headlines?q=crypto&apiKey=${process.env.NEWS_API_KEY}`;

  switch (method) {
    case "POST":
      const pageIndex = req.query.pageIndex;
      let content;
      axios.get(url).then(function (r1) {
        let firstResult = r1.data.articles[pageIndex];

        axios.get(firstResult.url).then(function (r2) {
          let dom = new JSDOM(r2.data, {
            url: firstResult.url,
          });

          let article = new Readability(dom.window.document).parse();

          content = article.textContent;

          res.status(200).json({ content });
        });
      });

      break;
    case "GET":
      try {
        const response = await axios.get("https://cryptonews-api.com/api/v1?tickers=BTC&items=3&page=1&token=jaaxbdhnx3fjn00efj6j1fy8vkzjlcglgn5iiljf");
        res.status(200).json({ news: response.data });
      } catch (error) {
        console.error(error);
      }

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
