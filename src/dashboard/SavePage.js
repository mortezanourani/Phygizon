import React, { useState } from "react"
import Layout from "./Layout"
import { WishList, addToCart, removeFromWishList } from "../API";

import '../css/wishlist.css';

const SavePage = () => {
    const items = WishList();
    // alert(JSON.stringify(products));
    return (
        <Layout>
            <div id="wishlist">
                <div className="section-header">
                    <h3 className="page-title">Save</h3>
                </div>
                <div className="items">
                    {
                        items.map(item => (
                            (item.is_active) ? (
                                <div className="product-card">
                                    {
                                        (item.product.nft_link) ? (
                                            <a href={item.product.nft_link}
                                                className={"nft-link" + ((item.product.is_nft_required) ? " required" : "")}>
                                            </a>
                                        ) : null
                                    }
                                    <a href={"/product/" + item.product.id + "/"}>
                                        {
                                            (item.product.current_price.discount) ? (
                                                <span className='discount'>
                                                    {item.product.current_price.discount * 100} %
                                                </span>
                                            ) : null
                                        }
                                        <img src={item.product.image} alt="" />
                                    </a>
                                    <div className="info">
                                        <a href={"/product/" + item.product.id + "/"}>
                                            <h4 className="title">{item.product.name}</h4>
                                        </a>
                                        <div className="cart">
                                            <div className="cost">
                                                <h5 className="off">{item.product.current_price.currency.name + item.product.current_price.price}</h5>
                                                <h4 className="final">{item.product.current_price.currency.name + item.product.current_price.discount_price}</h4>
                                            </div>
                                            <div className="buttons">
                                                <button className="remove" onClick={() => removeFromWishList(item.product.id)}>
                                                    <img src="/images/icons/icon.recyclebin.svg" alt="" />
                                                </button>
                                                <button className="add" onClick={() => addToCart(item.product.id)}>
                                                    <img src="/images/icons/icon.addtocart.svg" alt="" />
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default SavePage;