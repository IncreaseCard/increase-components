import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class MessageList extends React.PureComponent {
  render() {
    if (typeof this.props.messages == undefined || this.props.messages.length == 0) {
      return null;
    }
    return(
      <div className={`alert ${this.props.className}`} role="alert" data-dismiss="alert">
        <ul>
          { this.props.messages.map((message) => <Message text={message}/>) }
        </ul>
      </div>
    );
  };
}

export default MessageList;
