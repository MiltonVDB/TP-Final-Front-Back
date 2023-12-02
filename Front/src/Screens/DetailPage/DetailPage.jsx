import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../ContextManager/ProductContext'
import { Counter } from '../../Components'
import './DetailPage.css'


const DetailPage = () => {

  const params = useParams()
  const {getProductById, isInCart, initialValue} = useProduct()
  const [item, setItem] = useState([])


  useEffect(() => {
    const loadProducts = async () => {

      if (params.id) {

        const itemLoaded = await getProductById(params.id)

        setItem(itemLoaded)

      }
    }
    loadProducts()
  },[])


  return (
    <div className='container'>

      <div className='card mb-3 p-4 '>

        <div className='dt'>

          <h1 className='titled'>{item.nombre}</h1>

        </div>

        <div className='row row-cols-1 row-cols-xs-1 row-cols-md-2 mt-4 y-center'>

          <img className='col imgd my-2' src={'/Images/' + item.thumbnail} alt={item.nombre} />
              
            <div className='desc col my-2'>
              
              <label>Descripcion:</label> 

              <ul className='m-0 p-0'>{item.descripcion && item.descripcion.map((descripcion, index) => (<li key={index}>{descripcion}</li>))}</ul>
              
            </div>

            <h3 className='pre col my-2'>Precio: ${item.precio}</h3>

            <div className='col my-2'>

            <h3 className='pre col my-2'>Stock disponible: {item.stock}</h3>

              {/* {isInCart(id) 
              ? <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id={productDetail._id}/>
              : <Counter initialValue={1} stock={productDetail.stock} id={productDetail.id}/>} */}

            </div>

        </div>

      </div>

    </div>
  )
}

export default DetailPage