import React from "react";
import ReactDOM from "react-dom";

// the cycle can only be tapped from class components

class ErrorCatcher extends React.Component {
    state = { error: null }

    componentDidCatch(error, info) {
        console.log("[componentDidCatch]", error);
        this.setState({ error: info.componentStack });
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    An error occurred : {this.state.error}
                </div>
            );
        }

        return this.props.children;
    }
}

class LifecycleDemo extends React.Component {
    // intialise state first
    // do it before the constructor
    state = { counter: 0 };

    constructor(props) {
        super(props);

        console.log("[constructor]");
        console.log("state already set :", this.state);
    }

    // called after intial render is done.
    // hence a good place to make a network request

    componentDidMount() {
        console.log("[componentDidMount]", "Mounted");
    }

    // this has to be static 
    // caled before intial render and any time new props are received

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("[getDerivedStateFromProps]");
        console.log("Next props", nextProps);
        console.log("Prev state", prevState);
        return null;
    }

    // called before each render
    // Return false to prevent rendering
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[shouldComponentUpdate]", "Deciding to update");
        return true;
    }

    // called after render but before updating the DOM
    // return is passed into componentDidUpdate
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log("[getSnapshotBeforeUpdate]", "About to Update ...");
        return `Time is ${Date.now()}`;
    }

    // Called after render() and after updating the DOM. The whole
    // render/commit/update cycle is done
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[componentDidUpdate]", "Updated.");
        console.log("snapshot:", snapshot);
    }

    // Called right before the component is unmounted
    // Time to clean up! Remove any event listeners, cancel timers, etc.
    componentWillUnmount() {
        console.log("[componentWillUnmount]", "Goodbye cruel world.");
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    // Set a flag to cause an error on the next render
    // This will cause componentDidCatch to run in the parent
    causeErrorNextRender = () => {
        this.setState({
            causeError: true
        });
    };

    render() {
        console.log("[render]");

        if (this.state.causeError) {
            throw new Error("Oh No !!!");
        }

        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <ErrorCatcher>
        <LifecycleDemo />
    </ErrorCatcher>,
    document.querySelector('#root')
);