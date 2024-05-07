import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { GetOrders } from "../API";

import '../css/orders.css';

const OrdersPage = (e) => {
    const [statusId, setStatusId] = useState(1);

    const filterOrders = (e) => {
        setStatusId(parseInt(e.target.id));
        document.getElementsByClassName('active')[0].className = "btn md text gray";
        e.target.className = "btn md ghost gray active";
    }

    const allOrders = GetOrders().items;
    const orders = allOrders.filter(order => { return order.order_status === statusId });

    return (
        <Layout>
            <div className="waitings" id="waitings">
                <nav>
                    <button id="1" className="btn md text gray ghost active" onClick={filterOrders}>Pending Payments</button>
                    <button id="2" className="btn md text gray" onClick={filterOrders}>Waiting for NFT</button>
                    <button id="3" className="btn md text gray" onClick={filterOrders}>In Progress</button>
                    <button id="4" className="btn md text gray" onClick={filterOrders}>Delivered</button>
                    <button id="5" className="btn md text gray" onClick={filterOrders}>Returned</button>
                    <button id="6" className="btn md text gray" onClick={filterOrders}>Canceled</button>
                </nav>
                <div className="records">
                    {JSON.stringify(orders)}
                    {
                        orders === null ? (
                            <h3>Loading...</h3>
                        ) : (
                            orders.map(order => (
                                <div className="order-item">
                                    <div>
                                        <p>Order ID <b>{order.id}</b></p>
                                        <p>Price <b>$ {order.total_price}</b></p>
                                    </div>
                                    <div>
                                        <p>RayPoint <b>0</b></p>

                                        <p>Date <b>{order.insert_dt}</b></p>
                                    </div>
                                    <div>
                                        <p>Asset <span className="badge red">NFT</span></p>
                                        {
                                            order.order_status === 1 ? (
                                                <p>Status <span className="badge red">Pending</span></p>
                                            ) : order.order_status === 2 || 3 ? (
                                                <p>Status <span className="badge green">In Progress</span></p>
                                            ) : order.order_status === 4 ? (
                                                <p>Status <span className="badge green">Delivered</span></p>
                                            ) : order.order_status === 5 ? (
                                                <p>Status <span className="badge red">Returned</span></p>
                                            ) : (
                                                <p>Status <span className="badge violet">Cancelled</span></p>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <div className="album">
                                            <img src="/images/products/product.png" alt="" />
                                            <img src="/images/products/product.png" alt="" />
                                            <img src="/images/products/product.png" alt="" />
                                            <img src="/images/products/product.png" alt="" />
                                        </div>
                                        <a href="#" className="btn md ghost action">
                                            Buy your NFT
                                            <img src="/images/icons/btnarrow.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </Layout>
    );
}

export default OrdersPage;