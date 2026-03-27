import React from 'react'
import Navbar from './Layout/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
           <Route path="/product/:id" element= {<Product/>}/>
        </Routes>
      </>
  )
}

export default App