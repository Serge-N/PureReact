import React from "react";
import Nav from "./Nav";
import "./App.css";


const App = () => {
    return (
        <div className="App">
            <Nav />
            <main className="app-content">
                <h1>Hello World</h1>
            </main>
        </div>
    );
}

export default App;