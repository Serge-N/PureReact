import React from "react";
import Child from "./Child";

function handleAction(event) {
    console.log("Child did: " + event.type);
}

function Parent() {
    return (
        <Child onAction={handleAction} title="Call" />
    );
}



export default Parent;