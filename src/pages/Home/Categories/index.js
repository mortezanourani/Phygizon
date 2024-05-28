import { useState } from "react";
import useCategories from "./useCategories";

import "./index.css";
import Loading from "../../../components/Loading";

function Categories() {
    const { loading, data } = useCategories();
    const [images, setImages] = useState(null);
    return (
        <section className="homepage-products container">
            <div className="products">
                <div className="section-header">
                    <h2 className="title">Products</h2>
                    <a href="/products/">Show all</a>
                </div>
                <div className="categories">
                    {
                        loading
                            ? <Loading component />
                            : (
                                data.map(item => (
                                    <a href={"/category/" + item.id + "/"} onMouseOver={() => setImages(item.images)}>
                                        <img className="icon" src={"/images/icons/icon.cat." + item.id + ".svg"} alt='' />
                                        {item.name}
                                    </a>
                                ))
                            )
                    }
                </div>
            </div>
            <div className="images">
                {
                    loading
                        ? <Loading component />
                        : (
                            <>
                                <div className="img-link">
                                    <img src={images?.url1} alt="" />
                                </div>
                                <div className="img-link">
                                    <img src={images?.url2} alt="" />
                                </div>
                                <div className="img-link">
                                    <img src={images?.url3} alt="" />
                                </div>
                            </>
                        )
                }
            </div>
        </section>
    )
}

export default Categories;