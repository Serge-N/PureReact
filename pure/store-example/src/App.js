import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import ItemsPage from "./ItemsPage";
import { items } from "./static-data";

const Content = ({ tab }) => {
    switch (tab) {
        default:
        case "items":
            return <ItemsPage items={items}/>
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