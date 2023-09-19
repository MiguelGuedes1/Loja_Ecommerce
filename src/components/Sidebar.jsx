import React, { useContext } from 'react'

// Importar Link
import { Link } from "react-router-dom"

// Importar icons
import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi"

//Importar Componentes
import CartItem from "../components/CartItem"

//Importar Sidebar Context
import { SidebarContext } from "../contexts/SidebarContext"

const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext)




  return (

    <div className={`transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full bg-white fixed top-0 h-full right-0 md:w-[35vw] xl:max-w-[30vh] z-20 px-4 lg:px-[35px]`} style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      SideBar
    </div>
  )

}

export default Sidebar
