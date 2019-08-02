import React from 'react';
import styled from 'styled-components';
import NewTheme from '../../themes/new';
import ButtonDrawer from './ButtonDrawer';
import SideBarLinks from './SideBarLinks';
import Icon from '../../icons/Icon';
import { defaultSecondLevelActions } from './defaultSecondLevelActions';

const NavMenu = styled.div`
  background: ${(props) => props.theme.colors.whiteRegular};
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100px;
  transition: 0.25s;
  transform: translateY(${(props) => (props.visible ? '46px' : '-100%')});
  z-index: 1000;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  .container {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    transform: translateY(${(props) => (props.visible ? '56px' : '-100%')});
    height: auto;
    .container {
      flex-direction: row;
      max-width: 970px;
      margin: auto;
      height: 140px;
    }
  }
`;

NavMenu.defaultProps = { theme: NewTheme };

const SecondLevelActions = styled.div`
  display: flex;
  margin-left: 1.25rem;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    background-color: ${(props) => props.theme.colors.whiteTone};
    width: 1px;
    top: 15px;
    left: 0;
    bottom: 15px;
  }
  .sl-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 148px;
    padding: 2rem 0.25rem 0;
    margin-left: 1.25rem;
    transition: 0.25s;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background-color: #f5f5f5;
    }
    .sl-title {
      color: #06f;
      font-size: 15px;
      line-height: 1.25rem;
      margin: 0.25rem 0;
      text-align: center;
    }
    .sl-text {
      color: #124;
      margin: 0;
      font-size: 0.75rem;
      line-height: 18px;
      text-align: center;
    }
  }
`;
SecondLevelActions.defaultProps = { theme: NewTheme };

const IconStyled = styled(Icon)`
  width: 1.25rem;
  height: 1.25rem;
  color: #a9adb7;
`;

export default function MainNavMenu({
  activeProducts,
  country,
  currentProduct,
  onProductAcquire,
  products,
  secondLevel,
  sidebar,
  visible
}) {
  const handleProductAcquire = (product) => (event) => {
    event.preventDefault();
    onProductAcquire(product.name);
  };
  return (
    <NavMenu visible={visible}>
      <div className="container">
        <SideBarLinks sidebar={sidebar} />
        {products
          .filter(({ countries }) => countries.includes(country))
          .map((product) => {
            const enabled = product.is_free || activeProducts[country].includes(product.name);
            return (
              <ButtonDrawer
                enabled={enabled}
                href={enabled ? product.uri : '#'}
                image={product.logo}
                key={product.name}
                name={product.display_name}
                onClick={!enabled ? handleProductAcquire(product) : undefined}
                selected={currentProduct === product.name}
              />
            );
          })}
        <SecondLevelActions>
          {secondLevel.map((item, i) => (
            <a className="sl-container" href={item.url} key={i} target="blank">
              <IconStyled src={item.logo} />
              <div>
                <h2 className="sl-title">{item.name}</h2>
                <p className="sl-text">{item.text}</p>
              </div>
            </a>
          ))}
        </SecondLevelActions>
      </div>
    </NavMenu>
  );
}

MainNavMenu.defaultProps = {
  secondLevel: defaultSecondLevelActions
};
