import React, { useEffect, useState } from 'react';
import ProgrammingCart from '../ProgrammingCart/ProgrammingCart';
import ProgrammingSlide from '../ProgrammingSlide/ProgrammingSlide';
import './ProgrammingWeb.css'
import SideCart from '../sideCart/SideCart';
import { addToDb, getWebCart } from '../../utilities';


const ProgrammingWeb = () => {
    const [datas, setDatas] = useState([]);
    const [watchTime, setWatchTime] =useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fackData.json')
        .then((res) => res.json())
        .then((data) => setDatas(data))
    },[])

    useEffect(()=>{
        const storedCart = getWebCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedData = datas.find(data => data.id === id);
            if(addedData){
                const quantity = storedCart[id];
            addedData.quantity = quantity;
            savedCart.push(addedData);
            }
        }
        setCart(savedCart);
    },[datas]);
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

    const handleAddToCart = (data)=>{
        const newCart = [...cart, data]
        setCart(newCart);
        addToDb(data.id)
    }
    // const handleSideCardData = (title) =>{
        
    //     const previousTitle = JSON.parse(localStorage.getItem("title"));
    //     if(previousTitle){
    //         const newtitle = [...titles, title] ;
    //         localStorage.setItem("title", JSON.stringify(newtitle));
    //         setTitles(newtitle);
    //     }
    //     else{
    //          localStorage.setItem("title", JSON.stringify(title));
    //         setTitles(title);
    //     }
        
    // }
    
    return (
        <div className='programming-web d-flex row'>
            <div className='programming-slides  col-lg-9'>
                {
                   datas.map((data) => <ProgrammingSlide
                   key={data.id}
                   data={data}
                   onClickHandler = {onClickHandler}
                   handleAddToCart = {handleAddToCart}
                   ></ProgrammingSlide>)
                }
            </div>
            <div className='programming-cart  col-lg-3'>
                    <ProgrammingCart watchTime = {watchTime}></ProgrammingCart>
                    <div>
                   {
                        <SideCart  cart={cart}></SideCart>
                    }
                   </div> 
            </div>
        </div>
    );
};

export default ProgrammingWeb;