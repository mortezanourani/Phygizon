import React, { Composer } from 'react';
import '../css/homepage.css';
import slide from '../images/slides/slider.png';
import banner from '../images/banners/banner.png';

function PrimaryHeader() {
    return (
        <header class="header homepage-header container">
            <div class="slider">
                <img class="slide" src={slide} alt="" />
                <a href="#">Shop now</a>
            </div>
            <div class="banner">
                <a href="#">
                    <img src={banner} alt="" />
                </a>
            </div>
        </header>
    )
}

export default PrimaryHeader;