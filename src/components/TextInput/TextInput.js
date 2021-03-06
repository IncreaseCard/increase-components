import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import newTheme from '../../themes/new';
import alertIcon from 'material-design-icons/alert/svg/production/ic_warning_24px.svg';

const propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const defaultProps = {
  disabled: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: ''
};

const TextInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.invalid
      ? css`
          &::after {
            content: '';
            position: absolute;
            right: 8px;
            top: 23px;
            background-color: ${(props) => props.theme.colors.redRegular};
            mask: url(${alertIcon});
            mask-position: center;
            mask-size: contain;
            height: 24px;
            width: 24px;
          }
        `
      : null};
`;

TextInputWrapper.propTypes = {
  invalid: PropTypes.bool,
  theme: PropTypes.object
};

TextInputWrapper.defaultProps = {
  theme: newTheme,
  invalid: false
};

const StyledTextInput = styled.input`
  border: 1px solid
    ${(props) => (props.invalid ? props.theme.colors.redRegular : props.theme.colors.whiteShade)};
  border-radius: 3px;
  caret-color: ${(props) => props.theme.colors.blackShade};
  color: ${(props) =>
    props.invalid ? props.theme.colors.redRegular : props.theme.colors.blackShade};
  &:placeholder-shown {
    color: ${(props) => props.theme.colors.whiteShade};
  }
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  padding: 4px;

  &:active,
  &:focus {
    border: 1px solid
      ${(props) => (props.invalid ? props.theme.colors.redRegular : props.theme.colors.blackShade)};
    outline: none;
  }
`;

StyledTextInput.propTypes = {
  invalid: PropTypes.bool,
  theme: PropTypes.object
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
    onChange: (evt) => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type
  };

  const errorId = `${id}-error-msg`;

  return (
    <TextInputWrapper invalid={invalid}>
      {labelText ? <label htmlFor={id}>{labelText}</label> : null}
      {invalid ? (
        <StyledTextInput
          {...other}
          {...textInputProps}
          aria-describedby={errorId}
          aria-invalid
          data-invalid
          invalid
        />
      ) : (
        <StyledTextInput {...other} {...textInputProps} />
      )}
      {invalid ? (
        <div id={`${id}-error-msg`}>
          <small>{invalidText}</small>
        </div>
      ) : null}
    </TextInputWrapper>
  );
}

TextInput.propTypes = propTypes;

TextInput.defaultProps = defaultProps;
