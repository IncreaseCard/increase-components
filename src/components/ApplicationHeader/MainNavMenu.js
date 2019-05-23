import React from 'react';
import Link from '../Link/Link';
import NewTheme from '../../themes/new';
import styled from 'styled-components';
import ButtonDrawer from './ButtonDrawer';

import { defaultSecondLevelActions } from './defaultSecondLevelActions';
import Icon from '../../icons/Icon';

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

const Sidebar = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  padding-bottom: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  a {
    display: block;
    line-height: 21px;
    padding: 1.25rem;
    font-size: 15px;
    text-decoration: none;
    text-align: center;
    color: ${(props) => props.theme.colors.brandBlueRegular};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    position: relative;
    border-bottom: none;
    padding: 0 1.25rem 0 0;
    margin-bottom: 0;
    width: 160px;
    a {
      padding: 0;
      text-align: left;
    }
    &::after {
      position: absolute;
      content: '';
      background-color: ${(props) => props.theme.colors.whiteTone};
      width: 1px;
      top: 15px;
      right: 0;
      bottom: 15px;
    }
  }
`;

Sidebar.defaultProps = { theme: NewTheme };

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
    padding: 2rem .25rem 0;
    margin-left: 1.25rem;
    transition: 0.25s;
    cursor: pointer;
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

MainNavMenu.defaultProps = {
  secondLevel: defaultSecondLevelActions
};

export default function MainNavMenu({
  country,
  currentProduct,
  products,
  activeProducts,
  visible,
  secondLevel
}) {
  return (
    <NavMenu visible={visible}>
      <div className="container">
        <Sidebar>
          <Link href="https://increase.app" target="blank">
            Home Increase
          </Link>
          <Link href="https://soporte.increasecard.com/hc/es" target="blank">
            Ayuda y Soporte
          </Link>
          <Link href="https://soporte.increasecard.com/hc/es/community/topics" target="blank">
            Comunidad Increase
          </Link>
        </Sidebar>

        {products
          .filter(({ countries }) => countries.includes(country))
          .map((product) => {
            const enabled = product.is_free || activeProducts[country].includes(product.name);
            return (
              <ButtonDrawer
                enabled={enabled}
                href={product[enabled ? 'uri' : 'acquire_uri']}
                image={product.logo}
                key={product.name}
                name={product.display_name}
                selected={currentProduct === product.name}
              />
            );
          })}
        <SecondLevelActions>
          {secondLevel.map((item, i) => {
            console.log(item, i);
            return (
              <div className="sl-container" key={i}>
                <IconStyled src={item.logo} />
                <div>
                  <h2 className="sl-title">{item.name}</h2>
                  <p className="sl-text">{item.text}</p>
                </div>
              </div>
            );
          })}
        </SecondLevelActions>
      </div>
    </NavMenu>
  );
}
