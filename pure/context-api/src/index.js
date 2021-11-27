import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const UserContext = React.createContext();
// using a provider and consumer
// Context is a way to pass data through the component tree without having to pass props down manually at every level.
// Context does not have state.
// There can only be one provider and one consumer per context.
// Its possible to pass an intial value to the provider.
// The Consumer component expects a single child.

const UserAvatar = ({ size }) => (
    <UserContext.Consumer>
        {user => (
            <img src={user.avatar}
                alt={user.name}
                className={`avatar avatar-${size || ""}`} />
        )}
    </UserContext.Consumer>
);

const UserStatus = () => (
    <UserContext.Consumer>
        {user => (
            <div className="user-stats">
                <div>
                    <UserAvatar user={user} size="small" />
                    {user.name}
                </div>
                <div className="stats">
                    <div>{user.followers} Followers</div>
                    <div>{user.following} Following</div>
                </div>
            </div>
        )}
    </UserContext.Consumer>
);

// Accept children and render them
const Nav = () => (
    <div className="nav">
        <UserAvatar/>
    </div>
);

const Content = () => (
    <div className="content">
        Main Content here.
    </div>
);


const Sidebar = () => (
    <div className="sidebar">
        <UserStatus />
    </div>
);

const Body = () => (
    <div className="body">
        <Sidebar />
        <Content />
    </div>
);

class App extends React.Component {
    state = {
        user: {
            avatar: "https://avatars.githubusercontent.com/u/51508252?v=4",
            name: "Serge-N",
            following: 100,
            followers: 130
        }
    };

    render() {
        return (
            <div className="app">
                <UserContext.Provider value={this.state.user}>
                    <Nav />
                    <Body />
                </UserContext.Provider>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("root"));

// One can reuse components -> Pass data around.
// One can pass components as children to other components -> Children.
// One can use the context API to pass data around.