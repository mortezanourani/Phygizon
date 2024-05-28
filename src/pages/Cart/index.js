import React, { useState } from "react";
import { GetCart, Pay } from "../../API";
import Loading from '../../components/Loading';

import './index.css';

import ShippingAddress from "./ShippingAddress";
import CartItem from "./CartItem";
import PaymentMethods from "./Payment";

const Cart = () => {
    const cart = GetCart();

    const [method, setMethod] = useState("");

    return (
        <div className="cart">
            <div className="shipping">
                <div className="addresses">
                    <h3 className="section-title">Shipping Address</h3>
                    <ShippingAddress />
                </div>

                <div className="records">
                    <h3 className="section-title">All Cart items</h3>
                    {
                        cart.loading
                            ? <Loading component />
                            : cart.items.map(item => (
                                <CartItem
                                    item={item} />
                            ))
                    }
                </div>
            </div>

            <div className="payments">
                <h3 className="section-title">Choose a Payment Method</h3>
                <PaymentMethods
                    onChange={(e) => setMethod(e.target.value)} />
                <p className="total container">Total <b>${parseFloat(cart.totalPrice).toFixed(2)}</b></p>
                <button className="btn lg cta" onClick={() => Pay(method)}>Confirm and continue</button>
            </div>
        </div>
    )
}

export default Cart;
