import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Layout from './Layout';

const Dashboard = () => {
    const [profile, setProfile] = useState({});
    const [orders, setOrders] = useState({});

    const [avatar, setAvatar] = useState("");
    const [totalOrderCount, setTotalOrderCount] = useState(0);

    useEffect(() => {
        axios.get('https://phygizone.darkube.app/v1/user/profile/info/', {
            headers: {
                'Authorization': localStorage.getItem('authorization')
            }
        }).then(response => {
            setAvatar(response.data.avatar);
            // setProfile(response.data);
        }).catch(error => {
            throw error;
        });

        axios.get('https://phygizone.darkube.app/v1/user/profile/dashboard/', {
            headers: {
                'Authorization': localStorage.getItem('authorization')
            }
        }).then(response => {
            // setOrders(response.data);
            setTotalOrderCount(response.data.total_orders.total_order_count);
        }).catch(error => {
            throw error;
        });
    });

    return (
        <Layout>
            <div id="dashboard">
                <div className="name">
                    <div className="picture">
                        <img src={"/images/users/" + avatar + ".png"} alt="" />
                    </div>
                    <span>
                        <p>Hi, Good Evening</p>
                        {/* <h3>{profile.first_name}!
                            <span className='lvl'>
                                <p className='number'>L9</p>
                                <img src="/images/icons/icon.profile.level.tag.svg" />
                            </span>
                        </h3> */}
                    </span>
                </div>
                <div className="orders">
                    <div className="card all">
                        <h1>{totalOrderCount}</h1>
                        <p>All Orders</p>
                        <h3>22.94 MGC</h3>
                        <p>$7322.123</p>
                    </div>
                    <div className="filters">
                        <div className="card">
                            <img src="/images/icons/icon.dashboard.orders.current.svg" alt="" />
                            <p>Current</p>
                            <h3>24</h3>
                            <a href="/dashboard/orders/current/" className="lnk sm gray">See all</a>
                        </div>
                        <div className="card">
                            <img src="/images/icons/icon.dashboard.orders.delivered.svg" alt="" />
                            <p>Delivered</p>
                            <h3>12</h3>
                            <a href="/dashboard/orders/delivered/" className="lnk sm gray">See all</a>
                        </div>
                        <div className="card">
                            <img src="/images/icons/icon.dashboard.orders.returned.svg" alt="" />
                            <p>Returned</p>
                            <h3>2</h3>
                            <a href="/dashboard/orders/returned/" className="lnk sm gray">See all</a>
                        </div>
                        <div className="card">
                            <img src="/images/icons/icon.dashboard.orders.returned.svg" alt="" />
                            <p>NFT</p>
                            <h3>8</h3>
                            <a href="/dashboard/orders/nft/" className="lnk sm gray">See all</a>
                        </div>
                        <div className="card">
                            <img src="/images/icons/icon.dashboard.orders.keeper.svg" alt="" />
                            <p>The Keeper</p>
                            <h3>4</h3>
                            <a href="/dashboard/orders/keeper/" className="lnk sm gray">See all</a>
                        </div>

                    </div>
                </div>
                <div className="wallet">
                    <div className="number">
                        <h5><img src="/images/icons/icon.metamask.svg" alt="" /> Metamask</h5>
                        <p>0xsjkdf8j3or8j398329jfjewijf
                            <a href=""></a>
                        </p>
                    </div>
                    <div className="balance">
                        <h3 className="title"><img src="/images/icons/icon.dashboard.wallet.svg" alt="" />Wallet Balance</h3>
                        <h2>
                            12.94 MGC
                            <p>$4322.123</p>
                        </h2>
                        <button className="btn sm cta" id="addcredit">Add Credit</button>
                    </div>
                </div>
                <div className="banner">
                    <img src="" alt="" />
                    <button className="btn text xl">Go to Ranking</button>
                </div>
                <div className="products">
                    <h3 className="title">The new Product
                        <a href="/" className="lnk gray">See all</a>
                    </h3>
                    <div className="product">
                        <img src="" alt="" />
                        <h3 className="title">
                            Title
                            <p>-12%</p>
                        </h3>
                        <div className="cart">
                            <h3 className="cost">
                                0.85 MGC
                                <p>($84.5)</p>
                            </h3>
                            <button className="btn ghost gray md">View</button>
                            <button className="btn cta gray md">Buy</button>
                        </div>
                    </div>
                </div>
                <div className="discounts">
                    <div className="discount">
                        <div>
                            <h2>Rayzon</h2>
                            <span className="badge red">30%</span>
                        </div>
                        <h4>Valid for up to 5 months</h4>
                        <p>Buy from Rayzon with a 30% discount</p>
                        <a href="#">
                            <button className="btn sm cta">
                                Use Discount
                            </button>
                        </a>
                    </div>
                    <div className="discount">
                        <div>
                            <h3>Ranking</h3>
                            <span className="badge red">20%</span>
                        </div>
                        <h4>After activation of ranking</h4>
                        <p>Buy from ranking with a 20% discount</p>
                        <a href="#">
                            <button className="btn sm cta">
                                Use Discount
                            </button>
                        </a>
                    </div>
                    <div className="discount">
                        <div>
                            <h3>MGC pro</h3>
                            <span className="badge red">50%</span>
                        </div>
                        <h4>Valid for up to 3 months</h4>
                        <p>Buy from MGC pro with a 50% discount</p>
                        <a href="#">
                            <button className="btn sm cta">
                                Use Discount
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard; 