import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("did");
        axios.get('https://phygizone.darkube.app/v1/product/products/?limit=2')
            .then(response => {
                setProducts(response.data.results);
            })
            .catch(error => {
                throw error;
            });
    }, []);

    return (
        <header class="header homepage-header container">
            <div class="slider">
                <img class="slide" src={"/images/slides/" + products[0].id + ".png"} alt="" />
                <a href={"/product/" + products[0].id}>Shop now
                    <img src="/images/icons/btnarrow.svg" alt="" />
                </a>
            </div>
            <div class="banner">
                <a href={"/product/" + products[1].id}>
                    <img src={"/images/banners/" + products[1].id + ".png"} alt="" />
                </a>
            </div>
        </header>
    )
}

export default Header;