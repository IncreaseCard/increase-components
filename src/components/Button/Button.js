import defaultTheme from '../../defaultTheme';

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const e = React.createElement;
const StyledButton = styled(({tag, children, ...props}) => e(tag, props, children))`
  ${props => {
      const colors = props.theme.colors;
      if (props.primary) {
        return `
          background-color: ${props.danger ? colors.secondary.red : colors.secondary.blue};
          color: ${colors.white};
          border: none;
        `;
      } else {
        return `
          background-color: ${colors.white};
          border: 1px solid ${props.danger ? colors.secondary.red : colors.secondary.blue};
          color: ${props.danger ? colors.secondary.red : colors.secondary.blue};
        `;
      }
    }
  }
  border-radius: 3px;
  display: inline-block;

  &:hover:not([disabled]) {
    ${props => {
        const colors = props.theme.colors;
        if (props.primary) {
          return `
            background-color: ${props.danger ? colors.secondary.lightRed : colors.secondary.darkBlue};
            border: none;
            `;
          } else {
            return `
            border: 1px solid ${props.danger ? colors.secondary.lightRed : colors.secondary.darkBlue};
            color: ${props.danger ? colors.secondary.lightRed : colors.secondary.darkBlue};
          `;
        }
      }
    }
  }

  &:disabled {
    opacity: 0.2;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  font-size: ${props => props.theme.typography.headingFontSizes[props.small ? 5 : 4]};
  line-height: ${props => props.theme.typography.headingLineHeights[props.small ? 5 : 4]};
  padding: ${props => props.small ? '4px 16px' : '4px 32px'};
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
  primary: PropTypes.bool,
  small: PropTypes.bool,
  danger: PropTypes.bool,
  href: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

Button.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  primary: false,
  danger: false,
  theme: defaultTheme
};
