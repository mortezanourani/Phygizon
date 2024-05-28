import { useState } from "react";
import { GetOrders } from "../../API";

import "./index.css";
import Loading from "../../components/Loading";
const btnClass = "btn md text gray";
const activeBtnClass = "btn md gray ghost active";

const Orders = () => {
    const [status, setStatus] = useState(1);

    const { loading, count, orders } = GetOrders();

    return (
        <div className="orders">
            <nav>
                <button
                    className={(status === 1) ? activeBtnClass : btnClass}
                    onClick={() => setStatus(1)}>
                    Pending Payments
                </button>
                <button
                    className={(status === 2) ? activeBtnClass : btnClass}
                    onClick={() => setStatus(2)}>
                    Waiting for NFT
                </button>
                <button
                    className={(status === 3) ? activeBtnClass : btnClass}
                    onClick={() => setStatus(3)}>
                    In Progress
                </button>
                <button
                    className={(status === 4) ? activeBtnClass : btnClass}
                    onClick={() => setStatus(4)}>
                    Delivered
                </button>
                <button
                    className={(status === 5) ? activeBtnClass : btnClass}
                    onClick={() => setStatus(5)}>
                    Returned
                </button>
                <button
                    className={(status === 6) ? activeBtnClass : btnClass}
                    onClick={() => setStatus(6)}>
                    Canceled
                </button>
            </nav>
            <div className="records">
                {
                    (loading)
                        ? <Loading component />
                        : orders
                            .filter(order => { return order.order_status === status })
                            .map(order => (
                                <div className="order-item">
                                    <div>
                                        <p>Order ID <b>{order.id}</b></p>
                                        <p>Price <b>$ {parseFloat(order.total_price).toFixed(2)}</b></p>
                                    </div>
                                    <div>
                                        <p>RayPoint <b>0</b></p>
                                        <p>Date <b>{new Date(order.insert_dt).toLocaleString()}</b></p>
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
                }
            </div>
        </div>
    );
}

export default Orders;