import React, { useContext } from 'react'

import { useParams } from "react-router-dom"

import { CartContext } from "../contexts/CartContext"

import { ProductContext } from "../contexts/ProductContext"







const ProductDetails = () => {

    const { id } = useParams()


    return (
        <div>
            <h1>
                Pagina de detalhes dos produtos
            </h1>
        </div>
    )


}

export default ProductDetails