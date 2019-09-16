const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = res.query;
        //get all products from database (find())
        //paginate(), first parameter is query conditions (where...)
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    async store(req, res) {
        //Create product
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async update(req, res) {
        //new: true, means that I want to return the updated product to the product variable
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        //return success
        return res.send();
    }
}