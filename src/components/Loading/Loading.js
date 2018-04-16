import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components";
import { defaultTheme } from '../../defaultTheme';

const rotate360Forever = keyframes`
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(405deg);
  }
`;

const LoadingBar = styled.div`
  position: absolute;
  border-width: ${props => props.small ? '2px' : '4px' };
  border-color: ${props => props.theme.colors.black} transparent transparent transparent;
  border-style: solid;
  border-radius: 50%;

  width: ${props => props.small ? '15px' : '32px' };
  height: ${props => props.small ? '15px' : '32px' };

  animation: ${rotate360Forever} 1.2s infinite cubic-bezier(0.5, 0, 0.5, 1);
  animation-delay: ${props => props.animationDelay};
`;

LoadingBar.propTypes = {
  small: PropTypes.bool,
  theme: PropTypes.object,
  animationDelay: PropTypes.string
};

LoadingBar.defaultProps = {
  theme: defaultTheme,
  animationDelay: '0',
  small: false
};

export function Loading(props) {
  return (
    <div style={{position: 'relative'}}>
      <LoadingBar {...props} animationDelay='0' />
      <LoadingBar {...props} animationDelay='-0.15s' />
      <LoadingBar {...props} animationDelay='-0.3s' />
      <LoadingBar {...props} animationDelay='-0.45s' />
    </div>
  );
}

export default Loading;
