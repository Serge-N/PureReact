import React from "react";
import Tweet from "./Tweet";
import PropTypes from 'prop-types';

const TweetList = ({ tweets }) => (
  <div className="tweet-space">
    {
      tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))
    }
  </div>
);

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
}

export default TweetList;