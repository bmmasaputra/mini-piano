import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar.jsx'
import Content1 from '../components/GaleriMusik/Content1.jsx'
import Content2 from '../components/GaleriMusik/Content2.jsx'
import Content3 from '../components/GaleriMusik/Content3.jsx'
import Footer from '../components/Footer.jsx'

// src/App.jsx

function App() {
  return (
    <>
    <Navbar />
    <Content1 />
    <Content2 />
    <Content3 />
    <Footer />
    </>
  )
}

export default App