import React from 'react';
import './ProgrammingSlide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const ProgrammingSlide = (props) => {
    const {slide_picture, outhor_picture, name, title, time, date} = props.data;
    const onClickHandler = props.onClickHandler;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div>
            <div className='data-container'>
                <div>
                <img className='cover-img img-fluid' src={slide_picture} alt="" />
                </div>
                <div className='slide-info pt-3 ps-1 pe-3 pb-3 '>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img className='author-img' src={outhor_picture} alt="" />
                            <div className='ms-3'>
                            <p className='author-name'>{name}</p>
                            <p className='date'>{date}</p>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex'>
                                <p className='time'>
                                    {time} min read
                                </p>
                                <p>
                                    <FontAwesomeIcon onClick={()=>handleAddToCart(props.data)} icon={faBookmark} className='ps-2 icon'/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>{title}</p>
                    <p className='tag'>#beginners  #programming</p>
                    <a onClick={()=>onClickHandler(time)} className='link' href="#">Mark as read</a>
                </div>
            </div>
            
        </div>
    );
};

export default ProgrammingSlide;