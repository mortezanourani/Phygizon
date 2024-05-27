import React from "react";
import HeroHeader from "../../components/HeroHeader";

import './index.css';

function Blog() {
    const root = document.getElementById('root');
    root.classList.add('blogpage');

    return (
        <>
            <HeroHeader
                title="Our Blog"
                description="Resources and insights" />

            <section>
                <div className="tabs">
                    <button className="btn lg text">Buyers & Customets</button>
                    <button className="btn lg text">Sellers</button>
                </div>
                <div className="recent-post">
                    <div className="container">
                        <h2 className="section-title">Recent blog post</h2>
                        <div className="post">
                            <img className="post-image" src="/images/blog/recent-post.png" alt="" />
                            <span className="author-date">
                                <p className="author">Olivia Rhye</p>
                                <i className="sep"></i>
                                <p className="date">20 Jan 2024</p>
                            </span>
                            <a className="title" href="#">
                                <h2>UX review presentations</h2>
                                <img className="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                            </a>
                            <p className="abstract">How do you create compelling presentations that wow your colleagues and impress
                                your managers?</p>
                            <div className="categories">
                                <a className="badge green" href="#">Design</a>
                                <a className="badge violet" href="#">Research</a>
                                <a className="badge red" href="#">Presentation</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog">
                    <div className="container">
                        <h2 className="section-title">All blog posts</h2>
                        <div className="posts">
                            <div className="post">
                                <img className="post-image" src="/images/blog/recent-post.png" alt="" />
                                <span className="author-date">
                                    <p className="author">Olivia Rhye</p>
                                    <i className="sep"></i>
                                    <p className="date">20 Jan 2024</p>
                                </span>
                                <a className="title" href="#">
                                    <h2>UX review presentations</h2>
                                    <img className="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                                </a>
                                <p className="abstract">How do you create compelling presentations that wow your colleagues and
                                    impress
                                    your managers?</p>
                                <div className="categories">
                                    <a className="badge green" href="#">Design</a>
                                    <a className="badge violet" href="#">Research</a>
                                    <a className="badge red" href="#">Presentation</a>
                                </div>
                            </div>
                            <div className="post">
                                <img className="post-image" src="/images/blog/recent-post.png" alt="" />
                                <span className="author-date">
                                    <p className="author">Olivia Rhye</p>
                                    <i className="sep"></i>
                                    <p className="date">20 Jan 2024</p>
                                </span>
                                <a className="title" href="#">
                                    <h2>UX review presentations</h2>
                                    <img className="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                                </a>
                                <p className="abstract">How do you create compelling presentations that wow your colleagues and
                                    impress
                                    your managers?</p>
                                <div className="categories">
                                    <a className="badge green" href="#">Design</a>
                                    <a className="badge violet" href="#">Research</a>
                                    <a className="badge red" href="#">Presentation</a>
                                </div>
                            </div>
                            <div className="post">
                                <img className="post-image" src="/images/blog/recent-post.png" alt="" />
                                <span className="author-date">
                                    <p className="author">Olivia Rhye</p>
                                    <i className="sep"></i>
                                    <p className="date">20 Jan 2024</p>
                                </span>
                                <a className="title" href="#">
                                    <h2>UX review presentations</h2>
                                    <img className="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                                </a>
                                <p className="abstract">How do you create compelling presentations that wow your colleagues and
                                    impress
                                    your managers?</p>
                                <div className="categories">
                                    <a className="badge green" href="#">Design</a>
                                    <a className="badge violet" href="#">Research</a>
                                    <a className="badge red" href="#">Presentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
