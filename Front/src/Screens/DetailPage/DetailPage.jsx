import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../ContextManager/ProductContext'
import './DetailPage.css'

const DetailPage = () => {
    const params = useParams()
    const { getProductById } = useProduct()
    const [item, setItem] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            if (params.id) {
                const itemLoaded = await getProductById(params.id)
                setItem(itemLoaded)
            }
        }
        loadProducts()
    }, [])

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
                    <div>
                        <h3 className='c-1 fw-bold mt-3'>Precio: ${item.precio}</h3>
                        <h6 className='fw-light'>Stock disponible: {item.stock}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage