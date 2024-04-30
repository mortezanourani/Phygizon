import React from "react";
import Layout from "./Layout";

import '../css/finance.css';

const PaymentHistoryPage = () => {
    return (
        <Layout>
            <div class="payment-history" id="payment-history">
                <nav>
                    <button class="btn md ghost gray active">Payment History</button>
                    <a href="/dashboard/finance/wallet"><button class="btn md text gray">Wallet</button></a>
                </nav>
                <div class="export">
                    <p>Lorem ipsum is simply dummy text of the ...</p>
                    <button class="btn lg ghost">Export</button>
                    <button class="btn lg icon gary">
                        <img src="/images/icons/icon.finance.svg" alt="" />
                    </button>
                </div>
                <div class="records">
                    <table cellspacing="0" cellpadding="0">
                        <tr>
                            <th>Order</th>
                            <th>Payment Type</th>
                            <th>Ammount</th>
                            <th>Status</th>
                            <th>Attach</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td><img src="" alt="" />245612</td>
                            <td>Wallet</td>
                            <td>$3.00</td>
                            <td>
                                <span class="badge red">Expired</span>
                            </td>
                            <td></td>
                            <td>2023-05-21 10:23:14</td>
                        </tr>
                        <tr>
                            <td><img src="" alt="" />245612</td>
                            <td>Paypall</td>
                            <td>$10.00</td>
                            <td>
                                <span class="badge green">Completed</span>
                            </td>
                            <td></td>
                            <td>2023-05-21 10:23:14</td>
                        </tr>
                        <tr>
                            <td><img src="" alt="" />245612</td>
                            <td>Credit Card</td>
                            <td>$30.00</td>
                            <td>
                                <span class="badge red">Expired</span>
                            </td>
                            <td><span class="badge gray">NFT</span></td>
                            <td>2023-05-21 10:23:14</td>
                        </tr>
                        <tr>
                            <td><img src="" alt="" />245612</td>
                            <td>Wallet</td>
                            <td>$3.00</td>
                            <td>
                                <span class="badge red">Expired</span>
                            </td>
                            <td></td>
                            <td>2023-05-21 10:23:14</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default PaymentHistoryPage;