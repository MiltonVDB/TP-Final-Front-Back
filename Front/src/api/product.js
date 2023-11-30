import axios from './axios'

export const getProductsRequest = async () => axios.get('/products/')

export const getProductRequest = async (id) => axios.get('/products/' + id)

export const createProductRequest = async (product) => axios.post('/products', product)

export const updateProductRequest = async (id, stock) => axios.put('/products/' + id , stock)

export const deleteProductRequest = async (id) => axios.delete('/products/' + id)

