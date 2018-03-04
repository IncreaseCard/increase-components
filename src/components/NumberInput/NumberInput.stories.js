import React from 'react';

import { storiesOf } from '@storybook/react';
import { NumberInput } from './NumberInput';

storiesOf('NumberInput')
  .add('normal', () => (
    <NumberInput/>
  ));
