import React, { useState } from 'react'
import './FormPage.css'

const FormPage = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");


  const AForm = (e) => {

    e.preventDefault()

      Swal.fire({

        position: 'center',
        icon: 'success',
        title: 'Enviado',
        showConfirmButton: false,
        timer: 1500,

      })

      setNombre("")
      setEmail("")
      setAsunto("")
      setMensaje("")

    }

  return (
    <div className='container card col-12 col-md-6 my-4'>

      <form className='p-5' onSubmit={AForm} >

          <label className='contact'>Contacto</label>

          <label className='sub-t'>Nombre*:</label>

          <input className='in-form' value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese su nombre' type="text" required/>

          <label className='sub-t'>Email*:</label>

          <input className='in-form' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su Email' type="email" required/>

          <label className='sub-t'>Asunto*:</label>

          <input className='in-form' value={asunto} onChange={(e) => setAsunto(e.target.value)} placeholder='Ingrese el asunto' type="text" required/>

          <label className='sub-t'>Mensaje*:</label>

          <textarea className='te-form' value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>

          <button className='buttonDiv mt-3 y-center'  type='submit'>Enviar</button>
          

      </form>
      
    </div>
  )
}

export default FormPage