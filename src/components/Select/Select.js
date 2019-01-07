import React from 'react';
import PropTypes from 'prop-types';

import SelectControl from './SelectControl';
import SelectControlWrapper from './SelectControlWrapper';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelHidden: PropTypes.bool,
  labelText: PropTypes.string.isRequired
};

const defaultProps = {
  disabled: false
};

export default function Select({ children, disabled, labelText, labelHidden, id, ...other }) {
  return (
    <React.Fragment>
      <label hidden={labelHidden} htmlFor={id}>
        {labelText}
      </label>
      <SelectControlWrapper>
        <SelectControl {...other} disabled={disabled} id={id}>
          {children}
        </SelectControl>
      </SelectControlWrapper>
    </React.Fragment>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
