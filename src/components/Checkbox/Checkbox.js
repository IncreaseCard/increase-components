import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import newTheme from "../../themes/new";

const CheckboxWrapper = styled.div`
  color: ${props => props.theme.colors.primary.blue};
  display: flex;
  align-content: center;
  opacity: ${props => (props.disabled ? 0.2 : 1)};
`;

CheckboxWrapper.propTypes = {
  theme: PropTypes.object,
  disabled: PropTypes.bool
};

CheckboxWrapper.defaultProps = {
  disabled: false,
  theme: newTheme
};

const CheckboxInput = styled.input`
  color: ${props => props.theme.colors.secondary.blue};
`;

CheckboxInput.propTypes = {
  theme: PropTypes.object
};

CheckboxInput.defaultProps = {
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
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string
};
