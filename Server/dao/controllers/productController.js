const Product = require("../models/productModel")


const createProduct = async (product) => {
    const newProduct = new Product(product)
    console.log(product)
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

const getProductById = async (pid) => {
    try{
        const findProductById = await Product.findById(pid)

        if(findProductById){
            return {ok: true, findProductById}
        }else{
            return {error: 'Producto no encontrado'}
        }

    }catch(err){
        return {error: 'id no valido'}
    }
    
}

const updateProduct = async (stock, pid) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(pid, {stock: stock}, {new: true})

        if(updatedProduct){
            return {ok: true, updatedProduct}
        }else{
            return {error: 'Producto no encontrado'}
        }

    }catch(err){
        return {error: 'id no valido'}
    }
    
}

const deleteProduct = async (pid) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(pid)
    
        if(deletedProduct){
            return {ok: true, deletedProduct}
        }else{
            return {error: 'Producto no encontrado'}
        }
    }catch(err){
        return {error: 'id no valido'}
    }
}


module.exports = {createProduct, getProducts, getProductById, updateProduct, deleteProduct}