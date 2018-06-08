import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import newTheme from "../../themes/new";

// const RadioButtonInput = styled.input.attrs({type: 'radio'})``;

const RadioButtonWrapper = styled.label`
  font-size: ${props => props.theme.typography.bodyFontSizes[0]};
  line-height: ${props => props.theme.typography.bodyLineHeights[0]};
  color: ${props => props.theme.colors.primary.blue};
  display: flex;
  flex-direction: row;
  align-items: center;

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
  }};
`;

RadioButtonWrapper.propTypes = {
  theme: PropTypes.object
};

RadioButtonWrapper.defaultProps = {
  theme: newTheme
};

const RadioButtonInput = styled.input.attrs({ type: "radio" })`
  margin: 0 6px 0 0;
`;

export const RadioButton = function({ label, name, disabled, ...other }) {
  return (
    <RadioButtonWrapper disabled={disabled}>
      <RadioButtonInput name={name} disabled={disabled} {...other} />
      {label}
    </RadioButtonWrapper>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

RadioButton.defaultProps = {
  disabled: false
};

export default RadioButton;
