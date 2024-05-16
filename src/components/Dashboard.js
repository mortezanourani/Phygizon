import { Component } from "react";

import pending from '../assets/icons/dashboard/pending_orders_icon.svg';
import waiting from '../assets/icons/dashboard/waiting_orders_icon.svg';
import current from '../assets/icons/dashboard/current_orders_icon.svg';
import delivered from '../assets/icons/dashboard/delivered_orders_icon.svg';
import canceled from '../assets/icons/dashboard/canceled_orders_icon.svg';
import returned from '../assets/icons/dashboard/returned_orders_icon.svg';

class OrderCard extends Component {
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

class OrderCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="orders">
                <div className="card all">
                    <h1>{this.props.counts.total_order_count}</h1>
                    <p>All Orders</p>
                    {/* <h3>22.94 MGC</h3>
                        <p>$7322.123</p>  */}
                </div>
                <div className="filters">
                    <OrderCard
                        title="Pending"
                        count={this.props.counts.pending_orders_count}
                        icon={pending}
                    />
                    <OrderCard
                        title="Waiting"
                        count={this.props.counts.waiting_orders_count}
                        icon={waiting}
                    />
                    <OrderCard
                        title="Current"
                        count={this.props.counts.current_orders_count}
                        icon={current}
                    />
                    <OrderCard
                        title="Delivered"
                        count={this.props.counts.delivered_orders_count}
                        icon={delivered}
                    />
                    <OrderCard
                        title="Returned"
                        count={this.props.counts.returned_orders_count}
                        icon={returned}
                    />
                    <OrderCard
                        title="Canceled"
                        count={this.props.counts.canceled_orders_count}
                        icon={canceled}
                    />
                </div>
            </div>
        )
    }
}

export { OrderCards, OrderCard };