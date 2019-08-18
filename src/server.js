const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const server = express();

mongoose.connect(
  "mongodb+srv://fabricio_admin:1RKlkiDcbDSKz81G@newsletter-unxja.mongodb.net/newsletter?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  return console.log("Newsletter started at port 3333 ...");
});
