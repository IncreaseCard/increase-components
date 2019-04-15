import React from 'react';
import styled from 'styled-components';
import NewTheme from '../../themes/new';

const ButtonWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  border-bottom: 3px solid ${(props) => props.theme.colors.lightBlueRegular};
  transition: 0.25s;
  height: 140px;
  margin-bottom: 2rem;
  p {
    margin: 0;
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
    border-bottom: 3px solid ${(props) => props.theme.colors.lightBlueRegular};
  }
  &.disabled {
    img {
      filter: grayscale(100);
      opacity: 0.5;
    }
  }
  &.selected {
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.whiteRegular} 0%,
      ${(props) => props.theme.colors.whiteTint} 100%
    );
    border-bottom: 3px solid ${(props) => props.theme.colors.lightBlueRegular};
    pointer-events: none;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    border-bottom: 3px solid ${(props) => props.theme.colors.whiteRegular};
    margin: 0 1rem;
    height: auto;
    .container {
      flex-direction: row;
      max-width: 970px;
      margin: auto;
    }
  }
`;

ButtonWrapper.defaultProps = { theme: NewTheme };

const ButtonDrawer = ({ to, href, cta, image, disabled, selected, ...rest }) => {
  return (
    <ButtonWrapper
      className={(disabled && 'disabled') || (selected && 'selected')}
      href={href}
      to={to}
      {...rest}
    >
      <img alt="" src={image} />
      {!selected && <p>{cta}</p>}
    </ButtonWrapper>
  );
};

export default ButtonDrawer;
