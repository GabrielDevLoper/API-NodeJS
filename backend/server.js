const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");


//Iniciando o app
const app = express();
//Permite que eu possa enviar dados para o banco de dados via JSON.
app.use(express.json());
//Faz com que a nossa API seja acessada publicamente.
app.use(cors());

//Iniciando o banco de dados
mongoose.connect("mongodb://localhost:27017/ProdutosNodeApi", 
{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
});
requireDir("./src/models");

// rotas
app.use("/api", require("./src/Routes"));

app.listen(3001);