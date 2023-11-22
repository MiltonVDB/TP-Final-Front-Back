const express = require('express')
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../dao/controllers/productController')
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    res.json({ok: true, products: await getProducts()})
})

productRouter.post('/', async (req, res) => {
    const {nombre, precio, stock, descripcion, thumbnail} = req.body
    console.log({nombre, precio, stock, descripcion})
    await createProduct({nombre, precio, stock, descripcion, thumbnail})
    res.json({ok: true, products: await getProducts()})
})

productRouter.delete('/:pid', async (req, res) => {
    const {pid} = req.params
    let result = await deleteProduct(pid)
    if(result.ok){
        return res.status(200).json({ok: true, products: await getProducts(), deleteProduct: result.deletedProduct})
    }else{
        return res.status(404).json({ok: false, error: result.error})
    }
    
})

productRouter.put('/:pid/:stock', async (req, res) => {
    const {pid} = req.params
    const {stock} = req.body
    let result = await updateProduct(stock, pid)
    if(result.ok){
        return res.status(200).json({ok: true, products: result.updatedProduct})
    }else{
        return res.status(404).json({ok: false, error: result.error})
    }
})

productRouter.get('/:pid', async (req, res) => {
    const {pid} = req.params
    let result = await getProductById(pid)
    if(result.ok){
        return res.status(200).json({ok: true, products: result.findProductById})
    }else{
        return res.status(404).json({ok: false, error: result.error})
    }
})

module.exports = productRouter