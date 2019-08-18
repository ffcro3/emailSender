const express = require("express");
const routes = express.Router();
const ClienteController = require("./controllers/ClienteController");

//Listar todos os clientes
routes.get("/clientes", ClienteController.index);
//Listar apenas um cliente
routes.get("/clientes/:clienteID", ClienteController.indexOne);
//Cadastrar single cliente
routes.post("/clientes", ClienteController.store);
//Deletar single cliente
routes.delete("/clientes/:clienteID", ClienteController.deleteCliente);

module.exports = routes;
