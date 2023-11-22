import React from 'react'
import './ProductCartCard.css';

const ProductCartCard = ({producto}) => {


  return (
    <div className='col-12 col-md-6 col-lg-4 col-xs-4 mb-5 mb-md-4'>

      <div className='card px-3'>

        <img className='img mb-2 mt-3' src={'/Assets/Images/' + producto.imagen} alt={producto.nombre} />

        <b className='tcc my-4'>{producto.nombre}</b>

        <h2 className='tcq my-2'>Cantidad: {producto.quantity}</h2>

        <h3 className='price mt-1 mb-2'>Precio: {producto.precio}</h3>

      </div>  

    </div>

  )
}

export default ProductCartCard