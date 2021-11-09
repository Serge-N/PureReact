import React, { useState } from "react";
import ReactDOM from "react-dom";


const InputExample = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <input
            type="text"
            value={text}
            onChange={handleChange} />
    );
}

const NoNumbersInput = () => {

    const [text, setText] = useState("");
    const handleChange = event => {
        let text = event.target.value; setText(
            text.replace(/[0-9]/g, '')
        );
    };
    return (
        <input
            type="text"
            placeholder="No number allowed"
            value={text}
            onChange={handleChange} />);
}
const Container = () => (
    <div>
        <InputExample />
        <NoNumbersInput />
    </div>
);

ReactDOM.render(<Container />, document.getElementById("root"));