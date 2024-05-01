import React, { useState } from "react";
import Layout from './Layout';
import HeroHeader from "./HeroHeader";

import '../css/faq.css';
import axios from "axios";

const FaqPage = () => {
    const root = document.getElementById('root');
    root.classList.add('faqpage');

    const [faqs, setFaqs] = useState([]);

    axios.get('https://phygizone.darkube.app/v1/user/faqs/')
        .then(response => {
            setFaqs(response.data.results);
        }).catch(error => {
            throw error;
        });

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
                            faqs.map(faq => (
                                <li>
                                    <img src="/images/icons/icon.faq.question.svg" alt="" />
                                    <a href="#">
                                        <h3>{faq.question}</h3>
                                    </a>
                                    <p>{faq.answer}</p>
                                </li>
                            ))
                        }
                        <li>
                            <img src="/images/icons/icon.faq.question.svg" alt="" />
                            <a href="#">
                                <h3>Is there a free trial available?</h3>
                            </a>
                            <p>Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up
                            </p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.faq.question.svg" alt="" />
                            <a href="#">
                                <h3>Can I change my plan later?</h3>
                            </a>
                            <p>Of course. Our pricing scales with your company.</p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.faq.question.svg" alt="" />
                            <a href="#">
                                <h3>What is your cancellation policy?</h3>
                            </a>
                            <p>We understand that things change. You can cancel your plan at any time</p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.faq.question.svg" alt="" />
                            <a href="#">
                                <h3>Is there a free trial available?</h3>
                            </a>
                            <p>Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up
                            </p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.faq.question.svg" alt="" />
                            <a href="#">
                                <h3>Can I change my plan later?</h3>
                            </a>
                            <p>Of course. Our pricing scales with your company.</p>
                        </li>
                        <li>
                            <img src="/images/icons/icon.faq.question.svg" alt="" />
                            <a href="#">
                                <h3>What is your cancellation policy?</h3>
                            </a>
                            <p>We understand that things change. You can cancel your plan at any time</p>
                        </li>
                    </ul>
                    <div class="ctabox">
                        <h2>Still have questions?</h2>
                        <p>Join over 4000+ startups already growing with Untitled</p>
                        <div class="button-group">
                            <a href="#" class="secondary">Learn more</a>
                            <a href="#" class="primary">Get started</a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default FaqPage;