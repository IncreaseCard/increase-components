import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Link from './../Link/Link';
import NewTheme from '../../themes/new';
import { Account } from './../../icons/icons';
import Icon from './../../icons/Icon';

const ProfileButton = styled.button`
  margin: 0px;
  padding: 0px;
  border: none;
  background: transparent;
  font-size: 1rem;
  span {
    font-size: ${(props) => props.theme.typography.bodyFontSizes[1]};
  }
  svg {
    margin-right: 0.75rem;
  }
  &:focus {
    outline: none;
  }
`;
ProfileButton.defaultProps = { theme: NewTheme };

const PopupStyled = styled(Popup)`
  padding: 1rem 1rem 0.5rem !important;
  .user {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.darkBlueRegular};
  }
  .elem {
    padding: 0.5rem 0;
    display: block;
    color: ${(props) => props.theme.colors.brandBlueRegular};
    text-decoration: none;
  }
  hr {
    background: transparent;
    margin: 0;
    padding: 0.5rem 0 0;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  }
`;
PopupStyled.defaultProps = { theme: NewTheme };

const MenuProfile = () => {
  return (
    <PopupStyled
      closeOnDocumentClick
      position="bottom right"
      trigger={() => (
        <ProfileButton>
          <Icon mr="0.5" src={Account} />
          <span>Mi Cuenta</span>
        </ProfileButton>
      )}
    >
      <div className="user">Username</div>
      <Link className="elem">Ajustes de cuenta</Link>
      <hr />
      <Link className="elem">Productos</Link>
      <Link className="elem">Ayuda y Soporte</Link>
      <Link className="elem">Comunidad Increase</Link>
      <Link className="elem">Novedades</Link>
      <hr />
      <Link className="elem">Cerrar Sesión</Link>
    </PopupStyled>
  );
};

export default MenuProfile;
