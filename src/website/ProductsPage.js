import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";

import '../css/product.css';

const addToCart = (id) => {
    axios.post('https://phygizone.darkube.app/v1/order/carts/add_to_cart/',
        {
            "product": id,
        },
        {
            headers: {
                'accept': 'application/json',
                'Authorization': localStorage.getItem('authorization'),
                'Content-Type': 'application/json'
            },
        }).then(response => {
            alert(JSON.stringify(response.data));
        }).catch(error => {
            if (error.toString().includes("401")) {
                alert(localStorage.getItem('authorization'));
                // alert("You need to be logged in.");
            }
            alert(error);
        });
}

const remove = (id) => {
    axios.patch('https://phygizone.darkube.app/v1/order/carts/update_cart_item/',
        {
            "product": id,
            "quantity": 1,
        },
        {
            headers: {
                'accept': 'application/json',
                'Authorization': localStorage.getItem('authorization'),
                'Content-Type': 'application/json'
            },
        }).then(response => {
            alert(JSON.stringify(response.data));
        }).catch(error => {
            if (error.toString().includes("401")) {
                alert(localStorage.getItem('authorization'));
                // alert("You need to be logged in.");
            }
            alert(error);
        });
}

const ProductsPage = () => {

    const [productCount, setProductCount] = useState(null);
    const [products, setProducts] = useState([]);

    axios.get('https://phygizone.darkube.app/v1/product/products/')
        .then(response => {
            // document.getElementById('root').innerHTML = JSON.stringify(response.data.results);
            setProductCount(response.data.count);
            setProducts(response.data.results);
        }).catch(error => {
            throw error;
        });

    return (
        <Layout>
            <section className="products">
                <div className="main">
                    <div className="page-title">
                        <h2>All Products</h2>
                        <p>{productCount} products</p>
                    </div>
                    <div id="products" className="container">
                        {
                            products.map(product => (
                                <div className="product-card">
                                    <a href={"/product/" + product.id}>
                                        <img src="/images/products/product.png" alt="" />
                                    </a>
                                    <div className="info">
                                        <h4 className="title">{product.name}</h4>
                                        <div className="cart">
                                            <div className="cost">
                                                <h5 className="off">{"$" + product.current_price.price}</h5>
                                                <h4 className="final">{"$" + product.current_price.discount_price}</h4>
                                            </div>
                                            <div className="buttons">
                                                <button className="remove" onClick={() => remove(product.id)}>
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

export default ProductsPage;