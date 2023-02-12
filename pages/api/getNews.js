const axios = require("axios");

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      break;
    case "POST":
     

      try {
        const response = await axios.post(
          "https://grandsoft.ro/api/getStoredNews",
          {
            ak: process.env.MEADOW_API_KEY,
          },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );
         
        res
          .status(200)
          .json({
            news: response.data,
           
          });
      } catch (err) {
        
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
