import { useParams } from "react-router-dom"
import { useProduct } from "../../ContextManager/ProductContext"
import { useForm } from 'react-hook-form'
import { useState } from "react"


const ProductAdminCard = ({producto}) => {

    const {deleteProduct, updateProduct} = useProduct()
    const {register, handleSubmit} = useForm()
    const [precio, setPrecio] = useState()
    const [stock, setStock] = useState()
    

    const handleOnClick = async () => {

        await deleteProduct(producto._id)

        window.location.replace('/')
    }

    const onSubmit = handleSubmit(async (values) => {

        if(values.precio != 0){
            setPrecio(values.precio)
        }else{
            setPrecio(producto.precio)
        }

        if(values.stock != 0){
            setStock(values.stock)
        }else{
            setStock(producto.stock)
        }

        console.log(values.precio)

        console.log(producto.precio)

        console.log(precio)

        console.log(stock)

        console.log(producto._id)


        await updateProduct(producto._id, precio, stock)

        /* window.location.replace('/') */
    
    })

  return (
    <div className='col-12 col-md-6 col-lg-4 col-xs-4 mb-5 mb-md-4'>
            <div  className='card card-product px-3'>
                <button onClick={() => handleOnClick()}><i className="bi bi-x-circle"></i></button>
                <img className='img mb-4' src={'/Images/' + producto.thumbnail} alt={producto.nombre} />
                <small className='tag'>{producto.tag}</small>
                <div className='title my-4'>{producto.nombre}</div>
                <form action="" onSubmit={onSubmit}>
                    <small className='price my-0'>Precio: $ <input type="number" placeholder={producto.precio} {...register('precio')}/></small>
                    <small className='price my-0'>Stock: <input type="number" placeholder={producto.stock} {...register('stock')}/></small>
                    <button>Actualizar</button>
                </form>
            </div>
        </div>
  )
}

export default ProductAdminCard