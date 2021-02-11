const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.createProduct = (req, res) => {
    Product.find({ name: req.body.name })
    .then(exists => {
        if(exists > 0) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name already exists. Please update product instead'
            })
        }

        const product = new Product({

            name: req.body.name,
            short: req.body.short,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image
        })



    })
}