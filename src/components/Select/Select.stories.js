import React from 'react';

import { storiesOf } from '@storybook/react';

import Select from './Select';
import SelectItem from './SelectItem';

storiesOf('Select', module)
  .add('with some text', () => (
    <Select id="number" labelText="Elija un número">
      <SelectItem text="One Option" value="1" />
      <SelectItem text="Another Option" value="2" />
      <SelectItem text="Yet Another Option" value="3" />
    </Select>
  ))
  .add('disabled', () => (
    <Select disabled id="number" labelText="Elija un número">
      <SelectItem text="One Option" value="1" />
      <SelectItem text="Another Option" value="2" />
      <SelectItem text="Yet Another Option" value="3" />
    </Select>
  ));
