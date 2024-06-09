import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./AuthProvider";

import "./css/site.css";

import Layout from "./layouts/main";
import Home from "./pages/Home";
import HelpCenter from "./pages/HelpCenter";
import Learning from "./pages/Learning";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import Verify from "./pages/Signup/Verify";
import SetPassword from "./pages/Signup/SetPassword";
import Category from "./pages/Category";
import Products from "./pages/Products";
import SingleProduct from "./pages/Product";

import CustomerLayout from "./layouts/customer";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Playground from "./pages/Playground";
import Finance from "./pages/Finance";
import Address from "./pages/Address";
import AddAddress from "./pages/Address/AddAddress";
import Settings from "./pages/Settings";
import Wishlist from "./pages/Wishlist";

import SellerLayout from "./layouts/seller";
import SellerDashboard from "./pages/SellerDashboard";

import UnderConstruction from "./components/UnderConstruction";
import NotFound from './components/404';

import Cart from "./pages/Cart";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/helpcenter/" element={<HelpCenter />} />
                        <Route path="/helpcenter/learning/" element={<Learning />} />
                        <Route path="/helpcenter/blog/" element={<Blog />} />
                        <Route path="/helpcenter/faq/" element={<FAQ />} />
                        <Route path="/category/*" element={<Category />} />
                        <Route path="/products/" element={<Products />} />
                        <Route path="/product/*" element={<SingleProduct />} />

                        <Route path="/signup/" element={<Signup />} />
                        <Route path="/signup/verify/" element={<Verify />} />
                        <Route path="/signup/password/" element={<SetPassword />} />

                        <Route path="/popular/" element={<UnderConstruction />} />
                        <Route path="/offers/" element={<UnderConstruction />} />
                        <Route path="/sellers/" element={<UnderConstruction />} />

                        <Route path="/cart/" element={<Cart />} />
                    </Route>

                    <Route element={<CustomerLayout />}>
                        <Route exact path="/customer/dashboard/" element={<Dashboard />} />
                        <Route path="/customer/orders/" element={<Orders />} />
                        <Route path="/customer/playground/" element={<Playground />} />
                        <Route path="/customer/finance/" element={<Finance />} />
                        <Route path="/customer/address/" element={<Address />} />
                        <Route path="/customer/address/add/" element={<AddAddress />} />
                        <Route path="/customer/settings/" element={<Settings />} />
                        <Route path="/customer/wishlist/" element={<Wishlist />} />

                        <Route path="/customer/support/" element={<UnderConstruction />} />
                    </Route>

                    <Route element={<SellerLayout />}>
                        <Route exact path="/seller/dashboard/" element={<SellerDashboard />} />
                        <Route path="/seller/orders/" element={<Orders />} />
                    </Route>

                    <Route element={<Layout />}>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;