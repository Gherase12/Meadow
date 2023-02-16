const axios = require("axios");

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      break;
    case "POST":
      const input = JSON.parse(req.body);
      console.log(input)

      try {
        const response = await axios
          .post("https://grandsoft.ro/api/anv", {
            ak: process.env.MEADOW_API_KEY,
            wallet: input.wallet,
            news_id: input.news_id,
            type:input.type
          })
          .then((response) => {
            console.log(response.data)
            res.status(200).json({ data: response.data });

          });
      } catch (err) {
        // console.log(err)
      }

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
