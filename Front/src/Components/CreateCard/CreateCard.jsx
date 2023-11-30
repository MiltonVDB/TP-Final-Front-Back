import React from 'react'
import {Link} from 'react-router-dom';
import './CreateCard.css'

const CreateCard = () => {
    return (
        <div className='col-12 col-md-6 col-lg-4 col-xs-4 mb-5 mb-md-4'>
            <Link to={'/create'} className='card card-product px-3'>
                <i className="bi bi-plus-square create-item"></i>
            </Link>
        </div>
    )
}

export default CreateCard