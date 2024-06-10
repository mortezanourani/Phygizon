import { useAuth } from "../../../AuthProvider";

import "./index.css";
import defaultAvatar from "../../../assets/icons/dashboard/default_avatar.png";

import Totals from "./Totals";
import Orders from "./Orders";
import TopSellings from "./TopSellings";

function Dashboard() {
    const auth = useAuth();

    return (
        <div className="seller-dashboard">
            <div className="profile">
                <div className="picture">
                    {/* {
                        (avatar)
                            ? (<img src={avatar} alt="" />)
                            : (<img src={defaultAvatar} alt="" />)
                    } */}
                    <img src={defaultAvatar} alt="" />
                </div>
                <span>
                    <p>Hi, Welcome</p>
                    <h3>{auth.user}!
                        {/* 
                            <span className='lvl'>
                                <p className='number'>L9</p>
                                <img src="/images/icons/icon.profile.level.tag.svg" />
                            </span>
                            */}
                    </h3>
                </span>
            </div>

            <Totals />

            <div className="card seller-orders">
                <h4 className="card-title">All Orders</h4>
                <div className="card-content">
                    <Orders />
                </div>
            </div>

            <div className="card nft-marketplace">
                <h4 className="card-title">NFT Marketplace</h4>
                <div className="card-content">

                </div>
            </div>

            <div className="card top-selling">
                <h4 className="card-title">Top Selling products</h4>
                <div className="card-content">
                    <div>
                        <TopSellings />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;