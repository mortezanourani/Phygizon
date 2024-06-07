import useCategories from "../../../hooks/useCategories";

function MainMenu() {
    const { loading, data } = useCategories();
    const parentCategories = data.filter(category => (category.parent === null));

    const categoriesCollapse = (e) => {
        e.preventDefault();

        const catPopup = document.getElementById("categories-popup");
        catPopup.classList.toggle('collapsed');
    }

    const displayChilds = (e) => {
        const parentId = e.target.id;

        const parentLinks = document.getElementsByClassName("parent-link");
        for (let i = 0; i < parentLinks.length; i++) {
            parentLinks[i].classList.remove("active");
        }
        e.target.classList.add("active");

        const childContents = document.getElementsByClassName('child-content');
        for (let i = 0; i < childContents.length; i++) {
            childContents[i].style.display = "none";
        }
        document.getElementById("childsof" + parentId).style.display = "flex";
    }

    return (
        <ul className="main-menu">
            <li className="menu-item">
                <a href='/categories/' onClick={categoriesCollapse}>
                    <button className="btn lg text gray">
                        Categories
                        <img style={{ marginLeft: "12px" }} src="/images/icons/icon.categories.downarrow.svg" alt="" /></button>
                </a>
            </li>
            <div className="primary-nav-popup-menu" id="categories-popup">
                <div className="container">
                    <div className="parents">
                        {
                            parentCategories.map(category => (
                                <a className="parent-link btn text gray lg" id={category.id} onMouseOver={displayChilds} href={"/category/" + category.id}>
                                    <img src="/images/icons/icon.categories.svg" alt="" />
                                    {category.name}
                                </a>
                            ))
                        }
                    </div>
                    <div className="childs">
                        {
                            parentCategories.map(category => {
                                let childList = category.sub_categories;
                                return (
                                    <div className="child-content" id={"childsof" + category.id}>
                                        {
                                            (childList.length !== 0) ? (
                                                childList.map(category => (
                                                    <div className="child-column">
                                                        <a href={"/category/" + category.id}><h3>{category.name}</h3></a>
                                                    </div>
                                                ))) : (null)
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <li className="menu-item">
                <a href='/popular/'>
                    <button className="btn lg text gray">Popular</button>
                </a>
            </li>
            <li className="menu-item">
                <a href='/offers/'>
                    <button className="btn lg text gray">Offers</button>
                </a>
            </li>
            <li className="menu-item">
                <a href='/sellers/'>
                    <button className="btn lg text gray">Sellers</button>
                </a>
            </li>
            <li className="menu-item">
                <a href='/helpcenter/'>
                    <button className="btn lg text gray">Help Center</button>
                </a>
            </li>
        </ul>
    )
}

export default MainMenu;