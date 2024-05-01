import React from 'react';

function HeroHeader({ title, description, background }) {
    return (
        <div class="hero" id="header">
            <img src={background} alt="" class="background" />
            <h2 class="title">{title}</h2>
            <p class="description">{description}</p>
            <form class="search" action="">
                <div class="form-control">
                    <img src="/images/icons/icon.search.svg" alt="" />
                    <input type="search" placeholder="Search" />
                </div>
            </form>
            <div class="button-group">
                <a href="#">Getting Started</a>
                <a href="#">Create Collection</a>
                <a href="#">Anything else</a>
                <a href="#">Anything else</a>
            </div>
        </div>
    );
}

export default HeroHeader;