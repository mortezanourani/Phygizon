import React from "react";
import Loading from '../../components/Loading';
import { Products } from "../../API";

import { ProductCard } from "../../components/Product";

const AllProducts = () => {
    const { loading, count, products } = Products();

    return (
        <>
            <section className="products">
                <div className="main container">
                    <div className="section-title">
                        <h2 className="title">All Products</h2>
                        <p style={{ marginBottom: '25px' }}>{count} products</p>
                    </div>
                    {
                        (loading)
                            ?
                            <Loading component />
                            :
                            <div id="products">
                                {
                                    products.map(product => (
                                        <ProductCard
                                            product={product} />
                                    ))
                                }
                            </div>
                    }
                </div>
            </section>
        </>
    );
}

export default AllProducts;