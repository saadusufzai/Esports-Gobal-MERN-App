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
                    <li><a href="/About">About</a></li>
                    <li><a href="/Tournaments">TOURNAMENTS</a></li>
                    <li><a href="/Login">Login/Register</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
