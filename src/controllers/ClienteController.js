const Cliente = require("../models/Cliente");

module.exports = {
  async store(req, res) {
    const { name, email, emailSent, dateSent } = req.body;

    //Verifica se já existe um cliente cadastrado.
    const clientExists = await Cliente.findOne({ email: email });

    if (clientExists) {
      return res.json(clientExists);
    }

    try {
      //Caso não, cria um novo usuário
      const cliente = await Cliente.create({
        name,
        email,
        emailSent,
        dateSent
      });

      return res.json(cliente);
    } catch (error) {
      return res.status(400).send({
        error:
          "Erro ao cadastrar o cliente. Verifique os campos e tente novamente"
      });
    }
  },

  async index(req, res) {
    try {
      const clientes = await Cliente.find();
      if (clientes.length <= 0)
        return res.send({ error: "Não existem clientes cadastrados" });

      if (clientes.length > 0) return res.send({ clientes });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Erro ao listar as clientes, tente novamente" });
    }
  },

  //LISTAGEM ÚNICA
  async indexOne(req, res) {
    try {
      const clientes = await Cliente.findById(req.params.clienteID);

      if (clientes === null)
        return res.send({ error: "Cliente não encontrado" });

      return res.json(clientes);
    } catch (error) {
      return res.status(400).send({ error: "Erro ao Carregar Clientes" });
    }
  },

  async deleteCliente(req, res) {
    try {
      const { clienteDeletar } = req.params.clienteID;

      if (!(await Cliente.findOne({ clienteDeletar })))
        return res.status(400).send({ error: "Cliente não existe" });

      const clientes = await Cliente.findByIdAndRemove(req.params.clienteID);

      return res.json({ success: "Cliente excluido com Sucesso" });
    } catch (error) {
      //console.log(err);
      return res.status(400).send({ error: "Erro ao excluir Cliente" });
    }
  }
};
