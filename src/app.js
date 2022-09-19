require("dotenv").config();

const express = require("express");
const categoriesRoutes = require("./routes/categories.route");
const transactionsRoutes = require("./routes/transactions.route");
const mongoose = require("mongoose");
const logs = require("./helpers/Logs");
const app = express();

(async function connectDB() {
  try {
    logs.info("Tentando conectar com o banco de dados ...");
    await mongoose.connect(process.env.URI_MONGO);
    logs.success("Conectado!");
  } catch (error) {
    logs.error(`Erro ao conectar com o banco de dados: ${error.message}`);
  }
})();

app.use(express.json());
app.use("/categoria", categoriesRoutes);
app.use("/transacao", transactionsRoutes);

const port = process.env.PORT;
app.listen(port, () => logs.success("Aplicação iniciada na porta " + port));
