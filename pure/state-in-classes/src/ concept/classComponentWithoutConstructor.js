import React from "react";
import Child from "./Child";

class CountingParentConstructorLess extends React.Component {
    
    // property intializer
    state = {
        actionCount: 0
    };

    handleAction = (action) => {
        console.log("Child says", action.type);

        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction} title="called without constructor"/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }

}

export default CountingParentConstructorLess;