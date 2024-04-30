import React from "react";
import Layout from './Layout';

import '../css/orders.css';

const PendingsPage = () => {
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
                            <p>Asset <span className="badge green">NFT</span></p>
                            <p>Status <span className="badge red">Waiting</span></p>
                        </div>
                        <div>
                            <div className="album">
                                <img src="/images/products/product.png" alt="" />
                                <img src="/images/products/product.png" alt="" />
                                <img src="/images/products/product.png" alt="" />
                                <img src="/images/products/product.png" alt="" />
                            </div>
                            <a href="#" className="btn md ghost action">
                                Finalize your purchase
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
                            <p>Asset <span className="badge green">NFT</span></p>
                            <p>Status <span className="badge red">Waiting</span></p>
                        </div>
                        <div>
                            <div className="album">
                                <img src="/images/products/product.png" alt="" />
                                <img src="/images/products/product.png" alt="" />
                                <img src="/images/products/product.png" alt="" />
                                <img src="/images/products/product.png" alt="" />
                            </div>
                            <a href="#" className="btn md ghost action">
                                Finalize your purchase
                                <img src="/images/icons/btnarrow.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PendingsPage;