const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {

    //Listando todos os produtos
    async ListAllProducts(req, res){
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 10});
        
        return res.json(products);
    },
    //Listando Produto especifico.
    async show(req, res){
        const products = await Product.findById(req.params.id);

        return res.json(products);

    },
    //Adicionando Produto
    async AddProduct(req, res){
        const products = await Product.create(req.body);

        return res.json(products);
    },
    //Removendo Produto
    async DeleteProduct(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
    //Atualizando Produto
    async UpdateProduct(req, res){
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, 
            { new:true });//new:true, retorna o produto atualizado

        return res.json(products);

    }
}