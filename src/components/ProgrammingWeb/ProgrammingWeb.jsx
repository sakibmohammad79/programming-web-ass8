import React, { useEffect, useState } from 'react';
import ProgrammingSlide from '../ProgrammingSlide/ProgrammingSlide';
import './ProgrammingWeb.css'

const ProgrammingWeb = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('fackData.json')
        .then((res) => res.json())
        .then((data) => setDatas(data))
    },[])
    return (
        <div className='programming-web'>
            <div className='programming-slides'>
                {
                   datas.map((data) => <ProgrammingSlide
                   key={data.id}
                   data={data}
                   ></ProgrammingSlide>)
                }
            </div>
            <div className='programming-cart'>
                <p>this cart </p>
            </div>
        </div>
    );
};

export default ProgrammingWeb;