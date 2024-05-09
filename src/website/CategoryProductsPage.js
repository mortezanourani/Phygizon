import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";

import { Categories, CategoryProducts, addToCart, removeFromCart } from "../API";

import '../css/product.css';


const CategoryProductsPage = () => {
    const url = window.location;
    const urlParameters = url.toString().trim().split('/');
    const categoryId = urlParameters[urlParameters.length - 1].length < 1
        ? urlParameters[urlParameters.length - 2]
        : urlParameters[urlParameters.length - 1];

    const data = CategoryProducts(categoryId);

    return (
        <Layout>
            <section className="products">
                <div className="main container">
                    <div className="section-title">
                        <h2 className="title">All Products in {data.categoryName}</h2>
                        {/* <p>{productCount} products</p> */}
                        <p style={{ marginBottom: '25px' }}>{data.categoryDetail}</p>
                    </div>
                    <div id="products">
                        {
                            data.products.map(product => (
                                <div className="product-card">
                                    <a href={"/product/" + product.id}>
                                        <img src={product.image} alt="" />
                                    </a>
                                    <div className="info">
                                        <h4 className="title">{product.name}</h4>
                                        <div className="cart">
                                            <div className="cost">
                                                <h5 className="off">{"$" + product.current_price.price}</h5>
                                                <h4 className="final">{"$" + product.current_price.discount_price}</h4>
                                            </div>
                                            <div className="buttons">
                                                <button className="remove" onClick={() => removeFromCart(product.id)}>
                                                    <img src="/images/icons/icon.recyclebin.svg" />
                                                </button>
                                                <button className="add" onClick={() => addToCart(product.id)}>
                                                    <img src="/images/icons/icon.addtocart.svg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </Layout >
    );
}

export default CategoryProductsPage;