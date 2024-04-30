import React from "react";

import logo from '../logo.svg';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className="subscribe">
                    <img className="logo" src={logo} alt="" />
                    <p>Design amazing digital experiences that create more happy in the world.</p>
                    <h4>Stay in the loop</h4>
                    <form>
                        <input className="input" type="email" name="" id="" placeholder="Enter your email" />
                        <input className="button" type="submit" value="Subscribe" />
                    </form>
                </div>
                <div className="links">
                    <div className="menu">
                        <h4>Shopping</h4>
                        <ul>
                            <li>
                                <a href="">Gaming Accessories</a>
                            </li>
                            <li>
                                <a href="">Home Decor</a>
                            </li>
                            <li>
                                <a href="">Jewelry & Accessories</a>
                            </li>
                            <li>
                                <a href="">Leather goods & Works</a>
                            </li>
                            <li>
                                <a href="">Visual Arts</a>
                            </li>
                            <li>
                                <a href="">Woodworking</a>
                            </li>
                            <li>
                                <a href="">Artistic Pendants & Gemstones</a>
                            </li>
                            <li>
                                <a href="">Handcraft Clothing & Apparel</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="">Learn</a>
                            </li>
                            <li>
                                <a href="helpcenter.html">Help centre</a>
                            </li>
                            <li>
                                <a href="">Community standards</a>
                            </li>
                            <li>
                                <a href="">Taxes</a>
                            </li>
                            <li>
                                <a href="">Partners</a>
                            </li>
                            <li>
                                <a href="">Developer platform</a>
                            </li>
                            <li>
                                <a href="">Platform status</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Caeers</a>
                            </li>
                            <li>
                                <a href="">Ventures</a>
                            </li>
                            <li>
                                <a href="">Help centre</a>
                            </li>
                            <li>
                                <a href="">Tutorials</a>
                            </li>
                            <li>
                                <a href="">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;