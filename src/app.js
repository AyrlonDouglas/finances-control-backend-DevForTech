require("dotenv").config();
const cors = require("cors");
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
app.use(cors());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());
app.use("/categoria", categoriesRoutes);
app.use("/transacao", transactionsRoutes);

const port = process.env.PORT;
app.listen(port, () => logs.success("Aplicação iniciada na porta " + port));

module.exports = app;
