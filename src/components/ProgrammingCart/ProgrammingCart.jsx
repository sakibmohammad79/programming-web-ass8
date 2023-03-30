import React from 'react';
import './ProgrammingCart.css'

const ProgrammingCart = (props) => {
    console.log(props);
    const {title} = props.sigleCartData;
    return (
        <div className='cart-container'>
            <div className='time-container mb-3 bg-info p-3'>
                Spent time on read : 177 min
            </div>
            <div className='cart-info-container bg-dark text-white p-3'>
                Bookmarked Blogs : 8
                <p>name: {title}</p>
                <p>name: {title}</p>
                <p>name: {title}</p>
                <p>name: {title}</p>
                <p>name: {title}</p>
                <p>name: {title}</p>
               
            </div>

        </div>
    );
};

export default ProgrammingCart;