import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const UseAvatar = ({ user, size }) => (
    <img src={user.avatar}
        alt={user.name}
        className={`avatar avatar-${size}`} />
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


const Nav = ({user}) => (
    <div className="nav">
        <UseAvatar user={user} size="small" />
    </div>
);

const Content = () => (
    <div className="content">Main Content</div>
);


const Sidebar = ({ user }) => (
    <div className="sidebar">
        <UserStatus user={user} />
    </div>
);

const Body = ({ user }) => (
    <div className="body">
        <Sidebar user={user} />
        <Content />
    </div>
);

class App extends React.Component {
    state = {
        user: {
            avatar: "https://avatars0.githubusercontent.com/u/17098?v=3&s=460",
            name: "Mateusz",
            following: "100",
            followers: "130"
        }
    };

    render() {
        return (
            <div className="app">
                <Nav user={this.state.user} />
                <Body user={this.state.user} />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById("root"));
