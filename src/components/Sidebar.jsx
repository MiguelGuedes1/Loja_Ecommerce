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

        <div >

          <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
            <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            Checkout
          </button>

        </div>

        <div onClick={() => deleteAllProducts()} className='cursor-pointer py-4 w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </div>

      </div>

    </div>




  )

}

export default Sidebar
