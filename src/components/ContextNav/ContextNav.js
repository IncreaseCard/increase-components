import React from 'react';
import styled from 'styled-components';
import NewTheme from '../../themes/new';

const ContextNavWrapper = styled.div`
  display: flex;
  background: ${(props) => props.bgColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  padding: 0 1rem;
  justify-content: center;
  a {
    position: relative;
    padding: 18px 0;
    margin-right: 15px;
    font-size: 15px;
    line-height: 21px;
    color: ${(props) => props.Color};
    text-decoration: none;
    border: none;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      color: ${(props) => props.Color};
    }
    &.active::before,
    &:hover::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 4px;
      bottom: 0;
      background-color: ${(props) => props.Ascent};
      animation-duration: 0.25s;
      animation-name: linkAnimation;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    justify-content: center;
    overflow: initial;
    margin: none;
  }

  @keyframes linkAnimation {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;
ContextNavWrapper.defaultProps = { theme: NewTheme };

const ContextNavChildren = styled.nav`
  overflow: auto;
  display: flex;
`;

const ContextNav = ({ children, bgColor, Color, Ascent }) => {
  return (
    <ContextNavWrapper bgColor={bgColor} Color={Color} Ascent={Ascent}>
      <ContextNavChildren>{children}</ContextNavChildren>
    </ContextNavWrapper>
  );
};

export default ContextNav;
