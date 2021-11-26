import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const UseAvatar = ({ user, size }) => (
    <img src={user.avatar}
        alt={user.name}
        className={`avatar avatar-${size || ""}`} />
);

const UserStatus = ({ user }) => (
    <div className="user-stats">
        <div>
            <UseAvatar user={user} size="small" />
            {user.name}
        </div>
        <div className="stats">
            <div>{UserStatus.followers} Followers</div>
            <div>Followers {user.following}</div>
        </div>
    </div>
);

// Accept children and render them
const Nav = ({children}) => (
    <div className="nav">
        {children}
    </div>
);

const Content = () => (
    <div className="content">Main Content</div>
);


const Sidebar = ({ children }) => (
    <div className="sidebar">
      {children}
    </div>
);

const Body = ({ sidebar, cfontent }) => (
    <div className="body">
        <Sidebar>{sidebar}</Sidebar>
        {Content}
    </div>
);

class App extends React.Component {
    state = {
        user: {
            avatar: "https://avatars.githubusercontent.com/u/51508252?v=4",
            name: "Serge-N",
            following: "100",
            followers: "130"
        }
    };

    render() {
        return (
            <div className="app">
                <Nav>
                    <UseAvatar user={this.user} size="small"/>
                </Nav>
                <Body sidebar={<UserStatus user={this.user}/>}/>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("root"));

// One can reuse components -> Pass data around.
// One can pass components as children to other components -> Children.
// One can use the context API to pass data around.