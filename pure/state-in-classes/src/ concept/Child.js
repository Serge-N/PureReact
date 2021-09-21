import React from "react";

function Child({ onAction , title}) {
    return (
        <button onClick={onAction}>
            {title}
        </button>
    );
}

export default Child;