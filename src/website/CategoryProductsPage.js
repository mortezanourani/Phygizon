import React from "react";
import Layout from "./Layout";
import Loading from "../components/Loading";
import { CategoryProducts, addToCart, removeFromCart } from "../API";

import '../css/product.css';
import { ProductCard } from "../components/Product";


const CategoryProductsPage = () => {
    const url = window.location;
    const urlParameters = url.toString().trim().split('/');
    const categoryId = urlParameters[urlParameters.length - 1].length < 1
        ? urlParameters[urlParameters.length - 2]
        : urlParameters[urlParameters.length - 1];

    const data = CategoryProducts(categoryId);

    return (
        (data.loading) ?
            <Loading />
            :
            <Layout>
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
            </Layout >
    );
}

export default CategoryProductsPage;