import useFAQ from '../../hooks/useFAQ';

import './index.css';
import HeroHeader from "../../components/HeroHeader";
import Loading from '../../components/Loading';

function FAQ() {
    const { loading, data } = useFAQ();
    const faqs = data;

    return (
        loading
            ?
            <Loading />
            :
            <>
                <HeroHeader
                    title="Frequently Asked Questions"
                    description="Resources and insights" />

                <section id="categories">
                    <div className="container">
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
                        </ul>
                        <div className="ctabox">
                            <h2>Still have questions?</h2>
                            <p>Join over 4000+ startups already growing with Untitled</p>
                            <div className="button-group">
                                <a href="/helpcenter/learn/" className="btn ghost gray">Learn more</a>
                                <a href="/" className="btn cta">Get started</a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    );
}

export default FAQ;
