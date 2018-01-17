import React from 'react';

import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';

storiesOf('TextInput', module)
  .add('with some text', () => (
    <TextInput labelText="Ingrese un número" id="number"/>
  )
).add('disabled', () => (
    <TextInput labelText="Ingrese un número" id="number" disabled/>
  )
);
