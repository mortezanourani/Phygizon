import React from "react";
import Layout from "./Layout";
import { Products, addToCart, removeFromCart } from "../API";

import '../css/product.css';

const ProductsPage = () => {
    const { count, products } = Products();

    return (
        <Layout>
            <section className="products">
                <div className="main container">
                    <div className="section-title">
                        <h2 className="title">All Products</h2>
                        <p style={{ marginBottom: '25px' }}>{count} products</p>
                    </div>
                    <div id="products">
                        {
                            products.map(product => (
                                <div className="product-card">
                                    {
                                        (product.nft_link) ? (
                                            <a href={product.nft_link}
                                                className={"nft-link" + ((product.is_nft_required) ? " required" : "")}>
                                            </a>
                                        ) : null
                                    }
                                    <a href={"/product/" + product.id + "/"}>
                                        {
                                            (product.current_price.discount) ? (
                                                <span className='discount'>
                                                    {product.current_price.discount * 100} %
                                                </span>
                                            ) : null
                                        }
                                        <img src={product.image} alt="" />
                                    </a>
                                    <div className="info">
                                        <a href={"/product/" + product.id + "/"}>
                                            <h4 className="title">{product.name}</h4>
                                        </a>
                                        <div className="cart">
                                            <div className="cost">
                                                <h5 className="off">{product.current_price.currency.sign + product.current_price.price}</h5>
                                                <h4 className="final">{product.current_price.currency.sign + product.current_price.discount_price}</h4>
                                            </div>
                                            <div className="buttons">
                                                <button className="remove" onClick={() => removeFromCart(product.id)}>
                                                    <img src="/images/icons/icon.recyclebin.svg" alt="" />
                                                </button>
                                                <button className="add" onClick={() => addToCart(product.id)}>
                                                    <img src="/images/icons/icon.addtocart.svg" alt="" />
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

export default ProductsPage;
