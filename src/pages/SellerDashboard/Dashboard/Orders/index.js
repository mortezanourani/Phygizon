import { Link } from "react-router-dom";
import useFetchData from "../../../../hooks/useFetchData";
import { userOrderCountsAPI } from "../../../../hooks/apiUrls";

import "./index.css";
import Loading from "../../../../components/Loading"

import currentOrdersChart from "./assets/dashboard_orders_current_chart.svg";
import deliveredOrdersChart from "./assets/dashboard_orders_delivered_chart.svg";
import returnedOrdersChart from "./assets/dashboard_orders_returned_chart.svg";
import nftOrdersChart from "./assets/dashboard_orders_nft_chart.svg";
import keeperOrdersChart from "./assets/dashboard_orders_keeper_chart.svg";

function Orders() {
    const { loading, data, error } = useFetchData(userOrderCountsAPI);

    return (
        (loading)
            ?
            <Loading component />
            :
            <>
                <OrderCard
                    title="Current"
                    count="24"
                    image={currentOrdersChart}
                />

                <OrderCard
                    title="Delivered"
                    count="12"
                    image={deliveredOrdersChart}
                />

                <OrderCard
                    title="Returned"
                    count="02"
                    image={returnedOrdersChart}
                />

                <OrderCard
                    title="NFT"
                    count="08"
                    image={nftOrdersChart}
                />

                <OrderCard
                    title="The Keeper"
                    count="04"
                    image={keeperOrdersChart}
                />
            </>

    )
}

function OrderCard(props) {
    return (
        <div className="order-card">
            <label>{props.title}</label>
            <h3>{props.count}</h3>
            <img src={props.image} alt="" />
            <Link
                to="/seller/orders/current">
                See all
            </Link>
        </div>
    );
}

export default Orders;