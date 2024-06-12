import { userOrderCountsAPI } from "../../../../hooks/apiUrls"
import useFetchData from "../../../../hooks/useFetchData"

import "./index.css";

import Loading from "../../../../components/Loading";
import totalProfitIcon from "./assets/dashboard_total_profit.svg";
import totalExpensesIcon from "./assets/dashboard_total_expenses.svg";
import totalTaxesIcon from "./assets/dashboard_total_taxes.svg";

function Totals() {
    const { loading, data, error } = useFetchData(userOrderCountsAPI);

    return (
        <div className="totals">
            {
                (loading)
                    ?
                    <Loading component />
                    :
                    <>
                        <div className="balance">
                            <label>Total balance</label>
                            <h3>2500 MGC</h3>
                            <p>$670,870,120</p>
                        </div>
                        <div className="filters">
                            <TotalCard
                                icon={totalProfitIcon}
                                name="Profit"
                                value="1800 MGC" />

                            <TotalCard
                                icon={totalExpensesIcon}
                                name="Expenses"
                                value="500 MGC" />

                            <TotalCard
                                icon={totalTaxesIcon}
                                name="Taxes"
                                value="50 MGC" />
                        </div>
                    </>
            }
        </div>
    )
}

function TotalCard(props) {
    return (
        <div className="total-card">
            <img src={props.icon} alt="" />
            <span>
                <label>Total {props.name}</label>
                <h4>{props.value}</h4>
            </span>
        </div>
    )
}

export default Totals;