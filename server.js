if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;
const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const url = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`;
  axios({
    url: url,
    responseType: "json"
  }).then(data => res.json(data.data.currently));
});

// app.get("/chuckNorris", async (req, res, next) => {
//   const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
//   res.send(data);
// });

app.listen(3000, () => {
  console.log("Server Started");
});

module.exports = app;
