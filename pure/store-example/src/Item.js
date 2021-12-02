import React from "react";
import Proptypes from "prop-types";
import "./Item.css";

const Item = ({ item, onAddToCart }) => (
    <div className="item">
        <div className="item-left">
            <div className="item-image">
                <img src={item.ImageUrl} alt={item.name} width={70} height={70} />
            </div>
            <div className="item-title">
                {item.name}
            </div>
            <div className="item-description">
                {item.description}
            </div>
        </div>

        <div className="item-right">
            <div className="item-price">
                ${item.price}
            </div>
            <button className="item-addToCart" onClick={onAddToCart}>
                Add to cart
            </button>
        </div>
    </div>
);

Item.propTypes = {
    item: Proptypes.object.isRequired,
    onAddToCart: Proptypes.func.isRequired
};

export default Item;