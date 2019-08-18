const express = require("express");

const TestRouter = require("./router-model/test-router");

const server = express();

server.get("/", (req, res) => {
  res.send("It works");
});

server.use(express.json());
server.use("/api/project", TestRouter);

module.exports = server;
