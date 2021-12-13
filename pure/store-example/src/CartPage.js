import React from "react";
import propTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <ul className="cart-page-items">
      {items.map(item =>
        <li key={item.id} className="cart-page-item">
          <Item item={item}>
            <div className="cart-item-controls">
              <button className="cart-item-remove-one"
                      onClick={() => onRemoveOne(item)}>
                &#10094;
              </button>
              <span className="cart-item-count">
                {item.count}
              </span>
              <button className="cart-item-add-one"
                      onClick={() => onAddOne(item)}>
                &#10095;
              </button>
            </div>
          </Item>
        </li>
      )}
    </ul>
  );
}

CartPage.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onAddOne: propTypes.func.isRequired,
  onRemoveOne: propTypes.func.isRequired
};

export default CartPage;