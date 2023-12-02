
import {Link} from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({producto}) => {
    return (
        <div className='col-12 col-md-6 col-lg-4 col-xs-4 mb-5 mb-md-4'>
            <Link to={'/detail/'+producto._id} className='card card-product px-3'>
                <img className='img mb-4' src={'/Images/' + producto.thumbnail} alt={producto.nombre} />
                <small className='tag'>{producto.tag}</small>
                <div className='title my-4'>{producto.nombre}</div>
                <small className='price my-0'>Precio: ${producto.precio}</small>
            </Link>
        </div>
    )
}

export default ProductCard