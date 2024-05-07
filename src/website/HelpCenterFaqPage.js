import React, { useState } from "react";
import Layout from './Layout';
import HeroHeader from "./HeroHeader";

import '../css/faq.css';
import { FAQs } from "../API";

const FaqPage = () => {
    const faqs = FAQs();

    return (
        <Layout>
            <HeroHeader
                title="Frequently Asked Questions"
                description="Resources and insights" />

            <section id="categories">
                <div class="container">
                    <div class="section-title">
                        <h2>Browse categories</h2>
                        <p>find the answer to your problem</p>
                    </div>
                    <div class="categories-frame">
                        <a class="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Seller Account Setup</h3>
                        </a>
                        <a class="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Listing Your Products</h3>
                        </a>
                        <a class="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Pricing & Discounts</h3>
                        </a>
                        <a class="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Order Management</h3>
                        </a>
                        <a class="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Customer Communication</h3>
                        </a>
                        <a class="category" href="#">
                            <img src="/images/icons/icon.sellers.svg" alt="" />
                            <h3>Adding NFT's section</h3>
                        </a>
                    </div>

                    <ul id="questions">
                        {
                            faqs.items.map(faq => (
                                <li>
                                    <img src="/images/icons/icon.faq.question.svg" alt="" />
                                    <a href="#">
                                        <h3>{faq.question}</h3>
                                    </a>
                                    <p>{faq.answer}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div class="ctabox">
                        <h2>Still have questions?</h2>
                        <p>Join over 4000+ startups already growing with Untitled</p>
                        <div class="button-group">
                            <a href="/helpcenter/learn/" class="btn ghost gray">Learn more</a>
                            <a href="/" class="btn cta">Get started</a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default FaqPage;