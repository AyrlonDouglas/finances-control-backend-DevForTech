const express = require("express");
const routes = express.Router();
const registerControler = require("../controllers/register.controllers")

routes.post("/register", registerControler.store);
routes.get("/", categoriesControler.index);



module.exports = routes;
