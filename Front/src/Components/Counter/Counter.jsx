import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './Counter.css'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)

  return (
    <div>
        
      <button className='count p-1' onClick={() => addProductCart(id, quantity)}>Añadir al carrito</button>
      <button className='count' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
      <span>{quantity}</span>
      <button className='count' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>

    </div>
  )
}

export default Counter