import React from "react";
import Loading from '../../components/Loading';
import { Product, addToCart, addToWishlist } from "../../API";

import ImagesSlider from "./ImagesSlider";

const SingleProduct = () => {
    const url = window.location;
    const urlParameters = url.toString().trim().split('/');
    const productId = urlParameters[urlParameters.length - 1].length < 1
        ? urlParameters[urlParameters.length - 2]
        : urlParameters[urlParameters.length - 1];

    const data = Product(productId);

    if (data.loading) {
        return <Loading component />;
    }

    const handleTab = (e) => {
        const tabLinks = document.getElementsByClassName('tab-link');
        for (let i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove('active');
        }

        e.target.classList.add('active');

        const tabContents = document.getElementById('tabs-content');
        tabContents.className = "tab-content";
        tabContents.classList.add(e.target.id.replace('product-', ''));
    }
    return (
        <>
            <section id="product" className="container">
                <div className="product-content">
                    <ImagesSlider
                        image={data.image}
                        album={data.album}
                    />
                    <div className="product-info">
                        <h2 className="product-title">{data.name}</h2>
                        <div className="information">
                            <div className="seller">
                                <img src={'/images/brands/' + data.brand.id + '.svg'} alt="" />
                                <span>
                                    <p>Sell by</p>
                                    <h5>{data.brand.name}</h5>
                                </span>
                            </div>
                            <div className="rate">
                                <img src="/images/icons/icon.rate.star.svg" alt="" />
                                <span>
                                    <p>Rating</p>
                                    <h5>{data.rate}</h5>
                                </span>
                            </div>
                            <div className="reviews">
                                <img src='/images/icons/icon.reviews.svg' alt="" />
                                <span>
                                    <p>Reviews</p>
                                    <h5>{data.comments.length}</h5>
                                </span>
                            </div>
                        </div>
                        <div className="options">
                            <div className="color">
                                <h4 className="option-title">Color</h4>
                                <div className="option-value option-color">
                                    <span className="color-demo" style={{ backgroundColor: data.color.color }}></span>
                                    <p className="color-value">{data.color.name}</p>
                                </div>
                            </div>
                            <div className="size">
                                <h4 className="option-title">Size</h4>
                                <div className="option-value active">
                                    <p>M</p>
                                </div>
                            </div>
                            <div className="material">
                                <h4 className="option-title">Material</h4>
                                <div className="option-value active">
                                    <p>{data.material.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="safe-holder">
                            <div className="safe-holder-text">
                                <i>
                                    <img src='/images/icons/icon.safe.holder.svg' alt="" />
                                </i>
                                <span className="caption">
                                    <h3>Safe Holder</h3>
                                    <p>You can keep the product in the storage company</p>
                                </span>
                            </div>
                            <button className="btn ghost gray dark md">Select</button>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    {
                        (data.nftLink) ? (
                            <a href={data.nftLink}>
                                <button id="nft" className="btn md text gray active">
                                    {
                                        (data.isNftRequired) ? (
                                            <img src="/images/icons/icon.tag.nft.required.svg" alt="" />
                                        ) : (
                                            <img src="/images/icons/icon.tag.nft.svg" alt="" />
                                        )
                                    }
                                </button>
                            </a>
                        ) : null
                    }
                    <button id="save" className="btn md text gray" onClick={() => addToWishlist(productId)}>
                        <img src="/images/icons/icon.product.heart.svg" alt="" />
                        Save
                    </button>
                    <button id="view" className="btn md text gray">
                        <img src="/images/icons/icon.product.360.svg" alt="" />
                        360 View
                    </button>
                    <button id="vr" className="btn md text gray">
                        <img src="/images/icons/icon.product.vr.svg" alt="" />
                        VR View
                    </button>
                    <button id="pricing" className="btn md text gray">
                        <img src="/images/icons/icon.product.pricing.svg" alt="" />
                        Pricing
                    </button>
                    <button id="compare" className="btn md text gray">
                        <img src="/images/icons/icon.product.compare.svg" alt="" />
                        Compare
                    </button>
                    <button id="share" className="btn md text gray">
                        <img src="/images/icons/icon.product.share.svg" alt="" />
                        Share
                    </button>
                </div>
            </section>
            <section className="container">
                <div className="tab t1">
                    <button id="product-details" className="tab-link active" onClick={handleTab}>Details</button>
                    <button id="product-reviews" className="tab-link" onClick={handleTab}>Reviews</button>
                    <button>FAQ</button>
                </div>
                <div id="tabs-content" className="tab-content details">
                    <div className="details">
                        <div className="specifications">
                            <h3>Specification</h3>
                            <div className="properties">
                                {
                                    data.specifications.map(specification => (
                                        <div className="property">
                                            <td className="prop-name">{specification.specification_type.name}</td>
                                            <td className="prop-value">{specification.value}</td>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="descriptions">
                            <h3>Description</h3>
                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                    </div>
                    <div className="reviews">
                        {
                            data.comments.map(comment => (
                                <div className="comment">
                                    <img className="avatar" src={comment.user.avatar} alt="" />
                                    <div className="content">
                                        <div className="title">
                                            <span>
                                                <h3>{comment.user.__str__}</h3>
                                                <span>
                                                    <img src="/images/icons/icon.rate.star.small.svg" alt="" />
                                                </span>
                                            </span>
                                            <p>({comment.rate} Days ago)</p>
                                        </div>
                                        <p className="body">{comment.body}</p>
                                        <span className="rate-menu">
                                            <button className="like">
                                                <img src="/images/icons/icon.comment.like.svg" alt="" />
                                                {comment.like}
                                            </button>
                                            <button className="dislike">
                                                <img src="/images/icons/icon.comment.dislike.svg" alt="" />
                                                {comment.dislike}
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="cart container" id="addtocart">
                <div className="">
                    {/* <div className="timer">
                        <h3 className="title pink">Amazing offer</h3>
                        <div className="digits-group">
                            <span className="digit pink">02</span>
                            <span className="digit pink">09</span>
                            <span className="digit pink">44</span>
                            <span className="digit pink">21</span>
                        </div>
                    </div> */}
                    <div className="cost">
                        {
                            (data.currentPrice.discount !== 0) ? (
                                <p className="before">
                                    {
                                        data.currentPrice.price
                                        + " "
                                        + ((data.currentPrice.currency !== undefined) ? data.currentPrice.currency.name : null)
                                    }
                                </p>
                            ) : null
                        }
                        <h2 className="after">
                            {
                                data.currentPrice.discount_price
                                + " "
                                + ((data.currentPrice.currency !== undefined) ? data.currentPrice.currency.name : null)
                            }
                            {/* <p className="dollar">($15.87)</p> */}
                        </h2>
                    </div>
                    <div className="action">
                        <span className="count">
                            <button className="btn ghost gray">
                                <img src="/images/icons/icon.cart.quantity.down.svg" alt="" />
                            </button>
                            <h2>1</h2>
                            <button className="btn ghost gray">
                                <img src="/images/icons/icon.cart.quantity.up.svg" alt="" />
                            </button>
                        </span>
                        <button className="btn xl cta" onClick={() => addToCart(productId)}>Add to Cart</button>
                    </div>
                </div>
            </section>
            {/* <section id="similars" className="container">
                <div className="product-card">
                    <img src="/images/products/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove">
                                    <img src="/images/icons/icon.recyclebin.svg" alt="" />
                                </button>
                                <button className="add">
                                    <img src="/images/icons/icon.addtocart.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/images/products/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove">
                                    <img src="/images/icons/icon.recyclebin.svg" alt="" />
                                </button>
                                <button className="add">
                                    <img src="/images/icons/icon.addtocart.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/images/products/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove">
                                    <img src="/images/icons/icon.recyclebin.svg" alt="" />
                                </button>
                                <button className="add">
                                    <img src="/images/icons/icon.addtocart.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="/images/products/product.png" alt="" />
                    <div className="info">
                        <h4 className="title">Berry silver gemstone bracelet stack</h4>
                        <div className="cart">
                            <div className="cost">
                                <h5 className="off">$204.50</h5>
                                <h4 className="final">$185.00</h4>
                            </div>
                            <div className="buttons">
                                <button className="remove">
                                    <img src="/images/icons/icon.recyclebin.svg" alt="" />
                                </button>
                                <button className="add">
                                    <img src="/images/icons/icon.addtocart.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default SingleProduct;
