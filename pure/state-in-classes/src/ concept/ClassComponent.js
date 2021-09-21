import React from 'react';
import Child from './Child';

class CountingParent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actionCount: 0
        };

        this.handleAction = this.handleAction.bind(this);
        this.handleResetAction = this.handleResetAction.bind(this);
    }

    handleAction(action) {
        console.log("Count button child says ", action);

        // increment value
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }

    handleResetAction(action) {
        console.log("Reset button child says ", action);

        // increment value
        this.setState({
            actionCount: 0
        });
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleAction} title={"Count"} />
                <Child onAction={this.handleResetAction} title={"reset"} />
                <p>Clied {this.state.actionCount} times.</p>
            </div>);
    }
}

export default CountingParent;