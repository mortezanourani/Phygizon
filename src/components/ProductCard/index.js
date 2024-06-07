import { addToCart, removeFromCart } from "../../API";
import useCart from "../../hooks/useCart";

import './index.css';

function ProductCard(props) {
    const { addToCart, removeFromCart } = useCart();
    const product = props.product;

    return (
        <div className="product-card">
            {
                (product.nft_link) ? (
                    <a href={product.nft_link}
                        className={"nft-link" + ((product.is_nft_required) ? " required" : "")}>
                    </a>
                ) : null
            }
            <a href={"/product/" + product.id + "/"}>
                {
                    (product.current_price.discount) ? (
                        <span className='discount'>
                            {product.current_price.discount * 100} %
                        </span>
                    ) : null
                }
                <img src={product.image} alt="" />
            </a>
            <div className="info">
                <a href={"/product/" + product.id + "/"}>
                    <h4 className="title">{product.name}</h4>
                </a>
                <div className="cart">
                    <div className="cost">
                        {
                            (product.current_price.discount !== 0) ? (
                                <h5 className="off">
                                    {product.current_price.price?.toFixed(2)
                                        + ' '
                                        + product.current_price.currency.name}
                                </h5>
                            ) : null
                        }
                        <h4 className="final">
                            {product.current_price.discount_price?.toFixed(2)
                                + " "
                                + ((product.current_price.currency !== undefined) ? product.current_price.currency.name : null)}
                        </h4>
                    </div>
                    <div className="buttons">
                        <button className="remove" onClick={() => removeFromCart(product.id)}>
                            <img src="/images/icons/icon.recyclebin.svg" alt="" />
                        </button>
                        <button className="add" onClick={() => addToCart(product.id)}>
                            <img src="/images/icons/icon.addtocart.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;