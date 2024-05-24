import { Component } from "react";
import { addToCart, removeFromCart } from "../API";

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
                                        {this.data.current_price.price
                                            + ' '
                                            + this.data.current_price.currency.name}
                                    </h5>
                                ) : null
                            }
                            <h4 className="final">
                                {this.data.current_price.discount_price
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

class ImagesSlider extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleSwap = (action) => {
        const current = (document.querySelector('img.active'));
        const frames = document.getElementsByClassName('image-frame');
        let nextFrame = null;

        current.classList.remove('active');
        document.querySelector('.pointers #' + current.id).classList.toggle('active');

        if (action) {
            nextFrame = (current.nextSibling !== null)
                ? current.nextSibling
                : frames[0];
        } else {
            nextFrame = (current.previousSibling !== null)
                ? current.previousSibling
                : frames[frames.length - 1];
        }
        nextFrame.classList.toggle('active');
        document.querySelector('.pointers #' + nextFrame.id).classList.toggle('active');
    }

    render() {
        const images = [];

        this.props.album.push({
            file: this.props.image
        });
        this.props.album.map(image => {
            if (images.includes(image.file) === false) {
                images.push(image.file)
            };
        });

        return (
            <div className="image">
                <div className="images">
                    {
                        images.map((image, index) => (
                            <img
                                id={"product-album" + index}
                                className={"image-frame" + ((index === 0) ? " active" : "")}
                                src={image} alt="" />
                        ))
                    }
                </div>

                <div className="controllers">
                    <button className="control prev" onClick={() => this.handleSwap(false)}></button>
                    <div className="pointers">
                        {
                            images.map((image, index) => (
                                <i
                                    id={"product-album" + (index)}
                                    className={"image-pointer" + ((index === 0) ? " active" : "")}></i>
                            ))
                        }
                    </div>
                    <button className="control next" onClick={() => this.handleSwap(true)}></button>
                </div>
            </div>
        )
    }
}

export { ImagesSlider, ProductCard };