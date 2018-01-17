import './Panel.css';

import React from 'react';
import PropTypes from 'prop-types';

export default function Panel(props) {
  return (
    <div className="Panel">
      {props.children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.object
};
