import React from 'react';
import Layout from './Layout';

import '../css/homepage.css';

import { Categories, HomePageData, addToCart, removeFromCart } from '../API';

const HomePage = () => {
    const data = HomePageData();
    const allProducts = data.recentProducts.concat(data.mostSoldProducts, data.highestRatedProducts);

    const handleProducts = (e) => {
        let tablinks = document.getElementsByClassName('products-tab-link');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

        let tabcontent = document.querySelector('#featured .tab-content');
        tabcontent.className = "tab-content " + e.target.id;
        e.target.className += ' active';
    }

    const handleFaqs = (e) => {
        let tablinks = document.getElementsByClassName('faqs-tab-link');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

        let tabcontent = document.querySelector('#faqs .tab-content');
        tabcontent.className = "tab-content " + e.target.id;
        e.target.className += ' active';
    }

    const faqToggle = (e) => {
        const questions = document.getElementsByClassName('question');
        for (let i = 0; i < questions.length; i++) {
            questions[i].classList.remove('collapsed');
        }

        e.target.parentElement.classList.toggle('collapsed');
    }

    return (
        <Layout>
            <header class="container header homepage-header">
                <div class="slider">
                    <img class="slide" src={"/images/slides/" + data.slide.id + ".png"} alt="" />
                    <a href={"/product/" + data.slide.id}>Shop now
                        <img src="/images/icons/btnarrow.svg" alt="" />
                    </a>
                </div>
                <div class="banner">
                    <a href={"/product/" + data.banner.id}>
                        <img src={"/images/banners/" + data.banner.id + ".png"} alt="" />
                    </a>
                </div>
            </header >
            <section class="homepage-products container">
                <div class="products">
                    <div class="section-header">
                        <h2 class="title">Products</h2>
                        <a href="/products/">Show all</a>
                    </div>
                    <div class="categories">
                        {
                            data.categories.map(cat => (
                                <a href={"/category/" + cat.id + "/"}>
                                    <img class="icon" src={"/images/icons/icon.cat." + cat.id + ".svg"} />
                                    {cat.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div class="images">
                    <a class="img-link" href="#">
                        <img src="/images/products/product.png" alt="" />
                    </a>
                    <a class="img-link" href="#">
                        <img src="/images/products/product.png" alt="" />
                    </a>
                    <a class="img-link" href="#">
                        <img src="/images/products/product.png" alt="" />
                    </a>
                </div>
            </section>

            <section id="featured">
                <div className='container'>
                    <div class="section-title">
                        <h2 className="title">Featured</h2>
                        <span class="tab t1">
                            <button className='products-tab-link active' id="all" onClick={handleProducts}>All</button>
                            <button className='products-tab-link' id="nft" onClick={handleProducts}>NFT</button>
                            <button className='products-tab-link' id="offers" onClick={handleProducts}>Offers</button>
                            <button className='products-tab-link' id="latest" onClick={handleProducts}>Latest</button>
                        </span>
                    </div>
                    <div className='tab-content all'>
                        <div class="products" id="all">
                            {
                                allProducts.slice(0, 8).map(product => (
                                    <div class="product-card">
                                        <a href={"/product/" + product.id + "/"}>
                                            <img src={"/images/products/" + product.id + ".png"} alt="" />
                                        </a>
                                        <div class="info">
                                            <h4 class="title">{product.name}</h4>
                                            <div class="cart">
                                                <div class="cost">
                                                    <h5 class="off">{"$" + product.current_price.price}</h5>
                                                    <h4 class="final">{"$" + product.current_price.discount_price}</h4>
                                                </div>
                                                <div class="buttons">
                                                    <button class="remove" onClick={() => removeFromCart(product.id)}>
                                                        <img src="/images/icons/icon.recyclebin.svg" />
                                                    </button>
                                                    <button class="add" onClick={() => addToCart(product.id)}>
                                                        <img src="/images/icons/icon.addtocart.svg" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div class="products" id="nft">
                            {
                                data.recentProducts.map(product => (
                                    <div class="product-card">
                                        <a href={"/product/" + product.id + "/"}>
                                            <img src={"/images/products/" + product.id + ".png"} alt="" />
                                        </a>
                                        <div class="info">
                                            <h4 class="title">{product.name}</h4>
                                            <div class="cart">
                                                <div class="cost">
                                                    <h5 class="off">{"$" + product.current_price.price}</h5>
                                                    <h4 class="final">{"$" + product.current_price.discount_price}</h4>
                                                </div>
                                                <div class="buttons">
                                                    <button class="remove" onClick={() => removeFromCart(product.id)}>
                                                        <img src="/images/icons/icon.recyclebin.svg" />
                                                    </button>
                                                    <button class="add" onClick={() => addToCart(product.id)}>
                                                        <img src="/images/icons/icon.addtocart.svg" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div class="products" id="offers">
                            {
                                data.mostSoldProducts.map(product => (
                                    <div class="product-card">
                                        <a href={"/product/" + product.id + "/"}>
                                            <img src={"/images/products/" + product.id + ".png"} alt="" />
                                        </a>
                                        <div class="info">
                                            <h4 class="title">{product.name}</h4>
                                            <div class="cart">
                                                <div class="cost">
                                                    <h5 class="off">{"$" + product.current_price.price}</h5>
                                                    <h4 class="final">{"$" + product.current_price.discount_price}</h4>
                                                </div>
                                                <div class="buttons">
                                                    <button class="remove" onClick={() => removeFromCart(product.id)}>
                                                        <img src="/images/icons/icon.recyclebin.svg" />
                                                    </button>
                                                    <button class="add" onClick={() => addToCart(product.id)}>
                                                        <img src="/images/icons/icon.addtocart.svg" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div class="products" id="latest">
                            {
                                data.recentProducts.map(product => (
                                    <div class="product-card">
                                        <a href={"/product/" + product.id + "/"}>
                                            <img src={"/images/products/" + product.id + ".png"} alt="" />
                                        </a>
                                        <div class="info">
                                            <h4 class="title">{product.name}</h4>
                                            <div class="cart">
                                                <div class="cost">
                                                    <h5 class="off">{"$" + product.current_price.price}</h5>
                                                    <h4 class="final">{"$" + product.current_price.discount_price}</h4>
                                                </div>
                                                <div class="buttons">
                                                    <button class="remove" onClick={() => removeFromCart(product.id)}>
                                                        <img src="/images/icons/icon.recyclebin.svg" />
                                                    </button>
                                                    <button class="add" onClick={() => addToCart(product.id)}>
                                                        <img src="/images/icons/icon.addtocart.svg" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section id="brands" class="container">
                <div class="section-title">
                    <h2 class="title">Brands</h2>
                </div>
                <div id="brands-frame">
                    {
                        Array.from({ length: 12 }, (value, index) => (
                            <img className='brand' src={"/images/brands/" + index + ".svg"} alt="" />
                        ))
                    }
                </div>
                {/* <ul id="brands-frame">
                    {
                        data.brands.map(brand => (
                            <li class="brand">
                                <img src={"/images/brands/" + brand.name + ".svg"} alt="" />
                            </li>
                        ))
                    }
                </ul> */}
                <div id="sellers">
                    <img src="/images/icons/icon.seller.svg" alt="" />
                    <h2 class="title">Unleash the full power of data</h2>
                    <p class="description">Everything you need to convert, engage, and more users.</p>
                    <ul id="values">
                        <li class="value">
                            <h1>400+</h1>
                            <p>Successful sales</p>
                        </li>
                        <li class="value">
                            <h1>5200+</h1>
                            <p>Sellers</p>
                        </li>
                        <li class="value">
                            <h1>10K</h1>
                            <p>Global Artworks</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="blog" class="container">
                <div class="section-title">
                    <h2 class="title">Blog</h2>
                </div>
                <div id="posts">
                    <div class="post">
                        <img class="post-header" src="/images/blog/post1.png" alt="" />
                        <div class="post-info">
                            <h3 class="post-title">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p class="post-abstract">Lorem ipsum dolor sit amet consectetur. Eget arcu velit tempor ut nunc. Eu
                                cras
                                magna eget posuere
                                sed.</p>
                            <span class="post-author">
                                <p class="time">10 min</p>
                                <p class="author">
                                    <img class="author-pic" src="/images/blog/avatar.png" alt="" />
                                    Roosevelt J. Ellison
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="post">
                        <img class="post-header" src="/images/blog/post2.png" alt="" />
                        <div class="post-info">
                            <h3 class="post-title">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p class="post-abstract">Lorem ipsum dolor sit amet consectetur. Eget arcu velit tempor ut nunc. Eu
                                cras
                                magna eget posuere
                                sed.</p>
                            <span class="post-author">
                                <p class="time">10 min</p>
                                <p class="author">
                                    <img class="author-pic" src="/images/blog/avatar.png" alt="" />
                                    Roosevelt J. Ellison
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="post">
                        <img class="post-header" src="/images/blog/post3.png" alt="" />
                        <div class="post-info">
                            <h3 class="post-title">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p class="post-abstract">Lorem ipsum dolor sit amet consectetur. Eget arcu velit tempor ut nunc. Eu
                                cras
                                magna eget posuere
                                sed.</p>
                            <span class="post-author">
                                <p class="time">10 min</p>
                                <p class="author">
                                    <img class="author-pic" src="/images/blog/avatar.png" alt="" />
                                    Roosevelt J. Ellison
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="post">
                        <img class="post-header" src="/images/blog/post4.png" alt="" />
                        <div class="post-info">
                            <h3 class="post-title">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p class="post-abstract">Lorem ipsum dolor sit amet consectetur. Eget arcu velit tempor ut nunc. Eu
                                cras
                                magna eget posuere
                                sed.</p>
                            <span class="post-author">
                                <p class="time">10 min</p>
                                <p class="author">
                                    <img class="author-pic" src="/images/blog/avatar.png" alt="" />
                                    Roosevelt J. Ellison
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="post">
                        <img class="post-header" src="/images/blog/post5.png" alt="" />
                        <div class="post-info">
                            <h3 class="post-title">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p class="post-abstract">Lorem ipsum dolor sit amet consectetur. Eget arcu velit tempor ut nunc. Eu
                                cras
                                magna eget posuere
                                sed.</p>
                            <span class="post-author">
                                <p class="time">10 min</p>
                                <p class="author">
                                    <img class="author-pic" src="/images/blog/avatar.png" alt="" />
                                    Roosevelt J. Ellison
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faqs" className="container">
                <div className="section-title">
                    <h2 className="title">Frequently Asked Questions</h2>
                    <span className="tab t2">
                        <button className='faqs-tab-link active' id="general" onClick={handleFaqs}>General</button>
                        <button className='faqs-tab-link' id="getstart" onClick={handleFaqs}>Get start</button>
                        <button className='faqs-tab-link' id="create" onClick={handleFaqs}>Create</button>
                        <button className='faqs-tab-link' id="campaign" onClick={handleFaqs}>Campaign</button>
                        <button className='faqs-tab-link' id="listing" onClick={handleFaqs}>Listing</button>
                    </span>
                </div>
                <div className='tab-content general'>
                    <div id='general'>
                        <div className='question collapsed'>
                            <h3 onClick={faqToggle}>What is the capital of France?</h3>
                            <p>The capital of France is Paris. It's known for its art, fashion, gastronomy, and culture, and is home to iconic landmarks like Eiffel Tower and the Louvre Museum.</p>
                        </div>
                        <div className='question'>
                            <h3 onClick={faqToggle}>How does the internet work?</h3>
                            <p>The internet is a global network of interconnected computers and servers that communicate using standardized protocols. Data is sent in small packets, which are routed through various pathways to reach their destinations, allowing for information sharing and communication across the globe.</p>
                        </div>
                        <div className='question'>
                            <h3 onClick={faqToggle}>How do I backup my computer data?</h3>
                            <p>To backup computer data, you can use external hard drives, cloud storage services, or backup software. It's important to regularly back up important files and documents to protect against data loss due to hardware failure, accidents or malware.</p>
                        </div>
                        <div className='question'>
                            <h3 onClick={faqToggle}>How can I reduce my carbon footprint?</h3>
                            <p>The internet is a global network of interconnected computers and servers that communicate using standardized protocols. Data is sent in small packets, which are routed through various pathways to reach their destinations, allowing for information sharing and communication across the globe.</p>
                        </div>
                        <div className='question'>
                            <h3 onClick={faqToggle}>What is healthy diet?</h3>
                            <p>The capital of France is Paris. It's known for its art, fashion, gastronomy, and culture, and is home to iconic landmarks like Eiffel Tower and the Louvre Museum.</p>
                        </div>
                    </div>
                    <div id='getstart'>

                    </div>
                    <div id='campaign'>

                    </div>
                </div>
                <div className='getintouch'>
                    <img src='/images/icons/icon.homepage.getintouch.png' alt="" />
                    <h3>Still have questions?</h3>
                    <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    <a href="#" className='btn cta xxl'>Get in touch</a>
                </div>
            </section>

            <section id="world" class="container">
                <img src="/images/best.arts.and.products.png" alt="" />
            </section>
        </Layout>
    );
}

export default HomePage;