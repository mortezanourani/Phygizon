import React from "react";
import HeroHeader from "../../components/HeroHeader";

import './learning.css';

function Learning() {
    const root = document.getElementById('root');
    root.classList.add('learning');

    return (
        <>
            <HeroHeader
                title="Learning"
                description="Comprehensive tutorials and Contents" />

            <section id="categories">
                <div className="container">
                    <div className="tabs">
                        <button className="btn lg cta">
                            Articles
                        </button>
                        <button className="btn lg text gray">
                            Podcasts
                        </button>
                        <button className="btn lg text gray">
                            Videos
                        </button>
                    </div>
                    <div className="section-title">
                        <h2>Browse categories</h2>
                        <p>find the answer to your problem</p>
                    </div>
                    <div className="categories-frame">
                        <a className="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Seller Account Setup</h3>
                        </a>
                        <a className="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Listing Your Products</h3>
                        </a>
                        <a className="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Pricing & Discounts</h3>
                        </a>
                        <a className="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Order Management</h3>
                        </a>
                        <a className="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Customer Communication</h3>
                        </a>
                        <a className="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Adding NFT's section</h3>
                        </a>
                    </div>
                </div>
            </section>

            <section id="tutorials">
                <div className="container">
                    <div className="section-title">
                        <h2>Last Tutorial</h2>
                    </div>
                    <div className="last-tutorial">
                        <img src="/images/blog/learn.tutorial.last.png" alt="" />
                        <div className="info">
                            <span className="category-duration">
                                <a className="badge green category">Getting Started</a>
                                <i className="sep"></i>
                                <p className="duration">6 Min Read</p>
                            </span>
                            <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                                ut labo</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                                ut labore et dolore</p>
                            <div className="date-link">
                                <span>Jan 12, 2024</span>
                                <a href="#" className="lnk md">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="popular">
                        <div className="section-title">
                            <h2>Most Popular</h2>
                            <div className="button-group">
                                <button className="md ghost gray">P</button>
                                <button className="md ghost gray">N</button>
                            </div>
                        </div>
                        <ul className="frame">
                            <li>
                                <img src="/images/blog/learn.tutorial.last.png" alt="" />
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt
                                        ut labore et dolore</p>
                                    <div className="date-link">
                                        <span>6 Min Read</span>
                                        <a href="#" className="lnk sm cta">Read more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="/images/blog/learn.tutorial.last.png" alt="" />
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt
                                        ut labore et dolore</p>
                                    <div className="date-link">
                                        <span>6 Min Read</span>
                                        <a href="#" className="lnk sm cta">Read more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="/images/blog/learn.tutorial.last.png" alt="" />
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt
                                        ut labore et dolore</p>
                                    <div className="date-link">
                                        <span>6 Min Read</span>
                                        <a href="#" className="lnk sm cta">Read more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="/images/blog/learn.tutorial.last.png" alt="" />
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt
                                        ut labore et dolore</p>
                                    <div className="date-link">
                                        <span>6 Min Read</span>
                                        <a href="#" className="lnk sm cta">Read more</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="/images/blog/learn.tutorial.last.png" alt="" />
                                <div className="info">
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        invidunt
                                        ut labore et dolore</p>
                                    <div className="date-link">
                                        <span>6 Min Read</span>
                                        <a href="#" className="lnk sm cta">Read more</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Learning;