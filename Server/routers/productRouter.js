const express = require('express')
const { createProduct, getProducts} = require('../dao/controllers/productController')
const { userRequired } = require('../dao/controllers/tokenController')
const Product = require('../dao/models/productModel')
const productRouter = express.Router()


productRouter.get('/', userRequired, async (req, res) => {
    try {
        res.json({ok: true, products: await getProducts()})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

productRouter.post('/', userRequired, async (req, res) => {
    try {
        const {nombre, tag, precio, stock, descripcion, thumbnail} = req.body
        const desc = descripcion.split('\n')
        await createProduct({nombre, tag, precio, stock, descripcion: desc, thumbnail})
        res.json({ok: true, products: await getProducts()})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

productRouter.get('/:id', userRequired, async (req, res) => {
    try {
        const item = await Product.findById(req.params.id)
        if (!item) return res.status(404).json({ message: 'No se encontro el producto' })
        return res.json(item)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

productRouter.delete('/:id', userRequired, async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deletedProduct)  return res.status(404).json({ message: 'Producto no encontrado' })
        return res.sendStatus(204)
    }catch(err){
        return res.status(500).json({ message: error.message })
    }
})

productRouter.put('/', userRequired, async (req, res) => {
    try{
        const {_id, precio, stock} = req.body
        const updateProduct = await Product.findByIdAndUpdate( {_id}, {precio, stock}, {new: true})
        return res.json(updateProduct)
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
})

module.exports = productRouter