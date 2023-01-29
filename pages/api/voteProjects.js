const axios = require("axios");

export default async function handler(req, res) {
  const { method } = req;
  
  switch (method) {
    case "GET":
      

      // try {
      //   const response = await axios.post(
      //     "https://grandsoft.ro/api/pv?w=" + input.wallet,
      //     {
      //       ak: process.env.MEADOW_API_KEY,
            
      //     },
      //     {
      //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //     }
      //   );
      //   res.status(200).json({ projects: response.data.projects });
      // } catch (err) {
      //   console.log(err);
      // }
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
      } catch (err) {
        console.log(err);
      }

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
