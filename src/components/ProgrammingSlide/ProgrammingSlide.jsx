import React from 'react';
import './ProgrammingSlide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const ProgrammingSlide = (props) => {
    const {slide_picture, outhor_picture, name, id, title, time, date} = props.data;
    return (
        <div className='data-container'>
                <div>
                <img className='cover-img' src={slide_picture} alt="" />
                </div>
                <div className='slide-info pt-3 ps-1 pe-3 pb-3'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img className='author-img' src={outhor_picture} alt="" />
                            <div className='ms-3'>
                            <p>{name}</p>
                            <p>{date}</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                {time}
                                <FontAwesomeIcon icon={faBookmark} className='ps-2' />
                            </p>

                        </div>
                    </div>
                    <p>{title}</p>
                    <p>#beginners  #programming</p>
                    <a href="#">Mark as read</a>
                </div>
        </div>
    );
};

export default ProgrammingSlide;