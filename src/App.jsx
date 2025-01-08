import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Collections from './Pages/Collections'
import NavBar from './components/NavBar/NavBar'
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Products" element={<Contact />} />
        <Route path="/Collection" element={<Collections />} />
      </Routes>
    </div>
  )
}

export default App