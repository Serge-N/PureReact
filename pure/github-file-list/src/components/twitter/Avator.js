import React from 'react';
import PropTypes from 'prop-types';

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

  export default Avatar;