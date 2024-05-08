import React from 'react';

function HeroHeader({ title, description, background }) {
    return (
        <div className="hero" id="header">
            <img src={background} alt="" className="background" />
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <form className="search" action="">
                <div className="form-control">
                    <img src="/images/icons/icon.search.svg" alt="" />
                    <input type="search" placeholder="Search" />
                </div>
            </form>
            <div className="button-group">
                <a href="#">Getting Started</a>
                <a href="#">Create Collection</a>
                <a href="#">Anything else</a>
                <a href="#">Anything else</a>
            </div>
        </div>
    );
}

export default HeroHeader;
