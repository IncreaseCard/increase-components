import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('normal', () => (
    <div>
      <Checkbox id="cb1" label="Enabled"/>
      <Checkbox disabled id="cb2" label="Disabled" />
    </div>
  ));
