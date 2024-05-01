import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './css/site.css';
import './css/dashboard.css';

import NotFound from './NotFound';

import HomePage from './website/HomePage';
import reportWebVitals from './reportWebVitals';
import LoginPage from './website/LoginPage';

import Dashboard from './dashboard/Dashboard';
import PlaygroundPage from './dashboard/PlaygroundPage';
import PaymentHistoryPage from './dashboard/FinancePaymentHistoryPage';
import WalletPage from './dashboard/FinanceWalletPage';
import PendingsPage from './dashboard/OrdersPendingsPage';
import WaitingsPage from './dashboard/OrdersWaitingsPage';
import DeliveredsPage from './dashboard/OrdersDeliveredsPage';
import HelpCenterPage from './website/HelpCenterPage';
import LearningPage from './website/HelpCenterLearningPage';
import BlogPage from './website/HelpCenterBlogPage';
import FaqPage from './website/HelpCenterFaqPage';
import ProductsPage from './website/ProductsPage';
import CategoryProductsPage from './website/CategoryProductsPage';
import CartPage from './website/CartPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/login/" Component={LoginPage} />
        <Route path="/products/" Component={ProductsPage} />
        <Route path="/category/*" Component={CategoryProductsPage} />
        <Route path="/helpcenter/" Component={HelpCenterPage} />
        <Route path="/helpcenter/learning/" Component={LearningPage} />
        <Route path="/helpcenter/blog/" Component={BlogPage} />
        <Route path="/helpcenter/faq/" Component={FaqPage} />

        <Route path="/cart/" Component={CartPage} />

        <Route exact path="/dashboard/" Component={Dashboard} />
        <Route path="/dashboard/playground/" Component={PlaygroundPage} />
        <Route path="/dashboard/finance/" Component={PaymentHistoryPage} />
        <Route path="/dashboard/finance/wallet/" Component={WalletPage} />
        <Route path="/dashboard/orders/" Component={PendingsPage} />
        <Route path="/dashboard/orders/waiting/" Component={WaitingsPage} />
        <Route path="/dashboard/orders/delivered/" Component={DeliveredsPage} />

        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
