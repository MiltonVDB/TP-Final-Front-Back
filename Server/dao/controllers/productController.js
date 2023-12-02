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

const getProductById = async (id) => {
    try{

        const findProductById = await Product.findById(id)

        if(findProductById){
            return {ok: true, findProductById}
        }else{
            return {error: 'Producto no encontrado'}
        }

    }catch(err){

        return {error: 'id no valido'}

    }
    
}

const updateProduct = async (stock, id) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, {stock: stock}, {new: true})

        if(updatedProduct){
            return {ok: true, updatedProduct}
        }else{
            return {error: 'Producto no encontrado'}
        }

    }catch(err){
        return {error: 'id no valido'}
    }
    
}

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
    
        if(!deletedProduct)  return res.status(404).json({ message: 'Producto no encontrado' })
        
        return res.sendStatus(204)
        
    }catch(err){
        return {error: 'id no valido'}
    }
}


module.exports = {createProduct, getProducts, getProductById, updateProduct, deleteProduct}