/* @flow */

import './SidebarMenu.css';

import * as React from 'react';

type Props = {
  children?: React.Node
};

export default function SidebarMenu({ children }: Props) {
  return (
    <ul className="SidebarMenu">
      { children }
    </ul>
  )
}
