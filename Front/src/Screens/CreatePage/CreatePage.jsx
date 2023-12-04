import { useForm } from 'react-hook-form'
import { useProduct } from '../../ContextManager/ProductContext'
import Swal from 'sweetalert2'

const CreatePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createProduct } = useProduct()

    const onSubmit = handleSubmit(async (values) => {
        await createProduct(values)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto Creado',
            showConfirmButton: false,
            timer: 2000,
        })
        window.location.reload('/')
    })

    return (
        <div className='container card col-12 col-md-8 col-lg-6 col-xl-4 my-4'>
            <form className='text-start p-5' onSubmit={onSubmit}>

                <h3 className='text-center mb-4 pb-3 fw-bold'>Nuevo Producto</h3>

                <div className='pb-3'>
                    <label>Nombre:</label>
                    <input className='input w-100' placeholder='Nombre del producto' type="text" {...register('nombre', { required: true })} />
                    {errors.nombre && (<p>Se requiere Nombre</p>)}
                </div>

                <div className='pb-3'>
                    <label>Tag:</label>
                    <input className='input w-100' placeholder='Tag del producto' type="text" {...register('tag', { required: true })} />
                </div>

                <div className='pb-3'>
                    <label>Precio:</label>
                    <input className='input w-100' placeholder='Precio' type="number" {...register('precio', { required: true })} />
                </div>

                <div className='pb-3'>
                    <label>Stock:</label>
                    <input className='input w-100' placeholder='Stock' type="number" {...register('stock', { required: true })}></input>
                </div>

                <div className='pb-3'>
                    <label>Descripcion:</label>
                    <textarea className='input w-100' placeholder='Descripcion' type="text" {...register('descripcion', { required: true })}></textarea>
                </div>

                <div className='pb-3'>
                    <label>Imagen:</label>
                    <input className='input w-100' placeholder='Thumbnail' type="text" {...register('thumbnail', { required: true })}></input>
                </div>

                <button className='btnui medium mt-4 mx-auto' type='submit'>Cargar Producto</button>

            </form>
        </div>
    )
}

export default CreatePage