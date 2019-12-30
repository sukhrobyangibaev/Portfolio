const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app.prepare().then(() => {
  const server = express();

  server.get("/", function(req, res) {
    res.send("Hello World!");
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Server is on localhost:${PORT}`);
  });
});
