import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
    const [slide, setSlide] = useState({});
    const [banner, setBanner] = useState({});

    axios.get('https://phygizone.darkube.app/v1/product/products/?limit=2')
        .then(response => {
            setSlide(response.data.results[0]);
            setBanner(response.data.results[1]);
        })
        .catch(error => {
            throw error;
        });

    return (
        <header class="header homepage-header container">
            <div class="slider">
                <img class="slide" src={"/images/slides/" + slide.id + ".png"} alt="" />
                <a href={"/product/" + slide.id}>Shop now
                    <img src="/images/icons/btnarrow.svg" alt="" />
                </a>
            </div>
            <div class="banner">
                <a href={"/product/" + banner.id}>
                    <img src={"/images/banners/" + banner.id + ".png"} alt="" />
                </a>
            </div>
        </header >
    )
}

export default Header;