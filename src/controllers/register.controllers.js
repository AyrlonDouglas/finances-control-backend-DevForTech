const Logs = require("../helpers/Logs");
const Register = require("../models/register.model")

async function storeUser(req, res) {
  const { nome, email, password } = req.body;

  var newUser = new User()
  newUser.nome = nome
  newUser.email = email
  newUser.password = password

  newUser.save(function (err, savedUser) {
    if (err) {
      console.log(err)
      return res.status(500).send()
    }

    return res.status(200).send()
  })
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const checkUser = await Register.findOne({ email: email, password: password }, function (err, user) {
    if (err) {
      console.log(err)
      return res.status(500).send()
    }

    if (!Register) {
      return res.status(404).send()
    }

    return res.status(200).send()
  });
}

module.exports = {
  storeUser, loginUser
};
