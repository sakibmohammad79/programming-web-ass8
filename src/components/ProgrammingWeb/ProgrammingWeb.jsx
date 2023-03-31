import React, { useEffect, useState } from 'react';
import ProgrammingCart from '../ProgrammingCart/ProgrammingCart';
import ProgrammingSlide from '../ProgrammingSlide/ProgrammingSlide';
import './ProgrammingWeb.css'

const ProgrammingWeb = () => {
    const [datas, setDatas] = useState([]);
    const [watchTime, setWatchTime] =useState([]);
    useEffect(() => {
        fetch('fackData.json')
        .then((res) => res.json())
        .then((data) => setDatas(data))
    },[])
    const onClickHandler = (time)=>{
        const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
        if(previousWatchTime){
            const sum = previousWatchTime + time;
            localStorage.setItem("watchTime", sum);
            setWatchTime(sum);
        }
        else{
            localStorage.setItem("watchTime", time);
            setWatchTime(time);
        }

    }
    
    return (
        <div className='programming-web d-flex row'>
            <div className='programming-slides  col-lg-9'>
                {
                   datas.map((data) => <ProgrammingSlide
                   key={data.id}
                   data={data}
                   onClickHandler = {onClickHandler}
                   ></ProgrammingSlide>)
                }
            </div>
            <div className='programming-cart  col-lg-3'>
                    <ProgrammingCart watchTime = {watchTime}></ProgrammingCart>
            </div>
        </div>
    );
};

export default ProgrammingWeb;