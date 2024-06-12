import useFetchData from "../../../../hooks/useFetchData";
import { userOrderCountsAPI } from "../../../../hooks/apiUrls";

import "./index.css";
import Loading from "../../../../components/Loading"

function TopSellings() {
    const { loading, data, error } = useFetchData(userOrderCountsAPI);

    return (
        (loading)
            ?
            <Loading component />
            :
            <>
                <Product
                    name="Canon"
                    description="Canon EOS 2000d"
                    nftPrice="128 MGC"
                    price="$400"
                    view="500"
                    image="/images/products/canon_eos_2000d.png"
                />

                <Product
                    name="iPhone"
                    description="iPhone 16 512G"
                    nftPrice="115 MGC"
                    price="$320"
                    view="430"
                    image="/images/products/iphone_16_512.png"
                />
            </>

    )
}

function Product(props) {
    return (
        <div
            className="top-selling-product">
            <img src={props.image} alt="" />
            <div className="col product-details">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <span className="tag">Shared</span>
            </div>
            <div className="col sale-details">
                <h4 className="nft-price">{props.nftPrice}</h4>
                <p className="price">{props.price}</p>
                <p className="view">{props.view}</p>
            </div>
        </div>
    );
}

export default TopSellings;