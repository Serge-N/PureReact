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

    constructor(props){
        super(props);

        console.log("[constructor]");
        console.log("state already set :", this.state);
    }
 
      // called after intial render is done.
      // hence a good place to make a network request

      componentDidMount(){
          console.log("[componentDidMount]", "Mounted");
      }

      // this has to be static 
      // caled before intial render and any time new props are received

      static getDerivedStateFromProps(nextProps, prevState){
        console.log("[getDerivedStateFromProps]");
        console.log("Next props", nextProps);
        console.log("Prev state", prevState);
        return null;
      }

}


