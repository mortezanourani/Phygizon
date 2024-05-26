import { Component } from "react";

import pending from '../assets/icons/dashboard/pending_orders_icon.svg';
import waiting from '../assets/icons/dashboard/waiting_orders_icon.svg';
import current from '../assets/icons/dashboard/current_orders_icon.svg';
import delivered from '../assets/icons/dashboard/delivered_orders_icon.svg';
import canceled from '../assets/icons/dashboard/canceled_orders_icon.svg';
import returned from '../assets/icons/dashboard/returned_orders_icon.svg';
import { GetOrdersCounts } from "../API";
import Loading from "./Loading";

function OrderCounts() {
    const data = GetOrdersCounts();

    return (
        (data.loading)
            ?
            <div className="orders" style={{ width: '100vw' }}>
                <Loading component />
            </div>
            :
            <div className="orders">
                <div className="card all">
                    <h1>{data.orders.total_order_count}</h1>
                    <p>All Orders</p>
                    {/* <h3>22.94 MGC</h3>
                        <p>$7322.123</p>  */}
                </div>
                <div className="filters">
                    <OrderCount
                        title="Pending"
                        count={data.orders.pending_orders_count}
                        icon={pending}
                    />
                    <OrderCount
                        title="Waiting"
                        count={data.orders.waiting_orders_count}
                        icon={waiting}
                    />
                    <OrderCount
                        title="Current"
                        count={data.orders.current_orders_count}
                        icon={current}
                    />
                    <OrderCount
                        title="Delivered"
                        count={data.orders.delivered_orders_count}
                        icon={delivered}
                    />
                    <OrderCount
                        title="Returned"
                        count={data.orders.returned_orders_count}
                        icon={returned}
                    />
                    <OrderCount
                        title="Canceled"
                        count={data.orders.canceled_orders_count}
                        icon={canceled}
                    />
                </div>
            </div>
    )
}

class OrderCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Total',
            count: 0
        };
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.icon} alt="" />
                <p>{this.props.title}</p>
                <h3>{this.props.count}</h3>
                <a href={"/dashboard/orders/" + this.props.title.toLowerCase()} className="lnk sm gray">See all</a>
            </div>
        )
    }
}

export { OrderCounts, OrderCount };