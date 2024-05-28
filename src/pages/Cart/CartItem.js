
function CartItem(props) {
    const item = props.item;
    const isActive = item.is_active;
    const image = item.product.image;
    const name = item.product.name;
    const id = item.product.id;
    const nftLink = item.product.nft_link;
    const discountPrice = item.product.current_price.discount_price;
    const quantity = item.quantity;
    const subTotal = item.price;

    const nft = {
        image: '/images/nft/nft.image.png',
        name: 'Mah Collection',
        number: '930811306',
        price: 30,
    }

    return (
        (isActive) ?
            <div className="cart-item">
                <div className="cart-item-product">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className="item-info">
                        <div>
                            <h4 className="name">{name}</h4>
                            <p className="number">#{id}
                                {(nftLink)
                                    ?
                                    <a className="lnk cta nft-link">NFT</a>
                                    : null
                                }
                            </p>
                        </div>
                        <div>
                            <p className="item-price">Item Price <b className="value">{discountPrice.toFixed(2)}</b></p>
                        </div>
                        {/* <div>
                                            <p>Asset <span className="badge green">NFT</span></p>
                                            <p>Status <span className="badge red">Waiting</span></p>
                                        </div> */}
                        <div>
                            <p className="quantity">Qty: {quantity}</p>
                            <p className="sub-total">Subtotal: <b className="value">{parseFloat(subTotal).toFixed(2)}</b></p>
                        </div>
                    </div>
                </div>
                {(nftLink)
                    ?
                    <div className="cart-item-nft">
                        <div>
                            <img src={nft.image} alt="" />
                        </div>
                        <div className="nft-info">
                            <div className="nft-collection-name">
                                <h4 className="collection-name">{nft.name}</h4>
                                <p className="collection-number">#{nft.number}</p>
                            </div>
                            <div className="nft-link">
                                <h4 className="price">${nft.price.toFixed(2)}</h4>
                                <a href={nftLink}>Link to NFT</a>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
            : null
    )
}

export default CartItem;
