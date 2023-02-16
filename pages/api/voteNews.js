const axios = require("axios");
const FormData = require("form-data");
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      break;
    case "POST":
      const input = JSON.parse(req.body);
      console.log(input);

      try {
        const formData = new FormData();
        formData.append("ak", process.env.MEADOW_API_KEY);
        formData.append("wallet", input.wallet);
        formData.append("news_id", input.news_id);
        formData.append("type", input.type);

        const response = await axios
          .post("https://grandsoft.ro/api/anv", formData, {
            headers: formData.getHeaders(),
          })
          .then((response) => {
            
            res.status(200).json({ data: response.data });
          });
      } catch (err) {
        console.error(err);
      }

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
