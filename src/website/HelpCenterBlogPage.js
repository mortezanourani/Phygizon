import React from "react";
import Layout from './Layout';
import HeroHeader from "./HeroHeader";

import '../css/blog.css';

const BlogPage = () => {
    const root = document.getElementById('root');
    root.classList.add('blogpage');

    return (
        <Layout>
            <HeroHeader
                title="Our Blog"
                description="Resources and insights" />

            <section>
                <div class="tabs">
                    <button class="btn lg text">Buyers & Customets</button>
                    <button class="btn lg text">Sellers</button>
                </div>
                <div class="recent-post">
                    <div class="container">
                        <h2 class="section-title">Recent blog post</h2>
                        <div class="post">
                            <img class="post-image" src="/images/blog/recent-post.png" alt="" />
                            <span class="author-date">
                                <p class="author">Olivia Rhye</p>
                                <i class="sep"></i>
                                <p class="date">20 Jan 2024</p>
                            </span>
                            <a class="title" href="#">
                                <h2>UX review presentations</h2>
                                <img class="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                            </a>
                            <p class="abstract">How do you create compelling presentations that wow your colleagues and impress
                                your managers?</p>
                            <div class="categories">
                                <a class="badge green" href="#">Design</a>
                                <a class="badge violet" href="#">Research</a>
                                <a class="badge red" href="#">Presentation</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog">
                    <div class="container">
                        <h2 class="section-title">All blog posts</h2>
                        <div class="posts">
                            <div class="post">
                                <img class="post-image" src="/images/blog/recent-post.png" alt="" />
                                <span class="author-date">
                                    <p class="author">Olivia Rhye</p>
                                    <i class="sep"></i>
                                    <p class="date">20 Jan 2024</p>
                                </span>
                                <a class="title" href="#">
                                    <h2>UX review presentations</h2>
                                    <img class="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                                </a>
                                <p class="abstract">How do you create compelling presentations that wow your colleagues and
                                    impress
                                    your managers?</p>
                                <div class="categories">
                                    <a class="badge green" href="#">Design</a>
                                    <a class="badge violet" href="#">Research</a>
                                    <a class="badge red" href="#">Presentation</a>
                                </div>
                            </div>
                            <div class="post">
                                <img class="post-image" src="/images/blog/recent-post.png" alt="" />
                                <span class="author-date">
                                    <p class="author">Olivia Rhye</p>
                                    <i class="sep"></i>
                                    <p class="date">20 Jan 2024</p>
                                </span>
                                <a class="title" href="#">
                                    <h2>UX review presentations</h2>
                                    <img class="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                                </a>
                                <p class="abstract">How do you create compelling presentations that wow your colleagues and
                                    impress
                                    your managers?</p>
                                <div class="categories">
                                    <a class="badge green" href="#">Design</a>
                                    <a class="badge violet" href="#">Research</a>
                                    <a class="badge red" href="#">Presentation</a>
                                </div>
                            </div>
                            <div class="post">
                                <img class="post-image" src="/images/blog/recent-post.png" alt="" />
                                <span class="author-date">
                                    <p class="author">Olivia Rhye</p>
                                    <i class="sep"></i>
                                    <p class="date">20 Jan 2024</p>
                                </span>
                                <a class="title" href="#">
                                    <h2>UX review presentations</h2>
                                    <img class="ext-link" src="/images/icons/icon.external.link.svg" alt="" />
                                </a>
                                <p class="abstract">How do you create compelling presentations that wow your colleagues and
                                    impress
                                    your managers?</p>
                                <div class="categories">
                                    <a class="badge green" href="#">Design</a>
                                    <a class="badge violet" href="#">Research</a>
                                    <a class="badge red" href="#">Presentation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default BlogPage;