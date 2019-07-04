import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import NewTheme from '../../themes/new';

const propTypes = { theme: PropTypes.object };
const defaultProps = {};

function ButtonDrawer({ alt, className, href, image, enabled, ...rest }) {
  return (
    <a className={className} href={href} {...rest}>
      <img alt={alt} className="drawer-image" src={image} />
      {!enabled ? <p>Contratalo ahora</p> : null}
    </a>
  );
}
ButtonDrawer.propTypes = propTypes;
ButtonDrawer.defaultProps = defaultProps;

const StyledButtonDrawer = styled(ButtonDrawer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.75rem;
  border-bottom: 6px solid #def;
  transition: 0.25s;
  height: 140px;
  margin-bottom: 30px;
  .drawer-image {
    margin-top: 2.5rem
  }
  p {
    margin: 15px 0 0;
    font-size: 13px;
    color: #38f;
    text-decoration: underline;
  }
  &:hover {
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.whiteRegular} 0%,
      ${(props) => props.theme.colors.whiteTint} 100%
    );
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    border-bottom-color: #06F;
  }

  img {
    height: 34px;
    width: auto;
  }

  ${(props) =>
    !props.enabled &&
    css`
      img {
        filter: grayscale(100);
        opacity: 0.5;
      }
    `}
  ${(props) =>
    props.selected &&
    css`
      border-bottom-color: #06f;
      pointer-events: none;
    `}
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    margin: 0 0 0 1.25rem;
    height: auto;
    .container {
      flex-direction: row;
      max-width: 970px;
      margin: auto;
    }
  }
`;

StyledButtonDrawer.defaultProps = { theme: NewTheme };

export default StyledButtonDrawer;
