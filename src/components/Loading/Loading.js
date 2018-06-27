import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import newTheme from '../../themes/new';
import { WSATYPE_NOT_FOUND } from 'constants';

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
  border-width: ${(props) => (props.small ? '2px' : '4px')};
  border-color: ${(props) => props.color} transparent transparent transparent;
  border-style: solid;
  border-radius: 50%;

  width: ${(props) => (props.small ? '15px' : '32px')};
  height: ${(props) => (props.small ? '15px' : '32px')};

  animation: ${rotate360Forever} 1.2s infinite cubic-bezier(0.5, 0, 0.5, 1);
  animation-delay: ${(props) => props.animationDelay};
`;

LoadingBar.propTypes = {
  small: PropTypes.bool,
  theme: PropTypes.object,
  animationDelay: PropTypes.string,
  color: PropTypes.string
};

LoadingBar.defaultProps = {
  theme: newTheme,
  animationDelay: '0',
  small: false,
  color: newTheme.colors.black
};

const LoadingWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.small ? '15px' : '32px')};
  height: ${(props) => (props.small ? '15px' : '32px')};
`;

export const Loading = ({ small, color, ...other }) => {
  return (
    <LoadingWrapper small={small} {...other}>
      <LoadingBar color={color} small={small} animationDelay="0" />
      <LoadingBar color={color} small={small} animationDelay="-0.15s" />
      <LoadingBar color={color} small={small} animationDelay="-0.3s" />
      <LoadingBar color={color} small={small} animationDelay="-0.45s" />
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  small: PropTypes.bool,
  color: PropTypes.string
};

Loading.defaultProps = {
  small: false,
  color: newTheme.colors.black
};

export default Loading;
