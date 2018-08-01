import React from 'react';
import PropTypes from 'prop-types';

import SelectControl from './SelectControl';
import SelectControlWrapper from './SelectControlWrapper';

export default function Select({ children, disabled, labelText, id, ...other }) {
  return (
    <React.Fragment>
      <label htmlFor={id}>{labelText}</label>
      <SelectControlWrapper>
        <SelectControl {...other} disabled={disabled} id={id}>
          {children}
        </SelectControl>
      </SelectControlWrapper>
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
