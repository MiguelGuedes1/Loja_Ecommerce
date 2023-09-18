import React, { createContext, useEffect, useState } from 'react'

// Criar o contexto (useContext) ... Neste caso vai ser os produtos da loja

export const ProductContext = createContext()



const ProductProvider = ({ children }) => {

  // Estado dos Produtos
  const [products, setProducts] = useState([])

  // Fetch dos produtos
  useEffect(() => {

  }, [])

  return (

    <ProductContext.Provider>



    </ProductContext.Provider>
  )
}

export default ProductContext
