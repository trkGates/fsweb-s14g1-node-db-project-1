const express = require("express");
const server = express();
const accountsRouter = require("./accounts/accounts-router");
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>SERVER AKTİF</h2>`);
});
server.use("/api/accounts", accountsRouter);

module.exports = server;
