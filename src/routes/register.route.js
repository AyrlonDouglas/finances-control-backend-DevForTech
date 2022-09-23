const express = require("express");
const routes = express.Router();
const { storeUser, loginUser } = require("../controllers/register.controllers")

routes.post("/register", storeUser);
routes.post("/login", loginUser);

module.exports = routes;