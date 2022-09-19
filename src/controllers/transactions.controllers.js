const Logs = require("../helpers/Logs");
const Transaction = require("../models/transactions.model");
module.exports = {
  async store(req, res) {
    try {
      const { valor, categoria, descricao, data } = req.body;

      const newTransaction = await Transaction.create({
        valor,
        categoria,
        descricao,
        data,
      });

      return res.status(200).json(newTransaction);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao criar uma transação.");
    }
  },
  async index(req, res) {
    try {
      const transactions = await Transaction.find().populate("categoria");
      return res.status(200).json(transactions);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao listar transações.");
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { valor, categoria, descricao, data } = req.body;

      const updatedTransaction = await Transaction.findByIdAndUpdate(
        id,
        {
          valor,
          categoria,
          descricao,
          data,
        },
        { new: true }
      );
      return res.status(200).json(updatedTransaction);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao atualizar categoria.");
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteTransaction = await Transaction.findByIdAndDelete(id);
      return res.status(200).json(deleteTransaction);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao atualizar categoria.");
    }
  },
};
