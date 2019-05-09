import React from 'react';
import { storiesOf } from '@storybook/react';

import ApplicationHeader from './ApplicationHeader';

const user = {
  userName: 'Juan Pérez',
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
        userName={user.userName}
      />
    </div>
  ))
  .add('in platform argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        activeProducts={user.activeProducts}
        country="argentina"
        currentProduct=""
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
        userName={user.userName}
      />
    </div>
  ));
