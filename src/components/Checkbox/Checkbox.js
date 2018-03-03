import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { defaultTheme } from '../../defaultTheme';

const CheckboxWrapper = styled.div`
  color: ${props => props.theme.colors.secondary.blue};
  display: flex;
  align-content: center;

  ${props => {
      if (props.disabled) {
        return `
          opacity: 0.2;
        `;
      } else {
        return `
          &:hover {
            color: ${props.theme.colors.secondary.darkBlue};
          }
        `;
      }
    }
  }
`;

CheckboxWrapper.propTypes = {
  theme: PropTypes.object,
  disabled: PropTypes.bool
};

CheckboxWrapper.defaultProps = {
  disabled: false,
  theme: defaultTheme
};

const CheckboxInput = styled.input`
  color: ${props => props.theme.colors.secondary.blue};
`;

CheckboxInput.propTypes = {
  theme: PropTypes.object
};

CheckboxInput.defaultProps = {
  theme: defaultTheme
};

export default function Checkbox({id, className, disabled, label, ...other}) {
  return (
    <CheckboxWrapper disabled={disabled}>
      <CheckboxInput
        id={id}
        className={className}
        type="checkbox"
        disabled={disabled}
        {...other}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string
};
