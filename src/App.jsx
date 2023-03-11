import { useState } from 'react'
import './App.css'
import Navbar from './components/heading/navbar/Navbar'
import Header from './components/heading/Header'
import Services from './components/services/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
    </div>
  )
}

export default App
