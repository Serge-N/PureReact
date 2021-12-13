import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import ItemsPage from "./ItemsPage";
import CartPage from "./CartPage";
import { items } from "./static-data";

const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
    switch (tab) {
        default:
        case "items":
            return <ItemsPage items={items} onAddToCart={onAddToCart} />
        case "cart":
            return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem} />;
    }
}

const App = () => {
    // Any time you want to iterate over the values of an array to create an aggregate result, consider using reduce.
    const summarizeCart = cart => {
        const groupedItems = cart.reduce((summary, item) => {
            summary[item.id] = summary[item.id] || { ...item, quantity: 0 };
            summary[item.id].quantity++;
            return summary;
        }, {})

        return Object.values(groupedItems);
    }

    const removeItem = item => {
        let index = cart.findIndex(i => i.id === item.id);
        if (index >= 0) {
            setCart(cart => {
                const copy = [...cart];
                copy.splice(index, 1);
                return copy;
            });
        }
    };


    const [activeTab, setActiveTab] = useState("items");
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    }

    return (
        <div className="app">
            <Nav activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="app-content">
                <Content
                    tab={activeTab}
                    onAddToCart={addToCart}
                    onRemoveItem={removeItem}
                    cart={summarizeCart(cart)}
                />
            </main>
        </div>
    );
}

// Thumb rule : never mutate state directly or child properties directly
export default App;