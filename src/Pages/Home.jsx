import React, { useContext } from 'react'

//Importar Contexto
import { ProductContext } from '../contexts/ProductContext'

//Importar Componentes
import Product from "../components/Product"

const Home = () => {

    // Receber os produtos do ProductContext
    const { products } = useContext(ProductContext);


    // Filtrar apenas produtos relacionados a eletrônicos
    const filteredProducts = products.filter(item =>
        item.category === "men's clothing" ||
        item.category === "jewelery" ||
        item.category === "women's clothing"
    );






    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                        {filteredProducts.map(product => {
                            return <Product product={product} key={product.id} />
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home
