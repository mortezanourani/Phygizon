import { Component, useEffect } from "react";
import { Addresses, Payments } from "../API";
import Loading from "./Loading";


function PaymentMethods(props) {
    const payment = Payments();
    return (
        (payment.loading) ?
            <Loading />
            :
            payment.methods.map(method => (
                (method.is_active)
                    ?
                    <div className="payment-method">
                        <input type="radio" name="method" id={method.code} value={method.code} onChange={props.onChange} />
                        <label for={method.code}>
                            <div className="radio-button">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L3.5 6.5L1 4" stroke="white" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </div>
                            <div className="payment-method-info">
                                <h3 className="name">{method.name}</h3>
                                <p className="desc">{method.description}</p>
                                <span className="set-default">
                                    <h3 className="text">Set as default</h3>
                                    <a className="lnk cta">Edit</a>
                                </span>
                            </div>
                            <div className="payment-method-logo">
                                <img src={method.logo} alt={method.name} />
                            </div>

                        </label>
                    </div>
                    : null
            ))
    )
}

function ShippingAddress(props) {
    const data = Addresses();
    return (
        (data.count === 0) ?
            <div className="no-address">
                <h4>There is no saved address.</h4>
                <a href="/dashboard/address/add/"><button className="btn md gray ghost dark">Add shipping address</button></a>
            </div>
            :
            data.items.map(address => (
                <div className="shipping-address">
                    <input type="radio" name="address" id={'adrs' + address.id} value={address.id} />
                    <label for={'adrs' + address.id}>
                        <div className="radio-button"></div>
                        <div className="address-info">
                            <h4 className="address">
                                {address.title}:
                                {address.postal_address + ' ' +
                                    address.city + ' ' +
                                    address.state + ' ' +
                                    address.country}
                            </h4>
                        </div>
                    </label>
                </div>
            ))
    );
}

class CartItem extends Component {
    constructor(props) {
        super(props);

        const item = this.props.item;
        this.isActive = item.is_active;
        this.image = item.product.image;
        this.name = item.product.name;
        this.id = item.product.id;
        this.nftLink = item.product.nft_link;
        this.discountPrice = item.product.current_price.discount_price;
        this.quantity = item.quantity;
        this.subTotal = item.price;

    }

    render() {
        return (
            (this.isActive) ?

                <div className="cart-item">
                    <div>
                        <img src={this.image} alt="" />
                    </div>
                    <div className="item-info">
                        <div>
                            <h4 className="name">{this.name}</h4>
                            <p className="number">#{this.id}
                                {(this.nftLink) ?
                                    <a href={this.nftLink} className="lnk cta nft-link">NFT</a>
                                    : null
                                }
                            </p>
                        </div>
                        <div>
                            <p className="item-price">Item Price <b className="value">{this.discountPrice}</b></p>
                        </div>
                        {/* <div>
                                            <p>Asset <span className="badge green">NFT</span></p>
                                            <p>Status <span className="badge red">Waiting</span></p>
                                        </div> */}
                        <div>
                            <p className="quantity">Qty: {this.quantity}</p>
                            <p className="sub-total">Subtotal: <b className="value">{this.subTotal}</b></p>
                        </div>
                    </div>
                </div>
                : null
        )
    }
}
export { PaymentMethods, ShippingAddress, CartItem }