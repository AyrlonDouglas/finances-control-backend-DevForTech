const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("register", RegisterSchema);
