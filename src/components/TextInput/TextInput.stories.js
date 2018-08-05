import React from 'react';

import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';

storiesOf('TextInput', module)
  .add('with some text', () => (
    <div>
      <TextInput labelText="Nombre" id="first_name" placeholder="Juan" />
      <TextInput labelText="Apellido" id="last_name" placeholder="Pérez" />
      <TextInput
        labelText="Apellido"
        id="last_name2"
        placeholder="Pérez"
        value="1234"
        invalidText="El apellido no debe contener números"
        invalid />
    </div>
  )
).add('disabled', () => (
    <TextInput labelText="Ingrese un número" id="number" disabled/>
  )
);
