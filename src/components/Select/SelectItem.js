import React from 'react';
import PropTypes from 'prop-types';

export default function SelectItem({ value, disabled, hidden, text, ...other }) {
  return (
    <option {...other} disabled={disabled} hidden={hidden} value={value}>
      {text}
    </option>
  );
}

SelectItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  text: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

SelectItem.defaultProps = {
  disabled: false,
  hidden: false
};
