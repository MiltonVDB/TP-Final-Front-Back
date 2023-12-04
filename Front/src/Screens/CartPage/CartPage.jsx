
import { NavLink } from 'react-router-dom';

const CartPage = () => {
    return (
        <div className='container'>
            <div className='card y-center py-5'>
                <i className="bi bi-hammer h1 mt-2"></i>
                <h3 className='text-center my-4 fw-bold'>Nos encontramos trabajando <br /> en la experiencia de nuestra web</h3>
                <NavLink className='btnui medium c-1' to='/contacto'>
                    Contactate con nosotros
                </NavLink>
            </div>
    </div>
    )
}

export default CartPage