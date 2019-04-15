import React from 'react';
import { storiesOf } from '@storybook/react';

import ApplicationHeader from './ApplicationHeader';
import CardLogo from './IncreaseCard.svg';
import ConciliacionLogo from './IncreaseConciliacion.svg';

const products = {
  card: {
    logo: CardLogo,
    productName: 'Card',
    productCodeName: 'card',
    uri: {
      argentina: 'https://card.increase.app',
      ecuador: 'https://card.increase.app',
      dominicana: 'https://card.increase.app'
    },
    acquire_uri: {
      argentina: 'https://increase.app',
      ecuador: 'https://increase.app',
      dominicana: 'https://increase.app'
    },
    countries: ['argentina', 'ecuador', 'dominicana']
  },
  conciliation: {
    logo: ConciliacionLogo,
    productName: 'Conciliación',
    productCodeName: 'conciliation',
    uri: {
      argentina: 'https://conciliation.increase.app',
      ecuador: 'https://conciliation.increase.app',
      dominicana: 'https://conciliation.increase.app'
    },
    acquire_uri: {
      argentina: 'https://increase.app/conciliacion',
      ecuador: 'https://increase.app/conciliacion',
      dominicana: 'https://increase.app/conciliacion'
    },
    countries: ['argentina']
  }
};

const user = {
  firstName: 'Juan',
  lastName: 'Pérez',
  activeProducts: {
    argentina: ['card'],
    ecuador: ['card'],
    dominicana: []
  }
};

storiesOf('ApplicationHeader', module)
  .add('in platform ecuador', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader country="ecuador" currentProduct="" products={products} user={user} />
    </div>
  ))
  .add('in platform argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader country="argentina" currentProduct="" products={products} user={user} />
    </div>
  ))
  .add('in platform dominicana (no products)', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader country="dominicana" currentProduct="" products={products} user={user} />
    </div>
  ))
  .add('in card argentina', () => (
    <div style={{ width: '1000px' }}>
      <ApplicationHeader
        country="argentina"
        currentProduct="card"
        products={products}
        user={user}
      />
    </div>
  ));
