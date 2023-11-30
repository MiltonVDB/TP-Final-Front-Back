const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    tag: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    descripcion: {type: String, required: true},
    thumbnail: {type: String, required: true}
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product