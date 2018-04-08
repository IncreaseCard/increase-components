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
          border-radius: 3px;
          color: ${colors.white};
          padding: 6px 20px;
          text-shadow: 0 1px 3px ${colors.darkShadow};

          &:disabled {
            background-color: transparent;
            border: 1px solid ${colors.primary.blue};
            color: ${colors.primary.blue};
            text-shadow: 0 0 2px ${colors.mediumShadow};
          }
        `;
      } else {
        return `
          background-color: transparent;
          color: ${props.danger ? colors.secondary.red : colors.secondary.blue};
          padding: 0;
          margin: 6px 20px;
        `;
      }
    }
  }
  border: none;
  display: inline-block;

  &:hover:not([disabled]) {
    ${props => {
        const colors = props.theme.colors;
        if (props.primary) {
          return `
            background-color: ${props.danger ? colors.secondary.lightRed : colors.primary.blue};
            `;
          } else {
            return `
              border-bottom: 2px solid ${colors.primary.green};
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

  font-size: ${props => props.theme.typography.bodyFontSizes[props.primary ? 0 : 1]};
  line-height: ${props => props.theme.typography.bodyLineHeights[props.primary ? 0 : 1]};
  white-space: nowrap;
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
