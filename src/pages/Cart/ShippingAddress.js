import { Addresses } from "../../API";
import Loading from "../../components/Loading";


function ShippingAddress() {
    const { loading, count, items } = Addresses();
    return (
        loading
            ?
            <Loading component />
            :
            (count === 0) ?
                <div className="no-address">
                    <h4>There is no saved address.</h4>
                    <a href="/dashboard/address/add/"><button className="btn md gray ghost dark">Add shipping address</button></a>
                </div>
                :
                items.map(address => (
                    <div className="shipping-address">
                        <input type="radio" name="address" id={'adrs' + address.id} value={address.id} />
                        <label for={'adrs' + address.id}>
                            <div className="radio-button"></div>
                            <div className="address-info">
                                <h4 className="address">
                                    {address.title}:
                                    {address.postal_address + ' ' +
                                        address.city + ' ' +
                                        address.state + ' ' +
                                        address.country}
                                </h4>
                            </div>
                        </label>
                    </div>
                ))

    );
}

export default ShippingAddress;