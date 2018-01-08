import React from 'react';

const Message = (props) => {
  return(
    <li className="list-unstyled">
      <i className="fa fa-exclamation-circle fa-margin">
        { props.text }
      </i>
    </li>
  );
};

export default Message;
