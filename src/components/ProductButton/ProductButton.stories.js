import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductButton from './ProductButton';

storiesOf('ProductButton', module).add('Normal', () => (
  <ProductButton
    CTA="Call to Action"
    linkCTA="https://www.google.com.ar"
    productName="Product Name"
  />
));
storiesOf('ProductButton', module).add('Disabled', () => (
  <ProductButton
    CTA="Call to Action"
    disabled
    linkCTA="https://www.google.com.ar"
    productName="Product Name"
  />
));
storiesOf('ProductButton', module).add('Without CTA', () => (
  <ProductButton productName="Product Name" />
));
storiesOf('ProductButton', module).add('Without CTA Disabled', () => (
  <ProductButton disabled productName="Product Name" />
));
