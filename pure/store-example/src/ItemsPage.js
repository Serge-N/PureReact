import React from "react";
import PropTypes from "prop-types";
import "./ItemsPage.css";

function ItemsPage({ items }) {
    return (
        <ul className="items-page-items">
            {items.map(item =>
                <li key={item.id} className="items-page-item">
                    {item.name}
                </li>
            )}
        </ul>
    );
}

ItemsPage.propTypes = {
    items: PropTypes.array.isRequired
}

export default ItemsPage;