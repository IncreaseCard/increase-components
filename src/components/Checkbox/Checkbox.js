import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import newTheme from '../../themes/new';
import CheckboxInput from './CheckboxInput';

const CheckboxWrapper = styled.div`
  color: ${(props) => props.theme.colors.primary.blue};
  font-family: ${(props) => props.theme.typography.bodyFontFamily};
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};

  ${(props) =>
    !props.disabled &&
    css`
      & label {
        cursor: pointer;
      }
    `};
`;

CheckboxWrapper.propTypes = {
  theme: PropTypes.object,
  disabled: PropTypes.bool
};

CheckboxWrapper.defaultProps = {
  disabled: false,
  theme: newTheme
};

export default function Checkbox({ id, disabled, label, ...other }) {
  return (
    <CheckboxWrapper disabled={disabled}>
      <CheckboxInput id={id} type="checkbox" disabled={disabled} {...other} />
      <label htmlFor={id}>{label}</label>
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};
