import './SidebarMenu.css';

import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarMenu({ children }) {
  return (
    <ul className="SidebarMenu">
      { children }
    </ul>
  )
}

SidebarMenu.propTypes = {
  children: PropTypes.node
};
