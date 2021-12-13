import React from "react";
import PropTypes from "prop-types";
import "./ItemsPage.css";
import Item from "./Item";

function ItemsPage({ items, onAddToCart }) {
  return (
    <ul className="items-page-items">
      {items.map(item =>
        <li key={item.id} className="items-page-item">
          <Item item={item} >
            <button onClick={() => onAddToCart(item)}>
              Add to cart
            </button>
          </Item>
        </li>
      )}
    </ul>
  );
}

ItemsPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ItemsPage;