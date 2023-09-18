import React from 'react'

// Importar o React Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'

// Importar as paginas da app
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails"

// Importar Componentes
import SideBar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {


  return (

    <Router>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/product/:id' element={<ProductDetails />} />

      </Routes>

      <SideBar />

      <Footer />

    </Router >

  )
}

export default App
