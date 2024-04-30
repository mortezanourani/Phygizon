import React from "react";
import Layout from "./Layout";

import '../css/finance.css';

const WalletPage = () => {
    return (
        <Layout>
            <div class="wallet" id="wallet">
                <nav>
                    <a href="/dashboard/finance"><button class="btn md text gray">Payment History</button></a>
                    <button class="btn md ghost gray active">Wallet</button>
                </nav>
                <div class="link-wallet">
                    <p>Lorem ipsum is simply dummy text of the ...</p>
                    <button class="btn lg ghost">Link Wallet</button>
                </div>
                <div class="records">
                    <table cellspacing="0" cellpadding="0">
                        <tr>
                            <th></th>
                            <th>Wallet</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td class="token"><img src="/images/icon.contact.chat.svg" alt="" />MGC</td>
                            <td class="wallet">0xab3931774ff48e5c0...b8ea <a href="#" class="ghost copy">
                                <img src="/images/icon.finance.svg" alt="" />
                            </a>
                            </td>
                            <td>
                                <span class="badge red">Disconnect</span>
                            </td>
                            <td>
                                <input type="checkbox" name="" id="" class="switch" checked />
                            </td>
                            <td>
                                <a href="#" class="lnk md">View on gizon</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="token"><img src="/images/icon.contact.chat.svg" alt="" />MGC</td>
                            <td class="wallet">0xab3931774ff48e5c0...b8ea <a href="#" class="ghost copy">
                                <img src="/images/icon.finance.svg" alt="" />
                            </a>
                            </td>
                            <td>
                                <span class="badge green">Connect</span>
                            </td>
                            <td>
                                <input type="checkbox" name="" id="" class="switch" />
                            </td>
                            <td>
                                <a href="#" class="lnk md">View on gizon</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default WalletPage;