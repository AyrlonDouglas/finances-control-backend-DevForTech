const express = require("express");
const routes = express.Router();
const categoriesControler = require("../controllers/categories.controllers");

routes.post("/", categoriesControler.store);
routes.get("/", categoriesControler.index);
routes.put("/:id", categoriesControler.update);
routes.delete("/:id", categoriesControler.delete);
// routes.put("/:id/update", productsControler.update);
module.exports = routes;
