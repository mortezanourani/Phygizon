import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../AuthProvider";

import logo from "../../../assets/icons/logo_seller.svg";
import switchIcon from "../../../assets/icons/seller/switch_icon.svg"
import "./index.css";

import dashboardIcon from "../../../assets/icons/dashboard/cart_icon.svg";

const handleCollapse = () => {
    const aside = document.querySelector('aside');
    aside.classList.toggle('collapsed');
}

const Sidebar = () => {
    const auth = useAuth();

    return (
        <aside>
            <nav>
                <div>
                    <a className="brand" href="/">
                        <img src={logo} alt="" />
                    </a>
                    <div>
                        <a href="/cart/">
                            <button className="btn text gray cart-button">
                                <img src="/images/icons/icon.cart.svg" alt="" />
                            </button>
                        </a>
                        <button className="btn text gray collaps-button" onClick={handleCollapse}>
                            <img src="/images/icons/icon.hamburger.menu.svg" alt="" />
                        </button>
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink
                            to="/seller/dashboard/">
                            <button>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 9.9V3.1C21 1.6 20.36 1 18.77 1H14.73C13.14 1 12.5 1.6 12.5 3.1V9.9C12.5 11.4 13.14 12 14.73 12H18.77C20.36 12 21 11.4 21 9.9Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 18.9V17.1C21 15.6 20.36 15 18.77 15H14.73C13.14 15 12.5 15.6 12.5 17.1V18.9C12.5 20.4 13.14 21 14.73 21H18.77C20.36 21 21 20.4 21 18.9Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.5 12.1V18.9C9.5 20.4 8.86 21 7.27 21H3.23C1.64 21 1 20.4 1 18.9V12.1C1 10.6 1.64 10 3.23 10H7.27C8.86 10 9.5 10.6 9.5 12.1Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.5 3.1V4.9C9.5 6.4 8.86 7 7.27 7H3.23C1.64 7 1 6.4 1 4.9V3.1C1 1.6 1.64 1 3.23 1H7.27C8.86 1 9.5 1.6 9.5 3.1Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seller/products/">
                            <button>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="20" height="20" rx="4" stroke="#28303F" stroke-width="1.5" />
                                    <path d="M7 1H15V8.58579C15 9.47669 13.9229 9.92286 13.2929 9.29289L11.7071 7.70711C11.3166 7.31658 10.6834 7.31658 10.2929 7.70711L8.70711 9.29289C8.07714 9.92286 7 9.47669 7 8.58579V1Z" stroke="#28303F" stroke-width="1.5" stroke-linejoin="round" />
                                </svg>
                            </button>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seller/orders/">
                            <button>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H2.74001C3.82001 1 4.67 1.93 4.58 3L3.75 12.96C3.61 14.59 4.89999 15.99 6.53999 15.99H17.19C18.63 15.99 19.89 14.81 20 13.38L20.54 5.88C20.66 4.22 19.4 2.87 17.73 2.87H4.82001" stroke="#101828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.25 21C15.9404 21 16.5 20.4404 16.5 19.75C16.5 19.0596 15.9404 18.5 15.25 18.5C14.5596 18.5 14 19.0596 14 19.75C14 20.4404 14.5596 21 15.25 21Z" stroke="#101828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.25 21C7.94036 21 8.5 20.4404 8.5 19.75C8.5 19.0596 7.94036 18.5 7.25 18.5C6.55964 18.5 6 19.0596 6 19.75C6 20.4404 6.55964 21 7.25 21Z" stroke="#101828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 7H20" stroke="#101828" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seller/playground/">
                            <button>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1504 15.5V17.6" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.15039 21H16.1504V20C16.1504 18.9 15.2504 18 14.1504 18H8.15039C7.05039 18 6.15039 18.9 6.15039 20V21V21Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" />
                                    <path d="M5.15039 21H17.1504" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 15C7.13 15 4 11.87 4 8V5C4 2.79 5.79 1 8 1H14C16.21 1 18 2.79 18 5V8C18 11.87 14.87 15 11 15Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.46906 10.6516C3.71906 10.4116 3.05906 9.97156 2.53906 9.45156C1.63906 8.45156 1.03906 7.25156 1.03906 5.85156C1.03906 4.45156 2.13906 3.35156 3.53906 3.35156H4.18906C3.98906 3.81156 3.88906 4.32156 3.88906 4.85156V7.85156C3.88906 8.85156 4.09906 9.79156 4.46906 10.6516Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.5293 10.6516C18.2793 10.4116 18.9393 9.97156 19.4593 9.45156C20.3593 8.45156 20.9593 7.25156 20.9593 5.85156C20.9593 4.45156 19.8593 3.35156 18.4593 3.35156H17.8093C18.0093 3.81156 18.1093 4.32156 18.1093 4.85156V7.85156C18.1093 8.85156 17.8993 9.79156 17.5293 10.6516Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            Playground
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seller/finance/wallet/">
                            <button>
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.75159 14.8594V16.8894C9.75159 18.6094 8.15158 19.9994 6.18158 19.9994C4.21158 19.9994 2.60156 18.6094 2.60156 16.8894V14.8594C2.60156 16.5794 4.20158 17.7994 6.18158 17.7994C8.15158 17.7994 9.75159 16.5694 9.75159 14.8594Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.74982 12.1078C9.74982 12.6078 9.60981 13.0678 9.36981 13.4678C8.77981 14.4378 7.5698 15.0478 6.1698 15.0478C4.7698 15.0478 3.55979 14.4278 2.96979 13.4678C2.72979 13.0678 2.58984 12.6078 2.58984 12.1078C2.58984 11.2478 2.98982 10.4778 3.62982 9.91779C4.27982 9.34779 5.16979 9.00781 6.15979 9.00781C7.14979 9.00781 8.03982 9.35779 8.68982 9.91779C9.34982 10.4678 9.74982 11.2478 9.74982 12.1078Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.75159 12.11V14.86C9.75159 16.58 8.15158 17.8 6.18158 17.8C4.21158 17.8 2.60156 16.57 2.60156 14.86V12.11C2.60156 10.39 4.20158 9 6.18158 9C7.17158 9 8.06161 9.34997 8.71161 9.90997C9.35161 10.47 9.75159 11.25 9.75159 12.11Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.0002 8.97308V11.0331C21.0002 11.5831 20.5602 12.0331 20.0002 12.0531H18.0402C16.9602 12.0531 15.9702 11.2631 15.8802 10.1831C15.8202 9.55311 16.0602 8.9631 16.4802 8.5531C16.8502 8.1731 17.3602 7.95312 17.9202 7.95312H20.0002C20.5602 7.97312 21.0002 8.42308 21.0002 8.97308Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 8.5V6.5C1 3.78 2.64 1.88 5.19 1.56C5.45 1.52 5.72 1.5 6 1.5H15C15.26 1.5 15.51 1.50999 15.75 1.54999C18.33 1.84999 20 3.76 20 6.5V7.95001H17.92C17.36 7.95001 16.85 8.16999 16.48 8.54999C16.06 8.95999 15.82 9.54999 15.88 10.18C15.97 11.26 16.96 12.05 18.04 12.05H20V13.5C20 16.5 18 18.5 15 18.5H12.5" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            Finance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seller/address/">
                            <button>
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0009 12.4275C11.724 12.4275 13.1209 11.0306 13.1209 9.3075C13.1209 7.58437 11.724 6.1875 10.0009 6.1875C8.27773 6.1875 6.88086 7.58437 6.88086 9.3075C6.88086 11.0306 8.27773 12.4275 10.0009 12.4275Z" stroke="#344054" stroke-width="1.5" />
                                    <path d="M1.61971 7.49C3.58971 -1.17 16.4197 -1.16 18.3797 7.5C19.5297 12.58 16.3697 16.88 13.5997 19.54C11.5897 21.48 8.40971 21.48 6.38971 19.54C3.62971 16.88 0.469709 12.57 1.61971 7.49Z" stroke="#344054" stroke-width="1.5" />
                                </svg>
                            </button>
                            Address
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seller/settings/">
                            <button>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 11.8814V10.1214C1 9.0814 1.85 8.2214 2.9 8.2214C4.71 8.2214 5.45 6.9414 4.54 5.3714C4.02 4.4714 4.33 3.3014 5.24 2.7814L6.97 1.7914C7.76 1.3214 8.78 1.6014 9.25 2.3914L9.36 2.5814C10.26 4.1514 11.74 4.1514 12.65 2.5814L12.76 2.3914C13.23 1.6014 14.25 1.3214 15.04 1.7914L16.77 2.7814C17.68 3.3014 17.99 4.4714 17.47 5.3714C16.56 6.9414 17.3 8.2214 19.11 8.2214C20.15 8.2214 21.01 9.0714 21.01 10.1214V11.8814C21.01 12.9214 20.16 13.7814 19.11 13.7814C17.3 13.7814 16.56 15.0614 17.47 16.6314C17.99 17.5414 17.68 18.7014 16.77 19.2214L15.04 20.2114C14.25 20.6814 13.23 20.4014 12.76 19.6114L12.65 19.4214C11.75 17.8514 10.27 17.8514 9.36 19.4214L9.25 19.6114C8.78 20.4014 7.76 20.6814 6.97 20.2114L5.24 19.2214C4.33 18.7014 4.02 17.5314 4.54 16.6314C5.45 15.0614 4.71 13.7814 2.9 13.7814C1.85 13.7814 1 12.9214 1 11.8814Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            Settings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/seller/support/">
                            <button>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 17.4297H12L7.54999 20.3897C6.88999 20.8297 6 20.3598 6 19.5598V17.4297C3 17.4297 1 15.4297 1 12.4297V6.42969C1 3.42969 3 1.42969 6 1.42969H16C19 1.42969 21 3.42969 21 6.42969V12.4297C21 15.4297 19 17.4297 16 17.4297Z" stroke="#344054" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.9998 10.3594V10.1494C10.9998 9.46941 11.4198 9.1094 11.8398 8.8194C12.2498 8.5394 12.6598 8.17941 12.6598 7.51941C12.6598 6.59941 11.9198 5.85938 10.9998 5.85938C10.0798 5.85938 9.33984 6.59941 9.33984 7.51941" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.9955 12.75H11.0045" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            Support
                        </NavLink>
                    </li>
                </ul>

                <ul style={{ gap: "24px", marginBottom: "0" }}>
                    <Link
                        to="/customer/dashboard/"
                        className="switch">
                        <button>
                            <span>
                                <img src={switchIcon} />
                            </span>
                            Seller
                        </button>
                    </Link>

                    <Link
                        className="logout"
                        onClick={() => auth.logOut()}>
                        <button>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.40039 6.56219C7.71039 2.96219 9.56039 1.49219 13.6104 1.49219H13.7404C18.2104 1.49219 20.0004 3.28219 20.0004 7.75219V14.2722C20.0004 18.7422 18.2104 20.5322 13.7404 20.5322H13.6104C9.59039 20.5322 7.74039 19.0822 7.41039 15.5422" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.4991 11H2.11914" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.35 7.64844L1 10.9984L4.35 14.3484" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        Log Out
                    </Link>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;