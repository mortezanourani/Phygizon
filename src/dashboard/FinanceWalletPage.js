import React from "react";
import Layout from "./Layout";

import '../css/finance.css';

const WalletPage = () => {
    return (
        <Layout>
            <div className="wallet" id="wallet">
                <nav>
                    <a href="/dashboard/finance"><button className="btn md text gray">Payment History</button></a>
                    <button className="btn md ghost gray active">Wallet</button>
                </nav>
                <div className="link-wallet">
                    <p>Lorem ipsum is simply dummy text of the ...</p>
                    <button className="btn lg ghost">Link Wallet</button>
                </div>
                <div className="records">
                    <table cellspacing="0" cellpadding="0">
                        <tr>
                            <th></th>
                            <th>Wallet</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td className="token"><img src="/images/icon.contact.chat.svg" alt="" />MGC</td>
                            <td className="wallet">0xab3931774ff48e5c0...b8ea <a href="#" className="ghost copy">
                                <img src="/images/icon.finance.svg" alt="" />
                            </a>
                            </td>
                            <td>
                                <span className="badge red">Disconnect</span>
                            </td>
                            <td>
                                <input type="checkbox" name="" id="" className="switch" checked />
                            </td>
                            <td>
                                <a href="#" className="lnk md">View on gizon</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="token"><img src="/images/icon.contact.chat.svg" alt="" />MGC</td>
                            <td className="wallet">0xab3931774ff48e5c0...b8ea <a href="#" className="ghost copy">
                                <img src="/images/icon.finance.svg" alt="" />
                            </a>
                            </td>
                            <td>
                                <span className="badge green">Connect</span>
                            </td>
                            <td>
                                <input type="checkbox" name="" id="" className="switch" />
                            </td>
                            <td>
                                <a href="#" className="lnk md">View on gizon</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default WalletPage;