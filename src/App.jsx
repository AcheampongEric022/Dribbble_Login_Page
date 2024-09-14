import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import "./App.css"
import More from './Components/More'
import Footer from './Components/Footer'
import Slide from './Components/Slide'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <More />
      <Slide />
      <Footer />
    </div>
  )
}

export default App