import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CheckboxInputControl from './CheckboxInputControl';
import CheckboxInputFill from './CheckboxInputFill';
import newTheme from '../../themes/new';

const propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  id: PropTypes.string,
  disabled: PropTypes.bool
};

const defaultProps = {
  theme: newTheme,
  disabled: false
};

const CheckboxInputWrapper = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid ${(props) => props.theme.colors.primary.blue};
  border-radius: 2px;
  position: relative;
  box-sizing: border-box;
  margin-right: 6px;
`;

CheckboxInputWrapper.propTypes = { theme: PropTypes.object };
CheckboxInputWrapper.defaultProps = { theme: newTheme };

function CheckboxInput({ checked, onChange, id, disabled }) {
  return (
    <CheckboxInputWrapper>
      <CheckboxInputControl checked={checked} onChange={onChange} id={id} disabled={disabled} />
      <CheckboxInputFill />
    </CheckboxInputWrapper>
  );
}

CheckboxInput.propTypes = propTypes;
CheckboxInput.defaultProps = defaultProps;

export default CheckboxInput;
