import React from 'react'
import pikachu from '../../assets/imagenes/pikachu.png'
import './Home.css' 

const Home = () => {
  return (
    <div className='home-container'>
        <h1>Bienvenido Maestro Pokemon</h1>
        <img className='pikachu-home' src={pikachu} alt="" />
    </div>
  )
}

export default Home