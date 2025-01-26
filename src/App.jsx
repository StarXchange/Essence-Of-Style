import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import NavBar from './components/NavBar'
import SearchBar from '../src/components/SearchBar'
import Footer from './components/Footer'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Order from './Pages/Order'
import Collection from './Pages/Collection'
import './App.css'
import Product from './Pages/Product'


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
      
      <NavBar />
      <SearchBar />
      
      <Routes>

        <Route path="/" element={<Home />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='place-order' element={<PlaceOrder/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/collection' element={<Collection/>} />

      </Routes>
  

      <Footer /> 
    </div>
  )
}

export default App