const express = require("express");
const routes = express.Router();
const transactionsControler = require("../controllers/transactions.controllers");

routes.post("/", transactionsControler.store);
routes.get("/", transactionsControler.index);
routes.put("/:id", transactionsControler.update);
routes.delete("/:id", transactionsControler.delete);
module.exports = routes;
