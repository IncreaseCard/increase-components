import React from 'react';
import styled from 'styled-components';
import NewTheme from '../../themes/new';
import MainNavMenu from './MainNavMenu';
import MenuProfile from './MenuProfile';
import Icon from './../../icons/Icon';
import { Notifications, LogoVerde, DropDownClosed, DropDownOpen } from './../../icons/icons';

const MainNavWrapper = styled.div`
  background: ${(props) => props.theme.colors.whiteRegular};
  position: relative;
  z-index: 10;
  border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  padding: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 1rem;
  }
`;

MainNavWrapper.defaultProps = { theme: NewTheme };

const MainNavContent = styled.nav`
  display: flex;
  max-width: 970px;
  margin: auto;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
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
  .caret {
    height: 100%;
    width: 100%;
    margin-top: 3px;
  }
`;

LogoWrapper.defaultProps = { theme: NewTheme };

const RightContent = styled.div`
  display: flex;
  align-items: center;
  .alerts,
  .country {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid ${(props) => props.theme.colors.whiteTone};
  }
  .alerts {
    color: ${(props) => props.theme.colors.whiteTone};
  }
  .country {
    display: flex;
    .caret {
      margin-left: 0.75rem;
      color: ${(props) => props.theme.colors.brandBlueShade};
    }
  }
`;

RightContent.defaultProps = { theme: NewTheme };

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClosed: true, section: 'conciliacion' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isClosed: !state.isClosed
    }));
  }

  render() {
    return (
      <div
        className={this.props.className}
        country={this.props.country}
        products={this.props.products}
        user={this.props.user}
      >
        <MainNavWrapper>
          <MainNavContent>
            <div className="logo">
              <LogoWrapper onClick={this.handleClick}>
                <Icon className="logo" src={LogoVerde} />
                <span className="brandName">Increase</span>
                {this.state.isClosed ? (
                  <Icon className="caret" src={DropDownClosed} />
                ) : (
                  <Icon className="caret" src={DropDownOpen} />
                )}
              </LogoWrapper>
            </div>
            <RightContent>
              <div className="alerts">
                <Icon src={Notifications} />
              </div>
              <div className="account">
                <MenuProfile />
              </div>
            </RightContent>
          </MainNavContent>
        </MainNavWrapper>
        <MainNavMenu section={this.state.section} visible={!this.state.isClosed} />
      </div>
    );
  }
}

export default MainNav;
