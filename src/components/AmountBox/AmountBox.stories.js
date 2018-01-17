import React from 'react';

import { storiesOf } from '@storybook/react';

import AmountBox from './AmountBox';

storiesOf('AmountBox', module).add('Green', () => {
  return (
    <AmountBox
      amount={100}
      description="Total del día"
      color="green" />
  );
});

storiesOf('AmountBox', module).add('Blue', () => {
  return (
    <AmountBox
      amount={100}
      description="Total del día"
      color="blue" />
  );
});

storiesOf('AmountBox', module).add('Red', () => {
  return (
    <AmountBox
      amount={100}
      description="Total del día"
      color="red" />
  );
});

storiesOf('AmountBox', module).add('With big number', () => {
  return (
    <AmountBox
      amount={9999000000}
      description="Total del día"
      color="green" />
  );
});

storiesOf('AmountBox', module).add('With long text', () => {
  return (
    <AmountBox
      amount={100}
      description="Total del día miércoles 20/12/2017"
      color="green" />
  );
});

storiesOf('AmountBox', module).add('With no description', () => {
  return (
    <AmountBox
      amount={100}
      color="green" />
  );
});

storiesOf('AmountBox', module).add('With empty amount', () => {
  return (
    <AmountBox
      description="Total del día"
      color="green" />
  );
});

storiesOf('AmountBox', module).add('With empty description', () => {
  return (
    <AmountBox
      amount={10}
      description=""
      color="green" />
  );
});
