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
                <NavLink to="/" className={({isActive}) => (isActive ? "active" : "inactive")}>Home</NavLink>
                <NavLink to="/pokemon" className={({isActive}) => (isActive ? "active" : "inactive")}>Pokemones</NavLink>
            </div>
        </div>
    )
}

export default Navbar