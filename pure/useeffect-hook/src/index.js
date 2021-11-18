import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const LogEffect = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("latest value :", text);
    });

    return (<input value={text} onChange={e => setText(e.target.value)} />);


};

// focusing input auomatically
function App() {
    const inputRef = useRef();

    const [value, setValue] = useState("");

    useEffect(() => {
        console.log("render");
        inputRef.current.focus();
    },
        [inputRef]);

    return (<input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />);
}
// data fetching
function Reddit() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Fetch the data when the component mounts 
        fetch("https://www.reddit.com/r/reactjs.json")
        .then(res => res.json()) 
        .then(json =>
                // Save the posts into state
        setPosts(json.data.children.map(c => c.data)) )
          }); // <-- we didn't pass the 2nd arg. what will happen?
        

    return (
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>);
}

ReactDOM.render(
    <div>
        <App />
        <br/>
        <LogEffect />
        <br/>
        <Reddit />
    </div>,
    document.getElementById("root"));