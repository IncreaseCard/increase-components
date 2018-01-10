import './Checkbox.css';

import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({className, disabled, label, ...other}) {
  return (
    <React.Fragment>
      <input
        className={className}
        type="checkbox"
        disabled={disabled}
        {...other}
      />
      {label}
    </React.Fragment>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string
};
