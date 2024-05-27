import React from "react";
import HeroHeader from '../../components/HeroHeader';

import './index.css';

function HelpCenter() {
    const root = document.getElementById('root');
    root.classList.add('helpcenter');

    return (
        <>
            <HeroHeader
                background="/images/banners/hero.background.png"
                title="Hello, How can we help you?" />

            <section className="container">
                <div id="categories">
                    <div className="section-title">
                        <h2>Categories</h2>
                        <p>Choose a category to quickly find a help you need</p>
                    </div>
                    <div id="categories-frame">
                        <div className="category">
                            <img src="/images/icons/icon.learning.svg" alt="" />
                            <h3>Learning</h3>
                            <p>In this section, we have compiled a series of tutorials and guides to help you navigate our
                                website
                            </p>
                            <a href="/helpcenter/learning/">Browse Guides</a>
                        </div>
                        <div className="category">
                            <img src="/images/icons/icon.blog.svg" alt="" />
                            <h3>Blog</h3>
                            <p>Get the latest news from the NFT world. Our blog is known as the first reference in this field
                            </p>
                            <a href="/helpcenter/blog/">View Blog</a>
                        </div>
                        <div className="category">
                            <img src="/images/icons/icon.faq.svg" alt="" />
                            <h3>FAQ</h3>
                            <p>Your Go-to Resource for Answering Common Questions about Buying, Selling and Creating NFTs</p>
                            <a href="/helpcenter/faq/">View FAQ</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div id="ticket">
                    <div className="section-title">
                        <h2>Other way to get help</h2>
                        <p>If you can't find the answer to your question, you can contact us. We are here and happy to help</p>
                        <a href="#">Submit a ticket</a>
                    </div>
                    <img src="/images/icons/helpcenter.ticket.section.icon.svg" alt="" />
                </div>
            </section>
        </>

    );
}

export default HelpCenter;