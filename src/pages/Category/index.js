import React from "react";
import Loading from "../../components/Loading";
import { CategoryProducts } from "../../API";

import ProductCard from "../../components/ProductCard";

const Category = () => {
    const url = window.location;
    const urlParameters = url.toString().trim().split('/');
    const categoryId = urlParameters[urlParameters.length - 1].length < 1
        ? urlParameters[urlParameters.length - 2]
        : urlParameters[urlParameters.length - 1];

    const data = CategoryProducts(categoryId);

    return (
        (data.loading) ?
            <Loading component />
            :
            <>
                <section className="products">
                    <div className="main container">
                        <div className="section-title">
                            <h2 className="title">All Products in {data.categoryName}</h2>
                            <p>{data.products.length} products</p>
                            <p style={{ marginBottom: '25px' }}>{data.categoryDetail}</p>
                        </div>
                        <div id="products">
                            {
                                data.products.map(product => (
                                    <ProductCard
                                        product={product} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </>
    );
}

export default Category;