import React, { createContext, useState, useEffect } from 'react'

//Criar Contexto
export const CartContext = createContext()



const CartProvider = ({ children }) => {

  //estado do carrinho
  const [cart, setCart] = useState([])

  //Funçao para adicionar Produtos ao carrinhos
  const addToCart = (product, id) => {

    const newItem = { ...product, amount: 1 }

    // Verificar se o produto ja esta no carrinho

    const cartItem = cart.find((item) => {
      return item.id === id
    })

    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }

  }


  // Eliminar produto do carrinho
  const removeFromCart = (id) => {
    const newCart = cart.filter((item => {
      return item.id !== id
    }))

    setCart(newCart)
  }

  // Elinimar TODOS os produtos do carrinho
  const deleteAllProducts = () => {
    setCart([])
  }





  return (



    < CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteAllProducts }} >

      {children}

    </CartContext.Provider>

  )

};

export default CartProvider









