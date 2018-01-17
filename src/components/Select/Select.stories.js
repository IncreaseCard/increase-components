import React from 'react';

import { storiesOf } from '@storybook/react';

import Select from './Select';
import SelectItem from '../SelectItem/SelectItem';

storiesOf('Select', module)
  .add('with some text', () => (
    <Select labelText="Elija un número" id="number">
      <SelectItem text="1"></SelectItem>
      <SelectItem text="2"></SelectItem>
      <SelectItem text="3"></SelectItem>
    </Select>
  )
).add('disabled', () => (
    <Select labelText="Elija un número" id="number" disabled>
      <SelectItem text="1"></SelectItem>
      <SelectItem text="2"></SelectItem>
      <SelectItem text="3"></SelectItem>
    </Select>
  )
);
