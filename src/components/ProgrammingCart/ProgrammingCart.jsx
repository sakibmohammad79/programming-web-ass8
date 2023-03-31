import React, { useEffect, useState } from 'react';
import './ProgrammingCart.css'

const ProgrammingCart = ({watchTime}) => {
    const [time, setTime] = useState([watchTime]);
    useEffect(()=>{
        const getWatchTimeFromStorage = localStorage.getItem("watchTime");
        setTime(getWatchTimeFromStorage);
    },[watchTime])
    
    return (
        <div className='cart-container'>
            <div className='time-container fs-5 fw-medium text-white mb-3 bg-info p-3'>
                Spent time on read: {time} min
            </div>
        </div>
    );
};

export default ProgrammingCart;