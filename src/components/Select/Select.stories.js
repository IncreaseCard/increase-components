import React from 'react';

import { storiesOf } from '@storybook/react';

import Select from './Select';
import SelectItem from './SelectItem';

storiesOf('Select', module)
  .add('with some text', () => (
    <Select labelText="Elija un número" id="number">
      <SelectItem text="One Option" />
      <SelectItem text="Another Option" />
      <SelectItem text="Yet Another Option" />
    </Select>
  ))
  .add('disabled', () => (
    <Select labelText="Elija un número" id="number" disabled>
      <SelectItem text="One Option" />
      <SelectItem text="Another Option" />
      <SelectItem text="Yet Another Option" />
    </Select>
  ));
