import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

import '../css/homepage.css';
import Header from './HomePageHeader';

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

const HomePage = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get('https://phygizone.darkube.app/v1/product/categories/')
            .then(response => {
                setCats(response.data.results);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const [mostSoldProducts, setMostSoldProducts] = useState([]);
    const [highestRatedProducts, setHighestRatedProducts] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://phygizone.darkube.app/v1/product/homepage/')
            .then(response => {
                setMostSoldProducts(response.data.most_sold_products);
                setHighestRatedProducts(response.data.highest_rated_products);
                setRecentProducts(response.data.recent_products);
                setBrands(response.data.brands);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <Layout>
            <Header />
            <section class="homepage-products container">
                <div class="products">
                    <div class="section-header">
                        <h1 class="title">Products</h1>
                        <a href="/products/">Show all</a>
                    </div>
                    <div class="categories">
                        {
                            cats.map(cat => (
                                <a href={"/category/" + cat.id + "/"}>
                                    <img class="icon" src={"/images/icons/" + cat.name + ".svg"} />
                                    {cat.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div class="images">
                    <a class="img-link" href="#">
                        <img src="/images/products/product.png" alt="" />
                    </a>
                    <a class="img-link" href="#">
                        <img src="/images/products/product.png" alt="" />
                    </a>
                    <a class="img-link" href="#">
                        <img src="/images/products/product.png" alt="" />
                    </a>
                </div>
            </section>

            <section id="featured" class="container">
                <div class="section-title">
                    <h1 id="title">Recent Products</h1>
                    {/* <div class="tabs">
                        <button id="all">All</button>
                        <button id="nft">NFT</button>
                        <button id="offers">Offers</button>
                        <button id="latest">Latest</button>
                    </div> */}
                </div>
                <div id="products">
                    {
                        recentProducts.slice(0, 4).map(product => (
                            <div class="product-card">
                                <a href={"/product?id=" + product.id}>
                                    <img src={"/images/products/" + product.id + ".png"} alt="" />
                                </a>
                                <div class="info">
                                    <h4 class="title">{product.name}</h4>
                                    <div class="cart">
                                        <div class="cost">
                                            <h5 class="off">{"$" + product.current_price.price}</h5>
                                            <h4 class="final">{"$" + product.current_price.discount_price}</h4>
                                        </div>
                                        <div class="buttons">
                                            <button class="remove">
                                                <img src="/images/icons/icon.recyclebin.svg" />
                                            </button>
                                            <button class="add" onClick={() => addToCart(product.ir)}>
                                                <img src="/images/icons/icon.addtocart.svg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section id="featured" class="container">
                <div class="section-title">
                    <h1 id="title">Most Sold Products</h1>
                    {/* <div class="tabs">
                        <button id="all">All</button>
                        <button id="nft">NFT</button>
                        <button id="offers">Offers</button>
                        <button id="latest">Latest</button>
                    </div> */}
                </div>
                <div id="products">
                    {
                        mostSoldProducts.slice(0, 4).map(product => (
                            <div class="product-card">
                                <a href={"/product?id=" + product.id}>
                                    <img src={"/images/products/" + product.id + ".png"} alt="" />
                                </a>
                                <div class="info">
                                    <h4 class="title">{product.name}</h4>
                                    <div class="cart">
                                        <div class="cost">
                                            <h5 class="off">{"$" + product.current_price.price}</h5>
                                            <h4 class="final">{"$" + product.current_price.discount_price}</h4>
                                        </div>
                                        <div class="buttons">
                                            <button class="remove">
                                                <img src="/images/icons/icon.recyclebin.svg" />
                                            </button>
                                            <button class="add" onClick={() => addToCart(product.ir)}>
                                                <img src="/images/icons/icon.addtocart.svg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section id="featured" class="container">
                <div class="section-title">
                    <h1 id="title">Recent Products</h1>
                    {/* <div class="tabs">
                        <button id="all">All</button>
                        <button id="nft">NFT</button>
                        <button id="offers">Offers</button>
                        <button id="latest">Latest</button>
                    </div> */}
                </div>
                <div id="products">
                    {
                        recentProducts.slice(0, 4).map(product => (
                            <div class="product-card">
                                <a href={"/product?id=" + product.id}>
                                    <img src={"/images/products/" + product.id + ".png"} alt="" />
                                </a>
                                <div class="info">
                                    <h4 class="title">{product.name}</h4>
                                    <div class="cart">
                                        <div class="cost">
                                            <h5 class="off">{"$" + product.current_price.price}</h5>
                                            <h4 class="final">{"$" + product.current_price.discount_price}</h4>
                                        </div>
                                        <div class="buttons">
                                            <button class="remove">
                                                <img src="/images/icons/icon.recyclebin.svg" />
                                            </button>
                                            <button class="add" onClick={() => addToCart(product.ir)}>
                                                <img src="/images/icons/icon.addtocart.svg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section id="brands" class="container">
                <div class="section-title">
                    <h2 class="title">Brands</h2>
                </div>
                <ul id="brands-frame">
                    {
                        brands.map(brand => (
                            <li class="brand">
                                <img src={"/images/brands/" + brand.name + ".svg"} alt="" />
                            </li>
                        ))
                    }
                </ul>
                <div id="sellers">
                    <img src="/images/icons/icon.seller.svg" alt="" />
                    <h2 class="title">Unleash the full power of data</h2>
                    <p class="description">Everything you need to convert, engage, and more users.</p>
                    <ul id="values">
                        <li class="value">
                            <h1>400+</h1>
                            <p>Successful sales</p>
                        </li>
                        <li class="value">
                            <h1>5200+</h1>
                            <p>Sellers</p>
                        </li>
                        <li class="value">
                            <h1>10K</h1>
                            <p>Global Artworks</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="world" class="container">
                <img src="/images/best.arts.and.products.png" alt="" />
            </section>
        </Layout>
    );
}

export default HomePage;