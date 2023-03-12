import { useState } from 'react'
import './App.css'
import Navbar from './components/heading/navbar/Navbar'
import Header from './components/heading/Header'
import Services from './components/services/Services'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
