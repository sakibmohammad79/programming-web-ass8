import React, { useEffect, useState } from 'react';
import ProgrammingCart from '../ProgrammingCart/ProgrammingCart';
import ProgrammingSlide from '../ProgrammingSlide/ProgrammingSlide';
import './ProgrammingWeb.css'
import SideCart from '../sideCart/SideCart';

const ProgrammingWeb = () => {
    const [datas, setDatas] = useState([]);
    const [watchTime, setWatchTime] =useState([]);
    const [titles, setTitles] = useState([]);
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

    const handleSideCardData = (title) =>{
        const previousTitle = JSON.parse(localStorage.getItem("title"));
        if(previousTitle){
            const newtitle = previousTitle + title;
            localStorage.setItem("title", JSON.stringify(newtitle));
            setTitles(newtitle);
        }
        else{
            localStorage.setItem("title", JSON.stringify(title));
            setTitles(title);
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
                   handleSideCardData = {handleSideCardData}
                   ></ProgrammingSlide>)
                }
            </div>
            <div className='programming-cart  col-lg-3'>
                    <ProgrammingCart watchTime = {watchTime}></ProgrammingCart>
                   <div className='mb-3'>
                   {
                         <SideCart title={titles}></SideCart>
                    }
                   </div>
            </div>
        </div>
    );
};

export default ProgrammingWeb;