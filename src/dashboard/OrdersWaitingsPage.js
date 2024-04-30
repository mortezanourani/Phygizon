import React from "react";
import Layout from "./Layout";

import '../css/orders.css';

const WaitingsPage = () => {
    return (
        <Layout>
            <div className="waitings" id="waitings">
                <nav>
                    <a href="/dashboard/orders"><button className="btn md text gray">Pending Payments</button></a>
                    <a href="/dashboard/orders/waiting"><button className="btn md ghost gray active">Waiting for NFT</button></a>
                    <a href="/dashboard/orders/inprogress"><button className="btn md text gray">In Progress</button></a>
                    <a href="/dashboard/orders/delivered"><button className="btn md text gray">Delivered</button></a>
                    <a href="/dashboard/orders/returned"><button className="btn md text gray">Returned</button></a>
                    <a href="/dashboard/orders/canceled"><button className="btn md text gray">Canceled</button></a>
                </nav>
                <div className="records">
                    <div className="order-item">
                        <div>
                            <p>Order ID <b>18441</b></p>
                            <p>Price <b>$85</b></p>
                        </div>
                        <div>
                            <p>RayPoint <b>150</b></p>
                            <p>Date <b>16 April 2024</b></p>
                        </div>
                        <div>
                            <p>Asset <span className="badge red">NFT</span></p>
                            <p>Status <span className="badge green">In Progress</span></p>
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
                    <div className="order-item">
                        <div>
                            <p>Order ID <b>18441</b></p>
                            <p>Price <b>$85</b></p>
                        </div>
                        <div>
                            <p>RayPoint <b>150</b></p>
                            <p>Date <b>16 April 2024</b></p>
                        </div>
                        <div>
                            <p>Asset <span className="badge red">NFT</span></p>
                            <p>Status <span className="badge green">In Progress</span></p>
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
                </div>
            </div>
        </Layout>
    );
}

export default WaitingsPage;