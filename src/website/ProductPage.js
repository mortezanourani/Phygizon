import React from "react";
import Layout from "./Layout";
import { Product, addToCart } from "../API";

import '../css/product.css';

const ProductPage = () => {
    const url = window.location;
    const urlParameters = url.toString().trim().split('/');
    const productId = urlParameters[urlParameters.length - 1].length < 1
        ? urlParameters[urlParameters.length - 2]
        : urlParameters[urlParameters.length - 1];

    const data = Product(productId);

    return (
        <Layout>
            <section className="product">
                <div className="main container">
                    {/* <div className="section-title">
                        <h2 className="title">{data.name}</h2>
                        <p style={{ marginBottom: '25px' }}>{data.categoryDetail}</p>
                        <p>{data.name}</p>
                        <p>{JSON.stringify(data.category)}</p>
                        <p>{JSON.stringify(data.color)}</p>
                        <p>{JSON.stringify(data.brand)}</p>
                        <p>{JSON.stringify(data.material)}</p>
                        <p>{data.rate}</p>
                        <p>{data.stock}</p>
                        <p>{data.hasStock}</p>
                        <p>{data.image}</p>
                        <p>{data.isNftRequired}</p>
                        <p>{JSON.stringify(data.currentPrice)}</p>
                        <p>{JSON.stringify(data.prices)}</p>
                        <p>{JSON.stringify(data.comments)}</p>
                        <p>{data.nftLink}</p>
                        <p>{data.description}</p>
                        <p>{JSON.stringify(data.album)}</p>
                        <p>{JSON.stringify(data.specifications)}</p>
                    </div> */}
                </div>
            </section>
            <section id="product" class="container">
                <div class="image">
                    <img src="/images/product.product.png" alt="" />
                </div>
                <div class="product-info">
                    <h2 class="product-title">{data.name}</h2>
                    <div class="information">
                        <span>Sell By {data.brand.name}</span>
                        <span>Rated {data.rate}</span>
                        <span>Reviews</span>
                    </div>
                    <div class="options">
                        <div class="color">
                            <label for="">Color</label>
                            <input type="radio" name="color" id={data.color.id} value={data.color.name} />
                            <label for={data.color.id}>{data.color.name}</label>
                            <input type="radio" name="" id="" />Purple
                            <input type="radio" name="" id="" />Blue
                            <input type="radio" name="" id="" />Orange
                            <input type="radio" name="" id="" />Red
                        </div>
                        <div class="size">
                            <label for="">Size</label>
                            <input type="radio" name="" id="" class="btn md ghost gray" />Sm
                            <input type="radio" name="" id="" class="btn md ghost gray" />Md
                            <input type="radio" name="" id="" class="btn md ghost gray" />Lg
                        </div>
                        <div class="material">
                            <label for="">Material</label>
                            <input type="radio" name="material" id={data.material.id} value={data.material.name} />
                            <label for={data.material.id} class="badge">{data.material.name}</label>
                            <input id="m1" type="radio" name="material" />
                            <label for="m1" class="badge">Natural Leather</label>
                            <input id="m2" type="radio" name="material" />
                            <label for="m2" class="badge">Artificial Leather</label>
                            <input id="m3" type="radio" name="material" />
                            <label for="m3" class="badge">Plastic</label>
                        </div>
                    </div>
                    <div class="safe-holder">
                        <i>icon</i>
                        <span>
                            <h3>Safe Holder</h3>
                            <p>You can keep the product in the storage company</p>
                        </span>
                        <button>Select</button>
                    </div>
                </div>
                <div class="product-menu">
                    <button class="btn md cta">NFT</button>
                    <button class="btn md text gray">Save</button>
                    <button class="btn md text gray">360 View</button>
                    <button class="btn md text gray">VR View</button>
                    <button class="btn md text gray">Pricing</button>
                    <button class="btn md text gray">Compare</button>
                    <button class="btn md text gray">Share</button>
                </div>
            </section>
            <section class="cart container" id="addtocart">
                <div class="">
                    <div class="timer">
                        <h3 class="title pink">Amazing offer</h3>
                        <div class="digits-group">
                            <span class="digit pink">02</span>
                            <span class="digit pink">09</span>
                            <span class="digit pink">44</span>
                            <span class="digit pink">21</span>
                        </div>
                    </div>
                    <div class="cost">
                        <p class="before">{data.currentPrice.price} MGC</p>
                        <h2 class="after">{data.currentPrice.discount_price} MGC
                            <p class="dollar">($15.87)</p>
                        </h2>
                    </div>
                    <div class="action">
                        <span class="count">
                            <button class="btn ghost gray">-</button>
                            <h3>1</h3>
                            <button class="btn ghost gray">+</button>
                        </span>
                        <button class="btn xl cta" onClick={() => addToCart(productId)}>Add to Cart</button>
                    </div>
                </div>
            </section>
            <section>
                <div class="tabs">
                    <button>Details</button>
                    <button>Reviews</button>
                    <button>FAQ</button>
                </div>
                <div class="details">
                    <div>
                        <h3>Specification</h3>
                        <table>
                            {
                                data.specifications.map(specification => (
                                    <tr>
                                        <td>{specification.specification_type.name}</td>
                                        <td>{specification.value}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <div dangerouslySetInnerHTML={{ __html: data.description }} />
                    </div>
                </div>
                <div class="reviews">
                    {
                        data.comments.map(comment => (
                            <div class="comment">
                                <div>
                                    <img src={comment.user.avatar} alt="" />
                                    <span>
                                        <h3>{comment.user.__str__}</h3>
                                        <span>{comment.rate}</span>
                                    </span>
                                    <p>(3 Days ago)</p>
                                </div>
                                {/* <h3>Title</h3> */}
                                <p>{comment.body}</p>
                                <span>
                                    <button>Like</button>
                                    <button>Dislike</button>
                                </span>
                            </div>
                        ))
                    }
                    {/* <div>
                        <button>Newest</button>
                        <span>
                            <button>Previous</button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            ...
                            <button>8</button>
                            <button>9</button>
                            <button>10</button>
                            <button>Next</button>
                        </span>
                        <button>Laft a comment</button>
                    </div> */}
                </div>
                <div class="faq">
                </div>
            </section>
            <section id="similars" class="container">
                <div class="product-card">
                    <img src="/images/product.png" alt="" />
                    <div class="info">
                        <h4 class="title">Berry silver gemstone bracelet stack</h4>
                        <div class="cart">
                            <div class="cost">
                                <h5 class="off">$204.50</h5>
                                <h4 class="final">$185.00</h4>
                            </div>
                            <div class="buttons">
                                <button class="remove"></button>
                                <button class="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-card">
                    <img src="/images/product.png" alt="" />
                    <div class="info">
                        <h4 class="title">Berry silver gemstone bracelet stack</h4>
                        <div class="cart">
                            <div class="cost">
                                <h5 class="off">$204.50</h5>
                                <h4 class="final">$185.00</h4>
                            </div>
                            <div class="buttons">
                                <button class="remove"></button>
                                <button class="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-card">
                    <img src="/images/product.png" alt="" />
                    <div class="info">
                        <h4 class="title">Berry silver gemstone bracelet stack</h4>
                        <div class="cart">
                            <div class="cost">
                                <h5 class="off">$204.50</h5>
                                <h4 class="final">$185.00</h4>
                            </div>
                            <div class="buttons">
                                <button class="remove"></button>
                                <button class="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-card">
                    <img src="/images/product.png" alt="" />
                    <div class="info">
                        <h4 class="title">Berry silver gemstone bracelet stack</h4>
                        <div class="cart">
                            <div class="cost">
                                <h5 class="off">$204.50</h5>
                                <h4 class="final">$185.00</h4>
                            </div>
                            <div class="buttons">
                                <button class="remove"></button>
                                <button class="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ProductPage;