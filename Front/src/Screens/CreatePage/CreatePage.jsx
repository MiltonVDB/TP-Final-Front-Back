import { useForm } from 'react-hook-form'
import { useProduct } from '../../ContextManager/ProductContext'
import Swal from 'sweetalert2'

const CreatePage = () => {

  const { register, handleSubmit, formState:{errors} } = useForm()
  const {createProduct} = useProduct()

  const onSubmit = handleSubmit(async (values) => {

    await createProduct (values)

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
    <div className='container card col-12 col-md-6 my-4'>

      <form className='p-5' onSubmit={onSubmit}>

          <label className='contact'>Nuevo Producto</label>

          <label className='sub-t'>Nombre:</label>

          <input className='in-form' placeholder='Nombre del producto' type="text" {...register('nombre', {required: true})}/>

          {errors.nombre && (<p>Se requiere Nombre</p>)}

          <label className='sub-t'>Tag:</label>

          <input className='in-form' placeholder='Tag del producto' type="text" {...register('tag', {required: true})}/>

          <label className='sub-t'>Precio:</label>

          <input className='in-form' placeholder='Precio' type="number" {...register('precio', {required: true})}/>

          <label className='sub-t'>Stock:</label>

          <input className='in-form' placeholder='Stock' type="number" {...register('stock', {required: true})}></input>

          <label className='sub-t'>Descripcion:</label>

          <textarea className='te-form' placeholder='Descripcion' type="text" {...register('descripcion', {required: true})}></textarea>

          <label className='sub-t'>Imagen:</label>

          <input className='in-form' placeholder='Thumbnail' type="text" {...register('thumbnail', {required: true})}></input>

          <button className='buttonDiv mt-3 y-center'  type='submit'>Cargar Producto</button>
          

      </form>
      
    </div>
  )
}

export default CreatePage