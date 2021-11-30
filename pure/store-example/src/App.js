import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";

const Content = ({ tab }) => {
    switch (tab) {
        default:
        case "items":
            return <Items />;
        case "cart":
            return <Cart />;
    }
}

function Items() {
    return (
        <div>
            <h1>Items</h1>
        </div>
    );
}

const Cart = () => {
    return (<div>
        <h1>Cart</h1>
    </div>

    )
};
const App = () => {
    const [activeTab, setActiveTab] = useState("items");

    return (
        <div className="app">
            <Nav activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="app-content">
                <div className="good-space">
                    <Content tab={activeTab} />
                </div>
            </main>
        </div>
    );
}

export default App;