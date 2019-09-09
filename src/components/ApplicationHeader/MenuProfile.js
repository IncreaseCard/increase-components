import React from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Link from '../Link/Link';
import NewTheme from '../../themes/new';
import { Account } from '../../icons/icons';
import Icon from '../../icons/Icon';
import { getProfileLinks } from '../CountryBasedLinks/ProfileLinks';

const ProfileButton = styled.button`
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  border: none;
  background: transparent;
  font-size: 15px;
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

const PopupMenu = styled.div`
  padding: 1rem 1rem 0.5rem !important;
  .user {
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.darkBlueRegular};
  }
  a {
    padding: 8px 0;
    display: block;
    color: ${(props) => props.theme.colors.brandBlueRegular};
    text-decoration: none;
  }
  hr {
    background: transparent;
    margin: 0;
    padding: 8px 0 0;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  }
`;
PopupMenu.defaultProps = { theme: NewTheme };

export default function MenuProfile({ profileLinks, userName }) {
  const links = profileLinks || getProfileLinks();
  return (
    <Popup
      closeOnDocumentClick
      position="bottom right"
      trigger={() => (
        <ProfileButton>
          <Icon mr="0.5" src={Account} />
          <span>Mi Cuenta</span>
        </ProfileButton>
      )}
    >
      <PopupMenu>
        <div className="user">{userName}</div>
        <Link href="https://platform.increase.app">Ajustes de cuenta</Link>
        {links.length > 0 && <hr />}
        {links.length > 0 &&
          links.map((link) => (
            <Link href={link.url} key={link.url} target={link.blank ? '_blank' : '_self'}>
              {link.label}
            </Link>
          ))}
        <hr />
        <Link href="https://auth.increase.app/logout">Cerrar Sesión</Link>
      </PopupMenu>
    </Popup>
  );
}
