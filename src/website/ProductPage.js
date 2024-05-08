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
            <section id="product" className="container">
                <div className="image">
                    <img src="/images/product.product.png" alt="" />
                </div>
                <div className="product-info">
                    <h2 className="product-title">{data.name}</h2>
                    <div className="information">
                        <span>Sell By {data.brand.name}</span>
                        <span>Rated {data.rate}</span>
                        <span>Reviews</span>
                    </div>
                    <div className="options">
                        <div className="color">
                            <label for="">Color</label>
                            <input type="radio" name="color" id={data.color.id} value={data.color.name} />
                            <label for={data.color.id}>{data.color.name}</label>
                            <input type="radio" name="" id="" />Purple
                            <input type="radio" name="" id="" />Blue
                            <input type="radio" name="" id="" />Orange
                            <input type="radio" name="" id="" />Red
                        </div>
                        <div className="size">
                            <label for="">Size</label>
                            <input type="radio" name="" id="" className="btn md ghost gray" />Sm
                            <input type="radio" name="" id="" className="btn md ghost gray" />Md
                            <input type="radio" name="" id="" className="btn md ghost gray" />Lg
                        </div>
                        <div className="material">
                            <label for="">Material</label>
                            <input type="radio" name="material" id={data.material.id} value={data.material.name} />
                            <label for={data.material.id} className="badge">{data.material.name}</label>
                            <input id="m1" type="radio" name="material" />
                            <label for="m1" className="badge">Natural Leather</label>
                            <input id="m2" type="radio" name="material" />
                            <label for="m2" className="badge">Artificial Leather</label>
                            <input id="m3" type="radio" name="material" />
                            <label for="m3" className="badge">Plastic</label>
                        </div>
                    </div>
                    <div className="safe-holder">
                        <i>icon</i>
                        <span>
                            <h3>Safe Holder</h3>
                            <p>You can keep the product in the storage company</p>
                        </span>
                        <button>Select</button>
                    </div>
                </div>
                <div className="product-menu">
                    <button className="btn md cta">NFT</button>
                    <button className="btn md text gray">Save</button>
                    <button className="btn md text gray">360 View</button>
                    <button className="btn md text gray">VR View</button>
                    <button className="btn md text gray">Pricing</button>
                    <button className="btn md text gray">Compare</button>
                    <button className="btn md text gray">Share</button>
                </div>
            </section>
            <section className="cart container" id="addtocart">
                <div className="">
                    <div className="timer">
                        <h3 className="title pink">Amazing offer</h3>
                        <div className="digits-group">
                            <span className="digit pink">02</span>
                            <span className="digit pink">09</span>
                            <span className="digit pink">44</span>
                            <span className="digit pink">21</span>
                        </div>
                    </div>
                    <div className="cost">
                        <p className="before">{data.currentPrice.price} MGC</p>
                        <h2 className="after">{data.currentPrice.discount_price} MGC
                            <p className="dollar">($15.87)</p>
                        </h2>
                    </div>
                    <div className="action">
                        <span className="count">
                            <button className="btn ghost gray">-</button>
                            <h3>1</h3>
                            <button className="btn ghost gray">+</button>
                        </span>
                        <button className="btn xl cta" onClick={() => addToCart(productId)}>Add to Cart</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="tabs">
                    <button>Details</button>
                    <button>Reviews</button>
                    <button>FAQ</button>
                </div>
                <div className="details">
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
                <div className="reviews">
                    {
                        data.comments.map(comment => (
                            <div className="comment">
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
                <div className="faq">
                </div>
            </section>
            <section id="similars" className="container">
                <div className="product-card">
                    <img src="/images/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove"></button>
                                <button className="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/images/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove"></button>
                                <button className="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/images/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove"></button>
                                <button className="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/images/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove"></button>
                                <button className="add"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ProductPage;
