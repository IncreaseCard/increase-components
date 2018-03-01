import './SidebarMenuItem.css';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function SidebarMenuItem({ label, icon, active, ...other }) {
  const className = classNames('SidebarMenuItem', {
    active
  });
  return (
    <li className={className}>
      <button {...other}>
        { icon }
        { label }
      </button>
    </li>
  );
}

SidebarMenuItem.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.object,
  label: PropTypes.string
};
