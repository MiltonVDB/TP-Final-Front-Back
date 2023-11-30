import { useForm } from 'react-hook-form'
import { useUser } from '../../ContextManager/UserContext'
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {

  const { register, handleSubmit, formState:{errors} } = useForm()
  const { signin, isAuthenticated, errors: loginErrors } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  },[isAuthenticated])
  

    return (
      <div className='container card col-12 col-md-4 my-5'>

          <i className='bi bi-bank logo-icon me-3'></i>
          <h5 className='logo-name m-0'>Market Center</h5>
  
        <form className='log p-5' onSubmit={handleSubmit( async (values) => { await signin(values)})}>
  
            <label className='contact'>Login</label>

            <div className='y-center my-2'>

                <i className='bi bi-person-fill log-icon mx-2'></i>
      
                <input className='in-log' placeholder='Ingrese su Email' type="email" autoFocus {...register('email', {required: true})}/>
            
            </div>

            {errors.email && (<p>Se requiere un Email</p>)}

            <div className='y-center my-2'>

                <i className="bi bi-lock-fill log-icon mx-2"></i>
      
                <input className='in-log'  placeholder='Ingrese su contraseña' type="password" {...register('contrasena', {required: true})}/>

            </div>

            {errors.contrasena && (<p>Se requiere una contraseña</p>)}

            {loginErrors.map((error, i) => (
              <div key={i}>{error}</div>
            ))}
    
            <button className='buttonDiv mt-3 y-center'  type='submit'>Ingresar</button>
  
        </form>

        <span className='my-3'>No tienes cuenta? <Link to="/register">Registrarse</Link> </span>
        
      </div>
    )
  }



export default LoginPage