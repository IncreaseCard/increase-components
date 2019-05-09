import React, { useState } from 'react';
import styled from 'styled-components';
import NewTheme from '../../themes/new';
import MainNavMenu from './MainNavMenu';
import MenuProfile from './MenuProfile';
import Icon from '../../icons/Icon';
import { LogoVerde, ArrowDown, ArrowUp } from '../../icons/icons';
import { defaultProducts } from './defaultProducts';

const ApplicationHeaderWrapper = styled.div`
  background: ${(props) => props.theme.colors.whiteRegular};
  position: relative;
  z-index: 1001;
  border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  padding: 10px;
  font-size: 15px;
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 15px;
  }
`;

ApplicationHeaderWrapper.defaultProps = { theme: NewTheme };
ApplicationHeaderWrapper.displayName = 'ApplicationHeaderWrapper';

const ApplicationHeaderContent = styled.nav`
  display: flex;
  max-width: 970px;
  margin: auto;
  justify-content: space-between;
`;
ApplicationHeaderContent.displayName = 'ApplicationHeaderContent';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  color: ${(props) => props.theme.colors.brandBlueRegular};
  :focus {
    outline: none;
  }
  .logo {
    height: 25px;
    width: 25px;
  }
  .brandName {
    font-size: 16px;
    font-weight: 600;
    margin: 0 9px 0 12px;
  }
`;

LogoWrapper.defaultProps = { theme: NewTheme };
LogoWrapper.displayName = 'LogoWrapper';

const RightContent = styled.div`
  display: flex;
  align-items: center;
  .alerts {
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid ${(props) => props.theme.colors.whiteTone};
    color: ${(props) => props.theme.colors.whiteTone};
  }
`;

RightContent.defaultProps = { theme: NewTheme };
RightContent.displayName = 'RightContent';

const StyledCaret = styled(Icon)`
  height: 100%;
  width: 100%;
  margin-top: 3px;
`;

export default function ApplicationHeader({
  activeProducts,
  country,
  currentProduct,
  products,
  userName
}) {
  const [isOpen, setOpen] = useState(false);

  const productName = products[currentProduct] ? products[currentProduct].name : 'Increase';
  const handleClick = () => setOpen((open) => !open);

  return (
    <React.Fragment>
      <ApplicationHeaderWrapper>
        <ApplicationHeaderContent>
          <div className="logo">
            <LogoWrapper onClick={handleClick}>
              <Icon className="logo" src={LogoVerde} />
              <span className="brandName">{productName}</span>
              {isOpen ? <StyledCaret src={ArrowDown} /> : <StyledCaret src={ArrowUp} />}
            </LogoWrapper>
          </div>
          <RightContent>
            <div className="account">
              <MenuProfile userName={userName} />
            </div>
          </RightContent>
        </ApplicationHeaderContent>
      </ApplicationHeaderWrapper>
      <MainNavMenu
        activeProducts={activeProducts}
        country={country}
        currentProduct={currentProduct}
        products={products}
        visible={isOpen}
      />
    </React.Fragment>
  );
}

ApplicationHeader.defaultProps = {
  products: defaultProducts
};
