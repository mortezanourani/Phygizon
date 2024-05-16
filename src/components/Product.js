import { Component } from "react";

class ImagesSlider extends Component {
    constructor(props) {
        super(props);
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

export { ImagesSlider };