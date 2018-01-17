import './Button.css';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({
  children,
  className,
  disabled,
  size,
  kind,
  href,
  tabIndex,
  type,
  ...other
}) {
  const buttonClasses = classNames(className, {
    'Button': true,
    [`Button--${size}`]: size,
    'Button--primary': kind === 'primary',
    'Button--danger': kind === 'danger',
    'Button--secondary': kind === 'secondary',
    'Button--ghost': kind === 'ghost',
  });

  const commonProps = {
    tabIndex,
    className: buttonClasses,
  };

  const button = (
    <button {...other} {...commonProps} disabled={disabled} type={type}>
      {children}
    </button>
  );

  const anchor = (
    <a {...other} {...commonProps} href={href} role="button">
      {children}
    </a>
  );

  return href ? anchor : button;
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  kind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost']).isRequired,
  href: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  role: PropTypes.string,
};

Button.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary',
};
