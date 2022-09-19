const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  valor: { type: Number, require: true },
  categoria: { type: Schema.Types.ObjectId, required: true, ref: "categories" },
  descricao: { type: String, required: false, default: "" },
  data: { type: String, require: true },
});

module.exports = mongoose.model("transactions", TransactionSchema);
