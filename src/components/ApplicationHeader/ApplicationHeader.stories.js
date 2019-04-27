import React from 'react';
import { storiesOf } from '@storybook/react';

import ApplicationHeader from './ApplicationHeader';

const user = {
  firstName: 'Juan',
  lastName: 'Pérez',
  activeProducts: {
    argentina: ['card', 'conciliation'],
    ecuador: ['card'],
    dominicana: []
  }
};

storiesOf('ApplicationHeader', module)
  .add('in platform ecuador', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="ecuador"
        currentProduct=""
        firstName={user.firstName}
      />
    </div>
  ))
  .add('in platform argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct=""
        firstName={user.firstName}
      />
    </div>
  ))
  .add('in platform dominicana (no products)', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="dominicana"
        currentProduct=""
        firstName={user.firstName}
      />
    </div>
  ))
  .add('in card argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="card"
        firstName={user.firstName}
      />
    </div>
  ))
  .add('in conciliation argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct="conciliation"
        firstName={user.firstName}
      />
    </div>
  ));
