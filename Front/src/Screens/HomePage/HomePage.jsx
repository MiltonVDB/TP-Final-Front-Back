import { useEffect, useState } from 'react'
import { ProductCard } from '../../Components'
import { useProduct } from '../../ContextManager/ProductContext'
import './HomePage.css'

const HomePage = () => {
  
  const { products, getProducts } = useProduct()
  const [searchProduct, setSearchProduct] = useState('')
  const [currentProducts, setCurrentProducts] = useState(products)
  const [max, setMax] = useState(1000000)
  const [min, setMin] = useState(0)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    setCurrentProducts(
      products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >= min && producto.precio <= max)
    )
  }, [products, searchProduct, min, max])

  return (
    <div className='container'>

      <div className='row'>

        <div className='col-12 col-md-3 order-md-2 mb-3'>

          <div className='search-item'>

            <div className="p-3">

              <label>Buscador</label>

            </div>

            <hr className='m-0' />

            <div className="p-3">
              <div className="searc-input y-center">
                <input className='search' placeholder='Ingrse su busqueda' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
                <i className="bi bi-search"></i>
              </div>
            </div>

          </div>

          <div className='search-item'>

            <div className="p-3">

              <label>Precio</label>

            </div>

            <hr className='m-0' />

            <div className='p-3 currecy-wrap'>

              <div className='y-center py-2'>

                <label className='mm'>Min</label>

                <input className='minmax px-2' type="number" value={min} onChange={(e) => setMin(Number(e.target.value))}/>

              </div>

              <div className='y-center py-2'>

                <label className='mm'>Max</label>

                <input className='minmax px-2' type="number" value={max} onChange={(e) => setMax(Number(e.target.value))}/>

              </div>

            </div >

          </div>

        </div>

        <div className='col-12 col-md-9 order-md-1'>

          <div className='row'>

            {currentProducts.map(producto => (<ProductCard producto={producto} key={producto._id}/>))}

          </div>

        </div>

      </div>

    </div>
    
  )

}

export default HomePage