import React from 'react';

const SideCart = ({title}) => {
    return (
    <div className='cart-info-container bg-dark text-white p-3'>
            <p>bookmark blog: {title.length}</p>
            <p className='pb-3'>{title}</p>
    </div> 
        
         
    );
};

export default SideCart;