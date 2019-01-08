import React from 'react';

import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';

storiesOf('TextInput', module)
  .add('with some text', () => (
    <div>
      <TextInput id="first_name" labelText="Nombre" placeholder="Juan" />
      <TextInput id="last_name" labelText="Apellido" placeholder="Pérez" />
      <TextInput
        id="last_name2"
        invalid
        invalidText="El apellido no debe contener números"
        labelText="Apellido"
        placeholder="Pérez"
        value="1234"
      />
    </div>
  ))
  .add('disabled', () => <TextInput disabled id="number" labelText="Ingrese un número" />);
