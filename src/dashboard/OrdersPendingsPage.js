import React from "react";
import Layout from './Layout';

import '../css/orders.css';
import { GetOrders } from "../API";

const PendingsPage = () => {
    const orders = GetOrders();

    return (
        <Layout>
            <div className="pendings" id="pendings">
                <nav>
                    <a href="/dashboard/orders"><button className="btn md ghost gray active">Pending Payments</button></a>
                    <a href="/dashboard/orders/waiting"><button className="btn md text gray">Waiting for NFT</button></a>
                    <a href="/dashboard/orders/inprogress"><button className="btn md text gray">In Progress</button></a>
                    <a href="/dashboard/orders/delivered"><button className="btn md text gray">Delivered</button></a>
                    <a href="/dashboard/orders/returned"><button className="btn md text gray">Returned</button></a>
                    <a href="/dashboard/orders/canceled"><button className="btn md text gray">Canceled</button></a>
                </nav>
                <div className="records">
                    {
                        orders.count === null ? (
                            <h3>Loading...</h3>
                        ) : (
                            orders.items.map(order => (
                                order.order_status === 1 ? (
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
                                            <p>Asset <span className="badge green">NFT</span></p>
                                            <p>Status <span className="badge red">Pending</span></p>
                                        </div>
                                        <div>
                                            <div className="album">
                                                <img src="/images/products/product.png" alt="" />
                                                <img src="/images/products/product.png" alt="" />
                                                <img src="/images/products/product.png" alt="" />
                                                <img src="/images/products/product.png" alt="" />
                                            </div>
                                            <a href={"/dashboard/order/" + order.id} className="btn md ghost action">
                                                Finalize your purchase
                                                <img src="/images/icons/btnarrow.svg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                ) : (null)
                            ))
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

export default PendingsPage;