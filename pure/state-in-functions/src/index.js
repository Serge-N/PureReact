import React from "react";
import ReactDOM from "react-dom";

class OneTimeButton extends React.Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.props.onClick();
        this.setState({ clicked: true });
    }

    render() {
        return (
            <button onClick={this.handleClick} disabled={this.state.clicked}>
                You can only click me once!
            </button>
        );
    }
}

// button component with hooks
function OneTimeButtonFunc({ onClick }) {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
        onClick();
        //OK, no more clicking.
        setClicked(true);
    }

    return (
        <button  onClick={handleClick} disabled={clicked}>
            You can still click me Once.
        </button>
    );
}

ReactDOM.render(
<span>
<OneTimeButton onClick={() => alert("hi")} /><br/>
<OneTimeButtonFunc onClick={() => alert("hi")} />
</span>
    , document.querySelector("#root")
);