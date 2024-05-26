import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./AuthProvider";

import "./css/site.css";
import "./css/dashboard.css";

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
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;