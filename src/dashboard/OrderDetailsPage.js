import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { OrderDetails } from "../API";

import '../css/orders.css';

const OrderDetailsPage = () => {
    const url = window.location;
    const urlParameters = url.toString().trim().split('/');
    const orderId = urlParameters[urlParameters.length - 1].length < 1
        ? urlParameters[urlParameters.length - 2]
        : urlParameters[urlParameters.length - 1];

    const details = OrderDetails(orderId);

    return (
        <Layout>
            <div className="details" id="details">
                <div className="headbar">
                    <a href="/dashboard/orders/">
                        <button className="btn text back"></button>
                    </a>
                    <div className="number-date">
                        <h3 className="number"><b>Order</b> {details.number}</h3>
                        <p className="date"><b>Order date</b> {details.insertData}</p>
                    </div>
                    <menu>
                        <a href={"/dashboard/order/return/" + orderId} className="btn ghost md">Return</a>
                        <a href={"/dashboard/order/invoice/" + orderId} className="btn cta md">Inovice</a>
                    </menu>
                </div>
                <div className="content">
                    <div className="items">
                        {
                            details.items.map(item => (
                                <div className="cart-item">
                                    <div>
                                        <p><b>{item.product.name}</b></p>
                                        <p>{item.product.rate}</p>
                                    </div>
                                    <div>
                                        <p>Item Price <b>{item.product.current_price.price}</b></p>
                                        <p><b></b></p>
                                    </div>
                                    <div>
                                        <p>Discount: <b>{item.product.current_price.discount}</b></p>
                                        <p>Subtotal: <b>{item.product.current_price.discount_price}</b></p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="info">
                        <h4 className="ttl">Customer</h4>
                        <span>
                            <p>Transferee</p>
                            <h4>{details.address}</h4>
                        </span>
                        <span>
                            <p>Mobile number</p>
                            <h4>{details.address}</h4>
                        </span>
                        <h4 className="ttl bt">Shippinh</h4>
                        <span>
                            <p>Keeper Address</p>
                            <h4>{details.address}</h4>
                        </span>
                        <span>
                            <p>Personal Address</p>
                            <h4>{details.address}</h4>
                        </span>
                        <h4 className="ttl bt">Payment</h4>
                        <span>
                            <p>Shipping cost</p>
                            <h4>{details.shippingPrice}</h4>
                        </span>
                        <span>
                            <p>Keeper cost</p>
                            <h4>{details.tax}</h4>
                        </span>
                        <span>
                            <p>Phygizon Score</p>
                            <h4>{details.discount}</h4>
                        </span>
                        <span>
                            <p>Total amount</p>
                            <h4>{details.totalPrice}</h4>
                        </span>
                        <span>
                            <p>Total amount (With Mgc)</p>
                            <h4>{details.totalPrice}</h4>
                        </span>
                    </div>
                </div>
            </div>
        </Layout >
    );
}

export default OrderDetailsPage;