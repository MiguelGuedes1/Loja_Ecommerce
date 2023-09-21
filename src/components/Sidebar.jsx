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

//Importar Carrinho Context
import { CartContext } from "../contexts/CartContext"

const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext)

  const { cart, deleteAllProducts } = useContext(CartContext)





  return (

    <div className={`transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full h-full bg-white fixed top-0 right-0 md:w-[39vw] xl:max-w-[50vh] z-20 px-4 py-4 lg:px-[40px]`} style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', overflowY: 'auto' }}>

      <div className='flex items-center justify-between py-6 border-b'>

        <div className='uppercase text-sm font-semi-bold'>
          Shopping Bag(0)
        </div>



        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          <IoMdArrowForward className='text-2xl' />
        </div>




      </div>


      <div>  {cart.map((item) => {

        return <CartItem item={item} key={item.id} />
      })}

      </div>

      <div className=' flex w-full justify-between items-center mt-5'>

        <div className='uppercase font-semibold text-sm' >
          <div> <span>Total:</span> 1000 €</div>
        </div>

        <div onClick={() => deleteAllProducts()} className='cursor-pointer py-4 w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </div>

      </div>

    </div>




  )

}

export default Sidebar
