import React from 'react'

const RegisterPage = () => {
  return (
    <div className='container card col-12 col-md-6 my-4'>

      <form className='p-5' action="/register" method="POST" >

          <label className='contact'>Registrarse</label>

          <label className='sub-t'>Nombre*:</label>

          <input className='in-form'  placeholder='Ingrese su nombre' type="text" required/>

          <label className='sub-t'>Email*:</label>

          <input className='in-form' placeholder='Ingrese su Email' type="email" required/>

          <label className='sub-t'>Contraseña*:</label>

          <input className='in-form'  placeholder='Ingrese su contaseña' type="password" required/>

          <button className='buttonDiv mt-3 y-center'  type='submit'>Enviar</button>
          
      </form>

      <span className='my-3'>Ya tiene cuenta? <a href="/login">Loguearse</a> </span>
      
    </div>
  )
}

export default RegisterPage