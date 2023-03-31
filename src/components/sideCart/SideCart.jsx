import React from 'react';
import './Side.css'

const SideCart = ({cart}) => {
    //console.log(cart);
    let title = [];
    for(const data of cart){
        title = [...title, data.title]
    }
    return (
    <div className='cart-info-container bg-dark text-white p-3'>
            <p>bookmark blog: {cart.length}</p>
            <p>{title}</p>
    </div> 
        
         
    );
};

export default SideCart;