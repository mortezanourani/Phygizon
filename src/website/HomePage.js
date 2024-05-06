import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

import '../css/homepage.css';

import { Categories, HomePageData, addToCart, removeFromCart } from '../API';

const HomePage = () => {
    const data = HomePageData();

    return (
        <Layout>
            <header class="header homepage-header container">
                <div class="slider">
                    <img class="slide" src={"/images/slides/" + data.slide.id + ".png"} alt="" />
                    <a href={"/product/" + data.slide.id}>Shop now
                        <img src="/images/icons/btnarrow.svg" alt="" />
                    </a>
                </div>
                <div class="banner">
                    <a href={"/product/" + data.banner.id}>
                        <img src={"/images/banners/" + data.banner.id + ".png"} alt="" />
                    </a>
                </div>
            </header >
            <section class="homepage-products container">
                <div class="products">
                    <div class="section-header">
                        <h2 class="title">Products</h2>
                        <a href="/products/">Show all</a>
                    </div>
                    <div class="categories">
                        {
                            data.categories.map(cat => (
                                <a href={"/category/" + cat.id + "/"}>
                                    <img class="icon" src={"/images/icons/icon.cat." + cat.id + ".svg"} />
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
                    <h2 className="title">Recent Products</h2>
                    {/* <div class="tabs">
                        <button id="all">All</button>
                        <button id="nft">NFT</button>
                        <button id="offers">Offers</button>
                        <button id="latest">Latest</button>
                    </div> */}
                </div>
                <div id="products">
                    {
                        data.recentProducts.slice(0, 4).map(product => (
                            <div class="product-card">
                                <a href={"/product/" + product.id + "/"}>
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
                                            <button class="remove" onClick={() => removeFromCart(product.id)}>
                                                <img src="/images/icons/icon.recyclebin.svg" />
                                            </button>
                                            <button class="add" onClick={() => addToCart(product.id)}>
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
                    <h2 className="title">Most Sold Products</h2>
                    {/* <div class="tabs">
                        <button id="all">All</button>
                        <button id="nft">NFT</button>
                        <button id="offers">Offers</button>
                        <button id="latest">Latest</button>
                    </div> */}
                </div>
                <div id="products">
                    {
                        data.mostSoldProducts.slice(0, 4).map(product => (
                            <div class="product-card">
                                <a href={"/product/" + product.id + "/"}>
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
                                            <button class="remove" onClick={() => removeFromCart(product.id)}>
                                                <img src="/images/icons/icon.recyclebin.svg" />
                                            </button>
                                            <button class="add" onClick={() => addToCart(product.id)}>
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
                    <h2 className="title">Recent Products</h2>
                    {/* <div class="tabs">
                        <button id="all">All</button>
                        <button id="nft">NFT</button>
                        <button id="offers">Offers</button>
                        <button id="latest">Latest</button>
                    </div> */}
                </div>
                <div id="products">
                    {
                        data.recentProducts.slice(0, 4).map(product => (
                            <div class="product-card">
                                <a href={"/product/" + product.id + "/"}>
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
                                            <button class="remove" onClick={() => removeFromCart(product.id)}>
                                                <img src="/images/icons/icon.recyclebin.svg" />
                                            </button>
                                            <button class="add" onClick={() => addToCart(product.id)}>
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
                        data.brands.map(brand => (
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