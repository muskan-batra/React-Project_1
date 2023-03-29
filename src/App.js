import {Routes , Route } from 'react-router-dom'
import React  from 'react'
import About from './components/pages/About'
import './App.css'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import  Navbar  from './components/include/Navbar'
import Footer from './components/include/Footer'

function App() {
  return (
    <div>
    <Navbar / >

  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>


  <Footer / >
  </div>
    
  )
}

export default App
