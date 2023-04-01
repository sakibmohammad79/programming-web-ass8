import React, { useEffect, useState } from 'react';
import ProgrammingCart from '../ProgrammingCart/ProgrammingCart';
import ProgrammingSlide from '../ProgrammingSlide/ProgrammingSlide';
import './ProgrammingWeb.css'
import { addToDb, getWebCart } from '../../utilities';
import SideCart from '../sideCart/SideCart';




const ProgrammingWeb = () => {
    const [datas, setDatas] = useState([]);
    const [watchTime, setWatchTime] =useState([0]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fackData.json')
        .then((res) => res.json())
        .then((data) => setDatas(data))
    },[])

    useEffect(()=>{
        const storedCart = getWebCart();
        //console.log(storedCart);
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
        const newCart = [...cart, data];
        const exists = datas.find(book => book.id == data.id);
        if(exists){
            alert('already bookmark')
        }
        setCart(newCart);
        addToDb(data.id)
    }
  
    return (
       <div >
         <div  className='programming-web d-flex row'>
            <div style={{'minHeight': '5200px'}} className='programming-slides m-1 m-lg-5 col-12  col-lg-9'>
                {
                   datas.map((data) => <ProgrammingSlide
                   key={data.id}
                   data={data}
                   onClickHandler = {onClickHandler}
                   handleAddToCart = {handleAddToCart}
                   ></ProgrammingSlide>)
                }
            </div>
            <div style={{'minHeight': '500px'}} className='programming-cart col-12 col-lg-3'>
                    <ProgrammingCart watchTime = {watchTime}></ProgrammingCart>
                    <div>
                   {
                        <SideCart cart={cart}></SideCart>
                    }
                   </div> 
            </div>
        </div>
       </div>
    );
};

export default ProgrammingWeb;