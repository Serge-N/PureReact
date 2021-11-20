import React, { useState, useEffect} from "react";
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

    const [inputValue, setValue] = useState("reactjs");
    const [subreddit, setSubreddit] = useState(inputValue);

    const handleChange = e => {
        e.preventDefault();
        setSubreddit(inputValue);
    };

    return (
        <>
            <form onSubmit={handleChange}>
                <input value={inputValue} onChange={e => setValue(e.target.value)} />
            </form>
            <Reddit subreddit={subreddit} />
        </>
    );
}

// data fetching
function Reddit({ subreddit }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Fetch the data when the component mounts 
        fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(res => res.json())
            .then(json =>
                // Save the posts into state
                setPosts(json.data.children.map(c => c.data)))
    }, [subreddit, setPosts]);

    return (
        <div>
            <br />
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

ReactDOM.render(
    <div>
        <App />
        <br />
        <LogEffect />
    </div>,
    document.getElementById("root"));