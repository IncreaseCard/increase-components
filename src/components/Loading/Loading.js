import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import newTheme from '../../themes/new';

const rotate360Forever = keyframes`
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(405deg);
  }
`;

const height = (size) => (size === 'small' ? '16px' : '32px');
const width = height;
const borderWidth = (size) => (size === 'small' ? '2px' : '3px');

const LoadingBar = styled.div`
  position: absolute;
  border-width: ${(props) => borderWidth(props.size)};
  border-color: ${(props) => props.color || '#00D246'} transparent transparent transparent;
  border-style: solid;
  border-radius: 50%;

  width: ${(props) => width(props.size)};
  height: ${(props) => height(props.size)};

  animation: ${rotate360Forever} 1.2s infinite cubic-bezier(0.5, 0, 0.5, 1);
  animation-delay: ${(props) => props.animationDelay};
`;

LoadingBar.propTypes = {
  animationDelay: PropTypes.string,
  small: PropTypes.bool,
  theme: PropTypes.object
};

LoadingBar.defaultProps = {
  theme: newTheme,
  animationDelay: '0',
  small: false
};

export const Loading = ({ color, size = 'large', style = {}, ...rest }) => {
  return (
    <div
      style={{ ...style, position: 'relative', height: height(size), width: width(size) }}
      {...rest}
    >
      <LoadingBar animationDelay="0" color={color} size={size} />
      <LoadingBar animationDelay="-0.15s" color={color} size={size} />
      <LoadingBar animationDelay="-0.3s" color={color} size={size} />
      <LoadingBar animationDelay="-0.45s" color={color} size={size} />
    </div>
  );
};

Loading.propTypes = {
  small: PropTypes.bool
};

Loading.defaultProps = {
  small: false
};

export default Loading;
