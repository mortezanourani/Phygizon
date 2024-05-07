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
                        <img src="/images/products/cat1.png" alt="" />
                    </a>
                    <a class="img-link" href="#">
                        <img src="/images/products/cat2.png" alt="" />
                    </a>
                    <a class="img-link" href="#">
                        <img src="/images/products/cat3.png" alt="" />
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

            <section id="rayzon" className="container">
                <img src='/images/banners/rayzon.png' alt='' />
                <div>
                    <div className="about">
                        <svg width="169" height="70" viewBox="0 0 169 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.736 13.28H4.44L3.096 17H0.792L6.84 0.368H9.36L15.384 17H13.08L11.736 13.28ZM11.112 11.504L8.088 3.056L5.064 11.504H11.112ZM26.3959 8.384C27.0039 8.48 27.5559 8.728 28.0519 9.128C28.5639 9.528 28.9639 10.024 29.2519 10.616C29.5559 11.208 29.7079 11.84 29.7079 12.512C29.7079 13.36 29.4919 14.128 29.0599 14.816C28.6279 15.488 27.9959 16.024 27.1639 16.424C26.3479 16.808 25.3799 17 24.2599 17H18.0199V0.271999H24.0199C25.1559 0.271999 26.1239 0.463999 26.9239 0.847999C27.7239 1.216 28.3239 1.72 28.7239 2.36C29.1239 3 29.3239 3.72 29.3239 4.52C29.3239 5.512 29.0519 6.336 28.5079 6.992C27.9799 7.632 27.2759 8.096 26.3959 8.384ZM20.2039 7.496H23.8759C24.8999 7.496 25.6919 7.256 26.2519 6.776C26.8119 6.296 27.0919 5.632 27.0919 4.784C27.0919 3.936 26.8119 3.272 26.2519 2.792C25.6919 2.312 24.8839 2.072 23.8279 2.072H20.2039V7.496ZM24.0679 15.2C25.1559 15.2 26.0039 14.944 26.6119 14.432C27.2199 13.92 27.5239 13.208 27.5239 12.296C27.5239 11.368 27.2039 10.64 26.5639 10.112C25.9239 9.568 25.0679 9.296 23.9959 9.296H20.2039V15.2H24.0679ZM40.3226 17.168C38.7706 17.168 37.3546 16.808 36.0746 16.088C34.7946 15.352 33.7786 14.336 33.0266 13.04C32.2906 11.728 31.9226 10.256 31.9226 8.624C31.9226 6.992 32.2906 5.528 33.0266 4.232C33.7786 2.92 34.7946 1.904 36.0746 1.184C37.3546 0.447999 38.7706 0.079999 40.3226 0.079999C41.8906 0.079999 43.3146 0.447999 44.5946 1.184C45.8746 1.904 46.8826 2.912 47.6186 4.208C48.3546 5.504 48.7226 6.976 48.7226 8.624C48.7226 10.272 48.3546 11.744 47.6186 13.04C46.8826 14.336 45.8746 15.352 44.5946 16.088C43.3146 16.808 41.8906 17.168 40.3226 17.168ZM40.3226 15.272C41.4906 15.272 42.5386 15 43.4666 14.456C44.4106 13.912 45.1466 13.136 45.6746 12.128C46.2186 11.12 46.4906 9.952 46.4906 8.624C46.4906 7.28 46.2186 6.112 45.6746 5.12C45.1466 4.112 44.4186 3.336 43.4906 2.792C42.5626 2.248 41.5066 1.976 40.3226 1.976C39.1386 1.976 38.0826 2.248 37.1546 2.792C36.2266 3.336 35.4906 4.112 34.9466 5.12C34.4186 6.112 34.1546 7.28 34.1546 8.624C34.1546 9.952 34.4186 11.12 34.9466 12.128C35.4906 13.136 36.2266 13.912 37.1546 14.456C38.0986 15 39.1546 15.272 40.3226 15.272ZM53.7418 0.271999V10.856C53.7418 12.344 54.1018 13.448 54.8218 14.168C55.5578 14.888 56.5738 15.248 57.8698 15.248C59.1498 15.248 60.1498 14.888 60.8698 14.168C61.6058 13.448 61.9738 12.344 61.9738 10.856V0.271999H64.1578V10.832C64.1578 12.224 63.8778 13.4 63.3178 14.36C62.7578 15.304 61.9978 16.008 61.0378 16.472C60.0938 16.936 59.0298 17.168 57.8458 17.168C56.6618 17.168 55.5898 16.936 54.6298 16.472C53.6858 16.008 52.9338 15.304 52.3738 14.36C51.8298 13.4 51.5578 12.224 51.5578 10.832V0.271999H53.7418ZM78.0971 0.271999V2.048H73.5371V17H71.3531V2.048H66.7691V0.271999H78.0971Z" fill="#020202" />
                            <path d="M12.44 61L7.768 52.52H6.456V61H0.984V38.536H10.168C11.9387 38.536 13.4427 38.8453 14.68 39.464C15.9387 40.0827 16.8773 40.936 17.496 42.024C18.1147 43.0907 18.424 44.2853 18.424 45.608C18.424 47.1013 17.9973 48.4347 17.144 49.608C16.312 50.7813 15.0747 51.6133 13.432 52.104L18.616 61H12.44ZM6.456 48.648H9.848C10.8507 48.648 11.5973 48.4027 12.088 47.912C12.6 47.4213 12.856 46.728 12.856 45.832C12.856 44.9787 12.6 44.3067 12.088 43.816C11.5973 43.3253 10.8507 43.08 9.848 43.08H6.456V48.648ZM20.771 52.04C20.771 50.2053 21.1123 48.5947 21.795 47.208C22.499 45.8213 23.4483 44.7547 24.643 44.008C25.8377 43.2613 27.171 42.888 28.643 42.888C29.9017 42.888 31.0003 43.144 31.939 43.656C32.899 44.168 33.635 44.84 34.147 45.672V43.144H39.619V61H34.147V58.472C33.6137 59.304 32.867 59.976 31.907 60.488C30.9683 61 29.8697 61.256 28.611 61.256C27.1603 61.256 25.8377 60.8827 24.643 60.136C23.4483 59.368 22.499 58.2907 21.795 56.904C21.1123 55.496 20.771 53.8747 20.771 52.04ZM34.147 52.072C34.147 50.7067 33.763 49.6293 32.995 48.84C32.2483 48.0507 31.331 47.656 30.243 47.656C29.155 47.656 28.227 48.0507 27.459 48.84C26.7123 49.608 26.339 50.6747 26.339 52.04C26.339 53.4053 26.7123 54.4933 27.459 55.304C28.227 56.0933 29.155 56.488 30.243 56.488C31.331 56.488 32.2483 56.0933 32.995 55.304C33.763 54.5147 34.147 53.4373 34.147 52.072ZM61.8178 43.144L50.6178 69.48H44.7298L48.8258 60.392L41.5617 43.144H47.6738L51.8018 54.312L55.8978 43.144H61.8178ZM68.9165 56.488H76.6605V61H62.8045V56.648L70.2285 47.656H62.8685V43.144H76.5005V47.496L68.9165 56.488ZM87.7995 61.256C86.0502 61.256 84.4715 60.8827 83.0635 60.136C81.6768 59.3893 80.5782 58.3227 79.7675 56.936C78.9782 55.5493 78.5835 53.928 78.5835 52.072C78.5835 50.2373 78.9888 48.6267 79.7995 47.24C80.6102 45.832 81.7195 44.7547 83.1275 44.008C84.5355 43.2613 86.1142 42.888 87.8635 42.888C89.6128 42.888 91.1915 43.2613 92.5995 44.008C94.0075 44.7547 95.1168 45.832 95.9275 47.24C96.7382 48.6267 97.1435 50.2373 97.1435 52.072C97.1435 53.9067 96.7275 55.528 95.8955 56.936C95.0848 58.3227 93.9648 59.3893 92.5355 60.136C91.1275 60.8827 89.5488 61.256 87.7995 61.256ZM87.7995 56.52C88.8448 56.52 89.7302 56.136 90.4555 55.368C91.2022 54.6 91.5755 53.5013 91.5755 52.072C91.5755 50.6427 91.2128 49.544 90.4875 48.776C89.7835 48.008 88.9088 47.624 87.8635 47.624C86.7968 47.624 85.9115 48.008 85.2075 48.776C84.5035 49.5227 84.1515 50.6213 84.1515 52.072C84.1515 53.5013 84.4928 54.6 85.1755 55.368C85.8795 56.136 86.7542 56.52 87.7995 56.52ZM110.927 42.952C113.017 42.952 114.681 43.6347 115.919 45C117.177 46.344 117.807 48.2 117.807 50.568V61H112.367V51.304C112.367 50.1093 112.057 49.1813 111.439 48.52C110.82 47.8587 109.988 47.528 108.943 47.528C107.897 47.528 107.065 47.8587 106.447 48.52C105.828 49.1813 105.519 50.1093 105.519 51.304V61H100.047V43.144H105.519V45.512C106.073 44.7227 106.82 44.104 107.759 43.656C108.697 43.1867 109.753 42.952 110.927 42.952Z" fill="#2E384D" />
                            <rect x="99" y="9" width="70" height="3" fill="#020202" />
                        </svg>
                        <p>This is one of the attractive features of Saitome and we are happy to check it carefully</p>
                    </div>
                    <div className='possibilities'>
                        <svg width="238" height="20" viewBox="0 0 238 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.032 7.168C12.032 8.56 11.552 9.72 10.592 10.648C9.648 11.56 8.2 12.016 6.248 12.016H3.032V19H0.848V2.272H6.248C8.136 2.272 9.568 2.728 10.544 3.64C11.536 4.552 12.032 5.728 12.032 7.168ZM6.248 10.216C7.464 10.216 8.36 9.952 8.936 9.424C9.512 8.896 9.8 8.144 9.8 7.168C9.8 5.104 8.616 4.072 6.248 4.072H3.032V10.216H6.248ZM20.4824 19.216C19.2504 19.216 18.1304 18.936 17.1224 18.376C16.1304 17.816 15.3464 17.024 14.7704 16C14.2104 14.96 13.9304 13.76 13.9304 12.4C13.9304 11.056 14.2184 9.872 14.7944 8.848C15.3864 7.808 16.1864 7.016 17.1944 6.472C18.2024 5.912 19.3304 5.632 20.5784 5.632C21.8264 5.632 22.9544 5.912 23.9624 6.472C24.9704 7.016 25.7624 7.8 26.3384 8.824C26.9304 9.848 27.2264 11.04 27.2264 12.4C27.2264 13.76 26.9224 14.96 26.3144 16C25.7224 17.024 24.9144 17.816 23.8904 18.376C22.8664 18.936 21.7304 19.216 20.4824 19.216ZM20.4824 17.296C21.2664 17.296 22.0024 17.112 22.6904 16.744C23.3784 16.376 23.9304 15.824 24.3464 15.088C24.7784 14.352 24.9944 13.456 24.9944 12.4C24.9944 11.344 24.7864 10.448 24.3704 9.712C23.9544 8.976 23.4104 8.432 22.7384 8.08C22.0664 7.712 21.3384 7.528 20.5544 7.528C19.7544 7.528 19.0184 7.712 18.3464 8.08C17.6904 8.432 17.1624 8.976 16.7624 9.712C16.3624 10.448 16.1624 11.344 16.1624 12.4C16.1624 13.472 16.3544 14.376 16.7384 15.112C17.1384 15.848 17.6664 16.4 18.3224 16.768C18.9784 17.12 19.6984 17.296 20.4824 17.296ZM34.754 19.216C33.746 19.216 32.842 19.048 32.042 18.712C31.242 18.36 30.61 17.88 30.146 17.272C29.682 16.648 29.426 15.936 29.378 15.136H31.634C31.698 15.792 32.002 16.328 32.546 16.744C33.106 17.16 33.834 17.368 34.73 17.368C35.562 17.368 36.218 17.184 36.698 16.816C37.178 16.448 37.418 15.984 37.418 15.424C37.418 14.848 37.162 14.424 36.65 14.152C36.138 13.864 35.346 13.584 34.274 13.312C33.298 13.056 32.498 12.8 31.874 12.544C31.266 12.272 30.738 11.88 30.29 11.368C29.858 10.84 29.642 10.152 29.642 9.304C29.642 8.632 29.842 8.016 30.242 7.456C30.642 6.896 31.21 6.456 31.946 6.136C32.682 5.8 33.522 5.632 34.466 5.632C35.922 5.632 37.098 6 37.994 6.736C38.89 7.472 39.37 8.48 39.434 9.76H37.25C37.202 9.072 36.922 8.52 36.41 8.104C35.914 7.688 35.242 7.48 34.394 7.48C33.61 7.48 32.986 7.648 32.522 7.984C32.058 8.32 31.826 8.76 31.826 9.304C31.826 9.736 31.962 10.096 32.234 10.384C32.522 10.656 32.874 10.88 33.29 11.056C33.722 11.216 34.314 11.4 35.066 11.608C36.01 11.864 36.778 12.12 37.37 12.376C37.962 12.616 38.466 12.984 38.882 13.48C39.314 13.976 39.538 14.624 39.554 15.424C39.554 16.144 39.354 16.792 38.954 17.368C38.554 17.944 37.986 18.4 37.25 18.736C36.53 19.056 35.698 19.216 34.754 19.216ZM47.2931 19.216C46.2851 19.216 45.3811 19.048 44.5811 18.712C43.7811 18.36 43.1491 17.88 42.6851 17.272C42.2211 16.648 41.9651 15.936 41.9171 15.136H44.1731C44.2371 15.792 44.5411 16.328 45.0851 16.744C45.6451 17.16 46.3731 17.368 47.2691 17.368C48.1011 17.368 48.7571 17.184 49.2371 16.816C49.7171 16.448 49.9571 15.984 49.9571 15.424C49.9571 14.848 49.7011 14.424 49.1891 14.152C48.6771 13.864 47.8851 13.584 46.8131 13.312C45.8371 13.056 45.0371 12.8 44.4131 12.544C43.8051 12.272 43.2771 11.88 42.8291 11.368C42.3971 10.84 42.1811 10.152 42.1811 9.304C42.1811 8.632 42.3811 8.016 42.7811 7.456C43.1811 6.896 43.7491 6.456 44.4851 6.136C45.2211 5.8 46.0611 5.632 47.0051 5.632C48.4611 5.632 49.6371 6 50.5331 6.736C51.4291 7.472 51.9091 8.48 51.9731 9.76H49.7891C49.7411 9.072 49.4611 8.52 48.9491 8.104C48.4531 7.688 47.7811 7.48 46.9331 7.48C46.1491 7.48 45.5251 7.648 45.0611 7.984C44.5971 8.32 44.3651 8.76 44.3651 9.304C44.3651 9.736 44.5011 10.096 44.7731 10.384C45.0611 10.656 45.4131 10.88 45.8291 11.056C46.2611 11.216 46.8531 11.4 47.6051 11.608C48.5491 11.864 49.3171 12.12 49.9091 12.376C50.5011 12.616 51.0051 12.984 51.4211 13.48C51.8531 13.976 52.0771 14.624 52.0931 15.424C52.0931 16.144 51.8931 16.792 51.4931 17.368C51.0931 17.944 50.5251 18.4 49.7891 18.736C49.0691 19.056 48.2371 19.216 47.2931 19.216ZM56.3041 3.712C55.8881 3.712 55.5361 3.568 55.2481 3.28C54.9601 2.992 54.8161 2.64 54.8161 2.224C54.8161 1.808 54.9601 1.456 55.2481 1.168C55.5361 0.879999 55.8881 0.735999 56.3041 0.735999C56.7041 0.735999 57.0401 0.879999 57.3121 1.168C57.6001 1.456 57.7441 1.808 57.7441 2.224C57.7441 2.64 57.6001 2.992 57.3121 3.28C57.0401 3.568 56.7041 3.712 56.3041 3.712ZM57.3601 5.848V19H55.1761V5.848H57.3601ZM63.2664 8.296C63.7144 7.512 64.3704 6.872 65.2344 6.376C66.0984 5.88 67.0824 5.632 68.1864 5.632C69.3704 5.632 70.4344 5.912 71.3784 6.472C72.3224 7.032 73.0664 7.824 73.6104 8.848C74.1544 9.856 74.4264 11.032 74.4264 12.376C74.4264 13.704 74.1544 14.888 73.6104 15.928C73.0664 16.968 72.3144 17.776 71.3544 18.352C70.4104 18.928 69.3544 19.216 68.1864 19.216C67.0504 19.216 66.0504 18.968 65.1864 18.472C64.3384 17.976 63.6984 17.344 63.2664 16.576V19H61.0824V1.24H63.2664V8.296ZM72.1944 12.376C72.1944 11.384 71.9944 10.52 71.5944 9.784C71.1944 9.048 70.6504 8.488 69.9624 8.104C69.2904 7.72 68.5464 7.528 67.7304 7.528C66.9304 7.528 66.1864 7.728 65.4984 8.128C64.8264 8.512 64.2824 9.08 63.8664 9.832C63.4664 10.568 63.2664 11.424 63.2664 12.4C63.2664 13.392 63.4664 14.264 63.8664 15.016C64.2824 15.752 64.8264 16.32 65.4984 16.72C66.1864 17.104 66.9304 17.296 67.7304 17.296C68.5464 17.296 69.2904 17.104 69.9624 16.72C70.6504 16.32 71.1944 15.752 71.5944 15.016C71.9944 14.264 72.1944 13.384 72.1944 12.376ZM78.4291 3.712C78.0131 3.712 77.6611 3.568 77.3731 3.28C77.0851 2.992 76.9411 2.64 76.9411 2.224C76.9411 1.808 77.0851 1.456 77.3731 1.168C77.6611 0.879999 78.0131 0.735999 78.4291 0.735999C78.8291 0.735999 79.1651 0.879999 79.4371 1.168C79.7251 1.456 79.8691 1.808 79.8691 2.224C79.8691 2.64 79.7251 2.992 79.4371 3.28C79.1651 3.568 78.8291 3.712 78.4291 3.712ZM79.4851 5.848V19H77.3011V5.848H79.4851ZM85.3914 1.24V19H83.2074V1.24H85.3914ZM90.2416 3.712C89.8256 3.712 89.4736 3.568 89.1856 3.28C88.8976 2.992 88.7536 2.64 88.7536 2.224C88.7536 1.808 88.8976 1.456 89.1856 1.168C89.4736 0.879999 89.8256 0.735999 90.2416 0.735999C90.6416 0.735999 90.9776 0.879999 91.2496 1.168C91.5376 1.456 91.6816 1.808 91.6816 2.224C91.6816 2.64 91.5376 2.992 91.2496 3.28C90.9776 3.568 90.6416 3.712 90.2416 3.712ZM91.2976 5.848V19H89.1136V5.848H91.2976ZM97.6839 7.648V15.4C97.6839 16.04 97.8199 16.496 98.0919 16.768C98.3639 17.024 98.8359 17.152 99.5079 17.152H101.116V19H99.1479C97.9319 19 97.0199 18.72 96.4119 18.16C95.8039 17.6 95.4999 16.68 95.4999 15.4V7.648H93.7959V5.848H95.4999V2.536H97.6839V5.848H101.116V7.648H97.6839ZM104.89 3.712C104.474 3.712 104.122 3.568 103.834 3.28C103.546 2.992 103.402 2.64 103.402 2.224C103.402 1.808 103.546 1.456 103.834 1.168C104.122 0.879999 104.474 0.735999 104.89 0.735999C105.29 0.735999 105.626 0.879999 105.898 1.168C106.186 1.456 106.33 1.808 106.33 2.224C106.33 2.64 106.186 2.992 105.898 3.28C105.626 3.568 105.29 3.712 104.89 3.712ZM105.946 5.848V19H103.762V5.848H105.946ZM121.668 11.92C121.668 12.336 121.644 12.776 121.596 13.24H111.084C111.164 14.536 111.604 15.552 112.404 16.288C113.22 17.008 114.204 17.368 115.356 17.368C116.3 17.368 117.084 17.152 117.708 16.72C118.348 16.272 118.796 15.68 119.052 14.944H121.404C121.052 16.208 120.348 17.24 119.292 18.04C118.236 18.824 116.924 19.216 115.356 19.216C114.108 19.216 112.988 18.936 111.996 18.376C111.02 17.816 110.252 17.024 109.692 16C109.132 14.96 108.852 13.76 108.852 12.4C108.852 11.04 109.124 9.848 109.668 8.824C110.212 7.8 110.972 7.016 111.948 6.472C112.94 5.912 114.076 5.632 115.356 5.632C116.604 5.632 117.708 5.904 118.668 6.448C119.628 6.992 120.364 7.744 120.876 8.704C121.404 9.648 121.668 10.72 121.668 11.92ZM119.412 11.464C119.412 10.632 119.228 9.92 118.86 9.328C118.492 8.72 117.988 8.264 117.348 7.96C116.724 7.64 116.028 7.48 115.26 7.48C114.156 7.48 113.212 7.832 112.428 8.536C111.66 9.24 111.22 10.216 111.108 11.464H119.412ZM129.207 19.216C128.199 19.216 127.295 19.048 126.495 18.712C125.695 18.36 125.063 17.88 124.599 17.272C124.135 16.648 123.879 15.936 123.831 15.136H126.087C126.151 15.792 126.455 16.328 126.999 16.744C127.559 17.16 128.287 17.368 129.183 17.368C130.015 17.368 130.671 17.184 131.151 16.816C131.631 16.448 131.871 15.984 131.871 15.424C131.871 14.848 131.615 14.424 131.103 14.152C130.591 13.864 129.799 13.584 128.727 13.312C127.751 13.056 126.951 12.8 126.327 12.544C125.719 12.272 125.191 11.88 124.743 11.368C124.311 10.84 124.095 10.152 124.095 9.304C124.095 8.632 124.295 8.016 124.695 7.456C125.095 6.896 125.663 6.456 126.399 6.136C127.135 5.8 127.975 5.632 128.919 5.632C130.375 5.632 131.551 6 132.447 6.736C133.343 7.472 133.823 8.48 133.887 9.76H131.703C131.655 9.072 131.375 8.52 130.863 8.104C130.367 7.688 129.695 7.48 128.847 7.48C128.063 7.48 127.439 7.648 126.975 7.984C126.511 8.32 126.279 8.76 126.279 9.304C126.279 9.736 126.415 10.096 126.687 10.384C126.975 10.656 127.327 10.88 127.743 11.056C128.175 11.216 128.767 11.4 129.519 11.608C130.463 11.864 131.231 12.12 131.823 12.376C132.415 12.616 132.919 12.984 133.335 13.48C133.767 13.976 133.991 14.624 134.007 15.424C134.007 16.144 133.807 16.792 133.407 17.368C133.007 17.944 132.439 18.4 131.703 18.736C130.983 19.056 130.151 19.216 129.207 19.216Z" fill="#020202" />
                            <rect x="168" y="11" width="70" height="3" fill="#020202" />
                        </svg>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Possibilities 4</li>
                            <li>Possibilities 5</li>
                            <li>Possibilities 6</li>
                            <li>Possibilities 7</li>
                            <li>Possibilities 8</li>
                            <li>Possibilities 9</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="comments" className="container">
                <div className="section-title">
                    <h2 className="title">User comments</h2>
                </div>
                <div className='comment'>
                    <img className='avatar' src='/images/users/null.png' alt='' />
                    <h4>Courtney Henry</h4>
                    <p>Marketing Coordinator</p>
                    <p className='message'>Nisl nisi pulvinar dui justo, lorem. Sed quam eu cras at. Sed quis id mauris massa. Eros, nec egestas vestibulum augue aenean arcu leo vulputate. Magna feugiat ac adipiscing mattis velit facilisi metus. Dolor urna, mi at tincidunt. Nulla.</p>
                    <menu>
                        <button className='btn'><img src='/images/icons/icon.comment.next.svg' alt='' /></button>
                        <button className='btn'><img src='/images/icons/icon.comment.prev.svg' alt='' /></button>
                    </menu>
                </div>
            </section>
            <section id="world" class="container">
                <img src="/images/best.arts.and.products.png" alt="" />
            </section>
        </Layout>
    );
}

export default HomePage;