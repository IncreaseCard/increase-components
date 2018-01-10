import React from 'react';
import PropTypes from 'prop-types';

export default function SelectItem({ className, value, disabled, hidden, text, ...other }) {
  return (
    <option
      {...other}
      className={className}
      value={value}
      disabled={disabled}
      hidden={hidden}>
      {text}
    </option>
  );
}

SelectItem.propTypes = {
  value: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

SelectItem.defaultProps = {
  disabled: false,
  hidden: false,
  value: '',
  text: '',
};
