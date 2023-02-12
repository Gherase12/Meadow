const axios = require("axios");
const getUuid = require("uuid-by-string");

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const { url } = req.query;

      let content;
      axios.get(url).then(function (r2) {
        let dom = new JSDOM(r2.data, {
          url: url,
        });

        let article = new Readability(dom.window.document).parse();

        content = article.textContent;

        res.status(200).json({ content });
      });
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
