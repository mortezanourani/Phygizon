import { useEffect, useState } from "react";

import Loading from "../../../components/Loading";

import noWalletIcon from "../../../assets/icons/dashboard/no_wallet_icon.svg";
import copyIcon from "../../../assets/icons/copy_icon.svg";
import walletBalanceIcon from "../../../assets/icons/dashboard/wallet_balance_icon.svg";

import "./index.css";

function WalletCard() {
    // const data = GetWallet();
    const [data, setData] = useState({ loading: true });

    useEffect(() => {
        setTimeout(() => {
            setData({ loading: false })
        }, 550);
    }, []);

    return (
        (data?.loading)
            ?
            <div className="wallet">
                <Loading component />
            </div>
            :
            (!data.wallet_number)
                ?
                <div className="wallet">
                    <div className="number">
                        <h5><img src={noWalletIcon} alt="" /> No Connected Wallet</h5>
                        <p></p>
                    </div>
                    <div className="balance">
                        <h3 className="title">
                            <img src={walletBalanceIcon} alt="" />
                            Wallet Balance
                        </h3>
                        <h2>
                            00 MGC
                            <p>00.00 USD</p>
                        </h2>
                        <button className="btn sm cta" id="addcredit">Link Wallet</button>
                    </div>
                </div>
                :
                <div className="wallet">
                    <div className="number">
                        <h5><img src={data.wallet_icon} alt="" />{data.wallet_name}</h5>
                        <p>{data.wallet_number}
                            <button className="btn text gray">
                                <img src={copyIcon} alt="Copy" />
                            </button>
                        </p>
                    </div>
                    <div className="balance">
                        <h3 className="title">
                            <img src={walletBalanceIcon} alt="" />
                            Wallet Balance
                        </h3>
                        <h2>
                            {data.wallet_balance} {data.wallet_currency_sign}
                            <p>{data.wallet_balance_usd} USD</p>
                        </h2>
                        <button className="btn sm cta" id="addcredit">Add Credit</button>
                    </div>
                </div>

    )
}

export default WalletCard;