import React from 'react'
import './Navbar.css'
import logo from '../../assets/imagenes/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links"> 
                <NavLink to="/" className='link'>Home</NavLink>
                <NavLink to="/pokemon" className='link'>Pokemones</NavLink>
            </div>
        </div>
    )
}

export default Navbar