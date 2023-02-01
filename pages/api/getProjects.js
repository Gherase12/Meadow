const axios = require("axios");

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      break;
    case "POST":
      const input = JSON.parse(req.body);

      try {
        const response = await axios.post(
          "https://grandsoft.ro/api/pv",
          {
            ak: process.env.MEADOW_API_KEY,
            wallet: input.wallet,
          },
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );

        res
          .status(200)
          .json({
            projects: response.data.data.projects,
            projectVoted: response.data.data.project_id,
          });
      } catch (err) {
        
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
