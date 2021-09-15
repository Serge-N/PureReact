import React from "react";
import PropTypes from "prop-types";
import Time from '../shared/Time'
import Avatar from "./Avator";
import Author from "./Author";
import LikeButton from "./LikeButton";
import RetweetButton from "./RetweetButton";
import Message from "./Message";
import ReplyButton from "./ReplyButton";
import MoreOptionsButton from "./MoreOptionsButton";


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

export default Tweet;