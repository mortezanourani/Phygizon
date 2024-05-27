import React, { useState } from "react";
import { Addresses, GetCart, Pay, Payments } from "../../API";
import Loading from '../../components/Loading';

import './index.css';
import { CartItem, PaymentMethods, ShippingAddress } from "../../components/Cart";

const Cart = () => {
    const addresses = Addresses();
    const cart = GetCart();
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
        (cart.loading) ?
            <Loading />
            :
            <div className="cart">
                <div className="shipping">
                    <div className="addresses">
                        <h3 className="section-title">Shipping Address</h3>
                        <ShippingAddress />
                    </div>

                    <div className="records">
                        <h3 className="section-title">All Cart items</h3>
                        {
                            cart.items.map(item => (
                                <CartItem
                                    item={item} />
                            ))
                        }
                    </div>
                </div>

                <div className="payments">
                    <h3 className="section-title">Choose a Payment Method</h3>
                    <PaymentMethods
                        onChange={handleChange} />
                    <p className="total container">Total <b>${cart.totalPrice}</b></p>
                    <button className="btn lg cta" onClick={handleSubmit}>Confirm and continue</button>
                </div>
            </div>
    )
}

export default Cart;
