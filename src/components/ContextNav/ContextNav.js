import React, { useState } from 'react';
import styled from 'styled-components';
import NewTheme from '../../themes/new';

const ContextNavWrapper = styled.div`
  display: flex;
  background: ${(props) => props.bgColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  justify-content: center;
  position: relative;
  a {
    position: relative;
    padding: 18px 8px;
    margin: 0 8px;
    font-size: 15px;
    line-height: 21px;
    color: ${(props) => props.Color};
    text-decoration: none;
    border: none;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
      padding-right: 16px;
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
  /* scroll indicators */
  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%);
  }
  &::after {
    content: '';
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 3rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.25) 100%);
  }
  &.right {
    &::after {
      display: block;
      transition: 0.25s;
    }
  }
  &.both {
    &::before {
      display: block;
    }
    &::after {
      display: block;
    }
  }
  &.left {
    &::before {
      display: block;
    }
  }
`;
ContextNavWrapper.defaultProps = { theme: NewTheme };

const ContextNavChildren = styled.nav`
  overflow: auto;
  display: flex;
`;

const ContextNav = ({ children, bgColor, Color, Ascent }) => {
  var handleScroll = (e) => {
    const currentScroll = e.target.scrollLeft;
    const maxScroll = e.target.scrollLeftMax;
    if (currentScroll == maxScroll) {
      setScroll('left');
    } else if (currentScroll > 0 && currentScroll < maxScroll) {
      setScroll('both');
    } else {
      setScroll('right');
    }
  };

  const [scroll, setScroll] = useState('right');

  return (
    <ContextNavWrapper bgColor={bgColor} Color={Color} Ascent={Ascent} className={scroll}>
      <ContextNavChildren onScroll={handleScroll.bind(this)}>{children}</ContextNavChildren>
    </ContextNavWrapper>
  );
};

export default ContextNav;
