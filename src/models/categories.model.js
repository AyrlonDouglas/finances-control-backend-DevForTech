const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const CategorySchema = new Schema({
  tipo: { type: String, require: true },
  nome: { type: String, required: true },
});

module.exports = mongoose.model("categories", CategorySchema);
