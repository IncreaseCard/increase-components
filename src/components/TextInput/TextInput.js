import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import newTheme from "../../themes/new";

const TextInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${props =>
    props.invalid
      ? `
    &::after {
      content: '';
      position: absolute;
      right: 8px;
      bottom: 8px;
      background-color: red;
      height: 16px;
      width: 16px;
    }
  `
      : null};
`;

TextInputWrapper.propTypes = {
  theme: PropTypes.object,
  invalid: PropTypes.bool
};

TextInputWrapper.defaultProps = {
  theme: newTheme,
  invalid: false
};

const StyledTextInput = styled.input`
  border: 1px solid
    ${props =>
      props.invalid
        ? props.theme.colors.secondary.red
        : props.theme.colors.gray};
  border-radius: 3px;
  caret-color: ${props => props.theme.colors.black};
  color: ${props =>
    props.invalid
      ? props.theme.colors.secondary.red
      : props.theme.colors.black};
  &:placeholder-shown {
    color: ${props => props.theme.colors.gray};
  }
  font-size: ${props => props.theme.typography.bodyFontSizes[0]};
  line-height: ${props => props.theme.typography.bodyLineHeights[0]};
  padding: 4px;

  &:active,
  &:focus {
    border: 1px solid
      ${props =>
        props.invalid
          ? props.theme.colors.secondary.red
          : props.theme.colors.black};
    outline: none;
  }
`;

StyledTextInput.propTypes = {
  theme: PropTypes.object,
  invalid: PropTypes.bool
};

StyledTextInput.defaultProps = {
  theme: newTheme,
  invalid: false
};

export default function TextInput({
  labelText,
  id,
  placeholder,
  type,
  onChange,
  onClick,
  invalid,
  invalidText,
  ...other
}) {
  const textInputProps = {
    id,
    onChange: evt => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type
  };

  const errorId = id + "-error-msg";

  const label = labelText ? <label htmlFor={id}>{labelText}</label> : null;

  const error = invalid ? <div id={errorId}>{invalidText}</div> : null;

  const input = invalid ? (
    <StyledTextInput
      {...other}
      {...textInputProps}
      invalid
      data-invalid
      aria-invalid
      aria-describedBy={errorId}
    />
  ) : (
    <StyledTextInput {...other} {...textInputProps} />
  );

  return (
    <TextInputWrapper invalid={invalid}>
      {label}
      {input}
      {error}
    </TextInputWrapper>
  );
}

TextInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  invalid: PropTypes.bool,
  invalidText: PropTypes.string
};

TextInput.defaultProps = {
  className: "bx--text__input",
  disabled: false,
  type: "text",
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: ""
};
