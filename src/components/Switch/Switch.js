import React from 'react';
import PropTypes from 'prop-types';

import SwitchWrapper from './SwitchWrapper';
import SwitchControl from './SwitchControl';
import SwitchToggle from './SwitchToggle';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  value: false
};

export default function Switch({ id, name, value, onChange }) {
  return (
    <SwitchWrapper value={value}>
      <SwitchControl title={name} id={id} name={name} checked={value} onChange={onChange} />
      <SwitchToggle value={value} />
    </SwitchWrapper>
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
