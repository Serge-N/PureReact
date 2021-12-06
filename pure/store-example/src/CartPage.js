import React from "react";
import propTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

function CartPage({ items }) {
    return (
        <ul className="cart-page-items">

            {items.map(item =>
                <li key={item.id} className="cart-page-item">
                    <Item item={item} />
                </li>
            )}
        </ul>
    );
}

CartPage.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired
};

export default CartPage;