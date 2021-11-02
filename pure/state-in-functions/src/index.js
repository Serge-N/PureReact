import React from "react";
import ReactDOM from "react-dom";
import LightSwitch from "./LightSwitch";
import MultiCounter from "./MultiCounter";
import RandomList from "./RandomList";
import StepTracker from "./Stepbit";

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
        <button onClick={handleClick} disabled={clicked}>
            You can still click me Once.
        </button>
    );
}

ReactDOM.render(
    <div>
        <OneTimeButton onClick={() => alert("hi")} />
        <br />
        <div style={{ margin: "1em" }}></div>
        <OneTimeButtonFunc onClick={() => alert("hi")} />
        <div style={{ margin: "1em" }}></div>
        <StepTracker number={10}/>
        <div style={{ margin: "1em" }}></div>
        <RandomList/>
        <br/>
        <MultiCounter/>
        <br/>
        <LightSwitch/>
    </div>
    , document.querySelector("#root")
);

// if ing the data doesn't change the UI, then it shouldn't be in state.
// Examples include :

// i.   User-entered data.
// ii.  Current selected itm.
// iii. Data from a server
// iv.  Open/closed  state e.g sidebars
// v. Think declaratively
// try to give state to components the upper components and pass props down to the statelesss components.