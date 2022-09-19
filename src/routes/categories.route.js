const express = require("express");
const routes = express.Router();
const categoriesControler = require("../controllers/categories.controllers");

routes.post("/", categoriesControler.store);
routes.get("/", categoriesControler.index);
routes.put("/:id", categoriesControler.update);
routes.delete("/:id", categoriesControler.delete);
module.exports = routes;
