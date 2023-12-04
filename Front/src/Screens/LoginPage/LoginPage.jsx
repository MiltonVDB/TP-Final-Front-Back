import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useUser } from '../../ContextManager/UserContext'
import { useEffect } from 'react'

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signin, isAuthenticated, loginErrors } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/home')
    }, [isAuthenticated])

    return (
        <div className='container card col-12 col-md-8 col-lg-6 col-xl-4 my-4'>
            <form onSubmit={handleSubmit(async (values) => { await signin(values) })} className='text-start p-5'>

                <h3 className='text-center mb-4 pb-3 fw-bold'>Log In</h3>

                <div className='pb-2'>
                    <div className='y-center my-2'>
                        <i className='bi bi-person-fill me-3 my-0 h4 c-1'></i>
                        <input className='input w-100' placeholder='Ingrese su Email' type="email" autoFocus {...register('email', { required: true })} />
                    </div>
                    {errors.email && (<small className='d-block mt-1 fw-bold c-3'>Se requiere un Email</small>)}
                </div>

                <div className='pb-2'>
                    <div className='y-center my-2'>
                        <i className="bi bi-lock-fill me-3 my-0 h4 c-1"></i>
                        <input className='input w-100' placeholder='Ingrese su contraseña' type="password" {...register('contrasena', { required: true })} />
                    </div>
                    {errors.contrasena && (<small className='d-block mt-1 fw-bold c-3'>Se requiere una contraseña</small>)}
                </div>

                {loginErrors.map((error, i) => (
                    <small className='d-block mt-1 fw-bold c-3' key={i}>{error}</small>
                ))}

                <button className='btnui medium mt-4 mx-auto' type='submit'>Ingresar</button>

                <div className='mt-4 pt-2 text-center'>No tienes cuenta?<Link to="/register" className='c-1 fw-bold'>Registrarse</Link></div>
            </form>
        </div>
    )
}

export default LoginPage