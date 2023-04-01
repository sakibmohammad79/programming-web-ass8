import React from 'react';
import './Side.css'

const SideCart = ({cart}) => { 
    const title = cart.map(singleCart => <p>{singleCart.title}</p>);
    return (
    <div className='cart-info-container bg-transparent shadow-lg bg-gradient-secondary text-dark rounded p-3'>
            <h6>bookmark blog: {cart.length}</h6>
            <span>{title}</span>
    </div> 
    
    );
};

export default SideCart;