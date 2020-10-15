import React from 'react'
import logo from '../../images/logo1.png'
import './style.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="logo-esports-global"/>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/tournaments">TOURNAMENTS</a></li>
                    <li><a href="/register">Login/Register</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
