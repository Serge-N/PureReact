import React, { useState, useRef } from "react";
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
        <input style={{ margin: "10px 1px" }}
            type="text"
            placeholder="No number allowed"
            value={text}
            onChange={handleChange} />);
}

const Container = () => (
    <div>
        <InputExample />
        <br />
        <NoNumbersInput />
        <br />
        <EasyInput />
        <br/>
        <REfInput />
    </div>
);

const EasyInput = () => (
    <input type="text" />
);

const REfInput = () => {
    const inputRef = useRef();

    const showValue = () => {
        alert(`Input contains : ${inputRef.current.value}`);
    };

    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={showValue}>Show Value</button>
        </div>
    );
}

ReactDOM.render(<Container />, document.getElementById("root"));