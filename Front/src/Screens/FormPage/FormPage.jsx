import { useState } from 'react'
import Swal from 'sweetalert2'


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
        <div className='container card col-12 col-md-8 col-lg-6 col-xl-4 my-4'>
            <form className='text-start p-5' onSubmit={AForm} >

                <h3 className='text-center mb-4 pb-3 fw-bold'>Contacto</h3>

                <div className='pb-3'>
                    <label>Nombre*:</label>
                    <input className='input w-100' value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese su nombre' type="text" required />
                </div>

                <div className='pb-3'>
                    <label>Email*:</label>
                    <input className='input w-100' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su Email' type="email" required />
                </div>

                <div className='pb-3'>
                    <label>Asunto*:</label>
                    <input className='input w-100' value={asunto} onChange={(e) => setAsunto(e.target.value)} placeholder='Ingrese el asunto' type="text" required />
                </div>

                <div className='pb-3'>
                    <label>Mensaje*:</label>
                    <textarea className='input w-100' value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                </div>

                <button className='btnui medium mt-4 mx-auto' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default FormPage