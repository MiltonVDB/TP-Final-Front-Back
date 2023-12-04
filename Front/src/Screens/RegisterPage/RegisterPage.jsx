import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useUser } from '../../ContextManager/UserContext'

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, regisErrors} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/home')
    }, [isAuthenticated])

    return (
        <div className='container card col-12 col-md-8 col-lg-6 col-xl-4 my-4'>
            <form onSubmit={handleSubmit(async (values) => { await signup(values) })} className='text-start p-5'>

                <h3 className='text-center mb-4 fw-bold'>Registrarse</h3>

                <div className='pb-3'>
                    <label>Nombre*:</label>
                    <input className='input w-100' placeholder='Ingrese su nombre' type="text" autoFocus {...register('nombre', { required: true })} />
                    {errors.nombre && (<small className='d-block mt-1 fw-bold c-3'>Se requiere un nombre</small>)}
                </div>

                <div className='pb-3'>
                    <label>Email*:</label>
                    <input className='input w-100' placeholder='Ingrese su Email' type="email" {...register('email', { required: true })} />
                    {errors.email && (<small className='d-block mt-1 fw-bold c-3'>Se requiere un Email</small>)}

                    {regisErrors.map((error, i) => (
                    <small className='d-block mt-1 fw-bold c-3' key={i}>{error}</small>
                ))}
                </div>

                <div className='pb-3'>
                    <label>Contraseña*:</label>
                    <input className='input w-100' placeholder='Ingrese su contaseña' type="password" {...register('contrasena', { required: true })} />
                    {errors.contrasena && (<small className='d-block mt-1 fw-bold c-3'>Se requiere una contraseña</small>)}
                </div>

                <button className='btnui medium mt-4 mx-auto' type='submit'>Registrarme</button>

                <div className='mt-4 pt-2 text-center'>Ya tiene cuenta? <Link to="/login" className='c-1 fw-bold'>Loguearse</Link></div>
            </form>
        </div>
    )
}

export default RegisterPage