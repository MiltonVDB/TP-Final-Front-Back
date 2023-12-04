const Product = require("../models/productModel")

const createProduct = async (product) => {
    const newProduct = new Product(product)
    try{
        const productCreated = await newProduct.save()
        if(productCreated){
            return productCreated
        }
    }catch(err){
        console.error(err)
    }
}

const getProducts = async () => {
    return await Product.find({})
}

module.exports = {createProduct, getProducts}