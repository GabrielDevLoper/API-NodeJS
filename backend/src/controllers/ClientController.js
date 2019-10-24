const mongoose = require("mongoose");

const Client = mongoose.model("Client");

module.exports = { 
    async ListAllClients(req, res){
        const {page = 1} = req.query;
        const clients = await Client.paginate({}, {page, limit:10});

        return res.json(clients);
    },
    async show(req, res){
        const clients = await Client.findById(req.params.id);

        return res.json(clients);
    },
    async AddClient(req, res){
        const clients = await Client.create(req.body);

        return res.json(clients);
    },
    async RemoveClient(req, res){
      await Client.findByIdAndRemove(req.params.id);
      
      return res.send();
    },
    async UpdateClient(req, res){
        const clients = await Client.findByIdAndUpdate(req.params.id , req.body , {new: true});

        return res.json(clients);
    }
}