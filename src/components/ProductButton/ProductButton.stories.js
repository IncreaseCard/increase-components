import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductButton from './ProductButton';

storiesOf('ProductButton', module).add('Normal', () => (
  <ProductButton
    productName="Product Name"
    CTA="Call to Action"
    linkCTA="https://www.google.com.ar"
  />
));
storiesOf('ProductButton', module).add('Disabled', () => (
  <ProductButton
    productName="Product Name"
    CTA="Call to Action"
    linkCTA="https://www.google.com.ar"
    disabled
  />
));
storiesOf('ProductButton', module).add('Without CTA', () => (
  <ProductButton productName="Product Name" />
));
storiesOf('ProductButton', module).add('Without CTA Disabled', () => (
  <ProductButton productName="Product Name" disabled />
));
