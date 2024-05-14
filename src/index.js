import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './css/site.css';
import './css/dashboard.css';

import NotFound from './NotFound';

import HomePage from './website/HomePage';
import reportWebVitals from './reportWebVitals';

import SignupPage from './website/SignupPage';
import SignupVerifyPage from './website/SignupVerificationPage';
import SignupPasswordPage from './website/SignupPasswordPage';

import Dashboard from './dashboard/Dashboard';
import AddressPage from './dashboard/AddressPage';
import AddressAddPage from './dashboard/AddressAddPage';
import AddressEditPage from './dashboard/AddressEditPage';
import PlaygroundPage from './dashboard/PlaygroundPage';
import PaymentHistoryPage from './dashboard/FinancePaymentHistoryPage';
import WalletPage from './dashboard/FinanceWalletPage';
import PendingsPage from './dashboard/OrdersPendingsPage';
import WaitingsPage from './dashboard/OrdersWaitingsPage';
import InProgressPage from './dashboard/OrdersInProgressPage';
import DeliveredsPage from './dashboard/OrdersDeliveredsPage';
import OrderDetailsPage from './dashboard/OrderDetailsPage';
import HelpCenterPage from './website/HelpCenterPage';
import LearningPage from './website/HelpCenterLearningPage';
import BlogPage from './website/HelpCenterBlogPage';
import FaqPage from './website/HelpCenterFaqPage';
import ProductsPage from './website/ProductsPage';
import ProductPage from './website/ProductPage';
import CategoryProductsPage from './website/CategoryProductsPage';
import CartPage from './website/CartPage';
import ComingSoon from './ComingSoon';
import SettingsPage from './dashboard/SettingsPage';
import SavePage from './dashboard/SavePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={HomePage} />
      <Route path="/signup/" Component={SignupPage} />
      <Route path="/signup/verify/" Component={SignupVerifyPage} />
      <Route path="/signup/password/" Component={SignupPasswordPage} />
      <Route path="/products/" Component={ProductsPage} />
      <Route path="/product/*" Component={ProductPage} />
      <Route path="/category/*" Component={CategoryProductsPage} />
      <Route path="/helpcenter/" Component={HelpCenterPage} />
      <Route path="/helpcenter/learning/" Component={LearningPage} />
      <Route path="/helpcenter/blog/" Component={BlogPage} />
      <Route path="/helpcenter/faq/" Component={FaqPage} />
      <Route path="/sellers/" Component={ComingSoon} />
      <Route path="/offers/" Component={ComingSoon} />
      <Route path="/popular/" Component={ComingSoon} />
      <Route path="/categories/" Component={ComingSoon} />

      <Route path="/cart/" Component={CartPage} />

      <Route exact path="/dashboard/" Component={Dashboard} />
      <Route path='/dashboard/address/' Component={AddressPage} />
      <Route path='/dashboard/address/add/' Component={AddressAddPage} />
      {/* <Route path='/dashboard/address/*' Component={AddressEditPage} /> */}
      <Route path="/dashboard/playground/" Component={PlaygroundPage} />
      <Route path="/dashboard/finance/" Component={PaymentHistoryPage} />
      <Route path="/dashboard/finance/wallet/" Component={WalletPage} />
      <Route path="/dashboard/orders/" Component={PendingsPage} />
      <Route path="/dashboard/orders/waiting/" Component={WaitingsPage} />
      <Route path="/dashboard/orders/inprogress/" Component={InProgressPage} />
      <Route path="/dashboard/orders/delivered/" Component={DeliveredsPage} />
      <Route path="/dashboard/order/*" Component={OrderDetailsPage} />
      <Route path="/dashboard/save/" Component={SavePage} />
      <Route path="/dashboard/settings/*" Component={SettingsPage} />

      <Route path="*" Component={NotFound} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
