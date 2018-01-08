import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import AmountBox from './AmountBox';

storiesOf('AmountBox', module).add('Green', () => {
  return <AmountBox amount="100" text="Total del día" color="green" />;
});

storiesOf('AmountBox', module).add('Blue', () => {
  return <AmountBox amount="100" text="Total del día" color="blue" />;
});

storiesOf('AmountBox', module).add('Red', () => {
  return <AmountBox amount="100" text="Total del día" color="red" />;
});

storiesOf('AmountBox', module).add('With big number', () => {
  return <AmountBox amount="9999000000" text="Total del día" color="green" />;
});

storiesOf('AmountBox', module).add('With long text', () => {
  return <AmountBox amount="100" text="Total del día miércoles 20/12/2017" color="green" />;
});
