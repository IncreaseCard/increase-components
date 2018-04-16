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
  border: 4px solid ${props => props.theme.colors.secondary.blue};
  border-color: ${props => props.theme.colors.black} transparent transparent transparent;
  border-radius: 50%;

  width: 32px;
  height: 32px;

  animation: ${rotate360Forever} 1.2s infinite cubic-bezier(0.5, 0, 0.5, 1);
  animation-delay: ${props => props.animationDelay};
`;

LoadingBar.propTypes = {
  theme: PropTypes.object,
  animationDelay: PropTypes.string
};

LoadingBar.defaultProps = {
  theme: defaultTheme,
  animationDelay: '0'
};

export function Loading() {
  return (
    <div style={{position: 'relative'}}>
      <LoadingBar animationDelay='0' />
      <LoadingBar animationDelay='-0.15s' />
      <LoadingBar animationDelay='-0.3s' />
      <LoadingBar animationDelay='-0.45s' />
    </div>
  );
}

export default Loading;
