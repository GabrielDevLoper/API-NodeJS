const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ClientController = require("./controllers/ClientController");


//Rotas para Produtos
routes.get("/products", ProductController.ListAllProducts);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.AddProduct);
routes.put("/products/:id", ProductController.UpdateProduct);
routes.delete("/products/:id", ProductController.DeleteProduct);

//Rotas para Clientes
routes.get("/clients", ClientController.ListAllClients);
routes.get("/clients/:id", ClientController.show);
routes.post("/clients", ClientController.AddClient);
routes.put("/clients/:id", ClientController.UpdateClient);
routes.delete("/clients/:id", ClientController.RemoveClient);


module.exports = routes;