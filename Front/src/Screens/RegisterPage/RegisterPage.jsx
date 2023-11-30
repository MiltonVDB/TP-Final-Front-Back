import { useForm } from 'react-hook-form'
import { useUser } from '../../ContextManager/UserContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const RegisterPage = () => {

  const { register, handleSubmit, formState:{errors} } = useForm()
  const { signup, isAuthenticated, errors: registerErrors } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  },[isAuthenticated])

  return (
    <div className='container card col-12 col-md-6 my-4'>

      <form className='p-5' onSubmit={handleSubmit( async (values) => { await signup(values)})}>

          <label className='contact'>Registrarse</label>

          {registerErrors.map((error, i) => (
            <div key={i}>{error}</div>
          ))}

          <label className='sub-t'>Nombre*:</label>

          <input className='in-form'  placeholder='Ingrese su nombre' type="text" autoFocus {...register('nombre', {required: true})}/>

          {errors.nombre && (<p>Se requiere un nombre</p>)}

          <label className='sub-t'>Email*:</label>

          <input className='in-form' placeholder='Ingrese su Email' type="email" {...register('email', {required: true})}/>

          {errors.email && (<p>Se requiere un Email</p>)}

          <label className='sub-t'>Contraseña*:</label>

          <input className='in-form'  placeholder='Ingrese su contaseña' type="password" {...register('contrasena', {required: true})}/>

          {errors.contrasena && (<p>Se requiere una contraseña</p>)}

          <button className='buttonDiv mt-3 y-center'  type='submit'>Enviar</button>
          
      </form>

      <span className='my-3'>Ya tiene cuenta? <Link to="/login">Loguearse</Link> </span>
      
    </div>
  )
}

export default RegisterPage