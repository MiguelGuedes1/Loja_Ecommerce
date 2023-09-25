import React, { useContext } from 'react'



// Importar Link
import { Link } from "react-router-dom"

//Importar Icons
import { BsPlus } from "react-icons/bs"

// Importar Contexto do carrinho
import { CartContext } from "../contexts/CartContext.jsx"



const Product = ({ product }) => {

  const { addToCart } = useContext(CartContext)


  const { id, image, category, title, price } = product







  return (
    <div className='flex flex-col gap-1'>

      <div className=' h-[16rem] mb-1 relative overflow-hidden group transition'>

        <div className='w-full h-full flex justify-center items center'>

          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300 mt-10' src={image} alt="" />
          </div>


          <div className='absolute top-30 -left-11 group-hover:left-8  p-2 flex gap-3 mb-20 items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>


            <button onClick={() => addToCart(product, id)}>

              <div className='flex justify-center items-center text-white w-10 h-10 bg-green-500'>
                <BsPlus className='text-3xl' />
              </div>

            </button>


          </div>


        </div>

      </div>


      <div>

        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>

        <h2 className='font-semibold'> € {price} </h2>


      </div>



    </div>


  )
}

export default Product












