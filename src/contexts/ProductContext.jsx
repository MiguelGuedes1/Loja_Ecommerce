import React, { createContext, useEffect, useState } from 'react'

// Criar o contexto (useContext) ... Neste caso vai ser os produtos da loja

export const ProductContext = createContext()



const ProductProvider = ({ children }) => {

  // Estado dos Produtos
  const [products, setProducts] = useState([])

  // Fetch dos produtos ( buscar os produtos a uma api)
  useEffect(() => {

    try {

      const fetchProducts = async () => {

        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)



      }

      fetchProducts()

    } catch (error) {
      console.log("Deu o seguinte erro: ", error)
    }


  }, [])



  return (

    <ProductContext.Provider value={{ products }}> {children}



    </ProductContext.Provider>
  )
}

export default ProductProvider
