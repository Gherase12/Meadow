const axios = require("axios");

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      break;
    case "POST":
      const input = JSON.parse(req.body);
      
      try {
        const response = await axios
          .post("https://grandsoft.ro/api/vote", {
            ak: process.env.MEADOW_API_KEY,
            wallet: input.wallet,
            pid: input.pid,
          })
          .then((response) => {
            res.status(200).json({ data: response.data });
          });
      } catch (err) {}

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
