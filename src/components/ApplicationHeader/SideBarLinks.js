import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';
import NewTheme from '../../themes/new';
import { defaultSidebarLinks } from './defaultSidebarLinks';

const SidebarStyled = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.whiteTone};
  padding-bottom: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .sidebar-link {
    display: block;
    line-height: 21px;
    padding: 1.25rem;
    font-size: 15px;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    color: ${(props) => props.theme.colors.brandBlueRegular};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.medium}) {
    position: relative;
    border-bottom: none;
    padding: 0 1.25rem 0 0;
    margin-bottom: 0;
    width: 160px;
    .sidebar-link {
      padding: 0;
      margin-bottom: 6px;
      text-align: left;
      &:last-child {
        margin-bottom: 0;
      }
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

SidebarStyled.defaultProps = { theme: NewTheme };

const SideBarLinks = ({ sidebar }) => {
  return (
    <SidebarStyled>
      <div>
        {sidebar.map((item, i) => (
          <Link
            className="sidebar-link"
            href={item.url}
            key={i}
            target={item.blank ? 'blank' : null}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </SidebarStyled>
  );
};

SideBarLinks.defaultProps = {
  sidebar: defaultSidebarLinks
};

export default SideBarLinks;
