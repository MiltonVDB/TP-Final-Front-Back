import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='py-3 mt-auto'>

      <div className='container'>

        <ul className='list pb-3 mb-3'>
          <li className='fitem p-2'>Trabaja con nosotros</li>
          <li className='fitem p-2'>Terminos y condiciones</li>
          <li className='fitem p-2'>Ayuda</li>
          <li className='fitem p-2'>Defensa del Consumidor</li>
        </ul>

        <div className='b-list'>

          <div>

          <small className='dire'>Copyright © 1997-2023 Milton Van Den Bergh</small>

          <small className='dire'>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</small>

          </div>

          <label className='follow'>Siguenos <i className="bi bi-facebook"></i>  <i className="bi bi-instagram"></i> </label>

        </div>

      </div>

    </footer>
  )
}

export default Footer


