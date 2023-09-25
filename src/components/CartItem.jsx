import React, { useContext, useState } from 'react'

import { Link } from "react-router-dom"

// importar Icons
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io"

// Importar o Contexto do carrinho
import { CartContext } from '../contexts/CartContext';



const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext)




  // Destruturar o item (produto)

  const { id, title, image, price, amount } = item

  const [acumulatedPrice, setAcumulatedPrice] = useState(1)


  const pricePlus = () => {
    setAcumulatedPrice(acumulatedPrice + 1)
  }

  const priceReducer = () => {
    if (acumulatedPrice > 1) {
      setAcumulatedPrice(acumulatedPrice - 1);
    } else {
      setAcumulatedPrice(1)
    }
  };

  const finalPrice = item.price * acumulatedPrice

  const finalFormattedPrice = finalPrice.toFixed(2)



  return <div>
    <div className='border-b border-gray-200 py-5'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>

        <p to={`/product/${id}`}>

          <img className='max-w-[60px]' src={item.image} alt="imagem_produto" />

        </p>

        <div className='flex justify-between mb-2 gap-10'>


          <p to={`/product/${id}`}
            className='text-xs uppercase font-medium max-w-[240px] text-primary'
          >

            {title}

          </p>

          <div
            onClick={() => removeFromCart(id)}
            className='text-xl cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
          </div>



        </div>




      </div>

      <div className='  flex gap-x-5 h-[36px] '>


        <div className='flex justify-between items-center gap-3 px-2' style={{ border: '1px solid #ccc', boxShadow: '5px 5px 5px rgba(255, 255, 255, 0.5)', borderRadius: '4px', height: '2.2rem', width: 'auto' }}>

          <div className='flex-1' style={{ userSelect: 'none' }}>
            <IoMdRemove onClick={priceReducer} className='text-gray-500 hover:text-red-500 transition mt-1' />
          </div>

          <div className='text-sm' style={{ userSelect: 'none' }}>
            {acumulatedPrice}
          </div>

          <div style={{ userSelect: 'none' }}>
            <IoMdAdd onClick={pricePlus} className='text-gray-500 hover:text-green-500 transition mt-1' />
          </div>




        </div>

        <div className='ml-5 text-sm'>{item.price} €</div>

        <div className='ml-20 text-sm font-medium flex'> Total: {finalFormattedPrice} €</div>



      </div>







    </div>
  </div>;
};

export default CartItem;
