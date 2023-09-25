import React, { useContext, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { FaShoppingCart } from 'react-icons/fa';
import { logo } from '../assets';
import { motion } from 'framer-motion';
import '../index.css'

// Importe o CartContext
import { CartContext } from '../contexts/CartContext'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)


  // Contexto do carrinho
  const { cart } = useContext(CartContext);

  const itemCount = cart.reduce((total, item) => total + item.amount, 0)


  return (

    <div className='header'>

      <nav className='nav'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='carrinho_contagem'>
          <FaShoppingCart onClick={() => setIsOpen(!isOpen)} className='icon_carrinho' />

          {itemCount > 0 ? <p onClick={() => setIsOpen(!isOpen)} className='contagem'>{itemCount}</p> : null}
        </div>
      </nav>

      <div className='titulos_subtitulos'>


        <div className='titulo'>
          <h2>Dress&Fly</h2>
        </div>

        <div className='subtitulo'>
          Fashion That Takes You Higher
        </div>

      </div>





    </div>





  )
};

export default Header;
