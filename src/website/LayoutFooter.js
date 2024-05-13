import React from "react";

import logo from '../logo.svg';
import '../css/footer.css';
import { Categories } from "../API";

const Footer = () => {
    const cats = Categories();

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
                            {
                                cats.categories
                                    .filter(category => category.parent === null)
                                    .sort((a, b) => a.id - b.id)
                                    .map(category => (
                                        <li>
                                            <a href={"/category/" + category.id}>{category.name}</a>
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                    <div className="menu">
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="/helpcenter/blog/">Blog</a>
                            </li>
                            <li>
                                <a href="/helpcenter/learning/">Learn</a>
                            </li>
                            <li>
                                <a href="/helpcenter/">Help center</a>
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
                                <a href="/helpcenter/">Help center</a>
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