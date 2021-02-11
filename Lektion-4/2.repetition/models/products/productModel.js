const mongodb = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(500).json(error))   
}

exports.getOneProduct = (req, res) => {
    Product.find( { _id: req.params.id })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))  
}

exports.createProduct = (req, res) => {
    Product.find( { name: req.body.name } )
    .then(exists)
    }