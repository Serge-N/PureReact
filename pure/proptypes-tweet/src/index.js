import moment from "moment";
import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />

      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message message={tweet.message} />

        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>

      </div>

    </div>
  );
}

Tweet.propTypes = {
  tweet : PropTypes.object.isRequired
}

const testTweet = {
  message: "Something about cattle.",
  gravatar: "31bfa0e42780cb4fb352dd6231c76614",
  author: {
    handle: "Serge-N",
    name: "Serge Nalishiwa"
  },
  likes: 4,
  retweets: 2,
  timestamp: "2021-07-30 21:24:37"
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img src={url}
      className="avator"
      alt="avatar" />
  );
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired
}

function Message({ message }) {
  return (
    <div className="message">
      {message}
    </div>
  );
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
}

const Time = ({ time }) => {
  const timestring = moment(time).fromNow();
  return (
    <span className="time">{timestring}</span>
  );
}

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}
const ReplyButton = () => <i className="fa fa-reply reply-button" />;


const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number.isRequired
}

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 &&
      <span className="like-count">{count}</span>
    }
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number.isRequired
}

const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button" />;

ReactDom.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));