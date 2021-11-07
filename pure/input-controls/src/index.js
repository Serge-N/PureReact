import React, { useState } from "react";
import ReactDOM from "react-dom";


const InputExample = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
      //  setText(e.target.value);
    };

    return (
        <input
            type="text"
            value={text}
            onChange={handleChange} />
    );
}



ReactDOM.render(<InputExample/>, document.getElementById("root"));