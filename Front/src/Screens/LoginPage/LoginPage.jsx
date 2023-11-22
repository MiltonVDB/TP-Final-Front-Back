import React from 'react'
import './LoginPage.css'

const LoginPage = () => {

  
    return (
      <div className='container card col-12 col-md-4 my-5'>

          <i className="bi bi-bank logo-icon me-3"></i>
          <h5 className='logo-name m-0'>Market Center</h5>
  
        <form className='log p-5' action="/login" method="POST">
  
            <label className='contact'>Login</label>

            <div className='y-center my-2'>

                <i class="bi bi-person-fill log-icon mx-2"></i>
      
                <input className='in-log' id="username" placeholder='Ingrese su nombre' type="text" required/>
            
            </div>
            <div className='y-center my-2'>

                <i class="bi bi-lock-fill log-icon mx-2"></i>
      
                <input className='in-log' id="password"  placeholder='Ingrese su contraseña' type="password" required/>

            </div>
    
            <button className='buttonDiv mt-3 y-center'  type='submit'>Ingresar</button>
  
        </form>

        <span className='my-3'>No tienes cuenta? <a href="/register">Registrarse</a> </span>
        
      </div>
    )
  }

export default LoginPage