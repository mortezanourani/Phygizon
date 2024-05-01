import React, { useState } from "react";
import Layout from "./Layout";
import axios from "axios";

import '../css/cart.css';

const CartPage = () => {

    const [addresses, setAddresses] = useState([]);
    const [items, setItems] = useState([]);

    // axios.get();

    axios.get('https://phygizone.darkube.app/v1/order/carts/', {
        headers: {
            'accept': 'application/json',
            'Authorization': localStorage.getItem('authorization')
        }
    }).then(response => {
        // document.getElementById('root').innerHTML = JSON.stringify(response.data.results[0].items);
        setItems(response.data.results[0].items);

    }).catch(error => {
        alert(error);
    });

    return (
        <div className="cart container">
            <div className="shipping">
                <div className="records">
                    {
                        items.map(item => (
                            <div className="cart-item">
                                <div>
                                    <p><b>{item.product_name}</b></p>
                                    <p>#<b>{item.id}</b></p>
                                </div>
                                <div>
                                    <p>Item Price <b>{item.price}</b></p>
                                    <p> <b> </b></p>
                                </div>
                                {/* <div>
                                    <p>Asset <span className="badge green">NFT</span></p>
                                    <p>Status <span className="badge red">Waiting</span></p>
                                </div> */}
                                <div>
                                    <p>Qty: <b>{item.quantity}</b></p>
                                    <p>Subtotal: <b>{item.quantity * item.price}</b></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="payment">

            </div>
        </div>
    )
}

export default CartPage;