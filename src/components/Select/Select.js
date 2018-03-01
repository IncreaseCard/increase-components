import React from 'react';
import PropTypes from 'prop-types';

export default function Select({children, disabled, labelText, id, ...other}) {
  return (
    <React.Fragment>
      <label className="Select-label" htmlFor={id}>
        {labelText}
      </label>
      <select
            {...other}
            className="Select"
            disabled={disabled}
            id={id}>
            {children}
      </select>
    </React.Fragment>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string
};

Select.defaultProps = {
  disabled: false,
  labelText: 'Select'
};
