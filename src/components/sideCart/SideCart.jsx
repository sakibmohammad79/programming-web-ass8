import React from 'react';
import './Side.css'

const SideCart = ({cart}) => {
    const title = cart.map(singleCart => <p>{singleCart.title}</p>);
     

    return (
    <div className='cart-info-container bg-dark text-white p-3'>
            <p>bookmark blog: {cart.length}</p>
            <p className='titles-tag'>{title}</p>
    </div> 
        
         
    );
};

export default SideCart;