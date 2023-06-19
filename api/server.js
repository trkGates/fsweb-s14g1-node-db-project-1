const express = require("express");
const server = express();
const accountsRouter = require("./accounts/accounts-router");
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>SERVER AKTİF</h2>`);
});
server.use("/api/accounts", accountsRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: "Something went wrong in the accounts router",
    message: err.message,
    stack: err.stack,
  });
});
module.exports = server;
