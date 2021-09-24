import React from 'react';
import Child from "./Child";

class Home extends React.Component {
    state = {
        kitchen:true,
        bathroom: false,
        livingroom: true,
        bedroom: false
    };

    handleKSwitch(action) {
        console.log("Switch is state of :", action.type);

        this.setState({
            kitchen: !this.state.kitchen
        });
    }

    handleBaSwitch(action) {
        console.log("Switch is state of :", action.type);

        this.setState({
            bathroom: !this.state.bathroom
        });
    }

    handleBSwitch(action) {
        console.log("Switch is state of :", action.type);

        this.setState({
            bedroom: !this.state.bedroom
        });
    }

    handleLSwitch(action) {
        console.log("Switch is state of :", action.type);

        this.setState(prevState => ({
            livingroom: !prevState.livingroom
          }));
    }

    render() {
        return (
            <div>
                <Child onAction={this.handleKSwitch} title="Kitchen Switch" />
                <Child onAction={this.handleBaSwitch} title="Bathroom Switch" />
                <Child onAction={this.handleLSwitch} title="Livingroom Switch" />
                <Child onAction={this.handleBSwitch} title="Bedroom Switch" />
                
                <p>Bedroom light : {this.state.bathroom?"ON" :"OFF"}</p>
                <p>Bathroom light {this.state.bathroom?"ON": "OFF"}</p>
                <p>Livingroom light: {this.state.livingroom?"ON":"OFF"}</p>
                <p>Kitchen light : {this.state.kitchen?"ON":"OFF"}</p>
            </div>
        );
    }
}

export default Home;