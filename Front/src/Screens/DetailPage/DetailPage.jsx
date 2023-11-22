import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../Components'
import './DetailPage.css'



const DetailPage = () => {
    const {id} = useParams()
    const {getProductById, isInCart, getProductCartById} = useCustomContext()
    const [productDetail, setProductDetail] = useState (isInCart(id) ? getProductCartById(id) : getProductById(id)) 

  return (
    <div className='container'>

      <div className='card mb-3 p-4 '>

        <div className='dt'>

          <h1 className='titled'>{productDetail.nombre}</h1>

        </div>

        <div className='row row-cols-1 row-cols-xs-1 row-cols-md-2 mt-4 y-center'>

            <img className='col imgd my-2' src={'/Assets/Images/' + productDetail.imagen} alt={productDetail.nombre} />
              
            <div className='desc col my-2'>
              
              <label>Descripcion:</label> 

              <ul className='m-0 p-0'>{productDetail.descripcion.map((desc,index) => <li key={index}>{desc}</li>)}</ul>
              
              
              
            </div>

            <h3 className='pre col my-2'>Precio: ${productDetail.precio}</h3>

            <div className='col my-2'>

              {isInCart(id) 
              ? <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail.id}/>
              : <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>}

            </div>

        </div>

      </div>

    </div>
  )
}

export default DetailPage