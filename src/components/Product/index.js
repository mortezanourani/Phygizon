import { Component } from "react";
import { addToCart, removeFromCart } from "../../API";

import './product.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.data = props.product;
    }

    render() {
        return (
            <div className="product-card">
                {
                    (this.data.nft_link) ? (
                        <a href={this.data.nft_link}
                            className={"nft-link" + ((this.data.is_nft_required) ? " required" : "")}>
                        </a>
                    ) : null
                }
                <a href={"/product/" + this.data.id + "/"}>
                    {
                        (this.data.current_price.discount) ? (
                            <span className='discount'>
                                {this.data.current_price.discount * 100} %
                            </span>
                        ) : null
                    }
                    <img src={this.data.image} alt="" />
                </a>
                <div className="info">
                    <a href={"/product/" + this.data.id + "/"}>
                        <h4 className="title">{this.data.name}</h4>
                    </a>
                    <div className="cart">
                        <div className="cost">
                            {
                                (this.data.current_price.discount !== 0) ? (
                                    <h5 className="off">
                                        {this.data.current_price.price.toFixed(2)
                                            + ' '
                                            + this.data.current_price.currency.name}
                                    </h5>
                                ) : null
                            }
                            <h4 className="final">
                                {this.data.current_price.discount_price.toFixed(2)
                                    + " "
                                    + ((this.data.current_price.currency !== undefined) ? this.data.current_price.currency.name : null)}
                            </h4>
                        </div>
                        <div className="buttons">
                            <button className="remove" onClick={() => removeFromCart(this.data.id)}>
                                <img src="/images/icons/icon.recyclebin.svg" alt="" />
                            </button>
                            <button className="add" onClick={() => addToCart(this.data.id)}>
                                <img src="/images/icons/icon.addtocart.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        );
    };

}

export { ProductCard };