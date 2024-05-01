import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

import '../css/homepage.css';
import Header from './HomePageHeader';

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

        </Layout>
    );
}

export default HomePage;