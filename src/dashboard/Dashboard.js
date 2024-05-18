import React from "react";
import Layout from './Layout';

import { GetDashboard } from '../API';
import { OrderCards } from "../components/Dashboard";

import defaultAvatar from '../assets/icons/dashboard/default_avatar.png';

const Dashboard = () => {
    const info = GetDashboard();
    const avatar = info.avatar;
    const counts = info.ordersCounts;

    if (info.ordersCounts === null) {
        return;
    }

    return (
        <Layout>
            <div id="dashboard">
                <div className="name">
                    <div className="picture">
                        {
                            (avatar)
                                ? (<img src={avatar} alt="" />)
                                : (<img src={defaultAvatar} alt="" />)
                        }

                    </div>
                    <span>
                        <p>Hi, Welcome</p>
                        <h3>{info.name}!
                            {/* 
                            <span className='lvl'>
                                <p className='number'>L9</p>
                                <img src="/images/icons/icon.profile.level.tag.svg" />
                            </span>
                            */}
                        </h3>
                    </span>
                </div>
                <OrderCards
                    title="Current"
                    counts={counts}
                />
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
                    <img src="/images/banners/ranking.png" alt="" />
                    <a href="https://https://ranking.rz-game.com/" className="btn text gray dark xl">Go to Ranking                    </a>
                </div>
                <div className="products">
                    <h3 className="title">The new Product
                        <a href="/" className="lnk gray">See all</a>
                    </h3>
                    <div className="product">
                        <img src="/images/products/5-1.png" alt="" />
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