import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewTheme from '../../themes/new';

const LinkStyles = styled.a`
  color: ${(props) =>
    props.variant === 'alert' ? props.theme.colors.redTint : props.theme.colors.lightBlueRegular};
  text-decoration: none;
  pointer-events: ${(props) => (props.disabled ? 'none' : '')};
  opacity: ${(props) => (props.disabled ? '.25' : '1')};
`;
LinkStyles.defaultProps = { theme: NewTheme };

const Link = ({ variant, disabled, href, children, className, ...rest }) => (
  <LinkStyles className={className} disabled={disabled} href={href} variant={variant} {...rest}>
    {children}
  </LinkStyles>
);

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'alert'])
};

Link.defaultProps = { variant: 'normal' };

export default Link;
