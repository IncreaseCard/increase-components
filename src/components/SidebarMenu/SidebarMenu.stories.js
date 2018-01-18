import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SidebarMenu from './SidebarMenu';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';

storiesOf('SidebarMenu', module)
  .add('default', () => (
    <SidebarMenu>
      <SidebarMenuItem active label="Dashboard" onClick={action('onClick')} />
      <SidebarMenuItem label="Liquidaciones" onClick={action('onClick')} />
      <SidebarMenuItem
        label="Liquidaciones mensuales"
        onClick={action('onClick')}
      />
    </SidebarMenu>
  )
  );
