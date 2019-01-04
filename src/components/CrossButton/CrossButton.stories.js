import React from 'react';
import { storiesOf } from '@storybook/react';

import CrossButton from './CrossButton';

storiesOf('CrossButton', module).add('Normal', () => (
  <CrossButton
    productName="Product Name"
    CTA="Call to Action"
    linkCTA="https://www.google.com.ar"
  />
));
storiesOf('CrossButton', module).add('Disabled', () => (
  <CrossButton
    productName="Product Name"
    CTA="Call to Action"
    linkCTA="https://www.google.com.ar"
    disabled
  />
));
storiesOf('CrossButton', module).add('Without CTA', () => (
  <CrossButton productName="Product Name" />
));
storiesOf('CrossButton', module).add('Without CTA Disabled', () => (
  <CrossButton productName="Product Name" disabled />
));
