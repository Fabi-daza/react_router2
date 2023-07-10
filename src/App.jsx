import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Pokemon from './views/Pokemon/Pokemon'
import Details from './views/Details/Details'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokemon' element={<Pokemon />} />
      <Route path="/pokemon/:pokemonSelected" element={<Details />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
