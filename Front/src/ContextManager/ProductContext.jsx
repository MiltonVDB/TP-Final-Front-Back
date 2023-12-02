import { createContext, useContext, useState } from 'react'
import { getProductsRequest, getProductRequest, createProductRequest, updateProductRequest, deleteProductRequest } from '../api/product'

const ProductContext = createContext()

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error("useProduct debe estar dentro de ProductProvider")
  return context
}

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])


  const getProducts = async () => {

    try {
      
      const res = await getProductsRequest()
      
      setProducts(res.data.products)

    } catch (error) {

      console.log(error)
      
    }


  }


  const getProductById = async (id) => {

    try {

      const res = await getProductRequest(id)

      return res.data

    } catch (error) {

      console.error(error)

    }

  }


  const createProduct = async (product) => {

    try {

      const res = await createProductRequest(product)

      console.log(res.data.products)

    } catch (error) {

      console.log(error)

    }

  }


  const updateProduct = async (id, precio, stock) => {

    try {

      await updateProductRequest(id, precio, stock)

    } catch (error) {

      console.error(error)

    }
  }


  const deleteProduct = async (id) => {
    try {

      const res = await deleteProductRequest(id)

      if (res.status === 204) setProducts(products.filter((product) => product.id !== id))

    } catch (error) {

      console.log(error)
    }
  }


  const getProductCartById = (id) => cart.find(producto => producto.id === Number(id))


  const isInCart = (id) => cart.some(producto => producto.id === Number(id))


  const addProductCart = (id, quantity) => {

    if (isInCart(id)) {

      setCart(cart.map(product => {

        if (product.id == id) {

          product.quantity = quantity

        }

        return product

      }))

    } else {

      setCart([...cart, { ...getProductById(id), quantity: quantity }])

    }

  }


  const getTotal = () => {

    let total = 0

    cart.forEach(product => total += product.precio * product.quantity)

    return total
  }




  return (
    <ProductContext.Provider value={{ getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductCartById, isInCart, addProductCart, getTotal, products, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  )


}

