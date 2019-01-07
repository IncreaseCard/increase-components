import React from 'react';
import PropTypes from 'prop-types';

import SwitchWrapper from './SwitchWrapper';
import SwitchControl from './SwitchControl';
import SwitchToggle from './SwitchToggle';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool
};

const defaultProps = {
  value: false
};

export default function Switch({ id, name, value, onChange }) {
  return (
    <SwitchWrapper value={value}>
      <SwitchControl checked={value} id={id} name={name} onChange={onChange} title={name} />
      <SwitchToggle value={value} />
    </SwitchWrapper>
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
