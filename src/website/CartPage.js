import React, { useState } from "react";
import Layout from "./Layout";
import { Addresses, Cart, Pay, Payments } from "../API";

import '../css/cart.css';

const CartPage = () => {
    const addresses = Addresses();
    const cart = Cart();
    const payments = Payments();

    const [method, setMethod] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMethod(value);
    }

    const handleSubmit = () => {
        Pay(method);
    }

    return (
        <Layout>
            <div className="cart container">
                <div className="shipping">
                    <div className="addresses">
                        {
                            addresses.count === null ? (
                                <h3>Loading...</h3>
                            ) : (
                                addresses.items.length < 1 ? (
                                    <h3>There is no shipping address.</h3>
                                ) : (
                                    addresses.items.map(address => (
                                        <div>
                                            <h5>{address.title}</h5>
                                            <p>{address.postal_address + "- " + address.city + "- " + address.state + "- " + address.country}</p>
                                        </div>
                                    )))
                            )
                        }
                    </div>
                    <div className="records">
                        {
                            cart.items.map(item => (
                                item.is_active ? (
                                    <div className="cart-item">
                                        <div>
                                            <p><b>{item.product_name}</b></p>
                                            <p>#<b>{item.id}</b></p>
                                        </div>
                                        <div>
                                            <p>Item Price <b>{item.product_price}</b></p>
                                            <p><b></b></p>
                                        </div>
                                        {/* <div>
                                            <p>Asset <span className="badge green">NFT</span></p>
                                            <p>Status <span className="badge red">Waiting</span></p>
                                        </div> */}
                                        <div>
                                            <p>Qty: <b>{item.quantity}</b></p>
                                            <p>Subtotal: <b>{item.price}</b></p>
                                        </div>
                                    </div>
                                ) : (null)
                            ))
                        }
                    </div>
                </div>
                <div className="payments">
                    <h3>Payment methods:</h3>
                    {
                        payments.methods.map(method => (
                            <label for={method.code} className="method">
                                <input type="radio" name="method" id={method.code} value={method.code} onChange={handleChange} />
                                <div>
                                    <h3>{method.name}</h3>
                                    <p>{method.description}</p>
                                </div>
                            </label>
                        ))
                    }
                    <p className="total container">Total <b>${cart.totalPrice}</b></p>
                    <button className="btn lg cta" onClick={handleSubmit}>Confirm and continue</button>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage;
