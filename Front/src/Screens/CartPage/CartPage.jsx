
import { useProduct } from '../../ContextManager/ProductContext'
import { ProductCartCard } from '../../Components'
import './CartPage.css'
import {NavLink} from 'react-router-dom';
import Swal from 'sweetalert2'

const CartPage = () => {
  const { cart, setCart, getTotal } = useProduct()


    const Comprar = () => {

      Swal.fire({

        position: 'center',
        icon: 'success',
        title: 'Gracias por su compra',
        showConfirmButton: false,
        timer: 2000

      })

      setCart([])

    }

  return (
    <div className='container'>

      {cart.length > 0

      ?
      <div className='row'>

        {cart.map(product => (<ProductCartCard key={product.id} producto={product}/>))}

        <div className='buy y-center mb-3'>
          <h4>Total: ${getTotal()}</h4>
          <button className='check' onClick={Comprar}>Confirmar</button>
        </div>

      </div>
      :
      <div className='no-buy card y-center'>

        {/* <h1>No has Comprado nada</h1> */}

        <i className="bi bi-hammer"></i>

        <h1>Estamos trabajando.....</h1>

        <NavLink className='' to='/home'>
          <h3>Presione AQUI para volver al menu</h3>
        </NavLink>

      </div>
      }
    </div>
  )
}

export default CartPage