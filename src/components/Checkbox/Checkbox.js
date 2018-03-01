import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({id, className, disabled, label, ...other}) {
  return (
    <div>
      <input
        id={id}
        className={className}
        type="checkbox"
        disabled={disabled}
        {...other}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string
};
