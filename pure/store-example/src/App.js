import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import ItemsPage from "./ItemsPage";
import { items } from "./static-data";

const Content = ({ tab, onAddToCart }) => {
    switch (tab) {
        default:
        case "items":
            return <ItemsPage items={items} onAddToCart={onAddToCart} />
        case "cart":
            return <Cart />;
    }
}

const Cart = () => {
    return (<div>
        <h1>Cart</h1>
    </div>
    )
};
const App = () => {
    const [activeTab, setActiveTab] = useState("items");
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    }

    return (
        <div className="app">
            <div>
                {cart.length} items
            </div>
            <Nav activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="app-content">
                <div className="good-space">
                    <Content tab={activeTab} onAddToCart={addToCart} />
                </div>
            </main>
        </div>
    );
}

// Thumb rule : never mutate state directly or child properties directly
export default App;