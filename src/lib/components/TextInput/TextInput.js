import './TextInput.css';

import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput({
  labelText,
  className,
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
    type,
  };

  const errorId = id + '-error-msg';

  const label = labelText ? (
    <label htmlFor={id} className="TextInput-label">
      {labelText}
    </label>
  ) : null;

  const error = invalid ? (
    <div className="TextInput-error" id={errorId}>
      {invalidText}
    </div>
  ) : null;

  const input = invalid ? (
    <input
      {...other}
      {...textInputProps}
      data-invalid
      aria-invalid
      aria-describedBy={errorId}
      className={'TextInput-input ' + className}
    />
  ) : (
    <input {...other} {...textInputProps} className={'TextInput-input ' + className} />
  );

  return (
    <div className="TextInput">
      {label}
      {input}
      {error}
    </div>
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
  invalidText: PropTypes.string,
};

TextInput.defaultProps = {
  className: 'bx--text__input',
  disabled: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: '',
};
