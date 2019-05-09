import React from 'react';
import Link from '../Link/Link';
import NewTheme from '../../themes/new';
import styled from 'styled-components';
import ButtonDrawer from './ButtonDrawer';

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
    }
  }
`;

NavMenu.defaultProps = { theme: NewTheme };

const Sidebar = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  padding-bottom: 15px;
  margin-bottom: 15px;
  a {
    display: block;
    line-height: 21px;
    padding: 15px;
    text-decoration: none;
    text-align: center;
    color: ${(props) => props.theme.colors.brandBlueRegular};
    &:first-child {
      margin-top: 15px;
    }
    &:last-child {
      margin-bottom: 15px;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    position: relative;
    border-bottom: none;
    padding: 0 15px 0 0;
    margin-bottom: 0;
    a {
      padding: 0;
      margin-bottom: 7px;
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

export default function MainNavMenu({
  country,
  currentProduct,
  products,
  activeProducts,
  visible
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

        {Object.entries(products)
          .filter(([, productData]) => productData.countries.includes(country))
          .map(([name, productData]) => {
            const enabled = activeProducts[country].includes(name);
            return (
              <ButtonDrawer
                enabled={enabled}
                href={productData[enabled ? 'uri' : 'acquire_uri'][country]}
                image={productData.logo}
                key={name}
                name={name}
                selected={currentProduct === name}
              />
            );
          })}
      </div>
    </NavMenu>
  );
}
