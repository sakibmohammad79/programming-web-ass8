import React from 'react';
import './Side.css'

const SideCart = ({cart}) => {
    //console.log(cart);
    //let quantity = 0;
    let title = [];
    for(const data of cart){
        title = [...title, data.title];
        //quantity = quantity +data.quantity;
    }
    return (
    <div className='cart-info-container bg-dark text-white p-3'>
            <p>bookmark blog: {cart.length}</p>
            <p>{title}</p>
    </div> 
        
         
    );
};

export default SideCart;