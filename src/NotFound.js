import React from "react";
import Layout from "./website/Layout";

const NotFound = () => {
    return (
        <Layout>
            <div className="notfound">
                <img src="/images/404.webp" alt="Page Not Found" />
            </div>
        </Layout>
    )
}

export default NotFound;