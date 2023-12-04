import { useProduct } from "../../ContextManager/ProductContext"
import { useForm } from 'react-hook-form'



const ProductAdminCard = ({ producto }) => {

    const { deleteProduct, updateProduct } = useProduct()
    const { register, handleSubmit } = useForm()

    const handleOnClick = async () => {
        await deleteProduct(producto._id)
        window.location.replace('/')
    }

    const onSubmit = handleSubmit(async (values) => {
        console.log(producto)
        let precio = producto.precio;
        if (values.precio != 0) {
            precio = values.precio;
        }
        let stock = producto.stock;
        if (values.stock != 0) {
            stock = values.stock;
        }
        await updateProduct(producto._id, precio, stock)
        window.location.replace('/')
    })

    return (
        <div className='col-12 col-md-6 col-lg-4 col-xs-4 mb-5 mb-md-4'>
            <div className='card card-product px-3 h-100'>
                <button onClick={handleOnClick} className="bi bi-x-circle btndelete"></button>
                <img className='img mb-4' src={'/Images/' + producto.thumbnail} alt={producto.nombre} />
                <small className='tag'>{producto.tag}</small>
                <div className='title my-4'>{producto.nombre}</div>
                <form onSubmit={onSubmit}>
                    <small className='y-center justify-content-center mb-2'>Precio: $ <input className="col-5 ms-2" type="number" placeholder={producto.precio} {...register('precio')} /></small>
                    <small className='y-center justify-content-center'>Stock: <input className="col-5 ms-2" type="number" placeholder={producto.stock} {...register('stock')} /></small>
                    <button type='submit' className="btnui small my-3 mx-auto">Actualizar</button>
                </form>
            </div>
        </div>
    )
}

export default ProductAdminCard