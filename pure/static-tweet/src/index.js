import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author />
                <Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>

        </div>
    );
}

function Avatar() {
    return (
        <img src="https://www.gravatar.com/avatar/31bfa0e42780cb4fb352dd6231c76614"
            className="avator"
            alt="avatar" />
    );
}

function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

function Author() {
    return (
        <span className="author">
            <span className="name">Serge Nalishiwa</span>
            <span className="handle">@Serge-N</span>
        </span>
    );
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button" />;

ReactDom.render(<Tweet />, document.querySelector("#root"));