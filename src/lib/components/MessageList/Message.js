import './Message.css';

import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text, variant = 'info' }) => {
  return(
    <div className={`Message Message-${variant}`}>
      { text }
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'danger', 'warning', 'success'])
};

export default Message;
