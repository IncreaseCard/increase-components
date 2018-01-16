import './MessageList.css';

import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

export default function MessageList({ messages, className }) {
  if (typeof messages == undefined || messages.length == 0) {
    return null;
  }
  return(
    <div className={`MessageList ${className}`} role="alert" data-dismiss="alert">
        { messages.map((message, index) => {
          return (
            <Message
              text={message.text}
              key={message.id || index}
              variant={message.variant}/>
          );
        }) }
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};
