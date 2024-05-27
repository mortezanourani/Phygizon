import cartIcon from "../../../assets/icons/dashboard/cart_icon.svg";
import notificationIcon from "../../../assets/icons/dashboard/notifications_icon.svg";
import "./index.css";

function Header() {
    return (
        <nav>
            <form action="">
                <div className="form-control">
                    <img src="/images/icons/icon.search.svg" alt="" />
                    <input type="search" name="" id="" placeholder="Search in products" />
                </div>
            </form>

            <a href="/" className="btn xl text explore">Explore in Phygizon</a>
            <a href="/cart/" className="btn xl icon cart">
                <img src={cartIcon} alt="" />
            </a>
            <a href="/dashboard/notifications/" className="btn xl icon notifications">
                <img src={notificationIcon} alt="" />
            </a>
        </nav>
    );
}

export default Header;
