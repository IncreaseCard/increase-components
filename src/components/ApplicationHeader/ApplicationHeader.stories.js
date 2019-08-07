import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import styled from 'styled-components';

import ApplicationHeader from './ApplicationHeader';
import { defaultProducts } from './defaultProducts';
import { defaultSidebarLinks } from './defaultSidebarLinks';

const Notification = styled.div`
  position: relative;
  background: #eee;
  color: #333;
  padding: 1rem;
  z-index: 1100;
`;

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

const actionHandlers = actions('onProductAcquire');

storiesOf('ApplicationHeader', module)
  .add('in platform ecuador', () => (
    <ApplicationHeader
      activeProducts={user.activeProducts}
      country="ecuador"
      currentProduct=""
      products={defaultProducts}
      sidebar={defaultSidebarLinks}
      userName={user.userName}
      {...actionHandlers}
    />
  ))
  .add('in platform argentina', () => (
    <ApplicationHeader
      activeProducts={{ argentina: ['card'] }}
      country="argentina"
      currentProduct=""
      products={defaultProducts}
      sidebar={defaultSidebarLinks}
      userName={user.userName}
      {...actionHandlers}
    />
  ))
  .add('in platform dominicana (no products)', () => (
    <ApplicationHeader
      activeProducts={user.activeProducts}
      country="dominicana"
      currentProduct=""
      products={defaultProducts}
      sidebar={defaultSidebarLinks}
      userName={user.userName}
      {...actionHandlers}
    />
  ))
  .add('in card argentina', () => (
    <ApplicationHeader
      activeProducts={user.activeProducts}
      country="argentina"
      currentProduct="card"
      products={defaultProducts}
      sidebar={defaultSidebarLinks}
      userName={user.userName}
      {...actionHandlers}
    />
  ))
  .add('in conciliation argentina', () => (
    <ApplicationHeader
      activeProducts={user.activeProducts}
      country="argentina"
      currentProduct="conciliation"
      products={defaultProducts}
      sidebar={defaultSidebarLinks}
      userName={user.userName}
      {...actionHandlers}
    />
  ))
  .add('custom sidebar links', () => (
    <ApplicationHeader
      activeProducts={user.activeProducts}
      country="argentina"
      currentProduct="conciliation"
      products={defaultProducts}
      sidebar={customSidebarLinks}
      userName={user.userName}
      {...actionHandlers}
    />
  ))
  .add('With notification', () => (
    <React.Fragment>
      <Notification>Notificación de pruebas</Notification>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="conciliation"
        products={defaultProducts}
        sidebar={defaultSidebarLinks}
        userName={user.userName}
        {...actionHandlers}
      />
    </React.Fragment>
  ));
