import React from 'react';

import { storiesOf } from '@storybook/react';

import AmountBox from './AmountBox';

storiesOf('AmountBox', module).add('Green', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox amount={100} color="green" description="Total del día" language="es-AR" />
    </div>
  );
});

storiesOf('AmountBox', module).add('Blue', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox amount={100} color="blue" description="Total del día" language="es-EC" />
    </div>
  );
});

storiesOf('AmountBox', module).add('Red', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox amount={100} color="red" description="Total del día" language="es-DO" />
    </div>
  );
});

storiesOf('AmountBox', module).add('With big number', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox amount={9999000000} color="green" description="Total del día" language="es-EC" />
    </div>
  );
});

storiesOf('AmountBox', module).add('With long text', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox
        amount={100}
        color="green"
        description="Total del día miércoles 20/12/2017"
        language="es-EC"
      />
    </div>
  );
});

storiesOf('AmountBox', module).add('With no description', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox amount={100} color="green" language="es-EC" />
    </div>
  );
});

storiesOf('AmountBox', module).add('With empty amount', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox color="green" description="Total del día" language="es-EC" />
    </div>
  );
});

storiesOf('AmountBox', module).add('With empty description', () => {
  return (
    <div style={{ width: '400px' }}>
      <AmountBox amount={10} color="green" description="" language="es-EC" />
    </div>
  );
});

storiesOf('AmountBox', module).add('With big container', () => {
  return (
    <AmountBox amount={10} color="blue" description="Total de transacciones" language="es-EC" />
  );
});

storiesOf('AmountBox', module).add('In es-DO locale with DOP currency', () => {
  return (
    <AmountBox
      amount={10}
      color="blue"
      currency="DOP"
      description="Total de transacciones"
      language="es-DO"
    />
  );
});
