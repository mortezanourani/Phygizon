
import "./index.css";
import metamaskIcon from "./assets/metamask_wallet.svg";

import BalanceItem from "./BalanceItem";
import chargeWalletIcon from "./assets/cahrge_wallet_icon.svg";
import walletBalanceIcon from "./assets/wallet_balance_icon.svg";
import exchangeMGCIcon from "./assets/exchange_mgc_icon.svg";

function SellerFinanceWallet() {
    return (
        <div className="seller-finance-wallet">
            <div className="wallet-container">
                <div className="wallet-box">
                    <div className="wallet-address">
                        <div className="wallet-status">
                            <img src={metamaskIcon} alt="" />
                            <span className="tag dc">Disconnect</span>
                        </div>
                        <label>No wallet connected.</label>
                    </div>
                    <button className="link-wallet">Link Wallet</button>
                </div>

                <div className="seller-finance-balance">
                    <BalanceItem
                        title="Charge wallet"
                        text="www.sarafi.com"
                        icon={chargeWalletIcon} />

                    <BalanceItem
                        title="0.00 MGC"
                        text="Wallet balance"
                        icon={walletBalanceIcon} />

                    <BalanceItem
                        title="Exchange MGC"
                        text="www.sarafi.com"
                        icon={exchangeMGCIcon} />
                </div>
            </div>
        </div>
    );
};

export default SellerFinanceWallet;