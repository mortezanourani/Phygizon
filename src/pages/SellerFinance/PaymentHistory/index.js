
import "./index.css";

import filterButtonIcon from "./assets/button_filter_icon.svg";
import PaymentsTable from "./PaymentsTable";

function SellerFinancePaymentHistory() {
    return (
        <div className="seller-finance-payment-history">
            <div className="payment-history-export-section">
                <lable>History of transactions related to the sale of your products in Phygizon</lable>
                <div className="payment-history-export-menu">
                    <button className="btn ghost xl export">Export</button>
                    <button className="btn ghost gray xl filter">
                        <img src={filterButtonIcon} alt="" />
                    </button>
                </div>
            </div>

            <PaymentsTable />
        </div>
    );
};

export default SellerFinancePaymentHistory;