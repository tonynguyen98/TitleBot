const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

const parseTitle = (body) => {
  // <title> regex courtesy of https://stackoverflow.com/a/13452897/12454586
  let title = body.match(/<title[^>]*>([^<]+)<\/title>/);

  if (!title) {
    throw new Error("Unable to get the title of the webpage");
  }

  return title[1];
};

app.get("/", (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).end("Empty url query");

  // node-fetch package
  fetch(url)
    // parse the response into text
    .then((res) => res.text())
    // use parseTitle function to get title
    .then((resText) => parseTitle(resText))
    // return the title to the request
    .then((title) => res.send(title))
    // catch any errors
    .catch((e) => {
      e.errno === "ENOTFOUND"
        ? res.status(400).end("Bad url query")
        : res.status(500).end(e.message);
    });
});

app.listen(port, () => {
  console.log(`TitleBot scraper listening at http://localhost:${port}`);
});
