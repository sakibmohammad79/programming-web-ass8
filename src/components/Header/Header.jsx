import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='header-title'>
                <p>Let's Code Your Career</p>
            </div>
            <div className='header-info'>
                <div className='header-link'>
                <a href="/home">Home</a>
                <a href="/tutorial">Tutorial</a>
                <a href="/About">About</a>
                </div>
                <img className='header-img' src="https://plus.unsplash.com/premium_photo-1664478244612-d4b3238abd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW4lMjBhbmQlMjB3b21hbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="header-imag" />
            </div>
        </nav>
    );
};

export default Header;