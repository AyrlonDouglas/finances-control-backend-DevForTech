const Logs = require("../helpers/Logs");
const Category = require("../models/categories.model");
module.exports = {
  async store(req, res) {
    try {
      const { tipo, nome } = req.body;

      const newCategory = await Category.create({ tipo, nome });

      return res.status(200).json(newCategory);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao criar uma categoria.");
    }
  },
  async index(req, res) {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao listar categorias.");
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, tipo } = req.body;

      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        {
          nome,
          tipo,
        },
        { new: true }
      );
      return res.status(200).json(updatedCategory);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao atualizar categoria.");
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteCategory = await Category.findByIdAndDelete(id);
      return res.status(200).json(deleteCategory);
    } catch (error) {
      Logs.error("Ocorreu um erro " + error.message);
      return res.status(500).json("Ocorreu um erro ao atualizar categoria.");
    }
  },
};
