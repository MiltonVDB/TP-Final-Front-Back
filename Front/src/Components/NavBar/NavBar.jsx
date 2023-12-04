import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useUser } from '../../ContextManager/UserContext';

const NavBar = () => {

    const { signout, isAuthenticated } = useUser()

    return (
        <nav className='y-center mb-3'>
            <div className='container y-center'>
                <NavLink className='y-center' to='/'>
                    <i className="bi bi-bank logo-icon me-3"></i>
                    <h5 className='logo-name m-0'>Market Center</h5>
                </NavLink>

                {isAuthenticated ? (
                    <div className='y-center ms-auto'>
                        <NavLink className='form-menu me-3' to='/contacto'>Contacto</NavLink>
                        <NavLink to='/administrate'><i className="bi bi-briefcase-fill nav-item me-3"></i></NavLink>
                        <NavLink to='/home'><i className="bi bi-house-door-fill nav-item me-3"></i></NavLink>
                        <NavLink to='/cart'><i className="bi bi-cart-fill nav-item me-3"></i></NavLink>
                        <button onClick={signout} className="bi bi-box-arrow-right nav-item-button me-3"></button>
                    </div>
                ):(
                    <></>
                )}
            </div>
        </nav>
    )
}

export default NavBar