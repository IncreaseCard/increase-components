import defaultTheme from '../../defaultTheme';

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const e = React.createElement;
const StyledButton = styled(({tag, children, ...props}) => e(tag, props, children))`
  display: inline-block;
  border: none;
  box-shadow: ${props => props.kind == 'ghost' ? 'none' : `0 1px 2px ${props.theme.colors.darkShadow}`};

  &:active {
    box-shadow: 0 0 1px ${props => props.theme.colors.darkShadow};
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  font-size: ${props => props.theme.typography.fontSizes[props.size == 'sm' ? 5 : 3]};
  line-height: ${props => props.theme.typography.lineHeights[props.size == 'sm' ? 5 : 3]};
  padding: ${props => props.size == 'sm' ? '4px 8px' : '8px 16px'};

  background-color: ${props => props.theme.colors[props.kind]};
  color: ${props => props.theme.colors[props.kind + 'FontColor']};
`;

StyledButton.defaultProps = {
  tag: 'button'
};

export default function Button({
  children,
  disabled,
  href,
  tabIndex,
  type,
  ...other
}) {
  const commonProps = {
    tabIndex
  };

  const button = (
    <StyledButton {...other} {...commonProps} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );

  const anchor = (
    <StyledButton tag="a" {...other} {...commonProps} href={href} role="button">
      {children}
    </StyledButton>
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
  theme: defaultTheme
};
