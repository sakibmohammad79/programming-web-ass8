import React, { useEffect, useState } from 'react';
import './ProgrammingCart.css'

const ProgrammingCart = ({watchTime}) => {
    const [time, setTime] = useState([0]);
    useEffect(()=>{
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        setTime(getWatchTimeFromStorage);
    },[watchTime])
    
    return (
        <div className='cart-container'>
            <div className='time-container fs-5 fw-medium text-dark shadow-lg bg-gradient-secondary mb-4 bg-transparent  p-3 rounded'>
                Spent time on read: {time} min
            </div>
        </div>
    );
};

export default ProgrammingCart;