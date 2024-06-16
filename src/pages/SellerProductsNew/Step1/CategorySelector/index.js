
import { useState } from "react";
import "./index.css";

function CategorySelector() {
    const [btnNextDisabled, setBtnNextDisabled] = useState(false);
    const [btnBackDisabled, setBtnBackDisabled] = useState(true);

    const navigatorEnable = setInterval(() => {
        let wrapper = document.getElementsByClassName("categories-wrapper").item(0);
        if (!wrapper)
            return clearInterval(navigatorEnable);

        setBtnNextDisabled(wrapper.scrollLeft >= wrapper.scrollWidth - wrapper.offsetWidth);
        setBtnBackDisabled(wrapper.scrollLeft <= 0);
    }, 0);

    const handelBack = () => {
        let wrapper = document.getElementsByClassName("categories-wrapper").item(0);
        wrapper.scroll({
            left: wrapper.scrollLeft - 320,
            behavior: "smooth"
        });
    }

    const handelNext = () => {
        let wrapper = document.getElementsByClassName("categories-wrapper").item(0);
        wrapper.scroll({
            left: wrapper.scrollLeft + 320,
            behavior: "smooth"
        });
    }

    const handleSelectCategory = (e) => {
        const type = e.target.tagName.toLowerCase();
        if (type === "div") return;

        const category = (type === "button") ? e.target.innerText : e.target.parentNode.innerText;
        const categoryInput = document.getElementById("category");
        categoryInput.value = category;
    }

    return (
        <div className="category-selector">
            <div className="category-selector-navigator">
                <button className="class-selector-previous" onClick={handelBack} disabled={btnBackDisabled}>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50052 14.5984L2.06719 9.1651C1.42552 8.52344 1.42552 7.47344 2.06719 6.83177L7.50052 1.39844" stroke="#12786C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className="class-selector-next" onClick={handelNext} disabled={btnNextDisabled}>
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.42578 14.5984L6.85912 9.1651C7.50078 8.52344 7.50078 7.47344 6.85912 6.83177L1.42578 1.39844" stroke="#12786C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="category-selector-container" onClick={handleSelectCategory}>
                <div className="categories-wrapper">
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.8.svg" alt="" />
                        <label>Visual Arts</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.4.svg" alt="" />
                        <label>Home Decor</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.1.svg" alt="" />
                        <label>Gaming Accessories</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.6.svg" alt="" />
                        <label>Leather goods & Works</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.2.svg" alt="" />
                        <label>Artisanal</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.9.svg" alt="" />
                        <label>Jewelry & Accessories</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.5.svg" alt="" />
                        <label>Handcraft Clothin & Apparel</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.3.svg" alt="" />
                        <label>Artistic Pendants & Gemstones</label>
                    </button>
                    <button className="category-card">
                        <img src="/images/icons/icon.cat.7.svg" alt="" />
                        <label>Woodworking</label>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CategorySelector;