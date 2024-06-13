
import "./index.css";

import Badge from "../../../components/Badge";

function ProductsTable(props) {
    return (
        <div>
            <div className="table-container">
                <table className="seller-products-table">
                    <tr>
                        <th>Product</th>
                        <th>Price ($)</th>
                        <th>Discount ($)</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Sales Amount</th>
                        <th>Date</th>
                        <th>Attach</th>
                        <th>More Action</th>
                    </tr>
                    <tr>
                        <td className="product-name">
                            <img src="/images/products/canon_eos_2000d.png" alt="" />
                            Canon EOS 2000d
                        </td>
                        <td className="product-price">1,000.00</td>
                        <td className="product-discount">900</td>
                        <td>
                            <Badge type="available" />
                        </td>
                        <td className="product-amount">11</td>
                        <td className="prodcut-amount">8</td>
                        <td className="prodcut-date">2023/11/06</td>
                        <td>
                            <Badge type="nft" />
                        </td>
                        <td>
                            <button
                                className="action-button"
                                onClick={() => alert("actions")}
                            ></button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="table-navigator">
                <button className="previous" disabled>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8346 6.9974H1.16797M1.16797 6.9974L7.0013 12.8307M1.16797 6.9974L7.0013 1.16406" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Previous
                </button>
                <div className="steps">
                    <button disabled>1</button>
                </div>
                <button className="next" disabled>
                    Next
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.16797 6.9974H12.8346M12.8346 6.9974L7.0013 1.16406M12.8346 6.9974L7.0013 12.8307" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ProductsTable;