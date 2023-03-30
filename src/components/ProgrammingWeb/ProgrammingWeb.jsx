import React, { useEffect, useState } from 'react';
import ProgrammingCart from '../ProgrammingCart/ProgrammingCart';
import ProgrammingSlide from '../ProgrammingSlide/ProgrammingSlide';
import './ProgrammingWeb.css'

const ProgrammingWeb = () => {
    const [datas, setDatas] = useState([]);
    const [sigleCartData, setSingleCartData] = useState([]);
    useEffect(() => {
        fetch('fackData.json')
        .then((res) => res.json())
        .then((data) => setDatas(data))
    },[])
    const onClickHandler = (sigleCartData)=>{
        setSingleCartData(sigleCartData);
    }
    
    return (
        <div className='programming-web d-flex row'>
            <div className='programming-slides col-sm-12 col-lg-9'>
                {
                   datas.map((data) => <ProgrammingSlide
                   key={data.id}
                   data={data}
                   onClickHandler = {onClickHandler}
                   ></ProgrammingSlide>)
                }
            </div>
            <div className='programming-cart col-sm-12 col-lg-3'>
                {
                    <ProgrammingCart sigleCartData={sigleCartData}></ProgrammingCart>
                }
            </div>
        </div>
    );
};

export default ProgrammingWeb;