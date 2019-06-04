import React from 'react';
import { storiesOf } from '@storybook/react';

import ApplicationHeader from './ApplicationHeader';
import { defaultProducts } from './defaultProducts';
import { defaultSidebarLinks } from './defaultSidebarLinks';

const user = {
  userName: 'Juan Pérez',
  activeProducts: {
    argentina: ['card', 'conciliation'],
    ecuador: ['card'],
    dominicana: []
  }
};

const customSidebarLinks = [
  {
    label: 'Internal Link',
    url: 'https://increase.app',
    blank: false
  },
  {
    label: 'External Link',
    url: 'https://increase.app',
    blank: true
  }
];

storiesOf('ApplicationHeader', module)
  .add('in platform ecuador', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="ecuador"
        currentProduct=""
        products={defaultProducts}
        sidebar={defaultSidebarLinks}
        userName={user.userName}
      />
    </div>
  ))
  .add('in platform argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={{ argentina: ['card'] }}
        country="argentina"
        currentProduct=""
        products={defaultProducts}
        sidebar={defaultSidebarLinks}
        userName={user.userName}
      />
    </div>
  ))
  .add('in platform dominicana (no products)', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="dominicana"
        currentProduct=""
        products={defaultProducts}
        sidebar={defaultSidebarLinks}
        userName={user.userName}
      />
    </div>
  ))
  .add('in card argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="card"
        products={defaultProducts}
        sidebar={defaultSidebarLinks}
        userName={user.userName}
      />
    </div>
  ))
  .add('in conciliation argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="conciliation"
        products={defaultProducts}
        sidebar={defaultSidebarLinks}
        userName={user.userName}
      />
    </div>
  ))
  .add('custom sidebar links', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="conciliation"
        products={defaultProducts}
        sidebar={customSidebarLinks}
        userName={user.userName}
      />
    </div>
  ));
